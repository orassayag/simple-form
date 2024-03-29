import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.less';

// Components parameter and functions PropTypes validations.
const propTypes = {
    title: PropTypes.string.isRequired
};

// Components default values.
const defaultProps = {};

const PageTitle = (props) => {
    return (
        <div className="page-head">
            <div className="container">
                <div className="row">
                    <div className="page-head-content">
                        <h1 className="page-title">{props.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Set the PropTypes validators and default values.
PageTitle.propTypes = propTypes;
PageTitle.defaultProps = defaultProps;

export default PageTitle;