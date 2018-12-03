import React from 'react';
import PropTypes from 'prop-types';
import './Loader.less';
import translate from '../../../translate/translate';
import { generateClassName } from '../../../utils/textUtils';

// Components parameter and functions PropTypes validations.
const propTypes = {
    isSmall: PropTypes.bool
};

// Components default values.
const defaultProps = {
    isSmall: false
};

const Loader = (props) => {
    const messageClass = generateClassName(props.isSmall, 'loader', 'small');

    return (
        <div className={messageClass} title={translate.loader_alternative_text}>{translate.loader_alternative_text}</div>
    );
};

// Set the PropTypes validations and default values.
Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;