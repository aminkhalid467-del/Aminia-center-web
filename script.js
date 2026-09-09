/* =========================
   LOADER
========================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        if (loader) {
            loader.classList.add("hide");
        }

    }, 700);

});


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", function () {

        mobileNav.classList.toggle("active");

    });


    mobileNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("active");

        });

    });

}


/* =========================
   PRODUCT DATA
========================= */

const products = {

    jbranded: {

        title: "J. Branded Washing Wear",

        category: "GENTS COLLECTION",

        description:
            "A premium branded washing wear collection presented for wholesale buyers looking for a refined and versatile fabric option.",

        video:
            "videos/j. branded video-1.mp4",

        images: [
            "Images/j. branded-1.jpg",
            "Images/j. branded-2.jpg",
            "Images/j. branded-3.jpg"
        ],

        details: [
            ["Fabric", "120/90"],
            ["Finish", "Toyobo Finish"],
            ["Fabric Feel", "Malai Kapra"],
            ["Edge", "Air-Jet Kinara"],
            ["Colours", "30 Colours"],
            ["Season", "Four-Season Variety"],
            ["Rate", "2699"]
        ],

        whatsapp:
            "Assalamualaikum, mujhe J. Branded Washing Wear ke bare mein maloomat chahiye."
    },


    /* COTTON SHIFFLY */

    schiffli: {

        title: "Cotton Shiffly",

        category: "GENTS COLLECTION",

        description:
            "Premium Cotton Shiffly fabric presented as part of Aminia Center's Gents wholesale collection.",

        video:
            "videos/cotton shifly video-1.mp4",

        images: [
            "Images/cotton shifly-1.jpg"
        ],

        details: [
            ["Collection", "Gents"],
            ["Fabric", "Cotton Shiffly"],
            ["Availability", "Wholesale Collection"]
        ],

        whatsapp:
            "Assalamualaikum, mujhe Cotton Shiffly ke bare mein maloomat chahiye."
    },


    jslub: {

        title: "J. Slub Fancy Washing Wear",

        category: "GENTS COLLECTION",

        description:
            "Premium slub fancy washing wear presented as part of Aminia Center's Gents wholesale collection.",

        video:
            "videos/j. slub fancy washing wear video-1.mp4",

        images: [
            "Images/j. slub fancy washing wear-1.jpg"
        ],

        details: [
            ["Collection", "Gents"],
            ["Type", "Slub Fancy Washing Wear"],
            ["Availability", "Wholesale Collection"]
        ],

        whatsapp:
            "Assalamualaikum, mujhe J. Slub Fancy Washing Wear ke bare mein maloomat chahiye."
    },


    graceslub: {

        title: "Grace Slub Fancy Washing Wear",

        category: "GENTS COLLECTION",

        description:
            "A branded Grace slub fancy washing wear collection with a premium presentation and multiple colour options.",

        video:
            "videos/grace slub washing wear video-1.mp4",

        images: [
            "Images/grace slub washing wear-1.jpg"
        ],

        details: [
            ["Brand", "Grace"],
            ["Type", "Slub Fancy Washing Wear"],
            ["Collection", "Gents"],
            ["Availability", "Wholesale"]
        ],

        whatsapp:
            "Assalamualaikum, mujhe Grace Slub Fancy Washing Wear ke bare mein maloomat chahiye."
    },


    stone: {

        title: "Stone China Linen",

        category: "LINEN COLLECTION",

        description:
            "An elegant Stone China Linen collection featuring an all-over presentation and a refined linen look.",

        video:
            "videos/stone-china linen video-1.mp4",

        images: [
            "Images/stone-china linen-1.jpg",
            "Images/stone-china linen-2.jpg"
        ],

        details: [
            ["Fabric", "China Linen"],
            ["Design", "All-Over"],
            ["Cut", "2-Piece"],
            ["Collection", "Linen"]
        ],

        whatsapp:
            "Assalamualaikum, mujhe Stone China Linen ke bare mein maloomat chahiye."
    },


    chinalinen: {

        title: "China Linen",

        category: "LINEN COLLECTION",

        description:
            "Premium China Linen presented as a refined wholesale fabric collection with clean visual texture and elegant styling.",

        video:
            "videos/china-linen-video1.mp4",

        images: [
            "Images/china-linen-1.jpeg",
            "Images/china-linen-2.jpeg"
        ],

        details: [
            ["Fabric", "China Linen"],
            ["Collection", "Linen"],
            ["Availability", "Wholesale"]
        ],

        whatsapp:
            "Assalamualaikum, mujhe China Linen ke bare mein maloomat chahiye."
    },


    charsadda: {

        title: "Grace Charsadda Wool",

        category: "WINTER COLLECTION",

        description:
            "Fresh Grace Charsadda Wool stock from the Winter New Collection 2026, available in multiple colours.",

        video:
            "videos/grace charsadda wool video-1.mp4",

        images: [
            "Images/grace charsadda wool-1.jpg",
            "Images/grace charsadda wool-2.jpg",
            "Images/grace charsadda wool-3.jpg"
        ],

        details: [
            ["Collection", "Winter New Collection 2026"],
            ["Type", "Grace Charsadda Wool"],
            ["Colours", "12 Colours"],
            ["Stock", "Fresh Thaan"]
        ],

        whatsapp:
            "Assalamualaikum, mujhe Grace Charsadda Wool ke bare mein maloomat chahiye."
    },


    allahwasaya: {

        title: "Allah Wasaya Baoo G Karandi",

        category: "WINTER COLLECTION",

        description:
            "New stock and new winter collection of Allah Wasaya Baoo G Khaddar Karandi, available in a wide range of colours.",

        video:
            "videos/allah wasaya karandi video-1.mp4",

        images: [
            "Images/allah wasaya karandi-1.jpg"
        ],

        details: [
            ["Colours", "20–22 Colours"],
            ["Stock", "New Stock"],
            ["Collection", "New Winter Collection"],
            ["Thaan", "28 Meters"],
            ["1 Suit", "7 Meters"]
        ],

        whatsapp:
            "Assalamualaikum, mujhe Allah Wasaya Baoo G Khaddar Karandi ke bare mein maloomat chahiye."
    }

};


