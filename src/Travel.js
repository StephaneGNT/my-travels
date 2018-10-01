import React from 'react';

const travels=[
  {
    destination:"Perito Moreno",
    country:"Argentine",
    image:"https://images.salaun-holidays.com/(Image)-image-Argentine-Perito-Moreno-glagier-vue-panoramique-531-fo_91066032-09032017.jpg",
    character:"Photo du Perito Moreno",
    distance:"12 989 km (environ)",
  },
  {
    destination:"Bryce Canyon",
    country:"USA",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/USA_10654_Bryce_Canyon_Luca_Galuzzi_2007.jpg/800px-USA_10654_Bryce_Canyon_Luca_Galuzzi_2007.jpg",
    character:"Photo de Bryce Canyon",
    distance:"8 819 km (environ aussi)",
  },
  {
    destination:"Fredericton",
    country:"Canada",
    image:"https://c1.staticflickr.com/5/4002/4427406922_ca52be5055_z.jpg?zz=1",
    character:"Photo de Fredericton",
    distance:"beaucoup de km (environ aussi)",
  },
  {
    destination:"Mer d'émeraude",
    country:"Madagascar",
    image:"http://www.laquotidienne.fr/wp-content/uploads/2014/04/Mer-dEmeraude-madagascar-640x427.jpg",
    character:"Photo de Mada",
    distance:"Beaucoup aussi mais pas dans la même direction (environ aussi)",
  },
  {
    destination:"La Creuse",
    country:"France",
    image:"http://www.francebalade.com/limousin/felletincreuse.jpg",
    character:"Photo de La Creuse",
    distance:"T'as vraiment envie d'y aller ?"
  }
]

/*
const Travel = () => (
  <div>
    {travels.map(travel => (
      <Travel 
        destination={travel.destination} 

        />
    ))}
  </div>
);

import React from "react";
// src/Quotes.js
const quotes = [
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
  },
  {
    quote: "That's where I saw the leprechaun...He told me to burn things.",
    character: "Ralph Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
  },
  {
    quote:
      "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
    character: "Principal Skinner",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
  }
];*/

const Travels = () => (
  <div>
    {travels.map(
      travel => (
        <Travel 
          destination={travel.destination}
          country={travel.country}
          image={travel.image}
          character={travel.character}
          distance={travel.distance}
        />
    ))}
  </div>
);

const Travel = props => (
  <div>
    <p>Destination : {props.destination}</p>
    <p>Country : {props.country}</p>
    <img src={props.image} alt={props.character} />
    <p>Distance : {props.distance}</p>
    <hr></hr>
  </div>
);


export default Travels;