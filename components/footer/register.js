const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {    
        }

        .container {
            margin: 0 var(--padding-side);
            border-radius: 20px;
            background-color: var(--violet);
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            align-items: center;
            justify-content: space-around;
            position: relative;
        }

        .vertical-padding {
            padding: 0;
        }

        img {
            margin-top: -35px;
        }

        @media screen and (width < 1308px) {
            img {
                display: none;
            }

            .vertical-padding {
                padding: 10px;;
            }
            
        }

        .banner {
            font-family: poppins;
            color: white;
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 0.2rem;

        }

        .tagline {
            font-style: italic;
            font-weight: 600;
            font-size: 1rem;
        }

        .form {
            display: grid;
            grid-template-columns: repeat(2, fr);
            grid-template-areas:
            "inpfname inplname"
            "inpemail inpmobile"
            "........ btnregister";
            gap: 1rem;
            
        }

        @media screen and (width < 660px) {
        .form {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas:
            "inpfname"
            "inplname"
            "inpemail"
            "inpmobile"
            "btnregister";
            gap: 1rem;
            
        }        
        }

        .inpfname {
            grid-area: inpfname;
        }

        .inplname {
            grid-area: inplname;
        }

        .inpemail {
            grid-area: inpemail;
        }

        .inpmobile {
            grid-area: inpmobile;
        }

        .btnregister {
            grid-area: btnregister;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        input{
            padding-left: 0.5rem;
        }

        input, button {
            font-family: helveticaneue;
            font-weight: 400;
            font-size: 1rem;
            line-height: 2.0rem;
            border-radius: 5px;
            border: 1px solid var(--violet);
        }

        button {
            color: var(--violet);
            background-color: var(--green);
            font-weight: 700;
        }
        
        button div:last-child {
            margin-top: -7px;
            font-size: 1.7rem;
        }
    </style>


    
    <section class="container vertical-padding">
        <img src="images/cta_register_now.webp" alt="register" width="237" height="234">
        <div class="banner">
            <p class="tagline">Register Now!</p>
            <p>Get Early</p>
            <p>Exclusive Offers</p>
        </div>
        <div class="form">
            <input class="inpfname" type="text" placeholder="* First Name"/>
            <input class="inplname" type ="text" placeholder="* Last Name"/>
            <input class="inpemail" type="email" placeholder="* Email Address"/>
            <input class="inpmobile" type="text" placeholder="* Mobile Number"/>
            <button class="btnregister">
                <div>Continue Registration</div>
                <div>&rarr;</div> 
            </button>
        </div>
    </section>
`;



customElements.define('wc-footer-register', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
});