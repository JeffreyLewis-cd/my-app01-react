import React from 'react';
import ReactDOM from 'react-dom'; //根DOM节点，只有一个
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Jsxtag from "./jsx/jsx"

// ReactDOM.render(<App />, document.getElementById('root'));


/*class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello,world!</h1>
                <h2>现在是{this.props.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}*/
let myDivElement = <div className="foo"/>;

// var MyComponent = React.createClass('556');
// let myEle = <MyComponent someProperty={true}/>;


ReactDOM.render(
    myDivElement,
    document.getElementById('jsxExample')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
