const url="https://gateway.marvel.com/v1/public/characters?ts=1&apikey=1e441cd06d6eb7ae722e219e4268d9b6&hash=39080afecd7aa71ff7054cec3dbf9bce";

export const HeroService = () => {
    return fetch(url)
    .then(response => {
        return response.json()
    }) 
    .then(heroes => {
        return heroes.data.results.map(hero => {
            
            return {
                id:hero.id,
                image:`${hero.thumbnail.path}.${hero.thumbnail.extension}`,
                name: hero.name,
                description: hero.description,               
            }
        })
    })
}
