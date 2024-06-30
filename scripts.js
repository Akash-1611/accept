const data = [
    {
        name: "Joshua Horna",
        jobTitle: "Software Engineer at Tech Corp",
        location: "San Francisco, CA",
        date: "25w",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Nalor Yonoas",
        jobTitle: "Graphic Designer at Creative Studio",
        location: "New York, NY",
        date: "42w",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Rex Billy Ceria Aguino",
        jobTitle: "Data Scientist at DataWorks",
        location: "Austin, TX",
        date: "34w",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Judy Ann Tahum Estaress",
        jobTitle: "Product Manager at Innovations Inc",
        location: "Chicago, IL",
        date: "33w",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Eugene Cobero",
        jobTitle: "Marketing Specialist at MarketPlus",
        location: "Los Angeles, CA",
        date: "11w",
        imageUrl: "https://via.placeholder.com/100"
    }
];

function loadCards() {
    const container = document.getElementById('friend-requests');
    container.innerHTML = '';

    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'friend-card';
        card.onclick = () => showModal(item.name, item.jobTitle, item.location, item.date, item.imageUrl);

        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <div class="friend-info">
                <h3>${item.name}</h3>
                <p>${item.date}</p>
                <p>${item.jobTitle}</p>
                <p>${item.location}</p>
            </div>
            <div class="friend-actions">
                <button onclick="confirmRequest(event)">Confirm</button>
                <button onclick="deleteRequest(event, ${index})">Delete</button>
            </div>
        `;

        container.appendChild(card);
    });
}

function showModal(name, work, location, date, imageUrl) {
    document.getElementById('modal-name').innerText = name;
    document.getElementById('modal-details').innerText = work;
    document.getElementById('modal-location').innerText = location;
    document.getElementById('modal-date').innerText = date;
    document.getElementById('modal-image').src = imageUrl;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}

function confirmRequest(event) {
    event.stopPropagation(); // Prevent triggering the card click event
    alert("You have successfully accepted the request.");
}

function deleteRequest(event, index) {
    event.stopPropagation(); // Prevent triggering the card click event
    data.splice(index, 1);
    loadCards();
}

// Load the cards when the page is ready
window.onload = loadCards;
