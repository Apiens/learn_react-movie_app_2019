import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async (url) => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(url);
    return movies;
  };

  async componentDidMount() {
    const url = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";
    const movies = await this.getMovies(url);
    console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <li className="loader__template">Loading...</li>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                year={movie.year}
                rating={movie.rating}
                runtime={movie.runtime}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

// const url = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";
// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   };
//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies },
//       },
//     } = await axios.get(url);
//     this.setState({ movies, isLoading: false });
//   };
//   componentDidMount() {
//     this.getMovies();
//   }
//   render() {
//     const { isLoading, movies } = this.state; //isLoading = this.state.isLoading
//     return (
//       <section className="container">
//         {isLoading ? (
//           <div>
//             <span className="loader__text">Loading...</span>
//           </div>
//         ) : (
//           <div className="movies">
//             {movies.map((movie) => (
//               <Movie
//                 key={movie.id}
//                 id={movie.id}
//                 year={movie.year}
//                 title={movie.title}
//                 summary={movie.summary}
//                 poster={movie.medium_cover_image}
//                 rating={movie.rating}
//                 runtime={movie.runtime}
//                 genres={movie.genres}
//               />
//             ))}
//             ;
//           </div>
//         )}
//       </section>
//     );
//   }
// }

// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   };
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ isLoading: false, book: true });
//     }, 6000);
//   }
//   render() {
//     const { isLoading } = this.state; //isLoading = this.state.isLoading
//     return <div>{isLoading ? "Loading" : "We are ready"}</div>;
//   }
// }

// class App extends React.Component {
//   state = { count: 0 };
//   render() {
//     console.log("I'm rendering~!");
//     return (
//       <div>
//         <h1>Current Number Is: {this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.setState((current) => ({ count: current.count + 1 }));
//           }}
//         >
//           add
//         </button>

//         <button
//           onClick={() => {
//             this.setState((current) => ({ count: current.count - 1 }));
//           }}
//         >
//           subtract
//         </button>
//       </div>
//     );
//   }
//   componentDidMount() {
//     console.log("Component Mounted!");
//   }
//   componentDidUpdate() {
//     console.log("Component Updated!");
//   }
// }

// import PropTypes from "prop-types";

// function Food(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.name} is delicious!</h1>
//       <img src={props.picture} alt={props.name + " image"} />
//       <h2>rating: {props.rating}/5</h2>
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

// function App() {
//   return (
//     <div className="App">
//       {foodILike.map((food) => (
//         <Food
//           key={food.id}
//           name={food.name}
//           picture={food.image}
//           rating={food.rating}
//         />
//       ))}
//     </div>
//   );
// }

export default App;
