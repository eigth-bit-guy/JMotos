/* ===========================
   HEADER AO ROLAR
=========================== */

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* ===========================
   ANIMAÇÃO AO APARECER
=========================== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: .15
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

/* ===========================
   LIGHTBOX DA GALERIA
=========================== */

const imagens = document.querySelectorAll(".gallery-grid img");
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = "<img>";
document.body.appendChild(lightbox);
const imagemLightbox = lightbox.querySelector("img");
imagens.forEach(img => {
    img.addEventListener("click", () => {
        imagemLightbox.src = img.src;
        lightbox.classList.add("active");
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

/* ===========================
   SCROLL SUAVE
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        destino.scrollIntoView({
            behavior:"smooth"
        });
    });
});

/* ===========================
   BOTÃO WHATSAPP
=========================== */

const whatsapp = document.querySelector(".whatsapp");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 400){
        whatsapp.style.opacity = "1";
        whatsapp.style.transform = "scale(1)";
    }
    else{
        whatsapp.style.opacity = ".8";
        whatsapp.style.transform = "scale(.85)";
    }
});

/* ===========================
   EFEITO NOS CARDS
=========================== */

document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mousemove",(e)=>{
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(244,180,0,.15),
        #111 55%)`;
    });

    card.addEventListener("mouseleave",()=>{
        card.style.background="#111";
    });
});

/* ===========================
   PARALLAX HERO
=========================== */
p
const hero = document.querySelector(".hero");
window.addEventListener("scroll",()=>{
    hero.style.backgroundPositionY =
    window.scrollY * 0.45 + "px";
});
