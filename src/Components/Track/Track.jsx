import React from "react"

export class Track extends React.Component {
  
  
  renderAction() {
    return this.props.isRemoval ? <button className="Track-action">-</button> : <button className="Track-action">+</button>
  }
  
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Track Name</h3>
          <p>Artist | Album</p>
        </div>
        <button className="Track-action">{this.renderAction}</button>
      </div>
    )
  }
}