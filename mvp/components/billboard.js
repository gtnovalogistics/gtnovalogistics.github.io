const template = document.createElement('template');
template.innerHTML = `
    <style>
        .container {
            container-type: inline-size;
            display: flex;
            justify-content: space-between;
            background: white url("images/transport_bg.png") center/cover no-repeat content-box content-box fixed; 
        }

        .delivery-image {
            height: 100%;
            width: 47vw;
        }

        @container (width < 1280px) {
            .delivery-image {
                display: none;
            }
        }

        .description {
            display: flex;
            width: 33rem;          
            align-items: center;
            justify-content: center;
            padding: 0 var(--padding-side);
            margin-top: 5px;
        }

        .motto {
            font-family: poppins;
        }

        .maxim {
            
            font-weight: 700;
            color: var(--violet);
            font-size: clamp(2rem,calc(2rem + 1vw),3.8rem);
            letter-spacing: -3px;
            line-height: clamp(2rem,calc(2rem + 1vw),4rem);;
        }

        .italicized {
            font-size: clamp(0.5rem,calc(0.5rem + 1vw),1.5rem); 
            font-weight: 600;
            font-style: italic;
            color: var(--green);
        }

        .statement {
            font-family: helveticaneue;
            font-weight: 400;
            margin-top: 2rem;
            line-height: 1.2rem;
        }
        
        .checklist {
            font-family: helveticaneue;
            font-weight: 400;  
            margin-top: 2rem;

            div {
                display: flex;
                align-items: center;
                line-height: 2rem;
                gap: 0.5rem;
            }
        }

        .register {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .register a {
            font-family: helveticaneue;
            font-weight: 700;  
            border-radius: 5px;      
            text-decoration: none;
            border: 2px solid var(--violet);
            padding: 0.7rem clamp(0.5rem, 6.4vw,1.5rem);
        }

        .register a:first-child {
            color: white;
            background-color: var(--violet);
        }

        .register a:nth-child(2) {
            color: var(--violet);
            background-color: white;
        }


        
    </style>
   
    <section class="container">
        <div class="description">
            <div class="content">
                <div class="motto">
                    <div class="italicized">Fast Shipping, Exceptional Care</div>
                    <div class="maxim">
                        <div>Fast, Safe, Reliable</div>
                        <div>Delivery Solutions</div>                
                    </div>
                </div>
                <div class="statement">
                    We know every package carries your hopes, dreams, and hard work. 
                    Behind each delivery is a story — a business, a family, or a community relying on us. 
                    That's why we handle every shipment with care and commitment.
                </div>

                <div class="checklist">
                    <div>
                        <img src="images/green_check.png" width="20px" height="20px" alt="green check">
                        <div>Advanced Tracking</div>
                    </div>
                    <div>
                        <img src="images/green_check.png" width="20px" height="20px" alt="green check">
                        <div>Global Reach</div>
                    </div>
                    <div>
                        <img src="images/green_check.png" width="20px" height="20px" alt="green check">
                        <div>Competitive Rates</div>
                    </div>
                    <div>
                        <img src="images/green_check.png" width="20px" height="20px" alt="green check">
                        <div>Secured and Flexible Shipping Options</div>
                    </div>
                    <div>
                        <img src="images/green_check.png" width="20px" height="20px" alt="green check">
                        <div>Experienced Team</div>
                    </div>
                </div> 

                <div class="register">
                    <a href="#">Register</a>
                    <a href="#">View Rates</a>
                </div>
            </div>
        </div>
        <img src="images/billboard.png" class="delivery-image">
    </section>

`;

class WcBillboard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
}

customElements.define('wc-billboard', WcBillboard);