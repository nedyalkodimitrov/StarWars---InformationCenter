import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import '../src/css/loadingCard.css';
import '../src/css/mainCard.css';
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
        let imageCounter = 0;
        let imageName = "StarWars"
        return(
            <div className ="loading-container">
                {this.state.people.map(
                    person => {
                           imageCounter++;
                           return <Card  name ={person.name} image = {"/images/StarWars" + imageCounter + ".jpg"}/>
                          
                         }
                    )
                } 
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

const Card = (props) => {
  const {name, image} = props;  
  const className = 'card';

  return (
    <div className = {className + '-body'}>  
        <div className = {className + "-container"} onMouseOver = {ImageShrinking()}>
            <img className = {className + "-image"} src = {process.env.PUBLIC_URL + image} />
            <h4 className = {className + "-text-small"}>{name}</h4>
            <div className = {className + "-text-big"}></div>
        </div>
    </div>
  )
};

const ImageShrinking = () =>{
    var image = document.getElementById("card-image");
    image.classList.add('imageShrinking');
}

ReactDOM.render(<App/>, document.getElementById('root'));