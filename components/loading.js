const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow-y: auto;

            background-color: rgba(0, 0, 0, 0.5);
            z-index: 5;

            display: grid;
            align-items: center;
            justify-content: center;   
    
        }            
        
        .loading {
            width: fit-content;
            font-weight: bold;
            font-family: monospace;
            font-size: 30px;
            overflow: hidden;
        }
        .loading::before {
            content: "Loading...";
            color: #0000;
            text-shadow: 0 0 0 #000,10ch 0 0 #fff,20ch 0 0 #000;
            background: linear-gradient(90deg,#0000 calc(100%/3),#000 0 calc(2*100%/3),#0000 0) left/300% 100%;
            animation: l23 2s infinite;
        }

        @keyframes l23{
            50% {background-position: center;text-shadow: -10ch 0 0 #000,    0 0 0 #fff,10ch 0 0 #000}
            100%{background-position: right ;text-shadow: -20ch 0 0 #000,-10ch 0 0 #fff,   0 0 0 #000}
        }        
    </style>

    <div class="loading"></div>

`;



customElements.define('wc-loading', class  extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
});