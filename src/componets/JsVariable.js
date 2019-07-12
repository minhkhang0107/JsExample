import React from 'react';

class JsVariable extends React.Component{
    constructor(props){
        super(props);
    }

    loopXample = () =>{
        var array = [];
        
        for(let i = 0 ; i < 10 ;i++){
            setTimeout(function(){ 
                console.log('element ', i);
             }, 1);
        }
        return array;
    }
    render(){
        return(
            <div>
                <h1>Hello word</h1>
                {this.loopXample()}
            </div>
        );
    }
}

export default JsVariable;