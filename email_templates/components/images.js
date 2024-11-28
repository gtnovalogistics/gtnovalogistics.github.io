import {gh} from "../../services/gh-upload.js";


const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
  
    
        }
    </style>

    <section class="container">
        <label for="inpImgUpload">Upload image:</label>
        <input type="file" id="inpImgUpload" name="inpImgUpload" 
            accept="image/*" 
            multiple/>

    </section>

`;



customElements.define('wc-images', class extends HTMLElement {

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
        switch(evt.target.id){
            case 'inpImgUpload': {
                console.log(evt.target.files);

                let fileContent;
                for(let i = 0; i < evt.target.files.length; i++){
                    (() => {
                        const file = evt.target.files[i];

                        gh.base64(file);
                        //fileContent = await file.text();
                        //console.log(file.name);
                        //console.log(fileContent);
                    })();        
                }

                break;
            }
        }
    }

    connectedCallback(){
        this.#elements.get('inpImgUpload').addEventListener('change', this);
    }

    disconnectedCallback() {
        this.#elements.get('inpImgUpload').removeEventListener('change', this);
    }

});