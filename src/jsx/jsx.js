import React, {Component} from "react";

let i = 1;

let myStyle = {
    fontSize: 100,
    color: "#FF0000"
}

let arr = [
    <h3 key={"101"}>挖掘机技术哪家强？</h3>,
    <h3 key={"102"}>快到山东找蓝翔！</h3>
]

class jsxtag extends Component {
    render() {
        return (

            <div>
                <h1 style={myStyle}>菜鸟教程</h1>
                {/*这是一段注释*/}
                <h2>欢迎学习React</h2>
                <p data-myattribute="somevalue">这是一个很不错的JavaScripte库！</p>
                <h1>{1 + 1}</h1>
                <h1>{i === 1 ? 'True!' : 'False'}</h1>
                <div>
                    {arr}
                </div>
            </div>
        );
    }
}

export default jsxtag;

