const ACTION_TYPES = {
  SUMMARIZE_CONTENT: {
    actionType: 'Summarize Content',
    description: 'Summarize key concepts and ideas for a given topic.',
  },
  GENERATE_QUIZ: {
    actionType: 'Generate Quiz',
    description: 'Create quiz on a given topic to test students understanding.',
  },
  ACTIVITY_RECOMMENDATIONS: {
    actionType: 'Activity Recommendations',
    description: 'Offer engaging activities based on the current subject.',
  },
  INTERACTIVE_TECHNIQUES: {
    actionType: 'Interactive Techniques',
    description:
      'Suggest ideas for making lessons more interactive and engaging.',
  },
};

const BOT_TYPE = {
  MISSION: 'mission',
  TEACH_ME: 'teach_me',
  EXPLAIN_MY_ANSWER: 'ema',
  PLAY_GAME: 'play_game',
  HACKATHON: 'hackathon',
};

const DEFAULT_PROMPTS = [
  'Strategies to encourage student participation.',
  'Design an engaging class activity.',
  'Recommend resources for effective teaching.',
];

const MESSAGE_ROLE = {
  SYSTEM: 'system',
  HUMAN: 'human',
  AI: 'ai',
};

const MESSAGE_TYPES = {
  TEXT: 'text',
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio',
  GIF: 'gif',
  OPTIONS: 'options',
  QUICK_REPLY: 'quick_reply',
};

export { ACTION_TYPES, BOT_TYPE, DEFAULT_PROMPTS, MESSAGE_ROLE, MESSAGE_TYPES };
