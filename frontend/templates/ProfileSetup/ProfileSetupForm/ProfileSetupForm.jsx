import React, { useRef, useState } from 'react';

import { Box, Typography, useTheme } from '@mui/material';

import { Controller, FormContainer, useForm } from 'react-hook-form-mui';

import FormTextField from '@/components/FormTextField';
import GradientOutlinedButton from '@/components/GradientOutlinedButton';
import ImageUpload from '@/components/ImageUpload';

import SocialLinkInput from '../SocialLinkInput';

import styles from './styles';

import ONBOARDING_REGEX from '@/regex/onboarding';
import { setupUserProfile } from '@/services/onboarding/setupUserProfile';

const ProfileSetupForm = ({ user }) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const formContext = useForm({
    defaultValues: {
      fullName: user?.fullName || '',
      occupation: user?.occupation || '',
      bio: user?.bio || '',
      twitterLink: user?.socialLinks?.twitter || '',
      facebookLink: user?.socialLinks?.facebook || '',
      linkedinLink: user?.socialLinks?.linkedin || '',
      profileImage: user?.profilePhotoUrl || '',
    },
  });

  const [error, setError] = useState(null);
  const [socialLinkError, setSocialLinkError] = useState(null);
  const socialLinkErrorRef = useRef(null);

  const onSubmitForm = async (data) => {
    setError(null);
    setSocialLinkError(null);

    // Check if at least one social media link is provided
    if (!data.facebookLink && !data.linkedinLink && !data.twitterLink) {
      setSocialLinkError('Please, fill in at least one social media link.');
      // Scroll to error message
      setTimeout(() => {
        if (socialLinkErrorRef.current) {
          socialLinkErrorRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 100);
      return;
    }

    setIsLoading(true);

    // Construct the object to send to the backend
    const profileData = {
      uid: user.id,
      ...(data.fullName && { fullName: data.fullName }),
      ...(data.occupation && { occupation: data.occupation }),
      ...(data.bio && { bio: data.bio }),
      socialLinks: {
        ...(data.twitterLink && { twitter: data.twitterLink }),
        ...(data.facebookLink && { facebook: data.facebookLink }),
        ...(data.linkedinLink && { linkedin: data.linkedinLink }),
      },
      ...(data.profileImage && { profilePhotoUrl: data.profileImage }),
    };

    try {
      // Call the backend service to update preferences
      await setupUserProfile(profileData);
    } catch (err) {
      setError(err.message || 'Failed to setup User Profile');
    } finally {
      setIsLoading(false);
    }
  };

  // Watch the bio field for changes
  const bioValue = formContext.watch('bio', user?.bio || '');
  const remainingChars = 200 - bioValue.length;

  return (
    <FormContainer formContext={formContext} onSuccess={onSubmitForm}>
      {/* Title */}
      <Box sx={styles.mainContainer}>
        <Typography variant="h4" align="center" sx={styles.title}>
          Profile Setup
        </Typography>
        <Typography variant="subtitle1" align="center" sx={styles.subtitle}>
          Get started by setting up your profile
        </Typography>
      </Box>

      {/* Fullname and Occupation */}
      <Box sx={styles.formSection}>
        {/* Full Name */}
        <Box sx={styles.fieldContainer}>
          <Controller
            name="fullName"
            control={formContext.control}
            defaultValue={user.fullName || ''}
            rules={{
              required: 'Full Name is required',
              pattern: {
                value: ONBOARDING_REGEX.fullName.regex,
                message: ONBOARDING_REGEX.fullName.message,
              },
            }}
            render={({ field, fieldState }) => (
              <FormTextField
                {...field}
                id="fullName"
                label="Full Name"
                placeholderText="Enter Name"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Box>

        {/* Occupation */}
        <Box sx={styles.fieldContainer}>
          <Controller
            name="occupation"
            control={formContext.control}
            defaultValue={user.occupation || ''}
            rules={{
              required: 'Occupation is required',
              pattern: {
                value: ONBOARDING_REGEX.occupation.regex,
                message: ONBOARDING_REGEX.occupation.message,
              },
            }}
            render={({ field, fieldState }) => (
              <FormTextField
                {...field}
                id="occupation"
                label="Occupation"
                placeholderText="Enter Occupation"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Box>
      </Box>

      {/* Social Links */}
      <Box sx={styles.socialLinksSection}>
        <Typography
          variant="subtitle1"
          align="left"
          sx={styles.typographyLabel}
        >
          Social Links
        </Typography>

        {/* Facebook Link */}
        <SocialLinkInput
          name="facebookLink"
          control={formContext.control}
          icon="facebook"
          validation={{
            pattern: {
              value: ONBOARDING_REGEX.url.regex,
              message: ONBOARDING_REGEX.url.message,
            },
          }}
          error={socialLinkError}
        />
        {/* Linkedin Link */}
        <SocialLinkInput
          name="linkedinLink"
          control={formContext.control}
          icon="linkedin"
          validation={{
            pattern: {
              value: ONBOARDING_REGEX.url.regex,
              message: ONBOARDING_REGEX.url.message,
            },
          }}
          error={socialLinkError}
        />
        {/* Twitter Link */}
        <SocialLinkInput
          name="twitterLink"
          control={formContext.control}
          icon="twitter"
          validation={{
            pattern: {
              value: ONBOARDING_REGEX.url.regex,
              message: ONBOARDING_REGEX.url.message,
            },
          }}
          error={socialLinkError}
        />

        {/* Social Link Error Message */}
        {socialLinkError && (
          <Box ref={socialLinkErrorRef} sx={styles.socialLinkErrorMessage}>
            <Typography variant="body2" color="error" align="center">
              {socialLinkError}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Profile Image */}
      <Box sx={styles.bioContainer}>
        <Typography
          variant="subtitle1"
          align="left"
          sx={styles.typographyLabel}
        >
          Profile Image
        </Typography>

        <ImageUpload
          name="profileImage"
          control={formContext.control}
          uid={user.id}
          initialPhotoURL={user.profilePhotoUrl || ''}
        />
      </Box>

      {/* Bio */}
      <Box sx={styles.bioContainer}>
        <Controller
          name="bio"
          control={formContext.control}
          defaultValue={user.bio || ''}
          rules={{
            required: 'Bio is required',
            pattern: {
              value: ONBOARDING_REGEX.bio.regex,
              message: ONBOARDING_REGEX.bio.message,
            },
            maxLength: {
              value: 200,
              message: 'Bio cannot exceed 200 characters.',
            },
          }}
          render={({ field, fieldState }) => (
            <Box>
              <FormTextField
                {...field}
                id="bio"
                label="Bio"
                placeholderText="Introduce yourself in a few words"
                multiline
                rows={5}
                error={false}
                helperText=""
                FormHelperTextProps={{ style: { display: 'none' } }}
                sx={styles.bioTextField}
              />
              {/* Error Message and Character Count Display */}
              <Box sx={styles.errorMessageBox}>
                {/* Error Messages */}
                {fieldState.error && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={styles.errorMessage}
                  >
                    {fieldState.error.message}
                  </Typography>
                )}
                {/* Character Count */}
                <Typography variant="caption" sx={styles.charCount}>
                  {`Character Limit: ${
                    remainingChars < 0 ? 0 : remainingChars
                  } characters`}
                </Typography>
              </Box>
            </Box>
          )}
        />
      </Box>

      {/* General Error Message */}
      {error && (
        <Box sx={styles.generalErrorMessage}>
          <Typography variant="body2" color="error" align="center">
            {error}
          </Typography>
        </Box>
      )}

      {/* Submit Button */}
      <Box>
        <GradientOutlinedButton
          bgcolor={theme.palette.Dark_Colors.Dark[1]}
          textColor={theme.palette.Common.White['100p']}
          text={isLoading ? 'Submitting...' : 'Next'}
          loading={isLoading}
          {...styles.submitButtonProps}
        />
      </Box>
    </FormContainer>
  );
};

export default ProfileSetupForm;
