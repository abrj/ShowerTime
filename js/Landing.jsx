const React = require('react')
import { Grid, Row, Col } from 'react-bootstrap'
const PeopleList = require('./PeopleList')
const TimePicker = require('./TimePicker')
const ShowerTime = require('./ShowerTime')
import Axios from 'axios'

const Landing = React.createClass({
  getInitialState () {
    return {
      selected: false,
      person: '',
      startTime: null,
      endTime: null,
      newTimeAdded: false,
      showerTimes: []
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
    Axios.post('http://localhost:3000/submit', '')
      .then(res => {
        console.log(res)
        this.setState({
          showerTimes: res.people,
          newTimeAdded: true
        })
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
      <div>
        <Grid className='home-info text-center'>
          <Row className="show-grid">
            <Col>
              <h1 className='title'>Shower Time</h1>
            </Col>
          </Row>
          <PeopleList people={['Anders', 'Mira', 'Andreas', 'Guest']} onChange={this.handleChange} />
          {this.showTimePicker()}
        </Grid>
        {this.state.showerTimes.map((p) => (
          <ShowerTime name={p.name} start={p.start} end={p.end} />
          ))
        }
      </div>
    )
  }
})

module.exports = Landing
