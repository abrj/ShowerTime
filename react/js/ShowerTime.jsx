const React = require('react')
import { Row, Button, Col } from 'react-bootstrap'

const ShowerTime = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    date: React.PropTypes.string,
    id: React.PropTypes.int,
    start: React.PropTypes.string,
    end: React.PropTypes.string,
    editOnClick: React.PropTypes.func,
    deleteOnClick: React.PropTypes.func
  },

  deleteTime () {
    this.props.deleteOnClick(this.props.id)
  },

  editTime () {
    this.props.editOnClick(this.props.id)
  },

  render () {
    return (
      <Row>
        <Col xs={2} xsOffset={1} md={2} mdOffset={1}>
          <p>{this.props.name}</p>
        </Col>
        <Col xs={5} md={2}>
          <p>{this.props.start} -- {this.props.end}</p>
        </Col>
        <Col xs={1} md={2}>
          <Button bsSize="xsmall" onClick={this.editTime} bsStyle="info">Edit</Button>
        </Col>
        <Col xs={1} md={2}>
          <Button bsSize="xsmall" onClick={this.deleteTime} bsStyle="danger">Delete</Button>
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
