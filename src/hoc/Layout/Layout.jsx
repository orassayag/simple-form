import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Layout.less';

// Components parameter and functions PropTypes validations.
const propTypes = {
    children: PropTypes.node
};

// Components default values.
const defaultProps = {
    children: null
};

class Layout extends Component {
    render() {
        return (
            <div className="main-container">
                {this.props.children}
            </div>
        );
    }
}

// Set the PropTypes validations and default values.
Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;