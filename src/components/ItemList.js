import React from 'react';
import '../sass/ItemList.sass';
import Loader from './Loader';
import ErrorBlock from './Error';

export default class Allitems extends React.Component {
  state = {
    items: null,
    error: false,
    loading: true,
  };
  apiEror = (error) => {
    this.setState({
      error: true,
      loading: false,
    });
  };
  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then((items) =>
        this.setState({
          items,
          loading: false,
        })
      )
      .catch(this.apiEror);
  }
  renderItems(arr) {
    return arr.map(({ name, id }) => {
      const { changePlanet, planet } = this.props,
        isActive = id === planet;
      return (
        <div onClick={() => changePlanet(id)} className={isActive ? 'itemName itemName_active' : 'itemName'} key={id}>
          {name}
        </div>
      );
    });
  }
  render() {
    const { items, error, loading } = this.state,
      apiEror = error ? <ErrorBlock /> : null,
      loader = loading ? <Loader /> : null,
      content = !(loader || error) ? this.renderItems(items) : null;
    return (
      <div className='wrap'>
        {apiEror}
        {loader}
        {content}
      </div>
    );
  }
}
