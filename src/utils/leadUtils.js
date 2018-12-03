import KeyValuePair from '../models/KeyValuePair';

// Creates array for form fields and errors.
export const createLeadFieldsArray = () => {
    return ['firstName', 'lastName', 'email', 'phone', 'general'].map(kvp => new KeyValuePair(kvp));
};

// Clear all arrays existing values.
export const resetArray = (array) => {
    return array.map((x) => {
        x.value = '';
        return x;
    });
};