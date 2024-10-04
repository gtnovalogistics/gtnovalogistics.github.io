
const template = document.createElement('template');

//template.innerHTML = `
const content = (info, motto, title, content, image, alt) => `
    <style>
        :host {
  
    
        }

        .duplex {
            display: flex;
            flex-direction: row;
            gap: 4vw;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }

        .duplex > img {
            width: 30vw;
            min-width: 368px;
            height: auto;       
        }

        @media screen and (width < 1184px) {
            .duplex > img {
                display: none;     
            }
        }

        h2 {
            color: var(--violet);
            font-weight: 700;
            font-size: 1.8rem;
            margin: 0 0 25px 0;
        }

        .description {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 35vw;
            font-family: helveticaneue;

            p:first-child {
                font-weight: 600;
                font-size: 1.2rem;
                color: var(--green);
                font-style: italic;
                line-height: 1.2rem;
                margin: 0;
            }

        }

        slot[name="content"] {
            font-family: helveticaneue;
            font-weight: 400;
            color: gray;
            font-size: 1rem;
            line-height: 1.4rem;
            margin: 0;
        }

        @media screen and (width < 1184px) {
            .description {
                width: 80vw;
            }
        }   

    </style>
    
    <section class="duplex">

        ${info === 'right' ? `<img src="${image}" width="537" height="358" alt="${alt}" id="image">` : ''}

        <div class="description">
            <p id="motto">${motto}</p>
            <h2 id="title">${title}</h2>
            <slot name="content">${content}</slot>
        </div>

        ${info === 'left' ? `<img src="${image}" width="537" height="358" alt="${alt}" id="image">` : ''}
        
    </section>
`;


customElements.define('wc-duplex', class extends HTMLElement {
    static observedAttributes = ['motto', 'title', 'content', 'image', 'alt','info'];

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        console.log(this.getAttribute('image'));
        template.innerHTML = content(this.getAttribute('info')
            ,this.getAttribute('motto')
            ,this.getAttribute('title')
            ,this.getAttribute('content')
            ,this.getAttribute('image')
            ,this.getAttribute('alt'));
        shadow.appendChild(template.content.cloneNode(true));        
    }
       
});