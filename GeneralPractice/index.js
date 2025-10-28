const chair = document.getElementById('chairImg');
const theBtn = document.getElementById('theBtn');

theBtn.addEventListener('click', event => {
    console.log('i ran');

    if (chair.style.visibility === 'hidden') {
        chair.style.visibility = 'visible';
        theBtn.textContent = "Hide";
    } else {
        chair.style.visibility = 'hidden';
        theBtn.textContent = "Show";
    }
});