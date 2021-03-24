// Please note, the validation function does specific check in
// order to display the user a specific error for better input,
// and for re-use future cases.

import translate from '../translate/translate';
import LeadValidationResult from '../models/LeadValidationResult';

// Validate email address.
const validateEmail = (value) => {
    const regexExpression = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regexExpression.test(value);
};

// Validate characters only.
const validateCharactersOnly = (value) => {
    return /^[A-Za-z]+$/i.test(value);
};

// Validate digits only.
const validateDigitsOnly = (value) => {
    return /^[0-9]+$/i.test(value);
};

// Validate minimum length.
const validateMinimumLength = (value, count) => {
    return (value.trim()).length >= count;
};

// Validate exact length.
const validateExactLength = (value, count) => {
    return (value.trim()).length === count;
};

// Check first name and last name in the same function with the same terms.
const validateName = (key, value) => {
    if (!value) {
        return new LeadValidationResult(key, translate[`form_page_error_empty_${key}`]);
    }

    if (!validateCharactersOnly(value)) {
        return new LeadValidationResult(key, translate[`form_page_error_invalid_${key}`]);
    }

    if (!validateMinimumLength(value, 2)) {
        return new LeadValidationResult(key, translate[`form_page_error_minimum_length_${key}`]);
    }

    return null;
};

// Validate the form lead data.
export const validateLead = (leadData) => {
    // General check for object existence.
    if (!leadData) {
        return new LeadValidationResult('general', translate.form_page_error_general);
    }

    const firstName = leadData.find(f => f.key === 'firstName').value;

    // Validate first name.
    const validateFirstNameResult = validateName('firstName', firstName);
    if (validateFirstNameResult) {
        return validateFirstNameResult;
    }

    const lastName = leadData.find(f => f.key === 'lastName').value;

    // Validate last name.
    const validateLastNameResult = validateName('lastName', lastName);
    if (validateLastNameResult) {
        return validateLastNameResult;
    }

    const email = leadData.find(f => f.key === 'email').value;

    // Validate email.
    if (!email) {
        return new LeadValidationResult('email', translate.form_page_error_empty_email);
    }

    if (!validateEmail(email)) {
        return new LeadValidationResult('email', translate.form_page_error_invalid_email);
    }

    const phone = leadData.find(f => f.key === 'phone').value;

    // Validate phone.
    if (!phone) {
        return new LeadValidationResult('phone', translate.form_page_error_empty_phone);
    }

    if (!validateDigitsOnly(phone)) {
        return new LeadValidationResult('phone', translate.form_page_error_invalid_phone);
    }

    if (!validateExactLength(phone, 10)) {
        return new LeadValidationResult('phone', translate.form_page_error_invalid_length_phone);
    }

    return new LeadValidationResult('', '', true);
};