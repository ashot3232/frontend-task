import React, { Component, ErrorInfo } from 'react';
import styled from 'styled-components';

const ErrorPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;

const Oops = styled.div`
  font-size: 4em;
  font-weight: bold;
  color: red;
`;

const Message = styled.div`
  font-size: 1.5em;
  color: black;
  margin-top: 1em;
`;

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
        <ErrorPage>
          <Oops>Oops!</Oops>
          <Message>Something went wrong...</Message>
        </ErrorPage>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
