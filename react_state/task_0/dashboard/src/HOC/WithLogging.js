import React from "react";

function WithLogging(WrappedComponent) {
    const componentName = getDisplayName(WrappedComponent);
    class HOC extends React.Component {
        componentDidMount() {
          console.log(`Component ${componentName} is mounted`);
        }

        componentWillUnmount() {
          console.log(`Component ${componentName} is going to unmount`);
        }

        render() {
            return (<WrappedComponent {...this.props}/>);
        }
    }
    HOC.displayName = `WithLogging(${componentName})`;
    return HOC;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

export default WithLogging;
