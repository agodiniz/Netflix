import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

export default () => {

  useEffect(()=>{
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  }, []);

  return (
    <div>
      Netflix - Filmes e Séries
    </div>
  );
}
