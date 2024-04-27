document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('getJokeBtn').addEventListener('click', getChuckNorrisJoke);
});

function getChuckNorrisJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      const jokeElement = document.createElement('p');
      jokeElement.textContent = data.value;
      document.getElementById('jokeContainer').appendChild(jokeElement);
    })
    .catch(error => {
      console.error('Error fetching Chuck Norris joke:', error);
    });
}
