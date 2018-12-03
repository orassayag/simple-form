import React, { Component } from 'react';
import translate from '../../translate/translate';
import { createLeadFieldsArray, resetArray } from '../../utils/leadUtils';
import { validateLead } from '../../utils/validationUtils';
import { sendEmail } from '../../utils/coreUtils';
import settings from '../../settings/settings';
import { Auxiliary } from '../../hoc';
import { PageTitle, Loader } from '../../components/UI';
import { Form } from '../../components/JonesForm';

class JonesForm extends Component {
    state = {
        successText: '',
        isSubmitForm: false,
        isLoading: true,
        values: createLeadFieldsArray(),
        errors: createLeadFieldsArray()
    };

    constructor(props) {
        super(props);

        // Bind all the functions.
        this.handleOnSubmitFormClick = this.handleOnSubmitFormClick.bind(this);
        this.handleFormInputChange = this.handleFormInputChange.bind(this);
    }

    componentDidMount() {
        // Loading animation on load need to stop after a short time.
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1000);
    }

    // Track the changes of each textbox of the form.
    handleFormInputChange = (e) => {
        e.preventDefault();

        this.updateData({
            type: 'values',
            name: e.target.name,
            value: e.target.value
        });
    }

    // Handle the submit click buttin on the submit form.
    handleOnSubmitFormClick = async (e) => {
        e.preventDefault();

        // Reset previous validation errors.
        this.setState({
            errors: resetArray(this.state.errors)
        });

        // Validate form data.
        const validationResults = validateLead(this.state.values);
        if (!validationResults.isValid) {
            this.updateData({
                type: 'errors',
                name: validationResults.fieldName,
                value: validationResults.errorMessage
            });
            return;
        }

        // Set the small loading on the form while sending the email.
        this.setState({ isSubmitForm: true });

        // Send email. Won't work since Sandgrid DON'T support CORS from front-end application. Need a real server.
        const result = await sendEmail(settings.sandgrid_api_key, this.state.values);
        if (result) {

        }

        // Simulate sending email.
        setTimeout(() => {
            this.setState({
                values: resetArray(this.state.values),
                errors: resetArray(this.state.errors),
                isSubmitForm: false,
                successText: translate.form_page_form_submitted_successfully
            });
        }, 2000);


    }

    updateData(data) {
        // Copy the relevant array
        let array = null;
        switch (data.type) {
            case 'values':
                array = [...this.state.values];
                break;
            case 'errors':
                array = [...this.state.errors];
                break;
            default:
                return;
        }

        // Modify the relevant textbox.
        array[array.findIndex(kvp => kvp.key === data.name)].value = data.value;

        // Update the state.
        this.setState({ [data.type]: array });
    }

    render() {
        const successText = this.state.successText;
        const isSubmitForm = this.state.isSubmitForm;
        const isLoading = this.state.isLoading;
        const values = this.state.values;
        const errors = this.state.errors;
        let content = (<Loader />);

        if (!isLoading) {
            content = (
                <Auxiliary>
                    <PageTitle title={translate.form_page_title} />
                    <Form successText={successText}
                        isSubmitForm={isSubmitForm}
                        values={values}
                        errors={errors}
                        onSubmitFormClick={this.handleOnSubmitFormClick}
                        onTextBoxChange={this.handleFormInputChange}
                    />
                </Auxiliary>);
        }

        return content;
    }
}

export default JonesForm;