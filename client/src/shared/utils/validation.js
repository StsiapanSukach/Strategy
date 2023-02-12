import i18n from '../../i18n';

export const is = {
  match: (testFn, message = '') => (value, fieldValues) => !testFn(value, fieldValues) && message,

  required: () => value => isNilOrEmptyString(value) && i18n.t('basic.required'),

  minLength: min => value => !!value && value.length < min && `${i18n.t('basic.at_least')} ${min}`,

  maxLength: max => value => !!value && value.length > max && `${i18n.t('basic.at_most')} ${max}`,

  notEmptyArray: () => value =>
    Array.isArray(value) && value.length === 0 && i18n.t('basic.one_item'),

  email: () => value => !!value && !/.+@.+\..+/.test(value) && i18n.t('basic.valid_email'),

  url: () => value =>
    !!value &&
    // eslint-disable-next-line no-useless-escape
    !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(value) &&
    i18n.t('basic.valid_url'),
};

const isNilOrEmptyString = value => value === undefined || value === null || value === '';

export const generateErrors = (fieldValues, fieldValidators) => {
  const errors = {};

  Object.entries(fieldValidators).forEach(([fieldName, validators]) => {
    [validators].flat().forEach(validator => {
      const errorMessage = validator(fieldValues[fieldName], fieldValues);
      if (errorMessage && !errors[fieldName]) {
        errors[fieldName] = errorMessage;
      }
    });
  });
  return errors;
};
