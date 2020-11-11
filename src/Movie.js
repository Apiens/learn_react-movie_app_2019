import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, summary, poster, year, rating, runtime, genres }) {
  return (
    <div className="movie">
      <img
        className="movie__poster"
        src={poster}
        alt="poster_img"
        title={title}
      />
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__year">{"released in: " + year}</h5>
      <h5 className="movie__rating">{rating + " /10"}</h5>
      <h5 className="movie__runtime">{runtime + " Minutes"}</h5>
      <p className="movie__summary">{summary.slice(0, 200) + "..."}</p>
      <ul className="movie__genres">
        {genres.map((genre, index) => (
          <li key={index} className="movie__genre">
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

// function Movie({ title, summary, poster, year, runtime, rating, genres }) {
//     return (
//       <div className="Movie">
//         <img src={poster} title={title} alt={title} />
//         <h1>{title}</h1>
//         <h5>{year}</h5>
//         <h5>{runtime}</h5>
//         <h5>{rating}</h5>
//         <ul>
//           {genres.map((genre, index) => (
//             <li key={index}>{genre}</li>
//           ))}
//         </ul>
//         <p>{summary}</p>
//       </div>
//     );
//   }

//   Movie.propTypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired,
//     poster: PropTypes.string.isRequired,
//     year: PropTypes.number.isRequired,
//     runtime: PropTypes.number.isRequired,
//     rating: PropTypes.number.isRequired,
//   };

//   export default Movie;
