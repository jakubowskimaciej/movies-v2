import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'utils/styles/GlobalStyles.js';
import theme from 'utils/styles/theme.js';
import 'utils/styles/fonts.css';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <MainTemplate>
              <GlobalStyles />
              {children}
            </MainTemplate>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default AppProviders;
