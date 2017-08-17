import React from 'react';

const TestComponent = () =>
  <div>This is a hot module replacement component !!</div>;

class App extends React.Component {
  render() {
    return (
      <div>
        <strong>Hello world from React</strong>
        <TestComponent />
      </div>
    );
  }
}

export default App;
