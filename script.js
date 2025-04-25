// Sample news articles data
const newsArticles = [
  {
    title: "Global Markets Rally on Economic Optimism",
    description: "Stock markets around the world surged today as investors reacted positively to new economic data.",
    imageUrl: "https://via.placeholder.com/400x200?text=Market+Rally",
    url: "#"
  },
  {
    title: "New Advances in Renewable Energy Technology",
    description: "Scientists have developed a new solar panel that is more efficient and affordable.",
    imageUrl: "https://via.placeholder.com/400x200?text=Renewable+Energy",
    url: "#"
  },
  {
    title: "Tech Giants Announce Collaboration on AI Ethics",
    description: "Leading technology companies have joined forces to create guidelines for ethical AI development.",
    imageUrl: "https://via.placeholder.com/400x200?text=AI+Ethics",
    url: "#"
  },
  {
    title: "Sports Championship Ends in Dramatic Fashion",
    description: "The championship game went into overtime with a last-minute winning goal.",
    imageUrl: "https://via.placeholder.com/400x200?text=Sports+Championship",
    url: "#"
  }
];

// Function to load news articles into the page
function loadNews() {
  const newsList = document.getElementById('news-list');
  newsList.innerHTML = '';

  newsArticles.forEach(article => {
    const articleElem = document.createElement('article');
    articleElem.className = 'news-article';

    articleElem.innerHTML = `
      <img src="${article.imageUrl}" alt="${article.title}" />
      <div class="news-article-content">
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}" class="read-more" target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    `;

    newsList.appendChild(articleElem);
  });
}

// Load news articles when the DOM is ready
document.addEventListener('DOMContentLoaded', loadNews);
