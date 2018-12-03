import React from 'react';
import PropTypes from 'prop-types';
import './FieldBox.less';
import { TextBox } from '../../UI';

// Components parameter and functions PropTypes validations.
const propTypes = {
    isDisable: PropTypes.bool,
    name: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeHolder: PropTypes.string.isRequired,
    onTextBoxChange: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
};

// Components default values.
const defaultProps = {
    value: '',
    errorMessage: ''
};

const FieldBox = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.inputType}>{props.labelText}</label>
            <TextBox isDisable={props.isDisable}
                name={props.name}
                inputType={props.inputType}
                value={props.value}
                placeHolder={props.placeHolder}
                onChange={props.onTextBoxChange}
                errorMessage={props.errorMessage}
            />
        </div>
    );
};

// Set the PropTypes validations and default values.
FieldBox.propTypes = propTypes;
FieldBox.defaultProps = defaultProps;

export default FieldBox;