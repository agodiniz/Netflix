import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

export default () => {

  // Para salvar a lista de filmes que está vindo da requisição
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      //Mandando a lista que foi salva para a HOME
      setMovieList(list);
      
    }

    loadAll();
  }, []);

  return (
    <div className="page">
     <section className="lists">
       {movieList.map((item, key)=>(
        <MovieRow key={key}  title={item.title} item={item.items}/>
       ))}
     </section>
    </div>
  );
}
