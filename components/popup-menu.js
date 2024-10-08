import './popup-services.js';

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
        <div id="btnClose" class="close"><a href="#">X</div>
        <div><a href="under-construction">Search</a></div>
        <div><a href="#" id="btnServices">Services</a></div>
        <div><a href="aboutus">About Us</a></div>
        <div><a href="under-construction">Others</a></div>
        <div><a href="under-construction">Contact Us</a></div>          
    </section>

`;

class WcPopupMenu extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));  
    }

    handleEvent(evt) {
        this.close();

        if(evt.target.id === 'btnServices'){
            const popUpServices = document.createElement('wc-popup-services');
            this.getRootNode().host.parentElement.appendChild(popUpServices);
        }

    }

    connectedCallback() {
        this.shadowRoot.getElementById('btnClose').addEventListener('click', this);
        this.shadowRoot.getElementById('btnServices').addEventListener('click', this);

    }

    open() {
        if(this.classList.contains('no-display')) {
            this.classList.remove('no-display');
        }   
    }

    close() {
        if(!this.classList.contains('no-display')) {
            this.classList.add('no-display');
        }
    }
}

customElements.define('wc-popup-menu', WcPopupMenu);