let url = "https://swapi.co/api/people"

export const getPeople = () => (
    fetch(url)
        .then(res => res.json())
        .then(data => data.results)
        
)
