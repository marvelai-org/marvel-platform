import { useForm } from 'react-hook-form';

import { VALIDATION_STATES } from '@/libs/constants/auth';

const { SUCCESS, ERROR, DEFAULT } = VALIDATION_STATES;

const useWatchFields = (fieldConfigs) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    control,
    reset,
  } = useForm();

  const newFieldStates = {};

  fieldConfigs.forEach(({ fieldName, regexPattern }) => {
    const fieldValue = watch(fieldName, '');

    const isValidField = regexPattern.test(fieldValue);

    const setFieldStatus = () => {
      if (fieldValue === '') return DEFAULT;
      if (isValidField) return SUCCESS;
      return ERROR;
    };

    newFieldStates[fieldName] = {
      status: setFieldStatus(),
      value: fieldValue,
      valid: isValidField,
    };
  });

  return {
    register,
    watch,
    control,
    errors,
    getValues,
    setValue,
    handleSubmit,
    fieldStates: newFieldStates,
    reset,
  };
};

export default useWatchFields;
