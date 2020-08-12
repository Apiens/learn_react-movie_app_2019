import React from 'react';
import PropTypes from "prop-types";
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.9
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.5
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.2
    }
];

function Food(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.name} is delicious!</h1>
      <img src={props.picture} alt={props.name + " image"}/>
      <h2>rating: {props.rating}/5</h2>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
    <div className="App">
      {foodILike.map(food => (
        <Food 
          key= {food.id} 
          name={food.name} 
          picture={food.image} 
          rating = {food.rating}/>
      ))}
    </div>
  );
}

export default App;


// function Food(props) {
//   console.log(props)
//   return <h1>{props.name} is delicious!</h1>;
// }

// function Pet({sound}) {
//   console.log(sound)
// return <h1>I say {sound}. Who am I?</h1>
// }

// function App() {
//   return (
//     <div className="App">
//       Hello World!
//       <Food 
//         name = "kimchi"
//         ingredients = {["cabbage", "radish", "red_pepper"]}
//         is_tasty = {true}
//       />
//       <Pet species = "cat" sound="Meow"/>
//       <Pet species = "dog" sound="Bowwow"/>
//     </div>
//   );
// }
// export default App;