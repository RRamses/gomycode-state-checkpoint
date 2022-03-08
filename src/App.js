import{React, Component} from 'react';
import './App.css';
import {Show} from './component/Show'


class App extends Component {

  

  state= {

    person:{
      fullName: "Raoul",
      bio:"no stress",
      profession:"developpeur web free-lance",
      
      
    },
    
    show:false
  
  };

    handleclik= () =>{

      let show = this.state.show
        this.setState({show:!show})
      }

  render(){
          return (
                    <div className="App">
                       {this.state.show ? <Show data={this.state}/> : ""}
                      <button onClick={this.handleclik} >Affiche</button>
                  </div>
  );
}
}

export default App;
