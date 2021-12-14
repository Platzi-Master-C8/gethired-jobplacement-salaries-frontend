import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { store } from 'App/store';

const ProviderMock = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

ProviderMock.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ProviderMock;
