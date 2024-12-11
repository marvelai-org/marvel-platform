const ONBOARDING_REGEX = {
  fullName: { required: 'Full Name is required!' },
  occupation: { required: 'Occupation is required!' },
  facebook: {
    pattern: {
      value: /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9._-]+\/?$/,
      message: 'Invalid Facebook URL',
    },
  },
  linkedin: {
    pattern: {
      value:
        /^(https?:\/\/)?(www\.)?linkedin\.com\/(pub|in|profile)\/[a-zA-Z0-9_-]+\/?$/,
      message: 'Invalid LinkedIn URL',
    },
  },
  x: {
    pattern: {
      value: /^(https?:\/\/)?(www\.)?x\.com\/\w+\/?$/,
      message: 'Invalid X URL',
    },
  },
  bio: {
    validate: (fieldValue) =>
      fieldValue ? fieldValue.trim().split(/\s+/).length <= 200 : true,
  },
};

export default ONBOARDING_REGEX;
