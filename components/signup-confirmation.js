import {evtCloseSignUpConfirmation} from "../events/sign-up-confirmation.js";

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

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            width: clamp(256px,40vw,890px);
            border-radius: 15px;
            background-color: white;
            color: #333333;
        }

        img {
            display: block;
        }

        .green-check {
            width: clamp(2rem,4vw,4rem);
            height: auto;
        }

        .m3 {
            margin-top: 3rem;
        }

        #btnClose {
            cursor: pointer;   
            align-self: flex-end;
        }

        .poppins-bold {
            font-family: poppins;
            font-weight: 700;
            color: var(--violet);        
        }

        .helveticaneue-normal {
            font-family: helveticaneue;
            font-weight: 400;
        }

        .helveticaneue-bold {
            font-family: helveticaneue;
            font-weight: 700;
        }        

        .fs3{
            font-size: clamp(1.5rem, 4vw, 3rem);
            text-align: center;
        }

        .fs15 {
            font-size: clamp(1rem, 4vw, 1.5rem);
            text-align: center;
        }

        .details-table {
            font-family: helveticaneue;
            font-size: clamp(1rem,2vw,1.5rem);
            background-color: #F5F9FB;
            padding: 2rem;

            div {
                display: flex;
                gap: 0 1rem;
                flex-wrap: wrap;
                margin-top: 0.5rem;

                div:first-child {
                    font-weight: 700;
                    }

                div:last-child {
                    font-weight: 400;
                } 
            }

               
        }

        button {
            border-radius: 5px;
            background-color: var(--green);
            color: var(--violet);
            font-family: helveticaneue;
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 1.5rem;
            border: none;
            cursor: pointer;
            height: 4rem;
            width: 12rem;
            padding-top: 0.5rem;
        }

    </style>
    
    <section class="container">
        <img src="images/close.webp" alt="close" width="24" height="24" id="btnClose">
        <img src="images/green_check.webp" alt="green check" width="64" height="64" class="green-check">
        <div class="poppins-bold fs3">Success!</div>
        <div class="poppins-bold fs15">Welcome to GTNova Freight and Logistics.</div>
        <div class="helveticaneue-normal fs15 m3">Here are your details:</div>
        
        <div class="helveticaneue-normal fs15 m3">Mailbox Number</div>
        <div class="poppins-bold fs3" id="account"></div>
        

        <div class="details-table">
            <div>
                <div>First Name</div>
                <div id="firstname"></div>
            </div>

            <div>
                <div>Last Name</div>
                <div id="lastname"></div>
            </div>
            <div>
                <div>Email Address</div>
                <div id="email"></div>
            </div>

            <div>
                <div>Mobile Number</div>
                <div id="mobile"></div>
            </div>
        </div>

        <div class="helveticaneue-normal fs15 m3">
            Please also check your email for more information about your account.
        </div>

        <button id="btnOkay" class="m3">OKAY</button>
    </section>

`;

class WcSignUpConfirmation extends HTMLElement {
    static observedAttributes = ['firstname', 'lastname', 'email', 'mobile', 'account'];

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


    handleEvent(evt) {
        if(evt.type === 'click' && (evt.target.id === 'btnOkay' || evt.target.id === 'btnClose')){
            document.dispatchEvent(evtCloseSignUpConfirmation.event);
            location.href = 'index';
        }
    }

    connectedCallback() {
        const btnClose = this.shadowRoot.getElementById('btnClose');
        btnClose.addEventListener('click', this);

        const btnOkay = this.shadowRoot.getElementById('btnOkay');
        btnOkay.addEventListener('click', this);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        let el = this.#elements.get(name);
        if(el){
            el.textContent = newValue;
        }
        
    }    
}

customElements.define('wc-signup-confirmation', WcSignUpConfirmation);