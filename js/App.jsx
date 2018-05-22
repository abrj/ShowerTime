const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')

const App = () => (
  <Landing />
)

ReactDOM.render(<App />, document.getElementById('app'))
