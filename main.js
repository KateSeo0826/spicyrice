/* Side bar Menu */
const links = document.querySelectorAll(".navbar > nav > ul > li");
const cards = document.querySelectorAll(".card");

[...links].map((link, index) => {
    link.addEventListener("click", () => onLinkClick(link, index), false)
});

const onLinkClick = (link, currentIndex) => {
    const selectedItem = link.getAttribute("name");
    cards.forEach((card) => {
        card.classList.remove("active")
    })

    const currentCard = [...cards].find((card) =>
        Object.keys(card.dataset).includes(selectedItem)
    );
    currentCard.classList.add("active");
    highLightSelectedLink(currentIndex)
}
const highLightSelectedLink = (currentIndex) => {
    links.forEach((link) => {
        link.classList.remove("selectedLink");
    });
    links[currentIndex].classList.add("selectedLink")
}

/* Toggle Button*/
const navbarMenu = document.querySelector('.header-menu')
const toggleBtn = document.querySelector('.navbar-toggleBtn')

toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open')
})
//Navbar menu click 
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open')
})

mapboxgl.accessToken = "pk.eyJ1Ijoia2F0ZXNlbyIsImEiOiJjbGJjaWM5dWIwZHNnM29vYXBlYXNnazF4In0.gT9SPSHXfpa_OMc27kTpJg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation() {
    setupMap([43.67268517315043, -79.38907975508727])
}
function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map", // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: center, // starting position [lng, lat]
        zoom: 15, // starting zoom
    });
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

}


