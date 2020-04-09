import React, { Component } from 'react'
import albums from '../data.json'
import './style.css'

class SingleAlbum extends Component {
  constructor() {
    super()
    this.state = {
      album: {},
    }
  }

  componentDidMount() {
    //Derive album here
  }

  render() {
    return (
      <div className="single-album">
        <h2>
          {this.state.album.artist} - {this.state.album.title}
        </h2>
        <img
          src={this.state.album.image}
          alt={this.state.album.title}
          className="large-album-art"
        />
        <button onClick={() => alert('YOU BOUGHT IT')} className="buy-button">
          Buy Now!
        </button>
      </div>
    )
  }
}
export default SingleAlbum
