let currentIndex = 0;
let autoSlide;

async function fetchSpaceXData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/company');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('info').innerText = 'Error loading information.';
    }
}
function selectImage() {
    const selector = document.getElementById('imageSelector');
    currentIndex = parseInt(selector.value);
    showCurrentImage();
}


function displayData(data) {
    const galleryDiv = document.getElementById('gallery');
    const slidesDiv = document.createElement('div');
    slidesDiv.className = 'slides';
    galleryDiv.appendChild(slidesDiv);
    function showImage(index) {
    clearInterval(autoSlide); 
    currentIndex = index;
    showCurrentImage();
}
    const images = [
        {   
            src: "img/descarga.jpeg",
            info: `
                ${data.summary}
                <br>
                <br>
                Dirección: ${data.headquarters.address}
                <br>
                Fundador: ${data.founder} 
                <br>
                Ciudad: ${data.headquarters.city}
                <br>
                Estado: ${data.headquarters.state}
                <br>
                Año de fundación:${data.founded}
                <br>
                CEO:${data.ceo}
                <br>
                Empleados: ${data.employees}
                <br>
                COO: ${data.coo}
            `
        },
        {
            src: "img/elon-musk-spacex-GettyImages-1229892654.webp",
            info: `                
                ${data.summary}
                <br>
                <br>
                Dirección: ${data.headquarters.address}
                <br>
                Fundador: ${data.founder} 
                <br>
                Ciudad: ${data.headquarters.city}
                <br>
                Estado: ${data.headquarters.state}
                <br>
                Año de fundación:${data.founded}
                <br>
                CEO:${data.ceo}
                <br>
                Empleados: ${data.employees}
                <br>
                COO: ${data.coo}
            `
        },
        {
            src: "img/spacex3.jpg",
            info: `                
                ${data.summary}
                <br>
                <br>
                Dirección: ${data.headquarters.address}
                <br>
                Fundador: ${data.founder} 
                <br>
                Ciudad: ${data.headquarters.city}
                <br>
                Estado: ${data.headquarters.state}
                <br>
                Año de fundación:${data.founded}
                <br>
                CEO:${data.ceo}
                <br>
                Empleados: ${data.employees}
                <br>
                COO: ${data.coo}`
        },
        {
            src: "img/Gwynne-Dragon-Shot-1.jpg",
            info: `
                ${data.summary}
                <br>
                <br>
                Dirección: ${data.headquarters.address}
                <br>
                Fundador: ${data.founder} 
                <br>
                Ciudad: ${data.headquarters.city}
                <br>
                Estado: ${data.headquarters.state}
                <br>
                Año de fundación:${data.founded}
                <br>
                CEO:${data.ceo}
                <br>
                Empleados: ${data.employees}
                <br>
                COO: ${data.coo}`
        }
    ];

    images.forEach(image => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'image-container';

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = "SpaceX Image";

        const infoText = document.createElement('div');
        infoText.className = 'image-info';
        infoText.innerHTML = image.info;

        imgContainer.appendChild(imgElement);
        imgContainer.appendChild(infoText);
        slidesDiv.appendChild(imgContainer);
    });

    showCurrentImage();

    autoSlide = setInterval(nextImage, 5000);

    const linksDiv = document.createElement('div');
    linksDiv.className = 'links row';
    linksDiv.innerHTML = `
    <div class="caja1">
        <div class="card"><a href="${data.links.website}" target="_blank">Sitio web</a></div>
        <br>
        <div class="card"><a href="${data.links.flickr}" target="_blank"> Flickr</a></div>
        <br>
        <div class="card"><a href="${data.links.twitter}" target="_blank">Twitter SpaceX</a></div>
        <br>
        <div class="card"><a href="${data.links.elon_twitter}" target="_blank">Twitter Elon Musk</a></div>
    </div>
        `;
    galleryDiv.appendChild(linksDiv);
}

function showCurrentImage() {
    const slides = document.querySelectorAll('.image-container');
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
    });
}
/* colocar la t */
function nextImage() {
    const slides = document.querySelectorAll('.image-container');
    currentIndex = (currentIndex + 1) % slides.length;
    showCurrentImage();
}

fetchSpaceXData();
