import React, { Component } from "react";
import { ErrorBoundary } from "../error-boundary";
import { GetError } from "../ui/get-error";

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>CV Dev</h1>
                <ErrorBoundary>
                  <GetError/>
                </ErrorBoundary>
            </div>
        );
    }
}
export default App;