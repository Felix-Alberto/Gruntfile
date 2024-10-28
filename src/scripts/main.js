document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;

        if (name && phone) {
            addContactToTable(name, phone);
            document.getElementById("contactForm").reset();
        }
    });
});

function addContactToTable(name, phone) {
    const contactTable = document.getElementById("contactTable").querySelector("tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${phone}</td>
        <td><span class="delete-btn">x</span></td>
    `;

    row.querySelector(".delete-btn").addEventListener("click", function () {
        contactTable.removeChild(row);
    });

    contactTable.appendChild(row);
}
