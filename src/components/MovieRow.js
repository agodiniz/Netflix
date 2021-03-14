import React from 'react';
import './MovieRow.css';

export default ({title, item}) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {item?.results?.length > 0 && item?.results?.map((item, key)=> (
          <div key={key} className="movieRow--item">
          <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
          </div>
        ))} 
        </div>
          
        </div>
      </div>
  );
}