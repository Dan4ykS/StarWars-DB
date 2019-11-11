import React from 'react';
import '../sass/ItemList.sass';
import Loader from './Loader';
// import Loader from './Loader';

export default class Allitems extends React.Component {
  state = {
    items: null,
  };
  componentDidMount(){
    const { getData } = this.props;
    getData()
      .then((items) => this.setState({
        items,
      }));
  };
  renderItems(arr){
    return arr.map(({name,id}) => {
      return(
      <div className = 'itemName' key={id}>{name}</div>
      );
    });
  };
  render(){
    const {items} = this.state,
      loader = !items ? <Loader/> : null,
      content = items ? this.renderItems(items) : null;
    return (
      <div className='mainBlock fadeInLeft animated'>
        {loader}
        {content}
      </div>
    );
  }
};
