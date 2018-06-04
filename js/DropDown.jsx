import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class DropDown extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      people: this.props.people,
      onChange: this.props.onChange
    }
  }

  toggle () {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render () {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          {this.state.people.map((p) => (
            <DropdownItem > {p} </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    )
  }
}

DropDown.propTypes = {
  people: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
}
