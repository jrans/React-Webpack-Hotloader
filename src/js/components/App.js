var React = require('react');

var App = React.createClass({

  getInitialState:function(){
    return {
      count:0,
    };
  },

  componentDidMount: function(){
    this.timer = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
  },

  tick: function() {
    this.setState({count: this.state.count + 1});
  },

  render: function () {
    return(
      <div className="counter">
        <h1>{this.state.count}</h1>
      </div>
    );
  }
});

module.exports = App;
