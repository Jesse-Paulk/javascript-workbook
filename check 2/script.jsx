'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      currentPoke: 'none'
    }
    this.clickMethod = this.clickMethod.bind(this);
  }

  componentDidMount() {
let data = fetch('http://pokeapi.co/api/v2/pokemon').then((response) => {
  return response.json()
  .then((data) => {
    this.setState({
      list: this.state.list.concat(data.results)
    })
  });
});

}

clickMethod() {
  let randPoke = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
  //  alert(this.state.list[randPoke].name);
  let mainPoke =   this.state.list[randPoke].name;

  this.setState({
    currentPoke: mainPoke
  });
  // console.log(this.state.currentPoke);
// alert(mainPoke);
}



  render() {
    let lis = [];
    this.state.list.forEach((item, index) => {
      lis.push(<li key={index}>{item.name}</li>);
    });


    return (
      <div className="jumbotron">
        <h1>Pokemon</h1>
        <a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.clickMethod}> catch one</a>
        <div>
          {this.state.currentPoke}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Fetch />, document.getElementById('fetch'));
