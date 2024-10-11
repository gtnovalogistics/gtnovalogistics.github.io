const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
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
            background-color: var(--violet);
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

        .no-display {
            display: none;
        }
    </style>
    
    <section>
        <div class="close"><a href="#">X</div>
        <div><a href="air_freight">Air Freight</a></div>
        <div><a href="ocean_freight">Ocean Freight</a></div>
        <div><a href="land_freight">Land Freight</a></div>
        <div><a href="warehousing">Warehousing</a></div>
        <div><a href="procurement_services">Procurement Services</a></div>          
    </section>

`;


customElements.define('wc-popup-services', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));  
    }

    handleEvent() {
        this.close();
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.close').addEventListener('click', this);

    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('.close').removeEventListener('click', this);
    }

    close() {
        this.parentElement.removeChild(this);
    }    
});