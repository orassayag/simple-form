import React from 'react';
import PropTypes from 'prop-types';
import { Auxiliary } from '../../../hoc';
import { ErrorBox } from '../';

// Components parameter and functions PropTypes validations.
const propTypes = {
    isDisable: PropTypes.bool,
    name: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeHolder: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string
};

// Components default values.
const defaultProps = {
    isDisable: false,
    errorMessage: '',
    value: '',
    onChange: null
};

const TextBox = (props) => {
    return (
        <Auxiliary>
            <input type={props.inputType} className="form-control" name={props.name}
                disabled={props.isDisable ? 'disabled' : ''}
                placeholder={props.placeHolder} value={props.value}
                onChange={props.onChange} autoComplete='on' spellCheck={false} />
            <ErrorBox text={props.errorMessage} />
        </Auxiliary>
    );
};

// Set the PropTypes validators and default values.
TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;

export default TextBox;