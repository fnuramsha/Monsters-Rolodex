import { Component } from "react";
import './card.style.css';

// Functional Component

const Card = ({monster}) => {
    const {email, id, name} = monster;
    return (
        <div className = "card-container" key= {id}>
        <img
          alt = {`monster ${name}`} 
         src={`https://robohash.org/${id}?set=set2&size=180x180`} />
         <h2 > {name} </h2>
         <p>{email}</p>
        </div>
    );

}

// Class Component 

// class Card extends Component {
//     render () {
//         const {email, id, name} = this.props.monster;
//         return (
//             <div className = "card-container" key= {id}>
//             <img
//               alt = {`monster ${name}`} 
//              src={`https://robohash.org/${id}?set=set2&size=180x180`} />
//              <h2 > {name} </h2>
//              <p>{email}</p>
//             </div>
//         );
//     }
// }

export default Card;