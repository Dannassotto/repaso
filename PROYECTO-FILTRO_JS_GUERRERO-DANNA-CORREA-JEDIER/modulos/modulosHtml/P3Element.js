class P3Element extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `
            <ul>
                <li id="rocket">
                    <footer class="footer">
                        <ul>
                            <li id="svg1">
                                <a class="select" href="cohete.html">
                                    <img class="rocket" src="./img/Rockets.svg" alt="">
                                    <span id="texto1">rocket</span>  
                                </a>
                            </li>
                            <li id="svg1">
                                 <a  href="capsules.html">
                                    <img class="capsule" src="./img/capsule.svg">
                                    <span id="texto1">capsule</span>
                                </a>
                            </li>
                            <li id="svg1">
                                <a href="./prentacion.html">
                                    <img class="house" src="./img/house.png" >
                                    <span id="texto1">house</span>
                                </a>
                            </li>
                            <li id="svg1">
                                <a href="./history.html">
                                    <img class="history" src="./img/hystori.svg">
                                    <span id="texto1">history</span>
                                </a>
                            </li>
                            <li id="svg1">
                                <a href="./company.html">
                                    <img class="company" src="./img/Icon.svg">
                                    <span id="texto1">company</span>
                                </a>
                            </li>

        `
    }      
   
}

customElements.define("p3-element", P3Element)


export default P3Element    