const React = require('react')
var TimePickerDropDown = require('basic-react-timepicker')

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
        <TimePickerDropDown id="startTimer"step={5} beginLimit="6:00PM" endLimit="10:00PM" onChange={this.setStartTime} />
        <TimePickerDropDown id="endTimer" step={5} beginLimit={this.state.startTime} endLimit="10:00PM" onChange={this.setEndTime} />
        <div>
          {this.state.timeSet &&
            <button className='browse-all' onClick={this.submitTime}>Submit</button>
          }
        </div>
      </div>
    )
  }
})

TimePicker.propTypes = {
  myClick: React.PropTypes.func.isRequired
}

module.exports = TimePicker
