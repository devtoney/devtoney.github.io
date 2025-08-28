// latest-news.js
import { db } from './firebase-config.js';
import { collection, query, orderBy, limit, onSnapshot }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const newsContainer = document.getElementById("latest-news-container");

const q = query(
    collection(db, "news"),
    orderBy("createdAt", "desc"),
    limit(3) // latest 3 news
);

onSnapshot(q, (snapshot) => {
    newsContainer.innerHTML = ""; // clear old news

    snapshot.forEach((docSnap, index) => {
        const news = docSnap.data();
        const newsDate = news.selectedDate
            ? (news.selectedDate.toDate ? news.selectedDate.toDate().toLocaleDateString() : new Date(news.selectedDate).toLocaleDateString())
            : news.date || "";

        const newsHTML = `
        <div class="col-md-4 col-sm-6">
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.${4 + index * 2}s">
                <a href="news-detail.html">
                    ${news.imageUrl ? `<img src="${news.imageUrl}" class="img-fluid" alt="${news.title}">` : ""}
                </a>
                <div class="news-info">
                    <span>${newsDate}</span>
                    <h3><a href="news-detail.html">${news.title || "No Title"}</a></h3>
                    <div class="author">
                        <div class="author-info">
                            <h5>${news.author || "Unknown Author"}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        newsContainer.insertAdjacentHTML("beforeend", newsHTML);
    });
});
