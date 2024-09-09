const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            border-radius: 15px;
        }

        .container {
            padding: 3rem clamp(2px, 2vw ,3rem);
            max-width: 890px;
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
            font-size: 3rem;
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
            font-size: 1.3rem;       
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



        input{
            font-family: helveticaneue;
            font-weight: 400;
            font-size: 1.2rem;
            padding: 1rem 0;
            border-radius: 5px;
            border: 2px solid lightgray;
            
        }

        select {
            font-family: helveticaneue;
            font-weight: 400;
            font-size: 1.5rem;
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

    </style>
    
    <section class="container">
        <header>
            <div>Sign Up</div>
            <img src="images/close.png" alt="close" width="24" height="24">
        </header>
        <form action="submit">
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
                    <input type="text" name="email" id="email" required placeholder="sample@email.com">
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

class WcSignup extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
}

customElements.define('wc-signup', WcSignup);