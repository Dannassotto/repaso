let capsules = [];
let currentIndex = 0;

async function fetchCapsules() {
    const response = await fetch('https://api.spacexdata.com/v4/capsules');
    capsules = await response.json();
    Capsule(currentIndex);
    
};

function Capsule(index) {
    const capsule = capsules[index];
    const container = document.getElementById('capsules-container');
    const nombrecapsule = document.getElementById('capsula-nombre');
    
    
    nombrecapsule.textContent = ` ${capsule.serial}`;


    container.innerHTML = `
    <div class="capsule-card">
       
       <center> <p><strong>Tipo</strong:> ${capsule.type}</p>
        <p><strong>Id</strong:> ${capsule.id}</p>
        <p><strong>actualización:</strong> ${capsule.last_update || 'N/A'}</p>
        <p><strong>Estado:</strong> ${capsule.status}</p>
        <p><strong>aterrizaje:</strong> ${capsule.land_landings}</p>
        <p><strong>aterrizaje en el agua</strong> ${capsule.water_landings}</p>
    </div>  </center>`;
}

document.getElementById('left').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : capsules.length - 1;
    Capsule(currentIndex);
});

document.getElementById('right').addEventListener('click', () => {
    currentIndex = (currentIndex < capsules.length - 1) ? currentIndex + 1 : 0;
    Capsule(currentIndex);
});



fetchCapsules()
