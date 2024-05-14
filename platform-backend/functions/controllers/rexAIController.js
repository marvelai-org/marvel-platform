const admin = require('firebase-admin');

const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { default: axios } = require('axios');
const { logger } = require('firebase-functions/v1');
const { Timestamp } = require('firebase-admin/firestore');
const { BOT_TYPE } = require('../constants');

const DEBUG = process.env.DEBUG;

/**
 * Executes an axios post call to the ReX AI endpoint.
 * This communicator is currently being deprecated.
 * It is still being used for the Explain My Answer feature since no chat history is required.
 *
 * @param {object} props - The properties of the communication.
 * @param {array} props.messages - The messages to send to the server.
 * @param {string} props.user - The user making the communication.
 * @param {string} props.challengeId - The challenge id in progress.
 * @param {string} props.level - The current challenge level in progress.
 * @param {string} props.botType - The bot type involved in the communication.
 * @return {object} The response from the server.
 */
const communicator = onCall(async (props) => {
  try {
    DEBUG &&
      logger.log(
        'Communicator variables:',
        `API_KEY: ${process.env.REX_API_KEY_V2}`,
        `ENDPOINT: ${process.env.REX_ENDPOINT_V2}`
      );
    DEBUG && logger.log('Communicator started, data:', props.data);

    const { messages, user, challengeId, level, botType } = props.data;
    const headers = {
      'API-Key': process.env.REX_API_KEY_V2,
      'Content-Type': 'application/json',
    };

    const resp = await axios.post(
      process.env.REX_ENDPOINT_V2,
      JSON.stringify({ messages, user, challengeId, level, botType }),
      { headers }
    );

    DEBUG && logger.log('Communicator response:', resp.data);

    return { status: 'success', data: resp.data };
  } catch (error) {
    logger.log('Communicator error:', error);
    throw new HttpsError('internal', error.message);
  }
});

/**
 * Executes an axios post call to the Vertex AI endpoint.
 *
 * @param {object} props - The properties of the communication.
 * @param {array} props.messages - The messages to send to the server.
 * @param {string} props.user - The user making the communication.
 * @param {string} props.challenge - The challenge in progress.
 * @param {string} props.bot - The bot involved in the communication.
 * @return {object} The response from the server.
 */
const reXCommunicator = async (props) => {
  try {
    DEBUG && logger.log('Communicator started, data:', props.data);
    const { messages, user, challengeId, level, botType } = props.data;

    DEBUG &&
      logger.log(
        'Communicator variables:',
        `API_KEY: ${process.env.REX_API_KEY_V2}`,
        `ENDPOINT: ${process.env.REX_ENDPOINT_V2}`
      );

    const headers = {
      'API-Key': process.env.REX_API_KEY_V2,
      'Content-Type': 'application/json',
    };

    DEBUG &&
      logger.log(
        'Stringified JSON',
        JSON.stringify({ messages, user, challengeId, level, botType })
      );

    const resp = await axios.post(
      process.env.REX_ENDPOINT_V2,
      JSON.stringify({ messages, user, challengeId, level, botType }),
      { headers }
    );

    DEBUG && logger.log('Communicator response:', resp.data);

    return { status: 'success', data: resp.data };
  } catch (error) {
    DEBUG && logger.log(error);
    throw new HttpsError('internal', error.message);
  }
};

/**
 * Executes the communicatorV2 function.
 * This new communicator is used for the mission & hackathon features.
 * It stores the messages sent & received in a chat session.
 *
 * @param {object} props - The properties passed to the function.
 * @param {object} props.data - The data object containing the message and id.
 * @param {object} props.data.message - The message object.
 * @param {string} props.data.id - The id of the chat session.
 * @return {object} The response object containing the status and data.
 * @throws {HttpsError} Throws an error if there is an internal error.
 */
