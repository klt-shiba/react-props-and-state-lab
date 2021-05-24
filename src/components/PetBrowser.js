import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log(this.props.pets[1])
    // for (let pet of pets) {
      return <div className="ui cards">
        <Pet 
          pets={this.props.pets}>
        </Pet>
      </div>
    // }
  }
}

export default PetBrowser
