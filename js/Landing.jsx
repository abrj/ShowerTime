const React = require('react')
import { Grid, Row, Col } from 'react-bootstrap'
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
      person: ev
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
      <Grid className='home-info text-center'>
        <Row className="show-grid">
          <Col>
            <h1 className='title'>Shower Time</h1>
          </Col>
        </Row>
        <PeopleList people={['Anders', 'Mira', 'Andreas', 'Guest']} onChange={this.handleChange} />
        {this.showTimePicker()}
      </Grid>
    )
  }
})

module.exports = Landing