const communicatorV2 = onCall(async (props) => {
  try {
    DEBUG && logger.log('Communicator started, data:', props.data);

    DEBUG &&
      logger.log(
        'Communicator variables:',
        process.env.REX_API_KEY_V2,
        process.env.REX_ENDPOINT_V2
      );

    const { message, id } = props.data;

    DEBUG && logger.log('Message: ', message);
    DEBUG && logger.log('ID:', id);

    const chatSession = await admin
      .firestore()
      .collection('chatSessions')
      .doc(id)
      .get();

    if (!chatSession.exists) {
      logger.log('Chat session not found: ', id);
      throw new HttpsError('not-found', 'Chat session not found');
    }

    const { user, challengeId, botType, level, messages } = chatSession.data();

    DEBUG && logger.log('Chat session: ', chatSession.data());

    let truncatedMessages = messages;

    // Check if messages length exceeds 50, if so, truncate
    if (messages.length > 100) {
      truncatedMessages = messages.slice(messages.length - 65);
    }

    // Add message to chat session
    const updatedMessages = truncatedMessages.concat([
      { ...message, timestamp: Timestamp.fromMillis(Date.now()) },
    ]);
    await chatSession.ref.update({ messages: updatedMessages });

    const ReXPayload = {
      messages: updatedMessages,
      user,
      challengeId,
      level,
      botType,
    };

    DEBUG && logger.log('ReXPayload: ', ReXPayload);
    // Communicate to ReX AI
    const response = await reXCommunicator({
      data: ReXPayload,
    });

    DEBUG && logger.log('ReX Response: ', response, 'type', typeof response);

    // Add response to chat session
    const updatedResponseMessages = updatedMessages.concat(
      Array.isArray(response.data?.messages)
        ? response.data?.messages.map((message) => ({
            ...message,
            timestamp: Timestamp.fromMillis(Date.now()),
          }))
        : [{ ...response.data, timestamp: Timestamp.fromMillis(Date.now()) }]
    );
    await chatSession.ref.update({ messages: updatedResponseMessages });

    if (DEBUG) {
      logger.log(
        'Updated chat session: ',
        (await chatSession.ref.get())?.data()
      );
    }
    logger.log('Successfully communicated');

    return { status: 'success' };
  } catch (error) {
    DEBUG && logger.log(error);
    throw new HttpsError('internal', error.message);
  }
});

/**
 * Simulates communication with a Kai AI endpoint.
 *
 * @param {object} payload - The properties of the communication.
 * @param {object} props.data - The payload containing messages, user, tool.
 * @return {object} The response from the AI service.
 */
const kaiCommunicator = async (payload) => {
  try {
    DEBUG && logger.log('kaiCommunicator started, data:', payload.data);

    const { messages, user, tool, type } = payload.data;

    DEBUG &&
      logger.log(
        'Communicator variables:',
        `API_KEY: ${process.env.KAI_API_KEY}`,
        `ENDPOINT: ${process.env.KAI_ENDPOINT}`
      );

    const headers = {
      'API-Key': process.env.KAI_API_KEY,
      'Content-Type': 'application/json',
    };

    const kaiPayload = {
      user,
      type,
      ...(type === BOT_TYPE.CHAT ? { messages } : { tool_data: tool }),
    };

    DEBUG && logger.log('Stringified JSON', JSON.stringify(kaiPayload));

    const resp = await axios.post(
      process.env.KAI_ENDPOINT,
      JSON.stringify(kaiPayload),
      { headers }
    );

    DEBUG && logger.log('kaiCommunicator response:', resp.data);

    return { status: 'success', data: resp.data };
  } catch (error) {
    DEBUG && logger.log('kaiCommunicator error:', error);
    throw new HttpsError('internal', error.message);
  }
};

/**
 * Manages communications for a specific chat session with a chatbot, updating and retrieving messages.
 *
 * @param {object} props - The properties of the communication.
 * @param {object} props.data - The data object containing the message and id.
 * @param {string} props.data.id - The id of the chat session.
 * @param {string} props.data.message - The message object.
 * @return {object} The response object containing the status and data.
 */
