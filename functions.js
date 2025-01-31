// This function makes a list of clients
// It takes a list of clients and turns it into an HTML string
function list(clients) {
    return clients.map(client => `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name} <strong>$${client.balance.toFixed(2)}</strong>
      </li>
    `).join(''); // Joins everything together into one big string
}

// This function puts clients in order by a specific property (like name or balance)
function order(clients, property) {
    return [...clients].sort((a, b) => {
        if (typeof a[property] === 'string') {
            // If sorting by name (which is a word), compare them alphabetically
            return a[property].localeCompare(b[property]);
        }
        // If sorting by a number (like balance or index), arrange them from small to big
        return a[property] - b[property];
    });
}

// This function adds up all the money from all clients
function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
}

// This function finds a client by their index number
function info(index) {
    return clients.find(client => client.index === index);
}

// This function searches for clients by name
// It looks for any name that includes the search word, even if the case is different
function search(query) {
    return clients.filter(client =>
        client.name.toLowerCase().includes(query.toLowerCase())
    );
}