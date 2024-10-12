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
        
        .loader {
        width: 40px;
        aspect-ratio: 1;
        border: 15px solid #ddd;
        border-radius: 50%;
        position: relative;
        transform: rotate(45deg);
        }
        .loader::before {
        content: "";
        position: absolute;
        inset: -15px;
        border-radius: 50%;
        border: 15px solid #514b82;
        animation: l18 2s infinite linear;
        }
        @keyframes l18 {
            0%   {clip-path:polygon(50% 50%,0 0,0    0,0    0   ,0    0   ,0    0   )}
            25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0   ,100% 0   ,100% 0   )}
            50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
            75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0    100%,0    100%)}
            100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0    100%,0    0   )}
        }  
            
        dialog {
            background-color: transparent;
            border: none;
        }
    </style>

    <dialog>
        <div class="loader"></div>
    </dialog>

`;



customElements.define('wc-loading', class  extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
});

let wc = null;
const showLoading = () => {
    wc = document.createElement('wc-loading');
    document.body.appendChild(wc);
    wc.shadowRoot.querySelector('dialog').showModal();
}

const hideLoading = () => {
    if(wc){
        const dlg = wc.shadowRoot.querySelector('dialog');
        dlg.close();
        dlg.getRootNode().host.remove();
    }
}

export {showLoading, hideLoading};