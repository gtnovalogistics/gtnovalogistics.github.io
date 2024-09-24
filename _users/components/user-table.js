import {getUsers} from "../services/users.js";

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: grid;
            align-items: center;
            justify-content: center;
        }

        .container {
            font-family: helveticaneue;
        }

        header {
            color: #3B0978;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            padding: 5px;
        }

        th, td {
            text-align: left;
            vertical-align: middle;
            font-size: 0.80rem;
            border: 1px solid lightgray;
        }

        th {
            font-weight: 700;
            padding: 0.5rem;
            background-color: #3B0978;
            border-color: #3B0978;
            color: #B6DC10;
        }

        td {
            font-weight: 400; 
            padding: 5px;
        }

        tbody tr:nth-child(even){background-color: #f2f2f2;}

    </style>

    <section class="container">

        <header>
            <img src="images/GTNova_logo_no_bg.webp" width="167" height="78" alt="main logo">
            <h2>USERS</h2>
        </header>
        <table>
            <thead>
                <tr>
                    <th>email</th>
                    <th>account number</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>mobile number</th>
                    <th>address line 1</th>
                    <th>address line 2</th>
                    <th>city</th>
                    <th>company</th>
                    <th>reference</th>
                    <th>tin</th>
                </tr>
            </thead>

            <tbody id="tbody">
            </tbody>
        </table>

    </section>

`;

const userRow = (user) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${user.email}</td>
        <td>${user.accountnumber}</td>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.mobile}</td>
        <td>${user.address_line1}</td>
        <td>${user.address_line2}</td>
        <td>${user.city}</td>
        <td>${user.company}</td>
        <td>${user.reference}</td>
        <td>${user.tin}</td>
    `;

    return tr;
}


customElements.define('wc-user-table', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }

    connectedCallback() {
        const tbody = this.shadowRoot.getElementById('tbody');
        const addToTable = (user) => {tbody.appendChild(userRow(user));};
        getUsers().then(response => {

            if(response.body){
                const body = JSON.parse(response.body);
                const users = body.Items;
                users.map(addToTable);
            }
        })
    }
});