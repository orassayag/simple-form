import React from 'react';
import PropTypes from 'prop-types';
import './Form.less';
import translate from '../../../translate/translate';
import { FieldBox } from '../';
import { SubmitButton, ErrorBox, Loader } from '../../UI';

// Components parameter and functions PropTypes validations.
const propTypes = {
    successText: PropTypes.string,
    isSubmitForm: PropTypes.bool.isRequired,
    errors: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string
    })),
    values: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string
    })),
    onSubmitFormClick: PropTypes.func.isRequired,
    onTextBoxChange: PropTypes.func.isRequired
};

// Components default values.
const defaultProps = {
    successText: ''
};

const Form = (props) => {
    let contentButton = (
        <div className="text-center">
            <SubmitButton title={translate.form_page_text_button}
                onClick={props.onSubmitFormClick} />
        </div>
    );

    if (props.isSubmitForm) {
        contentButton = null;
    }

    const generalError = props.errors.find(e => e.key === 'general').value;
    const formClass = generalError ? ' error' : props.isSubmitForm ? ' loading' : props.successText ? ' success' : '';

    return (
        <div className="form-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="box-for">
                            <div className={`col-md-12 col-xs-12 form-blocks${formClass}`}>
                                <h2>{translate.form_page_form_title}:</h2>
                                <form method="post">
                                    <FieldBox isDisable={props.isSubmitForm}
                                        name="firstName"
                                        labelText={translate.form_page_first_name}
                                        inputType="text"
                                        value={props.values.find(e => e.key === 'firstName').value}
                                        placeHolder={translate.form_page_first_name_placeholder}
                                        onTextBoxChange={props.onTextBoxChange}
                                        errorMessage={props.errors.find(e => e.key === 'firstName').value} />
                                    <FieldBox isDisable={props.isSubmitForm}
                                        name="lastName"
                                        labelText={translate.form_page_last_name}
                                        inputType="text"
                                        value={props.values.find(e => e.key === 'lastName').value}
                                        placeHolder={translate.form_page_last_name_placeholder}
                                        onTextBoxChange={props.onTextBoxChange}
                                        errorMessage={props.errors.find(e => e.key === 'lastName').value} />
                                    <FieldBox isDisable={props.isSubmitForm}
                                        name="email"
                                        labelText={translate.form_page_email}
                                        inputType="email"
                                        value={props.values.find(e => e.key === 'email').value}
                                        placeHolder={translate.form_page_email_placeholder}
                                        onTextBoxChange={props.onTextBoxChange}
                                        errorMessage={props.errors.find(e => e.key === 'email').value} />
                                    <FieldBox isDisable={props.isSubmitForm}
                                        name="phone"
                                        labelText={translate.form_page_phone}
                                        inputType="phone"
                                        value={props.values.find(e => e.key === 'phone').value}
                                        placeHolder={translate.form_page_phone_placeholder}
                                        onTextBoxChange={props.onTextBoxChange}
                                        errorMessage={props.errors.find(e => e.key === 'phone').value} />
                                    {contentButton}
                                    <div className="form-bottom">
                                        {props.isSubmitForm && (<Loader isSmall />)}
                                        <ErrorBox text={generalError}
                                            successText={props.successText}
                                            isNoArrow />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Set the PropTypes validations and default values.
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;