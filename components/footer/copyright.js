

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {   
            font-family: helveticaneue;
            font-weight: 400;
            font-size: 0.8rem; 
        }

        .container {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            margin: 1rem var(--padding-side);
            border-top: 1px solid lightgray;
            padding-top: 1rem;
        }
    </style>

    <section class="container">

        <p> © 2024. GTNova Freight and Logistics Inc. All rights reserved.</p>
        <div>
            <img src="images/icon_dark_facebook.webp" width="24" height="24" alt="facebook">
            <img src="images/icon_dark_twitter.webp" width="24" height="24" alt="twitter">
            <img src="images/icon_dark_linkedIn.webp" width="24" height="24" alt="linkedin">
            <img src="images/icon_dark_youtube.webp" width="24" height="24" alt="youtube"> 
        </div>
    </section>
`;



customElements.define('wc-footer-copyright', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
});