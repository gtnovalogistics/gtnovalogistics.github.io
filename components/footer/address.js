const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: grid;
            justify-content: center;
            align-items: center;
            font-family: 'Helvetica Neue', sans-serif;
            font-weight: 400;
            font-size: 0.9rem;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
        }

        .logo {
            flex: 0 0 auto;
        }

        .offices-wrapper {
            display: flex;
            flex-direction: row; /* side by side by default */
            gap: 2rem;
            flex: 1 1 300px; /* shrink on small screens */
        }

        .office {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            min-width: 200px; /* ensures offices have some width */
        }

        .office h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1rem;
            font-weight: 600;
        }

        .contact-info div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        img {
            display: inline-block;
        }

        /* Medium screens: wrap offices under logo if needed */
        @media (max-width: 900px) {
            .container {
                flex-direction: column;
                align-items: center;
            }

            .offices-wrapper {
                flex-direction: row;
                justify-content: center;
                flex-wrap: wrap;
            }

            .office {
                flex: 1 1 45%; /* two side by side if enough space */
            }
        }

        /* Small screens: stack offices vertically */
        @media (max-width: 600px) {
            .offices-wrapper {
                flex-direction: column;
                align-items: center;
                gap: 1.5rem;
            }

            .office {
                flex: unset;
                width: 100%;
            }
        }
    </style>
    
    <section class="container">
        <div class="logo">
            <img src="images/GTNova_logo_no_bg.webp" width="167" height="78" alt="main logo">
        </div>

        <div class="offices-wrapper">
            <div class="office">
                <h3>Georgetown, Guyana</h3>
                <div>GTNova Freight & Logistics Inc.</div>
                <div>125 ‘C’ Barrack Street, Kingston</div>
                <div>Georgetown, Guyana</div>
                <div class="contact-info">
                    <div>
                        <img src="images/icon_black_phone.webp" width="16" height="16" alt="call us">
                        +592 741 NOVA (6682)/ +592 703 2132
                    </div>
                    <div>
                        <img src="images/icon_black_envelope.webp" width="19" height="14" alt="email us">
                        info@gtnovalogistics.com
                    </div>
                </div>
            </div>

            <div class="office">
                <h3>Fort Lauderdale, Florida USA</h3>
                <div>GTNova Freight & Logistics FL LLC</div>
                <div>729 NW 1st Street Bay #2</div>
                <div>Fort Lauderdale, Florida 33311</div>
                <div>United States</div>
                <div class="contact-info">
                    <div>
                        <img src="images/icon_black_envelope.webp" width="19" height="14" alt="email us">
                        flwarehouse@gtnovalogistics.com
                    </div>
                </div>
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