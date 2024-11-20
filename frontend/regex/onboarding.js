/* eslint-disable */

const ONBOARDING_REGEX = {
  fullName: {
    regex: /^.{2,50}$/,
    message: 'Full name must be between 2 and 50 characters',
  },
  occupation: {
    regex: /^.{2,50}$/,
    message: 'Occupation must be between 2 and 50 characters',
  },
  url: {
    regex: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    message: 'Please enter a valid URL',
  },
  bio: {
    regex: /^[\s\S]{2,200}$/,
    message: 'Bio must be between 2 and 200 characters',
  },
};

export default ONBOARDING_REGEX;
