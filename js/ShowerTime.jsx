const React = require('react')

const ShowerTime = React.createClass({
  proptypes: {
    name: React.PropTypes.string,
    start: React.PropTypes.string,
    end: React.PropTypes.string
  },

  getInitialState () {
    return {
      name: '',
      start: '',
      end: ''
    }
  },

  render () {
    return (
      console.log('hey!')
    )
  }

})

module.exports = ShowerTime
