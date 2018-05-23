const React = require('react')

const PeopleList = (props) => (
  <div>
    <select onChange={props.onChange}>
    {props.people.map((p) => (
      <option> {p} </option>
      ))}
    </select>
  </div>
)

PeopleList.propTypes = {
  people: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
}

module.exports = PeopleList

