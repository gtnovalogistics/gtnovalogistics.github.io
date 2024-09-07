const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: flex;
            gap: 2vw;
            align-items: center;
            
            font-family: poppins;
            font-weight: 500;
            color: white;
        }

        img {
            margin-right: 3px;
        }

    </style>
    

    <div>
        <img src="images/mail.png" width="19" height="14" alt="email us">
        info@gtnovalogistics.com
    </div>

    <div>
        <img src="images/phone.png" width="16" height="16" alt="call us">
        +59 26812800
    </div>

`;

class WcContacts extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
}

customElements.define('wc-contacts', WcContacts);