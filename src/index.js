import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import '../src/css/loadingCard.css';
import {getPeople} from '../src/jedi'; 


class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Fragment>
                <Header ></Header>
                <StarWars ></StarWars>
            </Fragment>
        )
    }
}


class StarWars extends Component{
    constructor(props){
        super(props)
       
        this.state = {
            people : []
        }
    }
    render(){
        if(!this.state.people.length ){
            return (
               <div className ="loading-container">
                        <LoadingCard/>
                        <LoadingCard/>
                        <LoadingCard/>
                        <LoadingCard/>                 
                </div>

            )
        }

        return(
            <div>
                {this.state.people.map(person => <h1 className = 'jedi-name'>{person.name}</h1>)} 
            </div>  
        )
    } 
    componentDidMount(){
        getPeople().then((people) =>
            this.setState({people})
            );
    }
}

const Header = () => (
    <header>
        <h1 className = 'header-information'>STARWARS INFORMATION</h1>
    </header>

)

const LoadingCard = () => {
  const className = 'loading-card';
   
  return (
    <div className = {className + "-container"}>
        <div className = {className + "-image"}></div>
        <div className = {className + "-text-small"}></div>
        <div className = {className + "-text-big"}></div>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));




