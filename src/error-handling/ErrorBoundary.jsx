import React, { Component } from 'react';

export function ErrorComponent() {
    return <h1>Something went wrong!</h1>;
}

export default class ErrorBoundary extends Component {
    constructor(props) {
        super();
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(args) {
        console.log("getDerivedStateFromError: ", args); // For testing purpose only
        return { hasError: true };
    }
    componentDidCatch(args) {
        console.log("componentDidCatch: ", args); // For testing purpose only
    }
    render() {
        if (this.state.hasError) {
            return <ErrorComponent />; // TODO: Need to change error template is ready
        }
        return this.props.children;
    }
}
