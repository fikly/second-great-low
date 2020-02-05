import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [valueTxt, setValueTxt] = useState('')
  const [label, setLabel] = useState({
    secondLowest : '',
    secondGreatest : ''
  })

  const handleSubmit = () =>{
    const textArr = valueTxt.split(",")
    const uniqueArr = Array.from(new Set(textArr))

    let newArr = []
    uniqueArr.forEach(element => {
      newArr.push(parseFloat(element))
    });

    newArr.sort(function(a, b){
      return a - b;
    });

    console.log(newArr)

    setLabel({
      secondLowest : newArr[1],
      secondGreatest : newArr[newArr.length - 2]
    })
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="col-md-4 offset-md-4">
            <input type="text" placeholder="ex : 2,6,3,2" className="form-control" onChange={(e) => setValueTxt(e.target.value)} value={valueTxt} />
            <button type="button" className="btn btn-primary mt-3" onClick={() => handleSubmit()}>Submit</button>

            <h3 className="mt-4">Result : {label.secondLowest} and {label.secondGreatest} </h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
