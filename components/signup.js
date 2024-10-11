import {evtCloseSignUp} from "../events/sign-up.js";
import {registerProfile, validateProfile} from "../services/sign-up.js";
import {sendEmail} from "../services/send-email.js";
import {userEmail} from "../services/user.js";
import {evtOpenSignUpConfirmation} from "../events/sign-up-confirmation.js";
import "./tc.js";
import {showLoading, hideLoading} from "./loading.js";

const renderCities = async () => {
    
    const response = await fetch('../cities.json');
    const cities = await response.json();

    let ret = '';
    cities.forEach(city => {
        ret += `<option value="${city}">${city}</option>`;
    })
    return ret;
}

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

            display: grid;
            align-items: center;
            justify-content: center;

            background-color: rgba(0, 0, 0, 0.5);
            z-index: 5;       
        }

        img {
            cursor: pointer;
        }

        .container {
            padding: 3rem clamp(2px, 2vw ,3rem);
            max-width: 890px;
            border-radius: 15px;
            background-color: white;
            
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 2rem;
        }

        header {
            display: flex;
            justify-content: space-between;

            font-family: poppins;
            font-weight: 700;
            font-size: clamp(2rem,4vw,3rem);
            color: var(--violet);
        }

        .adaptive {
            display: flex;
            column-gap: 1rem;
            row-gap: 2rem;
            flex-flow: row wrap;


            div {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

        }

        .tin {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        label {
            font-family: helveticaneue;
            font-weight: 400;
            font-size: 1rem;       
        }
        
        #btnSubmit {
            flex-grow: 2;
            display: block;
            font-family: poppins;
            font-weight: 700;
            cursor: pointer;
            font-size: 2rem;
            border-radius: 5px;
            padding: 0.5rem 2rem;
            background-color: var(--green);
            color: var(--violet);
            border: none;
        }

        .errors {
            font-family: helveticaneue;
            font-weight: 400;
            padding: 0.5rem;
            background-color: red;
            color: var(--violet);      
        }


        input{
            font-family: helveticaneue;
            font-weight: 400;
            font-size: clamp(1rem,4vw,1.2rem);
            padding: 1rem;
            border-radius: 5px;
            border: 2px solid lightgray;
            
        }

        select {
            font-family: helveticaneue;
            font-weight: 400;
            font-size: clamp(1rem,4vw,1.2rem);
            line-height: 2rem;
            border-radius: 5px;
            border: 2px solid lightgray;   
            padding: 0.9rem;      
         }

         .terms {
            display: flex;
            align-items: center;
            flex-flow: row wrap;
            gap: 1rem;

            div {
                font-family: helveticaneue;
                font-weight: 400;
            }

            label {
                line-height: clamp(1rem,4vw,1.5rem);
                font-size: 1rem;
            }

            .terms-link {
                line-height: clamp(1rem,4vw,1.5rem);
                font-size: 1rem;
                color: inherit;
                display: block;
                text-decoration: underline;
                
                div{
                    font-weight: 700;
                    color: var(--green);
                }   
                               
            }
            
            input {
                width: 1.5rem;
                height: 1.5rem;
                border: 2px solid lightgray;
                border-radius: 5px;
            }
         }

         fieldset {
            font-family: helveticaneue;
            border: 2px solid lightgray;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
            padding: 1rem;
         }

         .no-display {
            display: none;
         }

    </style>
    
    <section class="container">
        <header>
            <div>Sign Up</div>
            <img src="images/close.webp" alt="close" width="24" height="24" id="btnClose">
        </header>
        <section id="errors" class="errors no-display">
            <ul>
            </ul>
        </section>
        <form id="form">
            <div class="adaptive"> 
                <div>
                    <label for="firstname">*First Name</label>
                    <input type="text" name="firstname" id="firstname" required placeholder="Enter First Name">
                </div>                

                <div>
                    <label for="lastname">*Last Name</label>
                    <input type="text" name="lastname" id="lastname" required placeholder="Enter Last Name">
                </div> 

                <div>
                    <label for="email">*Email Address</label>
                    <input type="email" name="email" id="email" required placeholder="sample@email.com">
                </div>                 

                <div>
                    <label for="mobile">*Mobile Number</label>
                    <input type="text" name="mobile" id="mobile">
                </div>                

                <div>
                    <label for="password">*Password</label>
                    <input type="password" name="password" id="password" required>
                </div> 

                <div>
                    <label for="confirm-password">*Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password" required>
                </div>                 
            </div>


            <fieldset>
                <legend>*Address</legend>
                <div class="tin">
                    <label for="address_line1">*Line 1</label>
                    <input type="text" name="address_line1" id="address_line1" placeholder="Enter Line 1" required>
                </div>
                <div class="tin">
                    <label for="address_line2">Line 2</label>
                    <input type="text" name="address_line2" id="address_line2" placeholder="Enter Line 2">
                </div>
                <div class="tin">
                    <label for="city">City</label>
                    <input list="cities" name="city" id="city" placeholder="Enter City">
                    <datalist id="cities">
                        ${renderCities()}
                    </datalist>
                </div>
            
            </fieldset>            

            <div class="tin">
                <label>Tin Number (Optional)</label>
                <input type="text" name="tin" id="tin" placeholder="Enter TIN Number">
            </div> 

            <div class="adaptive">
                <div>
                    <label for="company">Company Name</label>
                    <input type="text" name="company" id="company" placeholder="Enter Company Name">
                </div> 

                <div>
                    <label for="reference">*How did you hear about us?</label>
                    <select name="reference" id="reference" required>
                        <option value="select" selected>Select</option>
                        <option value="search-engine">Search Engine (Google, Bing, etc.)</option>
                        <option value="social-media">Social Media (Facebook, Instagram, etc.)</option>
                        <option value="online-advert">Online Advertisement</option>
                        <option value="referral">Referral from a Friend/Colleague</option>
                        <option value="email">Email Newsletter</option>
                        <option value="event">Trade Show or Event</option>
                        <option value="listing">Business Directory or Listing</option>
                        <option value="news">News Article or Blog</option>
                        <option value="flyer">Direct Mail or Flyer</option>
                    </select>
                </div>
            </div>

            <div class="terms">
                <div>
                    <input type="checkbox" id="agree" name="agree" value="agree" required>
                    <label for="agree">
                        I agree to the 
                    </label>
                    <a class="terms-link" id="termsLink">
                        Terms and Conditions of
                        <br/>
                        GTNova Freight and Logistics Inc.
                    </a>
                </div>

                <button id="btnSubmit">SIGN UP</button>
            </div>
        </form>

    </section>
`;



const getProfile = (form) => {
    return {
        'firstname': form.firstname.value,
        'lastname' : form.lastname.value,
        'email' : form.email.value,
        'mobile' : form.mobile.value,
        'password' : form.password.value,
        'confirmpassword' : form['confirm-password'].value,
        'address_line1' : form.address_line1.value,
        'address_line2' : form.address_line2.value,
        'city' : form.city.value,
        'tin' : form.tin.value,
        'company' : form.company.value,
        'reference' : form.reference.value,
        'isagreed' : form.agree.checked        
    }
}

const clear = (form) => {
    form.firstname.value = '';
    form.lastname.value = '';
    form.email.value = '';
    form.mobile.value = '';
    form.password.value = '';
    form['confirm-password'].value = '';
    form.address_line1.value = '';
    form.address_line2.value = '';
    form.city.value = '';
    form.tin.value = '';
    form.company.value = '';
    form.reference.value = 'Select';
    form.agree.checked = false; 
}

const closePopup = (form) => {
    clear(form);
    document.dispatchEvent(evtCloseSignUp.event);
}

const handleErrors = (errors, container) => {

    container.classList.remove('no-display');
    const ul = container.querySelector('ul');
    ul.innerHTML = '';
    errors.forEach(error => {
        const li = document.createElement('li');
        li.textContent = error;
        ul.appendChild(li);
    })

    container.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const clearErrors = (container) => {
    container.classList.add('no-display');
    container.querySelector('ul').innerHTML = '';
}

class WcSignup extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }

    #els = {};

    #getElementsWithId = () => {
        const els = this.shadowRoot.querySelectorAll('*');
        els.forEach(el => {
            if(el.hasAttribute('id')){
               this.#els[el.id] = el;
            }
        });
    }

    cleanUp() {
        clearErrors(this.#els.errors);
        closePopup(this.#els.form);
    }

    showTerms() {
        const tc = document.createElement('wc-tc');
        document.body.appendChild(tc);
        tc.showModal();
    }

    async handleEvent(evt) {

        if(evt.type === 'click' && evt.target.id === 'termsLink'){
            this.showTerms();
        }

        if(evt.type === 'click' && evt.target.id === 'btnClose'){
            this.cleanUp();
        }

        if(evt.type === 'click' && evt.target.id === 'btnSubmit'){

            // prevent the form from submitting multiple times
            //evt.target.disabled = true;
            
            
            evt.preventDefault();

            const profile = getProfile(this.#els.form);

            const errors = validateProfile(profile);
            if(errors.length > 0){
                handleErrors(errors, this.#els.errors);
                return; 
            }

            //document.dispatchEvent(evtLoading.event);
            showLoading();

            // prevent email duplication
            ////////////////////////////
            
            const email = await userEmail(this.#els.form.email.value);
            if(email.found === true){
                handleErrors([`Email ${this.#els.form.email.value} already exists`], this.#els.errors);
                //evt.target.disabled = false;
                //document.dispatchEvent(evtLoading.event);
                hideLoading();
                return;
            }

            await registerProfile(profile);

            await sendEmail(profile.email, profile.accountnumber, `${profile.firstname} ${profile.lastname}`, profile.company);
            
            this.cleanUp();

            //evt.target.disabled = false;
            //document.dispatchEvent(evtLoading.event);
            hideLoading();

            // open the confirmation popup
            evtOpenSignUpConfirmation.detail = profile;
            document.dispatchEvent(evtOpenSignUpConfirmation.event);
        }

    }

    connectedCallback() {
        /*
        this.#els.form = this.shadowRoot.querySelector('form');
        this.#els.errorsSection = this.shadowRoot.getElementById('errors');
        this.#els.termsLink = this.shadowRoot.getElementById('termsLink');
        */
       this.#getElementsWithId();

        this.#els.termsLink.addEventListener('click', this)

        this.#els.btnClose.addEventListener('click', this);

        this.#els.btnSubmit.addEventListener('click', this);
    }
}

customElements.define('wc-signup', WcSignup);