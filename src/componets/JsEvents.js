import React from 'react';

class JsEvents extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numberClick : 0,
            onChangeText:""
        };
    }

    onClickExample = () =>{
        this.setState({
            numberClick:this.state.numberClick+=1
        });
        console.log("you clicked"+this.state.numberClick);
    }

    onChangeEventExample = (event) =>{
        let text;
        this.setState(
            {
                onChangeText:event.target.value
            }
        );
        document.getElementById("textOnchange").innerHTML=this.state.onChangeText;
    }
    render(){
        return(
            <div>
                <button onClick={this.onClickExample.bind(this)}>Onclick event button</button>
                <input type = "text" onChange={e=>this.onChangeEventExample(e)} placeholder = "Enter your text"></input>
                <h1 id = "textOnchange"></h1>
            </div>
        );
    }
}

export default JsEvents;