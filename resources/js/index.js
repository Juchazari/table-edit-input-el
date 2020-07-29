const expenses = [
    {
        "id": 1,
        "name": "Netflix",
        "price": "13.99",
        "deadline": "08/30/2020"
    },
    {
        "id": 2,
        "name": "Hulu",
        "price": "8.99",
        "deadline": "08/26/2020"
    },
    {
        "id": 3,
        "name": "Amazon Prime",
        "price": "12.99",
        "deadline": "08/31/2020"
    },
];

document.addEventListener("DOMContentLoaded", () => {

    renderExpListCard(expenses);

    const debounce = (fn, delay) => {
        let timeoutID;
        return function(...args) {
            if(timeoutID) {
                clearTimeout(timeoutID);
            }
            timeoutID = setTimeout(() => {
                fn(...args);
            }, delay)
        }
    }

    document.addEventListener("input", debounce(e =>{
        if(e.target = "TD") {
            console.log(e.target.innerText)
        }
    }, 800))

});

function renderExpListCard(data) {
    const dashboard = document.querySelector("#dashboard-content > .container");
    const cardContainer = document.createElement("div");

    cardContainer.className = "row";

    cardContainer.innerHTML = `
        <div class="col-md-12">
            <div class="card-njs card-lg-expe">
                <div class="cardexp-header">
                    <h3>Media</h3>
                </div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Expenditure</th>
                            <th scope="col">Price</th>
                            <th scope="col">Pay Day</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="table-body">

                    </tbody>
                </table>
            </div>
        </div>
    `;

    const tableBody = cardContainer.querySelector("#table-body")
    data.forEach(expense => {
        const tr = document.createElement("tr");
        tr.setAttribute("expense-id", `${expense.id}`);

        tr.innerHTML = `
            <td class="pt-3-half" contenteditable="true">${expense.name}</td>
            <td class="pt-3-half" contenteditable="true">${expense.price}</td>
            <td class="pt-3-half" contenteditable="true">${expense.deadline}</td>
            <td>
                <span class="table-remove">
                    <button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                        Remove
                    </button>
                </span>
            </td>
        `;

        tableBody.appendChild(tr);
    });

    dashboard.appendChild(cardContainer);
}