require('dotenv').config({ path: '../.env' }); // Ensure this is at the top
const admin = require('firebase-admin');

admin.initializeApp();

const userController = require('./controllers/userController');
const kaiAIController = require('./controllers/kaiAIController');
const onboardingController = require('./controllers/onboardingController');
const { seedDatabase } = require('./cloud_db_seed');

seedDatabase();

/* Migration Scripts */
// const {
// } = require("./migrationScripts/modifyChallengePlayersData");
const migrationScripts = {};

module.exports = {
  /* Authenticaition */
  signUpUser: userController.signUpUser,
  getUser: userController.getUser,

  /* Kai AI */
  chat: kaiAIController.chat,
  tool: kaiAIController.tool,
  createChatSession: kaiAIController.createChatSession,

  /* Migration Scripts - For running  */
  ...migrationScripts,

  /* Onboarding */
  advanceOnboardingStatus: onboardingController.advanceOnboardingStatus,
  setupUserProfile: onboardingController.setupUserProfile,
  updateUserPreferences: onboardingController.updateUserPreferences
};
