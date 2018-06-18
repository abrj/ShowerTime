const React = require('react')

const ShowerTime = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    start: React.PropTypes.string,
    end: React.PropTypes.string
  },

  render () {
    return (
      <li> {this.props.name} start: {this.props.start} end: {this.props.end}</li>
    )
  }

})

ShowerTime.propTypes = {
  name: React.PropTypes.string.isRequired,
  start: React.PropTypes.string.isRequired,
  end: React.PropTypes.string
}

module.exports = ShowerTime
