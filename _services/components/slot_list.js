const template = document.createElement('template');

const greenCheck = `
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.316895" width="20.3667" height="20.3667" rx="10.1833" fill="#B6DC10"/>
    <path d="M14.8438 7.7842L8.45831 14.1697L5.52246 10.7463L6.54603 9.86774L8.53383 12.1873L13.8904 6.83008L14.8438 7.7842Z" fill="white"/>
    </svg>
`;
const content = (paragraph, label1, description1, label2, description2, label3, description3, label4, description4) =>`
    <style>
        :host {
  
    
        }
        .container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
            padding: 1rem;
        }

        .item {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-template-areas:
                "icon label"
                "... description";

            column-gap: 0.5rem;
            align-items: center;
            justify-content: center;
        }

        .label {
            font-family: helveticaneue;
            font-weight: 700;
            font-size: 1.4rem;
            color: var(--violet);
        }

        .description {
            font-family: helveticaneue;
            font-weight: 400;
            font-size: 0.9rem;
            color: gray;
        }
    </style>

    <section class="container">
        <p>${paragraph}</p>
        <div class="item">
            <div>${greenCheck}</div>
            <div class="label">${label1}</div>
            <div></div>
            <div class="description">${description1}</div>
        </div>
        <div class="item">
            <div>${greenCheck}</div>
            <div class="label">${label2}</div>
            <div></div>
            <div class="description">${description2}</div>
        </div>
        <div class="item">
            <div>${greenCheck}</div>
            <div class="label">${label3}</div>
            <div></div>
            <div class="description">${description3}</div>
        </div>
        <div class="item">
            <div>${greenCheck}</div>
            <div class="label">${label4}</div>
            <div></div>
            <div class="description">${description4}</div>
        </div>
    </section>
`;



customElements.define('wc-slot-list', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        template.innerHTML = content(this.getAttribute('paragraph'),
            this.getAttribute('label1'),
            this.getAttribute('description1'),
            this.getAttribute('label2'),
            this.getAttribute('description2'),
            this.getAttribute('label3'),
            this.getAttribute('description3'),
            this.getAttribute('label4'),
            this.getAttribute('description4'));
        shadow.appendChild(template.content.cloneNode(true));        
    }
});