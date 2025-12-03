const input = document.getElementsByTagName("input");
const button = document.getElementById("pokeButton");
const errorText = document.getElementById("errorText");

button.addEventListener("click", () => {
    const pokemon = input[0].value.toLowerCase();
    fetchData(pokemon);
    if (pokemon === "") {
        errorText.textContent = `please type in a pokemon`;
    }

});

async function fetchData(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (!response.ok) {
            errorText.textContent = `As of ${Date()} ${pokemon} Does not exist`;
            throw new Error("Unable to fetch resource")
        }

        const data = await response.json()
        console.log(data)

        const img = document.createElement("img");
        img.width = 200;
        img.src = data.sprites.front_default;
        document.body.appendChild(img);

    }
    catch (error) {
        console.error(error)
    }


}