const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
  
            display: flex;
            gap: 10px;
            align-items: center;
    
        }
    </style>
    

    <div><a href="#"><img src="images/facebook.png" width="24" height="24" alt="facebook"></a></div>
    <div><a href="#"><img src="images/twitter.png" width="24" height="24" alt="twitter"></a></div>
    <div><a href="#"><img src="images/linkedin.png" width="24" height="24" alt="linkedin"></a></div>
    <div><a href="#"><img src="images/youtube.png" width="24" height="24" alt="youtube"></a></div>

`;

class WcSocials extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
}

customElements.define('wc-socials', WcSocials);