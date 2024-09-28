const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {

    
        }

        .container {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: flex-start;
            gap: 2rem;
        }

        .label {
            font-family: poppins;
            font-weight: 700;
            color: dimgray;
            font-size: clamp(1rem,4vw,1.2rem);
            margin-bottom: 1rem;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li a{
            text-decoration: none;
            color: gray;
            font-family: helveticaneue;
            font-weight: 400;
            font-size: 0.9rem;
            line-height: 1.5rem;
        }
    </style>
    
    <section class="container">

        <div>
            <div class="label">SEARCH</div>
            <ul>
                <li><a href="#">Track your Order</a></li>
                <li><a href="#">Shipping Rates</a></li>
                <li><a href="#">Shipping Days</a></li>
                <li><a href="#">Get a Quote</a></li>
            </ul>
        </div>
      
        <div>
            <div class="label">SERVICES</div>
            <ul>
                <li><a href="#">Air Freight</a></li>
                <li><a href="#">Ocean Freight</a></li>
                <li><a href="#">Land Freight</a></li>
                <li><a href="#">Warehousing</a></li>
            </ul>
        </div>
        
        <div>
            <div class="label">ABOUT US</div>
            <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">News and Blogs</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Partners</a></li>
            </ul>
        </div>
        
        <div>
            <div class="label">OTHERS</div>
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Payment Options</a></li>
                <li><a href="#">Terms and Privacy</a></li>
            </ul>
        </div>        
        
    </section>

`;

customElements.define('wc-footer-links', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
});