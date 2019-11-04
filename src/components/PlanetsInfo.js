import React from 'react';
import '../sass/PlanetsInfo.sass';
import SWApiService from '../SWApiService'
import Loader from './Loader';


export default class PlanetInfo extends React.Component {
  swapi = new SWApiService();
  state= {
    name: '',
    population: '',
    diametr: '',
    rotationPeriod: '',
    climat: '',
    orbitalPeriod:'',
    planetImg: '',
    loading: true,
  };
  componentDidMount(){
    this.updatePlanet();
    // setInterval(this.updatePlanet,10000);
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
      planetImg : `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
      loading: false
    }));
  }

  render(){
    const {loading} = this.state,
      loader = loading ? <Loader/> : null,
      content =!loading ? <Planet planet = {this.state}/> : null,
      {desiredClass} = this.props
    return (
      <div className={desiredClass}>
        {loader}
        {content}
      </div>
    );
  }
};

function Planet ({planet}){
  const {name,population,diametr,rotationPeriod,climat,orbitalPeriod,planetImg} = planet
  return(
    <React.Fragment>
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
    </React.Fragment>
  )
};  