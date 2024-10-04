const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            position: absolute;
            top: 0;
            left: 0;   
            margin-top: 1rem; 
        }

        ul {
            list-style-type: none;
            padding: 0;
            background-color: white;
            width: 14rem;
            border: 1px solid lightgray;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        }

        li {
            padding: 0.5rem;
            border-bottom: 1px solid lightgray;
        }
        
        a {
            text-decoration: none;
            font-family: poppins;
            font-weight: 500;
            font-size: 0.9rem;
            color: var(--violet);
        }
    </style>

    <ul>
        <li><a href="air_freight">Air Freight</a></li>
        <li><a href="ocean_freight">Ocean Freight</a></li>
        <li><a href="land_freight">Land Freight</a></li>
        <li><a href="warehousing">Warehousing</a></li>
        <li><a href="procurement_services">Procurement Services</a></li>
    </ul>

`;



customElements.define('wc-menu-services', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
});