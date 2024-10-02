async function fetchHistory() {
    try {
        const response = await fetch("https://api.spacexdata.com/v4/history");
        const history = await response.json();
        const historyContainer = document.getElementById("history-container");

        let openInfoElement = null;

        history.forEach(event => {
            const titleContainer = document.createElement("div");
            titleContainer.className = "title-container";

            const titleElement = document.createElement("div");
            titleElement.className = "title";
            titleElement.textContent = event.title;

            const arrowElement = document.createElement("img");
            arrowElement.src = "img/png-transparent-arrow-computer-icons-logo-white-down-arrow-miscellaneous-angle-rectangle-thumbnail-removebg-preview.png";
            arrowElement.className = "arrow";

            titleContainer.appendChild(titleElement);
            titleContainer.appendChild(arrowElement);

            const infoElement = document.createElement("div");
            infoElement.className = "info";
            infoElement.style.display = "none";

            const eventDate = new Date(event.event_date_utc);
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
                timeZone: 'America/New_York'
            };
            const formattedDate = eventDate.toLocaleString('es-ES', options);

            infoElement.innerHTML = `
            <div class="scrop">
                <p><strong>${event.details}</strong></p>
                <p>Fecha: ${formattedDate}</p>
                <iframe id="otraPagina" src="${event.links.article}" frameborder="0"></iframe>
            </div>
                `;

            titleContainer.addEventListener("click", () => {
                if (openInfoElement && openInfoElement !== infoElement) {
                    openInfoElement.style.display = "none";
                    openInfoElement.previousElementSibling.querySelector(".arrow").classList.remove("rotate");
                }
                infoElement.style.display = infoElement.style.display === "none" ? "block" : "none";
                arrowElement.classList.toggle("rotate", infoElement.style.display === "block");
                openInfoElement = infoElement.style.display === "block" ? infoElement : null;
            });

            historyContainer.appendChild(titleContainer);
            historyContainer.appendChild(infoElement);
        });
    } catch (error) {
        console.error("Error fetching history:", error);
    }
}

fetchHistory();
