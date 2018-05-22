const React = require('react')

const PeopleList = (props) => (
  <div>
    <select>
    {props.people.map((p) => (
      <option> {p} </option>
      ))}
    </select>
  </div>
)

PeopleList.propTypes = {
  people: React.PropTypes.array.isRequired
}

module.exports = PeopleList

