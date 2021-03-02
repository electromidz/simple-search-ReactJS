import logo from './logo.svg';
import './App.css';
import data from './sample.json';
import { useState , useEffect } from 'react';

function App() {

  const title = [];
  const description = [];
  const feeds =  data.map((data) => {
    title.push(data); 
    description.push(data.description);
  });

  let number = 0;
  const [change, setChange] = useState("");
  // const [number, setNumber] = useState(0);
  // useEffect(() => setNumber );



  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="input-field inline">
            <input className="validate" type="text" id="search_inline"  onChange={(e) => {setChange(e.target.value);  }}/>
            <label htmlFor="search_inline">Please search some article</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p>You Search: { change }</p>
        </div>
      </div>

  <div className="ui relaxed divided list">
    <div className="item">
      <i className="large github middle aligned icon"></i>
      <div className="content">
        <a className="header">Number of article we find:</a>
        <div className="description">{number}</div>
      </div>
    </div>
  </div>
        <div>{title.map((item, key) => {
          
          if(item.title.includes(change)){
            number++;
            console.log(number);
            return(
              <div className="row" key={key} >
                <div className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">{key+1}.{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                    <div className="card-action">
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if(change == '') {
            return(
              <div className="row" key={key} >
                <div className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">{key+1}.{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                    <div className="card-action">
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            );  
          }
        }
          )}
        </div>
  
    </div>
  );
}

export default App;
