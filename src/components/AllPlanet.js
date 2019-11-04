import React from 'react';
import '../sass/AllPlanet.sass';
import SWApiService from '../SWApiService'
// import Loader from './Loader';


export default class AllPlanet extends React.Component {
  swapi = new SWApiService();
  state= {
    
  };
  componentDidMount(){
    
  }
  // updatePlanet = () =>{
  //   const id = Math.floor(Math.random()*25)+3
  //   this.swapi.getPlanet(id)
  //   .then((planet)=>this.setState({
  //     name: planet.name,
  //     population: planet.population, 
  //     diametr: planet.diameter,
  //     rotationPeriod: planet.rotation_period,
  //     climat: planet.climate,
  //     orbitalPeriod: planet.orbital_period,
  //     planetImg : `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
  //     loading: false
  //   }));
  // }

  render(){
    return (
      <div className='allPlanetsBlock fadeInLeft animated'>
        
      </div>
    );
  }
};
