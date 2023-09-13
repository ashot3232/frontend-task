import React, { Component, ErrorInfo } from 'react';
import { Wrapper, Oops, Message } from './styled';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | undefined;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <Oops>Oops!</Oops>
          <Message>Something went wrong...</Message>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
