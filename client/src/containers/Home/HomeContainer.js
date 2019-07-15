import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import Home from '../../components/Home';

export class HomeContainer extends Component {

    render() {
        return <Home {...this.props} />;
    }s
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Object.assign({}), dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
