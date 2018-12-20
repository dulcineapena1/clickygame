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
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // Los dos friend es como el parámetro que le pasa y lo lee, el .id es el id que llega a esta prop y que fue definida desde FriendCard componente
    // Lo que hace el filter es, devuelve los id que son diferentes al que se clickeo, entonces hace una acción similar
    // a como si se borrara
    // friend.id es el id del json que sea diferente a id, que el el id que te traes como prop en start y desde el div componenete
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // this.setState({ friends });
   // const friends = this.state.friends.filter(friend => friend.id !== id);

    this.setState({ friendsALosQueLeDiClick: this.state.friendsALosQueLeDiClick + id });
    
    const friendly= this.state.friendsALosQueLeDiClick.includes(id);
    friendly ? this.setState({scoregeneral : 0, friendsALosQueLeDiClick:[0]})  : this.setState ({scoregeneral : this.state.scoregeneral +1})

    const nuevo= this.state.scoregeneral 
    const nuevo2= this.state.scoreMasAlto -1
    // Pasando un state como prop, en el return primero solo dice el nombre del state envez de this.state.scoreMasAlto, porque ya se lo estás pasando como prop
    nuevo >=  nuevo2  ? this.setState({scoreMasAlto: this.state.scoregeneral+1}  ) : this.setState({scoreMasAlto: this.state.scoreMasAlto})

    //this.state.scoregeneral > this.state.scoreMasAlto  ? this.setState((state) => { return {scoreMasAlto: state.scoregeneral}  }) : this.setState({scoreMasAlto: this.state.scoreMasAlto})

// PRUEBA METIENDO CADA COSA EN UNA FUNCION DIFERENTE Y ABAJO EN EL RENDER PONERLAS ENLISTADAS
    
  };
  
 
 
  

  // Map over this.state.friends and render a FriendCard component for each friend object
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






          {/* {this.state.friends.map(friend => (
          <FriendCard
            start={this.start}
            id={friend.id}
            key={friend.id}
            image={friend.image} //image=.. etc, son palabras del json. friend.image es la imagen que está adentro del json, friend solito es el argumento de este map
          />
        ))} */}