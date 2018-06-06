const React = require('react')
const ReactDOM = require('react-dom')
import 'bootstrap/dist/css/bootstrap.css'
const Landing = require('./Landing')

const App = () => (
  <Landing />
)

ReactDOM.render(<App />, document.getElementById('app'))
