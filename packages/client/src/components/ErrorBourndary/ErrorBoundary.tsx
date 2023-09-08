import * as React from "react";

interface Props
{
    children?: React.ReactNode;
}

interface State
{
    hasError: boolean;
    error?: Error | null;
    errorInfo?: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    public static getDerivedStateFromError(_: Error): State
    {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo)
    {
        console.error("Uncaught error:", error, errorInfo);
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // You can also log error messages to an error reporting service here
    }

    public render()
    {
        if (this.state.hasError)
        {
            return (
                <>
                    <h1>Something went wrong.</h1>
                    <pre>
                        <samp>{this.state.error && this.state.error.toString()}</samp>
                        <br />
                        <samp>{this.state.errorInfo && this.state.errorInfo.componentStack}</samp>
                    </pre>
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;