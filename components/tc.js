const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            font-family: helveticaneue;
            font-weight: 400;
            font-size: 1rem;

            dialog {
                max-width: 768px;
                margin: 5px auto;
                border: none;
                border-radius: 10px;                
            }
    
            h1 {
                font-family: poppins;
                font-weight: 700;
                margin-top: 2rem;
                font-size: 2rem;
                color: var(--violet);
            }
            
            li {
                margin-bottom: 0.5rem;
                line-height: 1.5rem;
            }
            
            div {
                display: grid;
                align-items: center;
                justify-content: center;
                width: 100%;
            }

            button {
                font-family: 'poppins';
                font-weight: 700;
                font-size: 1.5rem;
                border: 1px solid var(--green);
                background-color: var(--green);
                color: var(--violet);
                border-radius: 10px;
                padding: 10px 20px;   
                cursor: pointer;         
            }
        }
    </style>

    <dialog id="dlg" class="container">
        <h1>Terms & Conditions</h1>
        <p>The following outlines the services provided by GTNova Freight and Logistics Inc, as well as the limitations and conditions that apply:</p>
        <ol>
            <li>
                <b>Website Purchases:</b>
                <span>
                    GTNova Freight and Logistics reserves the right to make purchases only from websites it considers reliable and secure. 
                    Orders from sites that appear suspicious or potentially unsafe may be limited at GTNova’s discretion to safeguard both the company and its customers from potential fraud.
                </span>
            </li>
            <li>
                <b>Item Quality and Condition:</b>
                <span>
                    GTNova Freight and Logistics operates solely as a purchasing and shipping agent and holds no responsibility for the quality or condition of items ordered from websites. 
                    The company is not liable for any inaccuracies or false representation made by the sellers or websites involved.
                </span>
            </li> 
            <li>
                <b>Supplier Defective Products:</b>
                <span>
                    GTNova Freight and Logistics shall not be held responsible for any defective products provided by the seller. 
                    Additionally, GTNova will not manage the return of such items to their country of origin.
                </span>
            </li>  
            <li>
                <b>Insurance Value:</b>
                <span>
                    GTNova Freight and Logistics offers insurance that covers the full value of the items. 
                    However, customers are required to inspect their packages before leaving business premises.
                </span>
            </li> 
            <li>
                <b>Insurance Coverage:</b>
                <span>
                    Insurance is available for losses or damages that may take place during the shipping process, starting from when the item is received in Miami to its final delivery in Guyana.
                </span>
            </li>  
            <li>
                <b>Insurance Waiver:</b>
                <span>
                    Should a customer choose to decline insurance, GTNova Freight and Logistics will not be held accountable for any damages or losses during the aforementioned shipping process.
                </span>
            </li> 
            <li>
                <b>Postal and Courier Liability:</b>
                <span>
                    GTNova Freight and Logistics does not assume responsibility for any loss or damage that may occur while items are handled by foreign postal or courier services.
                </span>
            </li>  
            <li>
                <b>Estimated Charges:</b>
                <span>
                    All quoted costs provided by GTNova Freight and Logistics are preliminary and subject to change until the package arrives in Guyana.
                </span>
            </li> 
            <li>
                <b>Storage Policy:</b>
                <span>
                    Customers are required to pay for and retrieve their packages within 30 days. Failure to collect a package within 30 days may result in its liquidation.
                </span>
            </li>                                              
        </ol>
        <div>
            <button id="btnClose">Close</button>
        </div>
    </dialog>

`;



customElements.define('wc-tc', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }

    close(evt){
        this.getRootNode().getElementById('dlg').close();
        this.getRootNode().host.remove;
    }
    connectedCallback() {
        this.shadowRoot.getElementById('btnClose').addEventListener('click', this.close);
    }

    disconnectedCallback() {
        this.shadowRoot.getElementById('btnClose').removeEventListener('click', this.close);
    }

    showModal() {
        this.shadowRoot.getElementById('dlg').showModal();
    }
});