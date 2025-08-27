// footer-news.js
import { db } from './firebase-config.js';
import { collection, query, orderBy, limit, onSnapshot }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const waitForFooter = () => {
    const container = document.getElementById("footer-latest-news");
    if (!container) {
        setTimeout(waitForFooter, 50);
        return;
    }

    const q = query(collection(db, "news"), orderBy("createdAt", "desc"), limit(2));

    onSnapshot(q, (snapshot) => {
        container.innerHTML = "";
        snapshot.forEach((docSnap) => {
            const news = docSnap.data();
            const newsDate = news.selectedDate
                ? (news.selectedDate.toDate ? news.selectedDate.toDate().toLocaleDateString() : new Date(news.selectedDate).toLocaleDateString())
                : news.date || "";

            const newsHTML = `
                <div class="latest-stories" style="display:flex; margin-bottom:10px; align-items:center;">
                    ${news.imageUrl ? `<img src="${news.imageUrl}" alt="${news.title}" class="img-responsive"  style="width:100px">` : ""}
                    <div class="stories-info">
                        <h5 style="margin:0; font-size:14px;">${news.title || "No Title"}</h5>
                        <span style="font-size:12px; color:#666;">${newsDate}</span>
                    </div>
                </div>
            `;

            container.insertAdjacentHTML("beforeend", newsHTML);
        });
    });
};

waitForFooter();
