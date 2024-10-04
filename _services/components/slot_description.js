

const template = document.createElement('template');
const content = (paragraph1, paragraph2, ctaLink, ctaBtnLabel) => `
    <style>
        @import '../../global.css';
    </style>
    <style>
        :host {
        }

        .container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            padding: 1rem;
        }
    </style>

    <section class="container">
        <p>${paragraph1}</p>
        <p>${paragraph2}</p>
        <a class="cta-button" href="${ctaLink}">${ctaBtnLabel}</a>   
    </section>

`;

customElements.define('wc-slot-description', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        template.innerHTML = content(this.getAttribute('paragraph1'),
            this.getAttribute('paragraph2'),
            this.getAttribute('ctaLink'),
            this.getAttribute('ctaBtnLabel'));
        shadow.appendChild(template.content.cloneNode(true));        
    }
});