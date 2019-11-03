import React from 'react';
import '../sass/PlanetsInfo.sass';
import SWApiService from '../SWApiService'


export default class PlanetInfo extends React.Component {
  swapi = new SWApiService();
  state= {
    name: '',
    population: '',
    diametr: '',
    rotationPeriod: '',
    climat: '',
    orbitalPeriod:'',
    planetImg: ''
  };
  componentDidMount(){
    this.updatePlanet();
    // setInterval(this.updatePlanet,10000)
  }
  updatePlanet = () =>{
    const id = Math.floor(Math.random()*25)+3
    this.swapi.getPlanet(id)
    .then((planet)=>this.setState({
      name: planet.name,
      population: planet.population, 
      diametr: planet.diameter,
      rotationPeriod: planet.rotation_period,
      climat: planet.climate,
      orbitalPeriod: planet.orbital_period,
      planetImg : `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }));
  }

  render(){
    const {name,population,diametr,rotationPeriod,climat,orbitalPeriod,planetImg} = this.state
    return (
      <div className='planetsBlock fadeInLeft animated'>
        <div className='blockHeader'>{name}</div>
        <div className='planetsBlock__wrap'>
          <div className='planetsBlock__img'>
            <img src={planetImg} alt='planet'></img>
          </div>
          <div className='planetsBlock__descr'>
            <ul>
              <li><span>Население: {population}</span></li>
              <li><span>Диаметр: {diametr}</span></li>
              <li><span>Климат: {climat}</span></li>
              <li><span>Период вращения: {rotationPeriod}</span></li>
              <li><span>Орибитальный период: {orbitalPeriod}</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
 }
}