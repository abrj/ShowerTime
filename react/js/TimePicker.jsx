const React = require('react')
var TimePickerDropDown = require('basic-react-timepicker')
var datetime = require('node-datetime')
import { Row, Button, MenuItem, DropdownButton } from 'react-bootstrap'

const TimePicker = React.createClass({
  propTypes: {
    myClick: React.PropTypes.func
  },

  getInitialState () {
    return {
      startTime: '6:00AM',
      endTime: '6:05AM',
      timeSet: false,
      dropDownTitle: 'today',
      dates: ['today', 'tomorrow', 'day after']
    }
  },

  componentDidMount () {
    // var dates = []
    // dates.push('tomorrow')
    // dates.push('today')
    datetime.create()
    // var now = dt.format('d/m')
    // var dayAfter = now.offsetInDays(1)
    // dates.push(dayAfter)
    // this.setState({
    //   dates: dates
    // })
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

  showDateDropDown () {
    return (
      <DropdownButton className="dateDateDropdown" xs={5} sm={5} title={this.state.dropDownTitle} onSelect={this.selected}>
        {this.state.dates.map((d) => (
          <MenuItem eventKey={d}> {d} </MenuItem>
        ))}
      </DropdownButton>
    )
  },

  selected (ev) {
    this.setState({
      dropDownTitle: ev
    })
  },

  render () {
    return (
      <div>
        <Row>
          {this.showDateDropDown()}
        </Row>
        <Row>
          <TimePickerDropDown id="startTimer"step={5} beginLimit="6:00AM" endLimit="10:00AM" onChange={this.setStartTime} />
          <TimePickerDropDown id="endTimer" step={5} beginLimit={this.state.startTime} endLimit="10:00AM" onChange={this.setEndTime} />
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