/* =========================
   PRODUCT MODAL ELEMENTS
========================= */

const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");

const modalVideo = document.getElementById("modalVideo");
const galleryMainImage = document.getElementById("galleryMainImage");
const galleryThumbs = document.getElementById("galleryThumbs");

const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalDetails = document.getElementById("modalDetails");
const modalWhatsApp = document.getElementById("modalWhatsApp");


/* =========================
   OPEN PRODUCT
========================= */

document.querySelectorAll(".product-card").forEach(function (card) {

    card.addEventListener("click", function () {

        const productId = card.getAttribute("data-product");

        openProduct(productId);

    });

});


function openProduct(productId) {

    const product = products[productId];

    if (!product) {
        console.error("Product not found:", productId);
        return;
    }


    /* INFO */

    modalCategory.textContent = product.category;
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;


    /* VIDEO */

    modalVideo.pause();

    modalVideo.src = product.video;

    modalVideo.load();


    /* IMAGE */

    galleryMainImage.src = product.images[0];
    galleryMainImage.alt = product.title;


    /* THUMBNAILS */

    galleryThumbs.innerHTML = "";

    product.images.forEach(function (image, index) {

        const thumb = document.createElement("div");

        thumb.className = "gallery-thumb";

        if (index === 0) {
            thumb.classList.add("active");
        }


        const img = document.createElement("img");

        img.src = image;
        img.alt = product.title;


        thumb.appendChild(img);

        galleryThumbs.appendChild(thumb);


        thumb.addEventListener("click", function (event) {

            event.stopPropagation();

            galleryMainImage.src = image;

            galleryThumbs
                .querySelectorAll(".gallery-thumb")
                .forEach(function (item) {
                    item.classList.remove("active");
                });

            thumb.classList.add("active");

        });

    });


    /* DETAILS */

    modalDetails.innerHTML = "";

    product.details.forEach(function (detail) {

        const row = document.createElement("div");

        row.className = "detail-row";


        const name = document.createElement("span");

        name.textContent = detail[0];


        const value = document.createElement("strong");

        value.textContent = detail[1];


        row.appendChild(name);
        row.appendChild(value);

        modalDetails.appendChild(row);

    });


    /* WHATSAPP */

    modalWhatsApp.href =
        "https://wa.me/923247372542?text=" +
        encodeURIComponent(product.whatsapp);


    /* SHOW */

    productModal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =========================
   CLOSE MODAL
========================= */

function closeProduct() {

    productModal.classList.remove("active");

    document.body.classList.remove("modal-open");

    modalVideo.pause();

    modalVideo.removeAttribute("src");

    modalVideo.load();

}


if (modalClose) {
    modalClose.addEventListener("click", closeProduct);
}

if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeProduct);
}


/* ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeProduct();
    }

});


/* =========================
   COLLECTION CARD NAVIGATION
========================= */

document.querySelectorAll(".collection-card").forEach(function (card) {

    card.addEventListener("click", function (event) {

        if (event.target.closest("a")) {
            return;
        }

        const link = card.querySelector("a");

        if (link) {
            document.querySelector("#products").scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(function (element) {
        observer.observe(element);
    });

} else {

    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });

}


/* =========================
   SMOOTH NAVIGATION
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (
                targetId === "#" ||
                !document.querySelector(targetId)
            ) {
                return;
            }

            event.preventDefault();

            document
                .querySelector(targetId)
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


/* =========================
   VIDEO ERROR CHECK
========================= */

document.querySelectorAll("video").forEach(function (video) {

    video.addEventListener("error", function () {

        console.warn(
            "Video could not be loaded:",
            video.currentSrc || video.querySelector("source")?.src
        );

    });

});