import React from 'react';

class JsDataType extends React.Component{
    constructor(props){
        super(props);
    }

    dataTypeExample = () =>{
        var str;
        str = "this is type string";
        str = 2;
        str = null;
        str = {key:"khangdt"};
        str = false;
        console.log(typeof str)
    }
    render(){
        return(
            <div>
                <h1>JS DataType</h1>
                {this.dataTypeExample()}
            </div>
        );
    }
}

export default JsDataType;