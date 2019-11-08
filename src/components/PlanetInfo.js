import React from 'react';
import '../sass/PlanetInfo.sass';
import SWApiService from '../SWApiService'
import Loader from './Loader';
import ErrorBlock from './Error'

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
    error: false,
  };
  componentDidMount(){
    this.updatePlanet();
    // setInterval(this.updatePlanet,10000);
  };
  apiEror = (error) => {
    this.setState({
      error: true,
      loading: false
    })
  }
  updatePlanet = () =>{
    const id = Math.floor(Math.random()*25)+3;
    // const id = 2
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
    }))
    .catch(this.apiEror);
  };

  render(){
    const {loading, error} = this.state,
      apiEror = error ? <ErrorBlock/> : null,
      loader = loading ? <Loader/> : null,
      content = !(loading || error) ? <Planet planet = {this.state}/> : null,
      {desiredClass} = this.props
    return (
      <div className={desiredClass}>
        {apiEror}
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