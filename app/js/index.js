const ReactDOM = require('react-dom')
const React = require('react')

class Index extends React.Component {
  render() {
    return (
      <div>
        <p>GLOBAL MARKETCAP</p>
        <h1>$200,000,000</h1>
        <h3>+$876.03</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('content')
)
 

