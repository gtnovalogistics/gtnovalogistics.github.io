import {evtHamburgerMenu} from "../events/popup-menu.js";

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            background-color: var(--violet);

            text-decoration: none;
            font-family: helveticaneue;
            font-weight: 700;
            position: sticky;
        }

        section {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-end;
            padding: 2rem;
        }       

        a {
            text-decoration: none;
            color: white;
            font-size: 1.5rem
        }
        
        .close a {
            font-size: 1.5rem;
            color: var(--green);
        }
    </style>
    
    <section>
        <div class="close"><a href="#">X</div>
        <div><a href="#">Search</a></div>
        <div><a href="#">Services</a></div>
        <div><a href="#">About Us</a></div>
        <div><a href="#">Others</a></div>
        <div><a href="#">Contact Us</a></div>          
    </section>

`;

class WcPopupMenu extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));  
    }

    handleEvent() {
        document.dispatchEvent(evtHamburgerMenu.event);
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.close').addEventListener('click', this);

    }
}

customElements.define('wc-popup-menu', WcPopupMenu);