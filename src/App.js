import React from 'react';
import logo from './logo.svg';
import './App.css';
import JsDataType from './componets/JsDataType';
import JsEvent from './componets/JsEvents';
import JsVariable from './componets/JsVariable';

const xampleOperatorAndDataType = (a, b) =>{
  let result = a + b;
  const type = typeof result;
  return(
    <div>
        <h1>{result} + {type}</h1>
    </div>
    
  );
}

var demSo = (x) =>{
    let result = 0;
    let temp = 0;
    while (true){
        if(x <= 9){
            result+=9;
            break;
        }
        else{
            if (temp == 0)
                result +=10 - (x%10);
            else
                result +=9 - (x%10);
            temp +=1
            x = parseInt(x/10);
        }
    }
    console.log("Bai toan dem so: ",result);
}
function App() {
  return (
    <div className="App">
      {/* {xampleOperatorAndDataType(5, 6)} */}
      {demSo(1098)}
      {/* <JsDataType/> */}
      {/* <JsEvent/> */}
      <JsVariable/>
    </div>
  );
}

export default App;
