import "./contacts.js";
import "./socials.js";

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {

            .container {
                display: flex;
                align-items: center;
                justify-content: space-between;

                padding: 0 var(--padding-side);
                height: 2.6rem;
                background-color: var(--violet);
            } 
        }

    </style>
    
    <div class="container">
        <wc-socials></wc-socials>
        <wc-contacts></wc-contacts>
    </div>
`;

class WcSocialsContacts extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
}

customElements.define('wc-socials-contacts', WcSocialsContacts);