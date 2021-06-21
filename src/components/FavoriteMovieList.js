import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import { deleteFav } from '../actions/favActions'


const FavoriteMovieList = (props) => {

    const favorites = props.favorites;

    const handleDeleteFav = (fav) => {
        props.deleteFav(fav);
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons" >remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return {
      favorites: state.favList.favorites,
      displayFavorites: state.favList.displayFavorites
    }
  }

export default connect(mapStateToProps, { deleteFav })(FavoriteMovieList);