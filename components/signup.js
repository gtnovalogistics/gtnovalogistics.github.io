import {evtCloseSignUp} from "../events/sign-up.js";
import {registerProfile, validateProfile} from "../services/sign-up.js";
import {sendEmail} from "../services/send-email.js";
import {userEmail} from "../services/user.js";
import {evtOpenSignUpConfirmation} from "../events/sign-up-confirmation.js";
import {evtLoading} from "../events/loading.js";

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
            font-size: clamp(1rem,4vw,1.3rem);       
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
            padding: 1rem 0;
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
            padding: 0.9rem 0;      
         }

         .terms {
            display: flex;
            align-items: center;
            flex-flow: row wrap;
            gap: 1rem;

            div {
                display: flex;
                align-items: flex-start;
                gap: 0.5rem;
                flex-grow: 1;
            }

            label {
                line-height: clamp(1rem,4vw,1.5rem);
                font-size: clamp(1rem,4vw,1.5rem);
                
                span{
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
            <img src="images/close.png" alt="close" width="24" height="24" id="btnClose">
        </header>
        <section id="errors" class="errors no-display">
            <ul>
            </ul>
        </section>
        <form>
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
                <div class="adaptive">
                    <div>
                        <label for="city">*City</label>
                        <select name="city" id="city" required>
                            <option value="Select" selected>Select</option>
                            <option value=”Achiwib">Achiwib</option>
                            <option value=”Adventure">Adventure</option>
                            <option value=”Aishalton">Aishalton</option>
                            <option value=”Anna Regina">Anna Regina</option>
                            <option value=”Annai">Annai</option>
                            <option value=”Annandale">Annandale</option>
                            <option value=”Apoteri">Apoteri</option>
                            <option value=”Awaruwaunawa">Awaruwaunawa</option>
                            <option value=”Barakara">Barakara</option>
                            <option value=”Bartica">Bartica</option>
                            <option value=”Belladrum">Belladrum</option>
                            <option value=”Cane Grove">Cane Grove</option>
                            <option value=”Capoey">Capoey</option>
                            <option value=”Charity">Charity</option>
                            <option value=”Clonbrook">Clonbrook</option>
                            <option value=”Crabwood Creek">Crabwood Creek</option>
                            <option value=”Dadanawa">Dadanawa</option>
                            <option value=”Den Amstel">Den Amstel</option>
                            <option value=”Fort Wellington">Fort Wellington</option>
                            <option value=”Georgetown">Georgetown</option>
                            <option value=”Hampton Court">Hampton Court</option>
                            <option value=”Hiawa">Hiawa</option>
                            <option value=”Hosororo">Hosororo</option>
                            <option value=”Hyde Park">Hyde Park</option>
                            <option value=”Imbaimadai">Imbaimadai</option>
                            <option value=”Ituni">Ituni</option>
                            <option value=”Kabakaburi">Kabakaburi</option>
                            <option value=”Kamarang">Kamarang</option>
                            <option value=”Kamwatta Hill">Kamwatta Hill</option>
                            <option value=”Karasabai Village">Karasabai Village</option>
                            <option value=”Karaudanawa">Karaudanawa</option>
                            <option value=”Kato Village">Kato Village</option>
                            <option value=”Koriabo">Koriabo</option>
                            <option value=”Kumaka">Kumaka</option>
                            <option value=”Kwakwani">Kwakwani</option>
                            <option value=”Lethem">Lethem</option>
                            <option value=”Linden">Linden</option>
                            <option value=”Mabaruma">Mabaruma</option>
                            <option value=”Mahaicony Village">Mahaicony Village</option>
                            <option value=”Mahdia">Mahdia</option>
                            <option value=”Marurawaunawa Village">Marurawaunawa Village</option>
                            <option value=”Matthews Ridge">Matthews Ridge</option>
                            <option value=”Monkey Mountain">Monkey Mountain</option>
                            <option value=”New Amsterdam">New Amsterdam</option>
                            <option value=”Onderneeming">Onderneeming</option>
                            <option value=”Orealla">Orealla</option>
                            <option value=”Paramakatoi">Paramakatoi</option>
                            <option value=”Parika">Parika</option>
                            <option value=”Port Kaituma">Port Kaituma</option>
                            <option value=”Port Mourant">Port Mourant</option>
                            <option value=”Princetown">Princetown</option>
                            <option value=”Queenstown">Queenstown</option>
                            <option value=”Rockstone">Rockstone</option>
                            <option value=”Rose Hall">Rose Hall</option>
                            <option value=”Rosignol">Rosignol</option>
                            <option value=”Saint Cuthberts Mission">Saint Cuthberts Mission</option>
                            <option value=”Saint Francis Mission">Saint Francis Mission</option>
                            <option value=”Sand Creek Village">Sand Creek Village</option>
                            <option value=”Santa Mission">Santa Mission</option>
                            <option value=”Santa Rosa Mission">Santa Rosa Mission</option>
                            <option value=”Sawariwaunawa">Sawariwaunawa</option>
                            <option value=”Skeldon">Skeldon</option>
                            <option value=”Surama Village">Surama Village</option>
                            <option value=”Uitvlugt">Uitvlugt</option>
                            <option value=”Vreed-en-Hoop">Vreed-en-Hoop</option>
                            <option value=”Weldaad">Weldaad</option>
                            <option value=”Windsor Forest">Windsor Forest</option>
                            <option value=”Woweta Village">Woweta Village</option>
                            <option value=”Yupukarri">Yupukarri</option>
                            <option value=”Zeelandia">Zeelandia</option>
                        </select>
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
                        I agree to the Terms of Service of<br/>
                        <span>GTNova Freight and Logistics Inc.</span>
                    </label>
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
    form.city.value = 'Select';
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

    cleanUp() {
        clearErrors(this.#els.errorsSection);
        closePopup(this.#els.form);
    }

    async handleEvent(evt) {

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
                handleErrors(errors, this.#els.errorsSection);
                //evt.target.disabled = false;
                return; 
            }

            document.dispatchEvent(evtLoading.event);

            // prevent email duplication
            ////////////////////////////
            
            const email = await userEmail(this.#els.form.email.value);
            if(email.found === true){
                handleErrors([`Email ${this.#els.form.email.value} already exists`], this.#els.errorsSection);
                //evt.target.disabled = false;
                document.dispatchEvent(evtLoading.event);
                return;
            }

            await registerProfile(profile);

            await sendEmail(profile.email, profile.accountnumber, `${profile.firstname} ${profile.lastname}`);
            
            this.cleanUp();

            //evt.target.disabled = false;
            document.dispatchEvent(evtLoading.event);

            // open the confirmation popup
            evtOpenSignUpConfirmation.detail = profile;
            document.dispatchEvent(evtOpenSignUpConfirmation.event);
        }

    }

    connectedCallback() {
        this.#els.form = this.shadowRoot.querySelector('form');
        this.#els.errorsSection = this.shadowRoot.getElementById('errors');

        this.shadowRoot.getElementById('btnClose')
            .addEventListener('click', this);

        this.shadowRoot.getElementById('btnSubmit')
            .addEventListener('click', this);
    }
}

customElements.define('wc-signup', WcSignup);