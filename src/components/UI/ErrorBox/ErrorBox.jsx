import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBox.less';
import { generateClassName } from '../../../utils/textUtils';

// Components parameter and functions PropTypes validations.
const propTypes = {
    text: PropTypes.string,
    isNoArrow: PropTypes.bool,
    successText: PropTypes.string
};

// Components default values.
const defaultProps = {
    text: '',
    isNoArrow: false,
    successText: ''
};

const ErrorBox = (props) => {
    let containerClass = generateClassName(props.text, 'error-container', 'active');
    containerClass = generateClassName(props.successText, containerClass, 'active success');
    const messageClass = generateClassName(props.isNoArrow, 'error-message', 'no-arrow');

    return (
        <div className={containerClass} aria-live="assertive" aria-hidden="false">
            <div className={messageClass}>{props.text || props.successText}</div>
        </div>
    );
};

// Set the PropTypes validators and default values.
ErrorBox.propTypes = propTypes;
ErrorBox.defaultProps = defaultProps;

export default ErrorBox;