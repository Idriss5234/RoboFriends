import React, { Component } from "react";
import CardList from './CardList';
import {robot} from "./robot";
import Searchbbox from "./Searchbox";
import Scroll from './Scroll';
import'tachyons';


class App extends Component{
    constructor(){
        super() 
        this.state={
            robot: [] ,
            searchfield: '',
        }
    }

componentDidMount (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robot:users}));
}    

onSearchChange = (event) =>{
    this.setState({searchfield :event.target.value})
}

render(){
    
    // const{robot,searchfield}=this.state;          hada houwa destructuring donc 7yd dik this.state 
    const filter =this.state.robot.filter(robot=>{
        return robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
   
    if(this.state.robot.length===0){
        return(
            this.setState({robot :robot})
        )
    }else{
        return(
            <div className='tc'>
                <h1 className="pv3 ph5 bg-gradient-beige white tc">RoboFriends</h1>
                <Searchbbox search={this.onSearchChange} />
                <Scroll>
                    <CardList  robot={filter}  />
                </Scroll>                 
            </div>

    );
        }
    

}

}

export default App;

