const API_URL = "https://jsonplaceholder.typicode.com";
const HTMLResponse = document.querySelector("#app");

async function fetchData() {
    try {
        const response = await fetch(`${API_URL}/users`);
        if (!response.ok) {
            throw new Error("La respuesta de la red no fue válida.");
        }
        const data = await response.json();
        renderData(data);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

function renderData(data) {
    const tpl = data.map((user) => `<li>${user.name}💎${user.email}</li>`).join("");
    HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
}

fetchData();