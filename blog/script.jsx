'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list:[]

    }
  }
  componentWillMount() {
 fetch('https://swapi.co/api/films/').then((response) => {
  response.json().then((data) => {
    this.setState({
      list: data.results
    });
    console.log(this.state.list);
  });
});

}
  render() {
    return (
      <div className="jumbotron">
        {this.state.list.map((item) => {
          return (
            <div key={item.title}>
              <h2>{item.title}</h2>
                <span></span>
              <h4>director: {item.director}</h4>
              <span></span>
              <p>{item.opening_crawl}</p>
            </div>
          )
        })}
      </div>

    );
  }
}


ReactDOM.render(<Fetch />, document.getElementById('fetch'));
