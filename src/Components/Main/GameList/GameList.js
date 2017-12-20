import React, { Component }     from 'react'
import axios                    from 'axios'
import GameListDisplay          from '../../SubComponents/GameListDisplay/GameListDisplay.js'

class GameList extends Component{
  constructor(props){
    super(props)

    this.createGame = this.createGame.bind(this)
  }

  createGame() {
    axios.post('https://project3-sjf.herokuapp.com/api/game', {
        'player': 2
      })
      .then((response) => {
          this.props.history.push(`/${response.data._id}`)
        })
      .catch((err) => console.log(err))
  }


  render() {
   return(
     <div>
      <button className="button" onClick={this.createGame}><span>Create Game</span></button>
       {GameList}
       <GameListDisplay />
     </div>
   )
  }
 }


export default GameList
