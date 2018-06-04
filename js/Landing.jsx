const React = require('react')
const PeopleList = require('./PeopleList')
const TimePicker = require('./TimePicker')

const Landing = React.createClass({
  getInitialState () {
    return {
      selected: false,
      person: '',
      startTime: null,
      endTime: null
    }
  },

  handleChange (ev) {
    this.setState({
      selected: true,
      person: ev.target.value
    })
  },

  timeSelected (start, end) {
    this.setState({
      startTime: start,
      endTime: end
    })
  },

  showTimePicker () {
    if (this.state.selected) {
      return (
        <TimePicker myClick={this.timeSelected} />
      )
    }
  },

  render () {
    return (
      <div className='app-container'>
        <div className='home-info'>
          <h1 className='title'>Shower Time</h1>
          <PeopleList people={['Anders', 'Mira', 'Andreas']} onChange={this.handleChange} />
          {this.showTimePicker()}
        </div>
      </div>
    )
  }
})

module.exports = Landing
