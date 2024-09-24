const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
  
            display: flex;
            gap: 10px;
            align-items: center;
    
        }
    </style>
    

    <div><a href="under-construction"><img src="images/facebook.webp" width="24" height="24" alt="facebook"></a></div>
    <div><a href="under-construction"><img src="images/twitter.webp" width="24" height="24" alt="twitter"></a></div>
    <div><a href="under-construction"><img src="images/linkedin.webp" width="24" height="24" alt="linkedin"></a></div>
    <div><a href="under-construction"><img src="images/youtube.webp" width="24" height="24" alt="youtube"></a></div>

`;

class WcSocials extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
}

customElements.define('wc-socials', WcSocials);