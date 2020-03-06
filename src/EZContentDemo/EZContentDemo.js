import React from 'react';
import './EZContentDemo.css';
import { Card } from '@material-ui/core';

class EZContentDemo extends React.Component {
    constructor(props) {
        super(props);
        this.enableMessage = this.enableMessage.bind(this);

        this.state = {
            loaded: false,
        };

        this.timer = setTimeout(this.enableMessage, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    enableMessage() {
        this.setState({ loaded: true });
    }
    render() {
        let loadedClass = this.state.loaded ? 'ezcontent__loaded' : 'ezcontent__loading'
        return (
            <div >
                <Card className={"ezcontent-card"}>
                    <p>Hi, Welcome to our site!</p>
                </Card>

                <p>with EZContent could be...</p>

                <Card className={"ezcontent-card"}>
                    <p><span className={loadedClass}>{this.state.loaded ? 'Good afternoon' : '...'}</span> <span className={loadedClass}>{this.state.loaded ? 'John' : '...'}</span>, Welcome to our site!
                </p>
                    <p>
                        We see it's a <span className={loadedClass}>{this.state.loaded ? 'sunny day' : '...'}</span> in <span className={loadedClass}>{this.state.loaded ? 'Manchester, UK' : '...'}</span>
                    </p>
                    <p>We see you are on the move on your <span className={loadedClass}>{this.state.loaded ? 'mobile' : '...'}</span>, so we've given you the <span className={loadedClass}>{this.state.loaded ? 'mobile' : '...'}</span> version of our site</p>
                    <p>
                        Maybe you'd like to <span className={loadedClass}>{this.state.loaded ? 'browse some coats?' : '...'}</span>
                    </p>
                    <p> You speak <span className={loadedClass}>{this.state.loaded ? 'Japanese' : '...'}</span>? Awesome, would you like to see the <span className="ezcontent">{this.state.loaded ? 'Japanese' : '...'}</span> version of this site?</p>
                </Card>
            </div >
        );
    }
}

export default EZContentDemo;
