import React from 'react';
import GlobalStyle from '../../App/theme/global-style';
import { Provider } from 'react-redux';
import store from 'store';

const MainDecorator = (Story: unknown): React.FC => ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        {children}
      </Provider>
    </>
  );
};

export default MainDecorator;
