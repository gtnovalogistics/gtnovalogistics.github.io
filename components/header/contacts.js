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

        @media screen and (width < 540px) {
            .email {
                display: none;
            }
        }

    </style>
    

    <div class="email">
        <img src="images/mail.webp" width="19" height="14" alt="email us">
        info@gtnovalogistics.com
    </div>

    <div>
        <img src="images/phone.webp" width="16" height="16" alt="call us">
        +592 227 6975
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