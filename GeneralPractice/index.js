fetch("people.json")
    .then(response => response.json())
    .then(values => console.log(values[0].name))
    .catch(error => console.error(error))