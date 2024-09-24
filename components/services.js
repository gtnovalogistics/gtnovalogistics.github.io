const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
        }

        .container {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;

            font-family: poppins;
            background-color: #F5F9FB;

            padding: 5rem var(--padding-side);
            gap: 3rem;
        }

        .card {
            width: 20rem;
        } 

        header {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .label {
            display: flex;
            flex-direction: column;
            
            font-weight: 600;
            font-size: clamp(1.5rem, calc(1.2rem + 2vw), 2rem);
            line-height: clamp(1.5rem, calc(1.2rem + 2vw), 2rem);
        }

        .description {
            font-family: poppins-light;
            font-weight: 400;
            margin-top: 2rem;
            font-size: 1rem;
        }
    </style>
    
    <section class="container">
        <div class="card">
            <header>
                <img src="images/airplane.webp" alt="air freight" width="43" height="44">
                <div class="label">
                    <div>Air Freight</div>
                    <div>Transportation</div>
                </div>
            </header>
            <div class="description">
                Experience fast, reliable air freight with us. We ensure timely delivery, secure handling, and unbeatable efficiency.
            </div>
        </div>

        <div class="card">
            <header>
                <img src="images/ship.webp" alt="air freight" width="43" height="44">
                <div class="label">
                    <div>Ocean Freight</div>
                    <div>Transportation</div>
                </div>
            </header>
            <div class="description">
                Reliable ocean freight services: secure, timely shipping with expert handling for all your cargo needs.
            </div>
        </div>
        
        <div class="card">
            <header>
                <img src="images/truck.webp" alt="air freight" width="43" height="44">
                <div class="label">
                    <div>Land Freight</div>
                    <div>Transportation</div>
                </div>
            </header>
            <div class="description">
                Experience top-tier land freight with us: best-in-class service, secure handling, and timely, reliable delivery.
            </div>
        </div>
        
        <div class="card">
            <header>
                <img src="images/warehouse.webp" alt="air freight" width="43" height="44">
                <div class="label">
                    <div>Warehousing</div>
                    <div>Services</div>
                </div>
            </header>
            <div class="description">
                Optimize your storage with our premier warehousing: secure, efficient, and expertly managed for all needs.
            </div>
        </div>        

    </section>

`;

class WcServices extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
}

customElements.define('wc-services', WcServices);