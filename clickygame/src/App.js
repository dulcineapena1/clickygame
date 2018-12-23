import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // friens trae los elementos del archivo json (aquí arriba está en import)
  state = {
    friends,
    friendsALosQueLeDiClick: [0],
    scoregeneral:0,
    scoreMasAlto:0
  };

  start = id => {
   
    let nuevoScoreAlto= this.state.scoreMasAlto;
    this.state.scoregeneral >= nuevoScoreAlto ? nuevoScoreAlto= this.state.scoreMasAlto+1 : nuevoScoreAlto=nuevoScoreAlto

    this.setState({ friendsALosQueLeDiClick: this.state.friendsALosQueLeDiClick + id });
    
    const friendly= this.state.friendsALosQueLeDiClick.includes(id);
   // friendly ? this.setState({scoregeneral : 0, friendsALosQueLeDiClick:[0], scoreMasAlto:this.state.scoreMasAlto})  : this.setState ({scoregeneral : this.state.scoregeneral +1, scoreMasAlto: this.scoregeneral})
    friendly ? this.setState({scoregeneral : 0, friendsALosQueLeDiClick:[0], scoreMasAlto:this.state.scoreMasAlto})  : this.setState((state) => { return {scoregeneral : state.scoregeneral +1, scoreMasAlto: nuevoScoreAlto}  })

    //  this.saberElScoreMasAlto();
  
    // Pasando un state como prop, en el return primero solo dice el nombre del state envez de this.state.scoreMasAlto, porque ya se lo estás pasando como prop
    //this.state.scoregeneral > this.state.scoreMasAlto  ? this.setState((state) => { return {scoreMasAlto: state.scoregeneral}  }) : this.setState({scoreMasAlto: this.state.scoreMasAlto})

    
  };
  
  // saberElScoreMasAlto = () => {
  //   let nuevo= this.state.scoregeneral 
  //   let nuevo2= this.state.scoreMasAlto +1
  //   nuevo >=  nuevo2  ? this.setState({scoreMasAlto: this.state.scoreMasAlto+1}  ) : this.setState({scoreMasAlto: this.state.scoreMasAlto})
  // }
 
  

  render() {
    return (
      <Wrapper>
        <Title
          score= {this.state.scoregeneral}
          topscore= {this.state.scoreMasAlto}
          diclick= {this.state.friendsALosQueLeDiClick}
        />

        {/* // Primero mapeamos el json de friend y luego le damos el valor mathrandom al friend, y luego hacemos que acomode los elementos y al final mapeamos metiendo el efecto random */}
        {this.state.friends.map((friend) => (
          {sort: Math.random(), value: friend})).sort(
            (friend,b) => friend.sort - b.sort ).map(
              (friend => (
                <FriendCard
                key={friend.value.id} // value es porque en el primer map estamos poniendo que el value es lo que trae el random
                start={this.start}
                id={friend.value.id}
                image={friend.value.image} //image=.. etc, son palabras del json. friend.image es la imagen que está adentro del json, friend solito es el argumento de este map              
                />)
              )
            )
        }

      

       
  
      </Wrapper>
    );
  }
}

export default App;



 {/* este código de abajo EXPLICA el funcionamiento de map + sort randomly usado arriba */}
        {/* let shuffled = unshuffled
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value) */}




