import React from 'react';
import PropTypes from 'prop-types';
import './SubmitButton.less';

const propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

// Components default values.
const defaultProps = {};

const SubmitButton = (props) => {
    return (
        <button type="submit" className="btn btn-default" onClick={props.onClick} title={props.title}>{props.title}</button>
    );
};

// Set the PropTypes validators and default values.
SubmitButton.propTypes = propTypes;
SubmitButton.defaultProps = defaultProps;

export default SubmitButton;