const communicatorV3 = onCall(async (props) => {
  try {
    DEBUG && logger.log('Communicator started, data:', props.data);

    const { message, id } = props.data;

    DEBUG &&
      logger.log(
        'Communicator variables:',
        `API_KEY: ${process.env.KAI_API_KEY}`,
        `ENDPOINT: ${process.env.KAI_ENDPOINT}`
      );

    const chatSession = await admin
      .firestore()
      .collection('chatSessions')
      .doc(id)
      .get();

    if (!chatSession.exists) {
      logger.log('Chat session not found: ', id);
      throw new HttpsError('not-found', 'Chat session not found');
    }

    const { user, type, messages } = chatSession.data();

    let truncatedMessages = messages;

    // Check if messages length exceeds 50, if so, truncate
    if (messages.length > 100) {
      truncatedMessages = messages.slice(messages.length - 65);
    }

    // Update message structure here
    const updatedMessages = truncatedMessages.concat([
      {
        ...message,
        timestamp: Timestamp.fromMillis(Date.now()), // ISO 8601 format string
      },
    ]);

    await chatSession.ref.update({ messages: updatedMessages });

    // Construct payload for the kaiCommunicator
    const KaiPayload = {
      messages: updatedMessages,
      type,
      user,
    };

    const response = await kaiCommunicator({
      data: KaiPayload,
    });

    DEBUG && logger.log('kaiCommunicator response:', response.data);

    // Process response and update Firestore
    const updatedResponseMessages = updatedMessages.concat(
      response.data?.data?.map((msg) => ({
        ...msg,
        timestamp: Timestamp.fromMillis(Date.now()), // ensure consistent timestamp format
      }))
    );

    await chatSession.ref.update({ messages: updatedResponseMessages });

    if (DEBUG) {
      logger.log(
        'Updated chat session: ',
        (await chatSession.ref.get()).data()
      );
    }

    return { status: 'success' };
  } catch (error) {
    DEBUG && logger.log('CommunicatorV3 error:', error);
    throw new HttpsError('internal', error.message);
  }
});

/**
 * Manages communications for a specific tool session with the AI, sending tool inputs and updating the session.
 *
 * @param {object} props - The properties of the communication.
 * @param {object} props.data - The data object containing the tool details and id.
 * @param {string} props.data.id - The id of the tool session.
 * @param {array} props.data.inputs - The array of inputs for the tool.
 * @return {object} The response object containing the status and data.
 */
const toolCommunicatorV1 = onCall(async (props) => {
  try {
    DEBUG && logger.log('toolCommunicator started, data:', props.data);

    const { inputs, id } = props.data;

    DEBUG &&
      logger.log(
        'toolCommunicator variables:',
        `API_KEY: ${process.env.KAI_API_KEY}`,
        `ENDPOINT: ${process.env.KAI_ENDPOINT}`
      );

    const toolSession = await admin
      .firestore()
      .collection('tools')
      .doc(id)
      .get();

    if (!toolSession.exists) {
      logger.log('Tool session not found: ', id);
      throw new HttpsError('not-found', 'Tool session not found');
    }

    const { user, type } = toolSession.data();

    const toolData = {
      inputs: inputs,
    };

    // Construct payload for the kaiCommunicator
    const KaiPayload = {
      tool: toolData,
      type,
      user,
    };

    const response = await kaiCommunicator({
      data: KaiPayload,
    });

    DEBUG && logger.log('kaiCommunicator response:', response.data);

    // Process response and update Firestore
    await toolSession.ref.update({
      lastUpdated: Timestamp.fromMillis(Date.now()),
    });

    if (DEBUG) {
      logger.log(
        'Updated tool session: ',
        (await toolSession.ref.get()).data()
      );
    }

    return { status: 'success' };
  } catch (error) {
    DEBUG && logger.log('toolCommunicator error:', error);
    throw new HttpsError('internal', error.message);
  }
});

/**
 * This function retrieves all existing chat sessions for a user.
 *
 * @param {Object} props.data - The data object containing the user, challenge, message, and botType.
 * @param {Object} props.data.userId - The userId.
 *
 * @return {Promise<Object>} - A promise that resolves to an object containing the status and data of the chat sessions.
 * @throws {HttpsError} Throws an error if there is an internal error.
 */
