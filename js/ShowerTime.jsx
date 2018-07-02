const React = require('react')
import { Row, Button, Col } from 'react-bootstrap'

const ShowerTime = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    start: React.PropTypes.string,
    end: React.PropTypes.string
  },

  render () {
    return (
      <Row>
        <Col xs={2} md={2}>
          <p>{this.props.name}</p>
        </Col>
        <Col xs={5} md={2}>
          <p>{this.props.start} -- {this.props.end}</p>
        </Col>
        <Col xs={1} md={2}>
          <Button bsSize="xsmall" bsStyle="info">Edit</Button>
        </Col>
        <Col xs={1} md={2}>
          <Button bsSize="xsmall" bsStyle="danger">Delete</Button>
        </Col>
      </Row>
    )
  }

})

ShowerTime.propTypes = {
  name: React.PropTypes.string.isRequired,
  start: React.PropTypes.string.isRequired,
  end: React.PropTypes.string
}

module.exports = ShowerTime
