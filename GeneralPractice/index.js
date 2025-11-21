const myButtons = document.getElementById("myButtons");

myButtons.classList.add("enabled");

myButtons.addEventListener('click', event => {
    if (event.target.classList.contains('disabled')) {
        event.target.classList.replace('disabled', 'enabled'); 
        event.target.textContent = "Enabled";
    } else {
        event.target.classList.replace('enabled', 'disabled');
        event.target.textContent = "Disabled";
    }
})