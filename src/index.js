import React from 'react';
import { render } from 'react-dom';
import App from './containers/app';

render(<App />, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/app', () => {
    const NextApp = require('./containers/app').default;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
