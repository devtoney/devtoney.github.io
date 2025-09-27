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
    // const item = `
    //   <div class="item bg-blr">
    // <img src="${slide.imageUrl}" alt="${slide.title || 'Slide image'}" class="slide-img">
    //     <div class="caption">
    //       <div class="col-md-offset-1 col-md-10">
    //         <h3>${slide.subtitle || ""}</h3>
    //         <h1>${slide.title || ""}</h1>
    //       </div>
    //     </div>
    //   </div>
    // `;
    const item = `
    <div class="item">
    <!-- Blurred background -->
    <div class="bg-blr" style="background-image: url('${slide.imageUrl}');"></div>

    <!-- Foreground image -->
    <img src="${slide.imageUrl}" alt="${slide.title || 'Slide image'}" class="slide-img">

    <!-- Caption -->
    <div class="caption">
      <div class="col-md-offset-1 col-md-10">
        <h3>${slide.subtitle || ""}</h3>
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
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    // animateOut: 'fadeOut'
  });
});
