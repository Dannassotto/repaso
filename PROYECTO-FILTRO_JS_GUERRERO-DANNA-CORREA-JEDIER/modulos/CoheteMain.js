import P1Element from "./modulosHtml/P1Element.js";
import P2Element from "./modulosHtml/P2Element.js";
import P3Element from "./modulosHtml/P3Element.js";

class P0Element extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `  
              
        <p1-element></p1-element>
        <p2-element></p2-element>
        <p3-element></p3-element>
        `;  
    }  
}

customElements.define("p0-element", P0Element)

