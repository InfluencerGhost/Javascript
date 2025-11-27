const img = document.getElementById("pokemon-image");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {

        if (!response.ok) {
            throw new Error("Unable to fetch response")
        }

        return response.json()
    })
    .then(data => img.style.backgroundImage = data.sprites.front_default)
    .catch(error => console.error(error));