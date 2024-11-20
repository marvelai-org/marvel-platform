![image](https://github.com/user-attachments/assets/04e5f5a4-9ba7-4887-a158-bca181f7391c)


# Marvel AI Platform
Marvel AI is an open-source project by Reality AI, designed to provide smart tools and chatbots to assist teachers in education. The platform leverages Firebase, Next.js, and various AI components to create a seamless learning experience.

![Next.js](https://img.shields.io/badge/Next.js-12.3.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-%5E1.9.5-purple)
![Emotion](https://img.shields.io/badge/Emotion-%5E11.11.0-pink)
![MUI](https://img.shields.io/badge/MUI-%5E5.13.0-blue)
![Firebase](https://img.shields.io/badge/Firebase-%5E9.22.0-orange)
![Axios](https://img.shields.io/badge/Axios-%5E1.4.0-brightgreen)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%5E7.43.9-lightgrey)
![Remark](https://img.shields.io/badge/Remark-%5E15.0.1-yellow)
![ESLint](https://img.shields.io/badge/ESLint-%5E8.40.0-blue)
![Prettier](https://img.shields.io/badge/Prettier-%5E2.8.8-ff69b4)
![Husky](https://img.shields.io/badge/Husky-%5E9.0.11-yellow)

## Table of Contents

- [Architecture](#Architecture)
- [Folder Structure](#folder-structure)
- [Setup](#Setup)
- - [Local Development](#local-development)
- - [Cloud Deployment](#cloud-deployment)
- [Contributing](#Contributing)
- [License](#license)

## Architecture
The "Marvel" platform is structured into two main components: Firebase and AI. The Firebase side, detailed in this repository, encompasses both the frontend, developed with NextJS and hosted on Firebase Hosting, and the backend, which includes user management and session handling via Firebase Functions like `signUpUser` and `createChatSession`. The `communicator` and `toolCommunicator` functions act as proxies, facilitating interaction between the Firebase infrastructure and the AI services, ensuring seamless data flow and integration. Firestore DB is utilized for data storage. The AI components, housed in a separate repository, include a chatbot and tools like "Quizify" and "YouTube Flashcard Generator." 

![Architecture Diagram](https://github.com/marvelai-org/marvel-platform/blob/2400bf1b10af77b57976778a108f3f2296aa5215/Marvel%20Architecture.png)

### Folder Structure
## Folder Structure Overview

- **`/frontend`**:
  Contains all the files related to the front-end application, including the NextJS app and associated resources.

- **`/functions`**:
  Houses the Firebase Functions, which are serverless functions responsible for backend processes such as AI chatbot and tools communicators

## Key Files
- **`firebase.json`**:
  Contains configuration settings for Firebase services such as hosting and rules.

- **`firestore.indexes.json`**:
  Manages custom indexing for Firestore to optimize query performance.

- **`firestore.rules`**:
  Security rules for Firestore database, defining read/write permissions.

- **`package.json`** & **`package-lock.json`**:
  Defines the project’s global dependencies

## Prerequisites
- Node.js (v14 or later)
- Firebase CLI (v9.10.0 or later)
- Google Firebase Account

## Setup
To set up the project, follow these steps:

## Local Development
1. Clone the repository: `git clone https://github.com/marvelai-org/marvel-platform`
2. Create your firebase project on google firebase console
3. Create a firestore database instance
4. Get firebase config from firebase project settings in firebase console and save it to .env (create in root of this project, see sample.env for refrence)
5. Install Firebase CLI by running the following in terminal: `npm install -g firebase-tools`
6. Login to firebase CLI by running the following command: `firebase login`.

### Backend
1. Navigate to back-end project directory: `cd functions`
2. Install dependencies: `npm install`
3. Run for local testing: `firebase serve --only functions`

### Frontend
1. Navigate to front-end project directory: `cd frontend`
2. Install dependencies: `npm install`
3. Run for local testing: `npm run dev`

### Local Emulator (Optional)
#### Setup
1. Open the terminal and to start the emulators, run the following command: `npm run emulators`
2. Open another terminal simultaneously and start the frontend project, run the following command: `npm run frontend:dev`

## Cloud Deployment
1. Clone the repository: `git clone https://github.com/marvelai-org/marvel-platform`
2. Navigate to back-end project directory: `cd functions`
3. Install dependencies: `npm install`
4. Navigate to front-end directory: `cd ../frontend`
5. Install dependencies: `npm install`
5. Navigate to the root directory and run deploy: `cd .. && npm run deploy`

## Contributing
1. Fork the Repository: Create a personal fork of the repository to work on.
2. Create a Branch: For each new feature or bug fix, create a new branch from the develop branch.
3. Implement Changes: Make your changes, ensuring they adhere to the project’s coding standards.
4. Commit Changes: Commit your changes with clear, descriptive messages.
5. Push to Your Fork: Push your changes to your forked repository.
6. Open a Pull Request: Navigate to the original repository and open a pull request from your branch to the develop branch.
7. Code Review: Engage in the code review process, addressing any feedback provided.
8. Merge: Once approved, your changes will be merged into the develop branch.

For detailed instructions, refer to the [CONTRIBUTING.md](https://github.com/marvelai-org/marvel-platform/blob/2400bf1b10af77b57976778a108f3f2296aa5215/contributing.md) file in the repository.

## License

This project is licensed under the [MIT License](LICENSE.md).
