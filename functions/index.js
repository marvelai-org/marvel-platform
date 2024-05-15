const admin = require('firebase-admin');
const SERVICE_FILE = require('./../google-service-account.json');

const GOOGLE_APPLICATION_CREDENTIALS = SERVICE_FILE;
const FIREBASE_CONFIG = JSON.parse(process.env.FIREBASE_CONFIG);

admin.initializeApp({
  credential: admin.credential.cert(GOOGLE_APPLICATION_CREDENTIALS),
  storageBucket: FIREBASE_CONFIG.storageBucket,
});

const userController = require('./controllers/userController');
const kaiAIController = require('./controllers/kaiAIController');

/* Migration Scripts */
// const {
//   modifyChallengePlayersData,
// } = require("./migrationScripts/modifyChallengePlayersData");
const migrationScripts = {};

module.exports = {
  /* Authenticaition */
  signUpUser: userController.signUpUser,

  /* Kai AI */
  communicatorV3: kaiAIController.communicatorV3,
  toolCommunicatorV2: kaiAIController.toolCommunicatorV2,
  createChatSession: kaiAIController.createChatSession,

  /* Migration Scripts - For running  */
  ...migrationScripts,
};