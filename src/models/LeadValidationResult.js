class LeadValidationResult {
    constructor(fieldName = '', errorMessage = '', isValid = false) {
        this.isValid = isValid;
        this.fieldName = fieldName;
        this.errorMessage = errorMessage;
    }
}

export default LeadValidationResult;