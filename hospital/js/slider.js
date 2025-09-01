import { db } from './firebase-config.js';
import { collection, query, orderBy, limit, onSnapshot }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const carousel = $("#slide-carousel");

const q = query(
    collection(db, "slide"),
    orderBy("createdAt", "desc"),
    // limit(5) // latest 5 slide
);

onSnapshot(q, (snapshot) => {
    // Clear carousel and destroy old Owl instance
    carousel.trigger('destroy.owl.carousel');
    carousel.html('');

    snapshot.forEach((doc) => {
        const slide = doc.data();

        // Create dynamic item
        const item = `
      <div class="item" style="background-image: url('${slide.imageUrl}'); background-size:fill; background-position:center;">
        <div class="caption">
          <div class="col-md-offset-1 col-md-10">
            <h3>${slide.subtitle || "Latest Update"}</h3>
            <h1>${slide.title || ""}</h1>
          </div>
        </div>
      </div>
    `;

        carousel.append(item);
    });

    // Re-initialize Owl Carousel after adding new items
    carousel.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        animateOut: 'fadeOut'
    });
});
