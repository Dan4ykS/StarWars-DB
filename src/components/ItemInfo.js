import React from 'react';
import '../sass/PlanetInfo.sass';
import SWApiService from '../SWApiService';
import Loader from './Loader';
import ErrorBlock from './Error';
import WrapForElements from './WrapForElements';


export default class ItemInfo extends React.Component {
  swapi = new SWApiService();
  state = {
    item: null,
    loading: true,
    error: false,
    img: null,
  };
  componentDidMount() {
    this.updatePlanet();
    if (this.props.itemId === undefined){
      setInterval(this.updatePlanet,50000);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        loading: true,
      });
      this.updatePlanet();
    }
  }

  apiEror = (error) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    let id;
    if (this.props.itemId === undefined) {
      id = Math.floor(Math.random() * 25) + 3;
      // id = 8484;
    } else {
      id = this.props.itemId;
    }
    // const id = 24654;
    const { getItem, getImgUrl } = this.props;
    getItem(id)
      .then((item) =>
        this.setState({
          item,
          loading: false,
          img: getImgUrl(item),
        })
      )
      .catch(this.apiEror);
  };

  elementForRender = () => { 
    const { item} = this.state
    React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {item});
    });
  }

  render() {
    const { loading, error } = this.state,
      apiEror = error ? <ErrorBlock /> : null,
      loader = loading ? <Loader /> : null,
      content = !(loading || error) ? <WrapForElements img={this.state.img} item={this.state.item} elemToRender={this.props.children} /> : null;
    return (
      <>
        {apiEror}
        {loader}
        {content}
      </>
    );
  }
}