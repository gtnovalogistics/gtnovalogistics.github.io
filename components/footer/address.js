const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
  
            display: gird;
            justify-content: center;
            align-items: center;
            font-family: helveticaneue;
            font-weight: 400;
            font-size: 0.9rem;
    
        }

        .container {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }
    </style>
    
    <section class="container">
        <img src="images/GTNova_logo_no_bg.webp" width="167" height="78" alt="main logo">
        <div class="address">

            <div>
                <img src="images/icon_black_phone.webp" width="16" height="16" alt="call us">
                592 741 NOVA (6682)/ +592 703. 2132
            </div>

            <div>
                <img src="images/icon_black_envelope.webp" width="19" height="14" alt="email us">
                info@gtnovalogistics.com
            </div>

            <div>
                <img src="images/icon_map_pin.webp" width="19" height="14" alt="email us">
                125 ‘C’ Barrack Street, Kingston, Georgetown, Guyana
            </div>
        </div>
    </section>
`;



customElements.define('wc-footer-address', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
});