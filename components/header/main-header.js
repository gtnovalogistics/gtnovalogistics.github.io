import {evtOpenSignUp} from "../../events/sign-up.js";
import '../popup-menu.js';
import "./menu-popups/services.js";

const template = document.createElement('template');
template.innerHTML = `
    <style>

        :host {
            position: relative;
        }

        .container {
            container-type: inline-size;

            display: flex;
            align-items: center;
            justify-content: space-between;
    
            padding: 0 var(--padding-side);
            height: 6rem;                
        }

        menu {
            display: flex;
            gap: 2rem;
            font-family: poppins;
            font-weight: 600;
            font-size: 1rem;
            list-style-type: none;
            color: var(--violet);

            li {
                position: relative;
            }

            a {
                text-decoration: none;
            }

            span {
                font-size: 0.6rem;
                display: inline-block;
                transform: rotate(90deg);
                vertical-align: middle;
                margin-left: 3px;
            }
        }

        @container (width < 1060px) {
            menu {
                display: none;
            }
        }

        .login-signup {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-left: 4px;
            

            a {
                font-family: helveticaneue;
                font-size: clamp(0.8rem,4vw,1rem);
                font-weight: 700;
                text-decoration: none;  
                
                border-radius: 5px;
                border: 1px solid var(--violet);
                padding: 0.7rem 1.1rem 0.4rem 1.1rem;
            }
                
        }

        .primary {
            color: white;
            background-color: var(--violet);
        }  

        .secondary {
            color: var(--violet);
            background-color: white;  
        }

        @media screen and (width < 506px) {
            .secondary {
                display: none;
            }
        }

        .hamburger-button {
            transform: scale(2, 1.5);
            font-family: helveticaneue;
            font-weight: 700;
            color: var(--violet);
            margin-left: clamp(0.1rem, 2vw, 2rem);
            cursor: pointer;
        }
        
        @container (width >= 1060px)
        {
            .hamburger-button {
                display: none;
            }
        }

        .active-menu {
            border-bottom: 5px solid var(--green);
        }

        .no-display {
            display: none;
        }

    </style>

    <section class="container">
        <a href="index"><img src="images/GTNova_logo_no_bg.webp" width="167" height="78" alt="main logo"></a>
        <menu>
            <li><a href="under-construction">Search <span>&#x276F;</span></a></li>
            <li>
                <a id="btnServices">Services <span>&#x276F;</span></a>
                <wc-menu-services id="menuServices" class="no-display"></wc-menu-services>
            </li>
            <li><a href="aboutus">About Us <span>&#x276F;</span></a></li>
            <li><a href="under-construction">Others <span>&#x276F;</span></a></li>
            <li><a href="under-construction">Contact Us</a></li>
        </menu>
        <div class="login-signup">
            <a href="under-construction" class="primary">LOGIN</a>
            <a href="#" class="secondary" id="btnSignup">SIGN UP</a>
            <div class="hamburger-button" id="btnHamburger">&#x2630;</div>
        </div>
    </section>

    <wc-popup-menu id="popupMenu" class="no-display"></wc-popup-menu>

`;

class WcMainHeader extends HTMLElement {

    // private properties
    /////////////////////
    #elements;

    // private methods
    //////////////////

    #getElementsWithId = () => {
        const els = this.shadowRoot.querySelectorAll('*');
        let elementsWithId = new Map();
        els.forEach(el => {
            if(el.hasAttribute('id')){
                elementsWithId.set(el.id, el);
            }
        })

        return elementsWithId;
    };    
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));      
        this.#elements = this.#getElementsWithId();  
    }

    hideMenuServices = () => {
        const menuServices = this.#elements.get('menuServices');
        const btnServices = this.#elements.get('btnServices');
        menuServices.classList.add('no-display');
        btnServices.classList.remove('active-menu');
    }

    showMenuServices = () => {
        const menuServices = this.#elements.get('menuServices');
        const btnServices = this.#elements.get('btnServices');
        menuServices.classList.remove('no-display');
        btnServices.classList.add('active-menu');
    }

    handleDocumentClick = (evt) => {
        const menuServices = this.#elements.get('menuServices');
        const btnServices = this.#elements.get('btnServices');
        if(!menuServices.contains(evt.target) && !btnServices.contains(evt.target)){
            this.hideMenuServices();
            window.removeEventListener('click', this.handleDocumentClick);
        }       
    }

    handleBtnServices = (evt) => {
        const menuServices = this.#elements.get('menuServices');
        const btnServices = this.#elements.get('btnServices');
        if(menuServices.classList.contains('no-display')){
            this.showMenuServices();

            evt.stopPropagation();
            window.addEventListener('click', this.handleDocumentClick);
            menuServices.addEventListener('click', this.hideMenuServices);
        }else{
            this.hideMenuServices();
            window.removeEventListener('click', this.handleDocumentClick);
            menuServices.removeEventListener('click', this.hideMenuServices);
        }
    }

    handleEvent(evt) {
        switch(evt.target.id){
            case 'btnHamburger': {
                this.#elements.get('popupMenu').open(); 
                break;
            }
            case 'btnSignup': document.dispatchEvent(evtOpenSignUp.event); break;
            case 'btnServices': this.handleBtnServices(evt); break;
        }
    }

    connectedCallback() {

        this.#elements.get('btnHamburger')
            .addEventListener('click', this);

        this.#elements.get('btnSignup')
            .addEventListener('click', this);    

        this.#elements.get('btnServices')
            .addEventListener('click', this);

    }
}

customElements.define('wc-main-header', WcMainHeader);