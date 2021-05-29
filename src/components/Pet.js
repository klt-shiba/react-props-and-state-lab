import React from 'react'

class Pet extends React.Component {
  
  constructor() {
    super()
    this.state = {
      id: ""
    }
  }
  


  showSex = (e) => {
    return (e === "male") ? <div>♂</div> : <div>♀</div>
  }

  determineAdoption = (e, id) => {

    return (e === true) ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick = {this.returnPet} value= {id}>Adopt pet</button>
  }
  
  returnPet = (e) => {
    const id = e.target.value
    {this.props.onAdoptPet(id)}
  }

  render() {

    const pet = this.props.pets

    // for (let animal of pet) {
      return pet.map(el => {
        return (
          <div className="card">
            <div className="content">
              <a className="header"
              href="google.com">
                {this.showSex(el.gender)}
                {el.name}
              </a>
              <div className="meta">
                <span className="date">{el.type}</span>
              </div>
              <div className="description">
                <p>{el.age}</p>
                <p>{el.weight}</p>
              </div>
            </div>
            <div className="extra content">
              {this.determineAdoption(el.isAdopted, el.id)}
            </div>
          </div>
        )
      })
    // }
  }
}

export default Pet
