document.addEventListener('DOMContentLoaded', () => {
    const newsFeed = document.getElementById('news-feed');

    // Fetch latest climate news (assuming an endpoint is available)
    fetch('https://api.climate-news.com/v1/latest')
        .then(response => response.json())
        .then(data => {
            newsFeed.innerHTML = '';
            data.articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                newsFeed.appendChild(articleDiv);
            });
        })
        .catch(error => {
            newsFeed.innerText = 'Error loading news';
        });
});
