import React from 'react';
import '../sass/AllPlanets.sass';
import SWApiService from '../SWApiService'
import Loader from './Loader';
// import Loader from './Loader';

export default class AllPlanets extends React.Component {
  swapi = new SWApiService();
  state = {
    planets: null,
  };
  componentDidMount(){
    this.swapi.getAllPlanets()
      .then((planets) => this.setState({
        planets,
      }));
  };
  renderItems(arr){
    return arr.map(({name,id}) => {
      return(
      <div className = 'planetName' key={id}>{name}</div>
      );
    });
  };
  render(){
    const {planets} = this.state,
      loader = !planets ? <Loader/> : null,
      content = planets ? this.renderItems(planets) : null;
    return (
      <div className='planetsBlock fadeInLeft animated'>
        {loader}
        {content}
      </div>
    );
  }
};
