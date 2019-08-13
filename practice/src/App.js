import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state={
      items:[],
      item: ""
    }
  }
    
onHandleClick = () => { 
  let item = this.state.item,
      items = this.state.items
  items.push(item)
  // console.log(items)
 
  this.setState({
      items
  })
}

change = e =>  {
  let item = this.state.item
  item = e.target.value;
  // console.log(item)
  
  this.setState({
    item
  })
}


render(){
  let items=this.state.items
  return(
    <div className="App">
        <input type='text' placeholder='Enter Device' value={this.state.item} onChange={this.change}></input>
        <br/>
        <button onClick={this.onHandleClick.bind(this)}>Add</button>
        
      <ol>
          {items.map(function(el){return <li>{el}</li>})}     
      </ol> 
      
    </div>
  )
}
}


export default App;



