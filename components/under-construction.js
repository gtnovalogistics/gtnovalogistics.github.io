const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: grid;
            align-items: center;
            justify-content: center;
        }

        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1rem;
            padding: 2rem;
        }

        img {
            width: 85%;
            max-width: 380px;
        }

        h1 {
            font-family: poppins;
            font-weight: 700;
            font-size: clamp(1.5rem, 4vw, 3rem);
            color: var(--violet);
        }

        p {
            font-family: helveticaneue;
            color: #333333;

        }

        a {
            font-family: helveticaneue;
            color: white;
            padding: 15px 25px;
            background-color: var(--violet);
            border-radius: 5px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.2rem;
        }
    </style>
    
    <section>
        <img src="images/under_construction.webp" alt="under construction">
        <h1>Under Construction</h1>
        <p>
            We are currently under construction as we work on bringing world class customer experiences to Guyana.
        </p>
        <a href="index" alt="Home">BACK TO HOME</a>
    </section>

`;

class WcSocials extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
}

customElements.define('wc-under-construction', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
});