let cambio = document.getElementById("cambio");

function cargarDatos() {
    let url = "https://api.spacexdata.com/v4/rockets/";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach((rocket, index) => {
                let option = document.createElement("option");
                option.value = index; 
                option.textContent = rocket.name; 
                cambio.appendChild(option);
            });

            let firstRocket = data[0]; 
            actualizarCaja(firstRocket); 
        })
        .catch(error => console.error("Error fetching data:", error));
}
function actualizarCaja(firstRocket) {
    const Caja = document.querySelector(".jj");

    Caja.innerHTML = `
        <p class="p1"><strong></strong> ${firstRocket.name}</p>
        <div class="izquierda">
            <p class="p3"><strong>active: </strong> ${firstRocket.active}</p>
            <p class="p3"><strong>cost per launch: </strong> ${firstRocket.cost_per_launch}</p>
            <p class="p3"><strong>country: </strong> ${firstRocket.country}</p>
            <p class="p3"><strong>company: </strong> ${firstRocket.company}</p>
            <p class="p3"><strong>Description: </strong> ${firstRocket.description}</p>
            <p class="p3"><strong>First Flight: </strong> ${firstRocket.first_flight}</p>
        </div>

        <div class="centroSuperiorIzquierdo">
            <div class="item__progress__bar" style="background: radial-gradient(closest-side, #1d1f38 , transparent), conic-gradient(var(--color--three) ${firstRocket.height.meters}%, transparent 0);">
                <div class="progress__value">
                    <strong>thrust sea level</strong>
                    <small>${firstRocket.first_stage.thrust_sea_level.kN} kN <br> ${firstRocket.first_stage.thrust_sea_level.lbf} Lbf</small>
                </div>
            </div>
        </div>

        <div class="centroSuperiorDerecho">
            <div class="item__progress__bar" style="background: radial-gradient(closest-side, #1d1f38 , transparent), conic-gradient(var(--color--three) ${firstRocket.height.feet}%, transparent 0);">
                <div class="progress__value">
                    <strong>thrust vacuum</strong>
                    <small>${firstRocket.first_stage.thrust_vacuum.kN} kN <br> ${firstRocket.first_stage.thrust_vacuum.lbf} Lbf</small>
                </div>
            </div>
        </div>

        <center>
            <div class="centro">
                <p><strong></strong><img class="p5" src="${firstRocket.flickr_images[0]}" alt=""></p>
                <p><strong></strong><img class="p5" src="${firstRocket.flickr_images[1]}" alt=""></p>
            </div>
        </center>

        <div class="derecha">
            <p><strong>Engines:</strong></p>
            <p class="p3"><strong>Type: </strong> ${firstRocket.engines.type}</p>
            <p class="p3"><strong>Version: </strong> ${firstRocket.engines.version}</p>
            <p class="p3"><strong>Number: </strong> ${firstRocket.engines.number}</p>
            <p><strong>Thrust (sea level):</strong></p>
            <p class="p3"><strong>kN: </strong> ${firstRocket.engines.thrust_sea_level.kN}</p>
            <p class="p3"><strong>lbf: </strong> ${firstRocket.engines.thrust_sea_level.lbf}</p>
            <p><strong>ISP:</strong></p>
            <p class="p3"><strong>Sea Level: </strong> ${firstRocket.engines.isp.sea_level}</p>
            <p class="p3"><strong>Vacuum: </strong> ${firstRocket.engines.isp.vacuum}</p>
            <p><strong>Propellants:</strong></p>
            <p class="p3"><strong>Propellant 1: </strong> ${firstRocket.engines.propellant_1}</p>
            <p class="p3"><strong>Propellant 2: </strong> ${firstRocket.engines.propellant_2}</p>
            <p class="p3"><strong>Thrust-to-Weight Ratio: </strong> ${firstRocket.engines.thrust_to_weight}</p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", cargarDatos);

cambio.addEventListener("change", () => {
    let selectedIndex = cambio.value; 
    fetch("https://api.spacexdata.com/v4/rockets/") 
        .then(response => response.json())
        .then(data => {
            let selectedRocket = data[selectedIndex]; 
            actualizarCaja(selectedRocket); 
        })
        .catch(error => console.error("Error fetching data:", error));
});

class P2Element extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="jj">

            </div>
        `;
    }
}

customElements.define("p2-element", P2Element);

export default P2Element;
