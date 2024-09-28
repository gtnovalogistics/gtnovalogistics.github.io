import './register.js';
import './links.js';
import './address.js';
import './copyright.js';

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {   
        }

        .container {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            padding: 0 var(--padding-side);
            margin-top: 3rem;
        }

    </style>



    <wc-footer-register class="footer-register"></wc-footer-register>
        

    <section class=container>
        <wc-footer-address class="footer-address"></wc-footer-address>
        <wc-footer-links class="footer-links"></wc-footer-links>
    </section>

    <wc-footer-copyright class="footer-copyright"></wc-footer-copyright>

`;



customElements.define('wc-footer', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
});