const React = require('react')
var TimePickerDropDown = require('basic-react-timepicker')
import { Row, Button } from 'react-bootstrap'

const TimePicker = React.createClass({
  propTypes: {
    myClick: React.PropTypes.func
  },
  getInitialState () {
    return {
      startTime: '6:00PM',
      endTime: '6:05PM',
      timeSet: false
    }
  },

  setStartTime (ev) {
    this.setState({
      startTime: ev.target.value,
      timeSet: false
    })
  },

  setEndTime (ev) {
    this.setState({
      endTime: ev.target.value,
      timeSet: true
    })
  },

  submitTime () {
    this.props.myClick(this.state.startTime, this.state.endTime)
  },

  render () {
    return (
      <div>
        <Row>
          <TimePickerDropDown id="startTimer"step={5} beginLimit="6:00PM" endLimit="10:00PM" onChange={this.setStartTime} />
          <TimePickerDropDown id="endTimer" step={5} beginLimit={this.state.startTime} endLimit="10:00PM" onChange={this.setEndTime} />
        </Row>
        <Row>
          {this.state.timeSet &&
            <Button bsStyle="info" className='browse-all' onClick={this.submitTime}>Submit</Button>
          }
        </Row>
      </div>
    )
  }
})

TimePicker.propTypes = {
  myClick: React.PropTypes.func.isRequired
}

module.exports = TimePicker