const getUserChatSessions = onCall(async (props) => {
  try {
    DEBUG && logger.log('Communicator started, userId:', props.data?.userId);

    const { userId } = props.data;

    if (!userId) {
      throw new HttpsError('invalid-argument', 'userId is required');
    }

    const chatSessions = await admin
      .firestore()
      .collection('chatSessions')
      .where('user.id', '==', userId)
      .get();

    if (chatSessions.empty) {
      logger.log('No chat sessions found for user: ', userId);
      throw new HttpsError('not-found', 'No chat sessions found for user');
    }

    // Retrieve user's chat sessions
    const retrievedChatSessions = chatSessions?.docs?.map((doc) => ({
      ...doc.data(),
      id: doc?.id,
    }));

    DEBUG &&
      logger.log(
        `Chat sessions found for user ${userId}: ${retrievedChatSessions}`
      );
    logger.log('Successfully retrieved chat sessions');
    return { status: 'success', data: retrievedChatSessions };
  } catch (error) {
    logger.error(error);
    throw new HttpsError('internal', error.message);
  }
});

/**
 * This creates a chat session for a user.
 * If the chat session already exists, it will return the existing chat session.
 * Otherwise, it will create a new chat session and send the first message.
 *
 * @param {Object} props - The properties passed to the function.
 * @param {Object} props.data - The data object containing the user, challenge, message, and botType.
 * @param {Object} props.data.user - The user object.
 * @param {Object} props.data.message - The message object.
 * @param {Object} props.data.type - The bot type.
 *
 * @return {Promise<Object>} - A promise that resolves to an object containing the status and data of the chat sessions.
 * @throws {HttpsError} Throws an error if there is an internal error.
 */
const createChatSession = onCall(async (props) => {
  try {
    DEBUG && logger.log('Communicator started, data:', props.data);

    const { user, message, type } = props.data;

    if (!user || !message || !type) {
      logger.log('Missing required fields', props.data);
      throw new HttpsError('invalid-argument', 'Missing required fields');
    }

    const initialMessage = {
      ...message,
      timestamp: Timestamp.fromMillis(Date.now()),
    };

    logger.log('Creating chat session');

    // Create new chat session if it doesn't exist
    const chatSessionRef = await admin
      .firestore()
      .collection('chatSessions')
      .add({
        messages: [initialMessage],
        user,
        type,
        createdAt: Timestamp.fromMillis(Date.now()),
        updatedAt: Timestamp.fromMillis(Date.now()),
      });

    // Send trigger message to ReX AI
    const response = await kaiCommunicator({
      data: {
        messages: [initialMessage],
        user,
        type,
      },
    });

    DEBUG && logger.log('response: ', response?.data, 'type', typeof response);

    const { messages } = (await chatSessionRef.get()).data();
    DEBUG && logger.log('updated messages: ', messages);

    // Add response to chat session
    const updatedResponseMessages = messages.concat(
      Array.isArray(response.data?.data)
        ? response.data?.data?.map((message) => ({
            ...message,
            timestamp: Timestamp.fromMillis(Date.now()),
          }))
        : [
            {
              ...response.data?.data,
              timestamp: Timestamp.fromMillis(Date.now()),
            },
          ]
    );

    await chatSessionRef.update({
      messages: updatedResponseMessages,
      id: chatSessionRef.id,
    });

    const updatedChatSession = await chatSessionRef.get();
    DEBUG && logger.log('Updated chat session: ', updatedChatSession.data());

    const createdChatSession = {
      ...updatedChatSession.data(),
      id: updatedChatSession.id,
    };
    DEBUG && logger.log('Created chat session: ', createdChatSession);

    logger.log('Successfully communicated');
    return {
      status: 'created',
      data: createdChatSession,
    };
  } catch (error) {
    logger.error(error);
    throw new HttpsError('internal', error.message);
  }
});

module.exports = {
  communicator,
  communicatorV2,
  communicatorV3,
  toolCommunicatorV1,
  getUserChatSessions,
  createChatSession,
};
