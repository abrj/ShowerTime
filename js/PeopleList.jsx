const React = require('react')
import { Row, DropdownButton, MenuItem } from 'react-bootstrap'

const PeopleList = React.createClass({
  propTypes: {
    people: React.PropTypes.array,
    onChange: React.PropTypes.func
  },

  getInitialState () {
    return {
      dropDownTitle: 'Select a name'
    }
  },

  selected (ev) {
    this.setState({
      dropDownTitle: ev
    })
    console.log(ev)
    this.props.onChange(ev)
  },

  render () {
    return (
      <div>
        <Row>
          <DropdownButton className="peopleDropDown" xs={5} sm={5} title={this.state.dropDownTitle} onSelect={this.selected}>
            {this.props.people.map((p) => (
              <MenuItem eventKey={p}> {p} </MenuItem>
              ))}
          </DropdownButton>
        </Row>
      </div>
    )
  }
})

PeopleList.propTypes = {
  people: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
}

module.exports = PeopleList

