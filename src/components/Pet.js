import React from 'react'

class Pet extends React.Component {
  
  
  showSex = (e) => {
    return (e === "male") ? <div>♂</div> : <div>♀</div>
  }

  determineAdoption = e => {
    return (e === true) ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick = {this.onClick}>Adopt pet</button>
  }
  
  onClick = (e) => {
    console.log(e.target)
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
              {this.determineAdoption(el.isAdopted)}
            </div>
          </div>
        )
      })
    // }
  }
}

export default Pet
