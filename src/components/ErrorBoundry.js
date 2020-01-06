import React from 'react';
import ErrorBlock from './Error';
export default class ErrorBoundry extends React.Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBlock />;
    } else {
      return this.props.children;
    }
  }
}
