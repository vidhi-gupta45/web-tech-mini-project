const trips = [
    { name: "Goa", type: "beach", price: 8000 },
    { name: "Manali", type: "mountain", price: 12000 },
    { name: "Kerala", type: "beach", price: 15000 },
    { name: "Shimla", type: "mountain", price: 9000 }
];

function displayTrips(data) {
    const container = document.getElementById("tripsContainer");
    container.innerHTML = "";

    data.forEach(trip => {
        container.innerHTML += `
            <div class="card">
                <h3>${trip.name}</h3>
                <p>Type: ${trip.type}</p>
                <p>Price: ₹${trip.price}</p>
            </div>
        `;
    });
}

function filterTrips() {
    const location = document.getElementById("locationFilter").value;
    const budget = document.getElementById("budgetFilter").value;

    let filtered = trips;

    if (location !== "all") {
        filtered = filtered.filter(t => t.type === location);
    }

    if (budget === "low") {
        filtered = filtered.filter(t => t.price < 10000);
    } else if (budget === "high") {
        filtered = filtered.filter(t => t.price >= 10000);
    }

    displayTrips(filtered);
}

// Load all trips initially
displayTrips(trips);