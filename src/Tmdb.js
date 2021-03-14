const API_KEY = 'e97c20a28c02986614e7c15be7eea7c4';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados (trending)
-em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/

/*Função responsável por dar um Fetch na URL e pegar/retornar o JSON com os filmes*/
const basicFecth = async (endpoint) => {
    /*fazendo a requisição na URL da API*/
    const req = await fetch(`${API_BASE}${endpoint}`);
    /*Retornando o json*/
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                /*Originais da netflix*/
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                /*Recomendados (trending)*/
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                /*Em alta (Top rated)*/
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFecth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                /*Ação*/
                slug: 'action',
                title: 'Ação',
                items: await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                /*Comédia*/
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                /*Terror*/
                slug: 'horror',
                title: 'Terror',
                items: await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                /*Romance*/
                slug: 'romance',
                title: 'Romance',
                items: await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                /*Documentário*/
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }

        ];
    }
}