document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://www.whenisthenextmcufilm.com/api'

    const title = document.getElementById('title');
    const daysUntil = document.getElementById('daysUntil');
    const releaseDate = document.getElementById('releaseDate');
    const summary = document.getElementById('summary');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            title.innerHTML = `${data.title} (${data.type})`;
            daysUntil.innerHTML = data.days_until;
            console.log(data.daysUntil);
            releaseDate.innerHTML = data.release_date;
            document.getElementById('poster').src = data.poster_url;
            summary.innerHTML = data.overview;
        })
        .catch(error => {
            console.error('Request Failed', error);
            title.innerHTML = error;
        })
})