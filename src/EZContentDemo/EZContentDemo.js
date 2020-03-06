import React from 'react';
import './EZContentDemo.css';

function EZContentDemo() {
    return (
        <div className="EZContentDemo">
            <p>Hi, Welcome to our site!</p>

            <p>Could be</p>

            <p><span className="ezcontent">Good Afternoon</span> <span className="ezcontent">Joe</span>, Welcome to our site!
                </p>
            <p>
                We see it's a <span className="ezcontent">rainy day</span> in <span className="ezcontent">Manchester :(</span>
            </p>
            <p>We see you are on the move on your <span className="ezcontent">mobile</span>, so we've given you the mobile version of our sit</p>
            <p>
                Maybe you'd like to <span className="ezcontent">buy a coat?</span>
            </p>
            <p> You speak <span className="ezcontent">Japanese</span>? Awesome, would you like to see the <span className="ezcontent">Japanese</span> version of this site?</p>
        </div >
    );
}

export default EZContentDemo;
