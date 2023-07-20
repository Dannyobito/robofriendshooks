import React, {useState, useEffect} from "react";
import CardList from "./CardList";
import './App.css'
import SearchBox from './SearchBox.js'

const App = () => {
    const[robots,setRobots] = useState([]);
    const[searchfield,setSearchfield] = useState('');
            
        
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then(response => {
           return response.json();
        })
        .then(
            response => {
                setRobots(response);
            }
        )
        }
    ,[])
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }
    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
        return (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <CardList robots={filteredRobots }/>
            </div>
        )
    }
    


export default App;