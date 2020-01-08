import React from 'react';
import Loader from './Loader';
import ErrorBlock from './Error';

const uploadLogicForComp = (getData, View, getImg = undefined, type = undefined) => {
  return class extends React.Component {
    state = {
      data: null,
      error: false,
      loading: true,
      img: null,
    };

    apiEror = (error) => {
      this.setState({
        error: true,
        loading: false,
      });
    };

    componentDidMount() {
      this.updatePlanet();
      if (this.props.itemId === undefined) {
        setInterval(this.updatePlanet, 50000);
      }
    }

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId && getImg !== undefined) {
        this.setState({
          loading: true,
        });
        this.updatePlanet();
      }
    }

    updatePlanet = () => {
      let id;
      if (this.props.itemId === undefined) {
        id = Math.floor(Math.random() * 25) + 3;
      } else {
        id = this.props.itemId;
      }
      getData(id)
        .then((data) => 
          this.setState({
            data,
            loading: false,
            img: getImg === undefined ? null : getImg(data),
          })
        )
        .catch(this.apiEror);
    };

    render() {
      const { data, error, loading, img } = this.state,
        apiEror = error ? <ErrorBlock /> : null,
        loader = loading ? <Loader /> : null,
        content = !(error || loading) ? <View {...this.props} data={data} img={img} type={type} /> : null;
      return (
        <>
          {apiEror}
          {loader}
          {content}
        </>
      );
    }
  };
};


export default uploadLogicForComp;