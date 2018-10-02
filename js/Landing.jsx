const React = require('react')
import { Grid, Row, Col } from 'react-bootstrap'
const PeopleList = require('./PeopleList')
const TimePicker = require('./TimePicker')
const ShowerTime = require('./ShowerTime')
import Axios from 'axios'
const CONFIG = require('./api-config')
// require('dotenv').config()

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

  componentDidMount () {
    this.getShowerTimes()
  },

  handleChange (ev) {
    this.setState({
      selected: true,
      person: ev
    })
  },

  getShowerTimes () {
    console.log(CONFIG.HOST)
    console.log('HOST: ' + process.env.API_HOST)
    console.log('PORT: ' + process.env.API_PORT)
    let requestAddress = String(CONFIG.HOST).concat('/showertimes')
    Axios.get(requestAddress, '')
    .then(res => {
      console.log(res.data)
      console.log(res.data.times)
      this.setState({
        showerTimes: res.data.times
      })
    })
  },

  sortTimes (a, b) {
    a = parseInt(a.substring(0, a.length - 2).replace(':', ''))
    b = parseInt(b.substring(0, b.length - 2).replace(':', ''))
    if (a > b) {
      return true
    } else {
      return false
    }
  },

  showShowerTimes () {
    if (this.state.showerTimes.length > 0) {
      return (
        <Grid>
          {this.state.showerTimes
            .sort((a, b) => this.sortTimes(a.s, b.s))
            .map((p) => (
              <ShowerTime name={p.n} start={p.s} end={p.e} date={p.d} id={p.i} deleteOnClick={this.deleteTime} editOnClick={this.editTime} />
          ))
        }
        </Grid>
      )
    } else {
      return (
        <h3> No times yet! </h3>
      )
    }
  },

  timeSelected (start, end) {
    this.setState({
      startTime: start,
      endTime: end
    })
    Axios.post(CONFIG.HOST + '/submit', {name: this.state.person, start: start, end: end})
      .then(res => {
        this.getShowerTimes()
        this.setState({
          newTimeAdded: true,
          selected: false
        })
      })
  },

  deleteTime (id) {
    console.log(id)
    Axios.post(CONFIG.HOST + '/delete', {database_id: id})
    this.getShowerTimes()
  },

  editTime (id) {
    console.log(id)
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
        <Grid bsClass='container text-center'>
          <Row>
            <Col>
              <h1 className='title'>Shower Time</h1>
            </Col>
          </Row>
          <PeopleList people={['Anders', 'Mira', 'Andreas', 'Guest']} onChange={this.handleChange} />
          {this.showTimePicker()}
        </Grid>
        <Grid bsClass='container text-center'>
          <Row>
            <Col>
              <h1 className='title'>Today</h1>
            </Col>
          </Row>
            {this.showShowerTimes()}
        </Grid>
      </div>
    )
  }
})

module.exports = Landing
