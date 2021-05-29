import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  
  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e
      }
    })
  }

  onFindPetsClick = () => {
    const val = this.state.filters.type
    if (val === "all" ) {
      fetch(`/api/pets`)
      .then(Response => Response.json())
      .then(data => this.updatePetState(data))
    } else {
      fetch(`/api/pets?type=` + val )
      .then(Response => Response.json())
      .then(data => this.updatePetState(data))
    }
  }

  updatePetState = (e) => {
    this.setState({
      pets: e
    })
    console.log(this.state)
    return e
  }

  onAdoptPet = (e) => {
    const petsArray = this.state.pets
    const adoptedPet = petsArray.find((el) => {
      return el.id === e
    })

    adoptedPet.isAdopted = true 
    console.log(adoptedPet)


  }
  
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType = {this.onChangeType}
                onFindPetsClick = {this.onFindPetsClick} 
              />
            </div>

            <div className="twelve wide column">
              <PetBrowser
                pets = {this.state.pets}
                onAdoptPet = {this.onAdoptPet}
               />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
