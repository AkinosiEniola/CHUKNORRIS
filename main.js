const btn = document.getElementById('click');
const container = document.getElementById('joke-box');


btn.addEventListener('click', () =>  {
    const data = fetch('https://api.chucknorris.io/jokes/random')
    .then(data => data.json())
    .then(result => {
        container.innerText = result.value
    }) 
});