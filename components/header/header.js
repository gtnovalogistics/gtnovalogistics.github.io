import "./socials-contacts.js";
import "./main-header.js";

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
  
    
        }



    </style>
    
    <section>
        <wc-socials-contacts class="socials-contacts"></wc-socials-contacts>
        <wc-main-header class="main-header"></wc-main-header>
    </section>
`;



customElements.define('wc-header', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
});