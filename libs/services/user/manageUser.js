import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';

const sendVerification = (user) => {
  return sendEmailVerification(user, {
    url: window.location.origin,
    handleCodeInApp: true,
  });
};

const sendPasswordReset = (auth, email) => {
  return sendPasswordResetEmail(auth, email, {
    url: `${window.location.origin}/signin`,
    handleCodeInApp: true,
  });
};

export { sendVerification, sendPasswordReset };
