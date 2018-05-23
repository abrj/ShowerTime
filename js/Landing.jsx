const React = require('react')
const PeopleList = require('./PeopleList')

const Landing = () => {
  const handleChange = (ev) => {
    this.setState({
      selected: true,
      person: ev.target.value
    })
  }

  return (
    <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'>Shower Time</h1>
        <input className='search' type='text' placeholder='Search' />
        <button className='browse-all'> or Browse All</button>
        <PeopleList people={['Anders', 'Mira', 'Andreas']} onChange={handleChange} />
      </div>
    </div>
  )
}

module.exports = Landing
