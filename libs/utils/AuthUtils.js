import { VALIDATION_STATES } from '@/libs/constants/auth';

import AUTH_REGEX, { PASSWORD_REGEX } from '@/libs/regex/auth';

const { SUCCESS, WARNING, DISABLED } = VALIDATION_STATES;

/**
 * Validates a password using the provided data and sets an error message if necessary.
 *
 * @param {object} data - The data object containing the password and re-entered password.
 * @param {function} setError - The function to set an error message.
 * @return {boolean} Returns false if there is an error, otherwise returns true.
 */
const validatePassword = (data, setError) => {
  const { password, reEnterPassword } = data;

  // If Re Entered Password is true & Password is false ? return Please Enter Password
  if (reEnterPassword && !password) {
    setError({ password: { message: 'Please Enter Password' } });
    return false;
  }

  // Confirmation Password not entered
  if (!reEnterPassword && password) {
    setError({
      reEnterPassword: { message: 'Please re-enter password' },
    });
    return false;
  }

  // If both password fields are empty ? return Password is required
  if (!password && !reEnterPassword) {
    setError({
      password: { message: 'Password is required' },
      reEnterPassword: { message: 'Password is required' },
    });
    return false;
  }

  // Passwords do not match
  if (password !== reEnterPassword) {
    setError({
      password: { message: 'Passwords do not match' },
      reEnterPassword: { message: 'Passwords do not match' },
    });

    return false;
  }

  const isPasswordValid = AUTH_REGEX.password.regex.test(reEnterPassword);

  if (!isPasswordValid) {
    setError({
      reEnterPassword: { message: AUTH_REGEX.password.message },
      password: { message: AUTH_REGEX.password.message },
    });
    return false;
  }

  return isPasswordValid;
};

/**
 * Generates a password state object based on the given password.
 *
 * @param {string} password - The password to check.
 * @return {object} - The password state object.
 */
const passwordCheck = (password) => {
  const passwordState = {};

  const keys = Object.keys(PASSWORD_REGEX);

  Object.values(PASSWORD_REGEX).forEach((regex, i) => {
    const isValid = regex.test(password);
    const isEmptyField = !password;

    const status = () => {
      if (isEmptyField) return DISABLED;
      if (isValid) return SUCCESS;
      return WARNING;
    };

    passwordState[keys[i]] = {
      status: status(),
      valid: isValid,
      empty: isEmptyField,
    };
  });

  return passwordState;
};

export { validatePassword, passwordCheck };
