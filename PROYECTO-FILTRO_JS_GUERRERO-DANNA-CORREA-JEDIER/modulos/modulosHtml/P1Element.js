class P1Element extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `
        <center>
        </center>
        `
    }      
}

customElements.define("p1-element", P1Element)

export default P1Element