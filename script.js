document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://www.whenisthenextmcufilm.com/api'

    const title = document.getElementById('title');
    const daysUntil = document.getElementById('daysUntil');
    const releaseDate = document.getElementById('releaseDate');
    const summary = document.getElementById('summary');

    const title2 = document.getElementById('title2');
    const daysUntil2 = document.getElementById('daysUntil2');
    const releaseDate2 = document.getElementById('releaseDate2');
    const summary2 = document.getElementById('summary2');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            title.innerHTML = `${data.title} (${data.type})`;
            daysUntil.innerHTML = data.days_until;
            console.log(data.daysUntil);
            releaseDate.innerHTML = data.release_date;
            document.getElementById('poster').src = data.poster_url;
            summary.innerHTML = data.overview;
            if (data.following_production?.title) {
                title2.innerHTML = `${data.following_production.title} (${data.following_production.type})`;
                daysUntil2.innerHTML = data.following_production.days_until;
                console.log(data.following_production.daysUntil);
                releaseDate2.innerHTML = data.following_production.release_date;
                document.getElementById('poster2').src = data.following_production.poster_url;
                summary2.innerHTML = data.following_production.overview;
            }
        })
        .catch(error => {
            console.error('Request Failed', error);
            title.innerHTML = error;
        })

    //const leaveReview = document.getElementById("review");
    const donate = document.getElementById("donateButton");
    //const reviewUrl = ""
    const donateUrl = "https://github.com/sponsors/zefra37?frequency=one-time"

    donate.addEventListener("click", () => {
        chrome.tabs.create({
            url: donateUrl
        });
    });
})