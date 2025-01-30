// Data for the 23 team members
const teamMembers = [
    { name: "Maharaja Aishwarya Katoch", description: "The Ernst State of Kangra", image: "images/person1.jpg" },
    { name: "Somesh Goyal (IPS: 1984)", description: "Former Director General of Police, Himachal Pradesh", image: "images/person2.png" },
    { name: "Alok Pateria (IPS: 1986)", description: "Former Director General of Police, Central Industrial Security Force, Ministry of Home Affairs, Government of India", image: "images/person3.png" },
    { name: "Bhupendra Singh Yadav (IPS; 1986)", description: "Former Director General of Police, Rajasthan", image: "images/person4.png" },
    { name: "Rajendra Prasad Sharma (IPS: 1986)", description: "Former Director General of Police, Odisha", image: "images/person5.png" },
    { name: "Ram Prawesh Thakur (IPS: 1986)", description: "Former Director General of Police, Andhra Pradesh", image: "images/person6.png" },
    { name: "R Chandranathan (IPS: 1986)", description: "Former Director General of Police, Meghalaya", image: "images/person7.png" },
    { name: "Vinod Kumar Mall (IPS: 1986)", description: "Former Director General of Police, Gujarat ", image: "images/person8.jpg" },
    { name: "Sunil Kumar Singh (IPS: 1988)", description: "Former Director General of Police, Tamil Nadu", image: "images/person9.jpg" },
    { name: "Sanjay Kundu (IPS: 1989)", description: "Former Director General of Police, Himachal Pradesh", image: "images/person10.jpg" },
    { name: "Umesh Mishra (IPS: 1989)", description: "Former Director General of Police, Rajasthan", image: "images/person11.jpg" },
    { name: "R Venkateswaran (IAS: 1990)", description: "Former Addl. Chief Secretary, Government of Rajasthan", image: "images/person12.png" },
    { name: "Sunil Kumar Mall (IRS: 1992)", description: "Customs & Excise, Pr. ADG of DRI, Mumbai Zone", image: "images/person13.jpg" },
    { name: "Gyanendra Singh Malik (IPS: 1993)", description: "Commissioner of Police, Ahmedabad", image: "images/person14.png" },
    { name: "Kalpesh Wandra", description: "Pro vice Chancellor, Rastriya Raksha University, Ministry of Home Affairs", image: "images/person15.jpg" },
    { name: "Seera Jaya Ram", description: "Arjuna Awardee- Boxing, Former Sports Officer, Telangana Police", image: "images/person16.jpg" },
    { name: "Capt. Sumit Yadav", description: "Former member of Raj Bhasha Vibhag, Ministry of Home Affairs", image: "images/person17.png" },
    { name: "Mrs Anuradha Upadhyay", description: "Senior Advocate Rajasthan High Court, Jaipur Bench", image: "images/person18.jpg" },
    { name: "Abdul Salam Sankhala", description: "Senior Advocate, District & Session Court, Jaipur", image: "images/person19.jpg" },
    { name: "Brij Raj Singh Shekhawat", description: "Trustee, Prehelika Foundation, India", image: "images/person20.jpg" },
    { name: "Sunil Kumar", description: "Secretary, Police & Fire Games Board Of India", image: "images/SUNIL_KUMAR3.png" },
    { name: "Tanmay Bathwal", description: "Managing Director, Hirise Hospitality Pvt Ltd", image: "images/person22.png" },
    { name: "Mrs. Prisha S Bakshi", description: "Renowned Entrepreneur & Finance Expert, New Delhi", image: "images/person23.jpg" },
    { name: "Colnel Rupinderjit Hayer (R)", description: "Canada", image: "images/person24.jpg" },
    { name: "Jogender Singh Salaria", description: "Founder of PCT Humanity, member of Dubai Humanitarian, UAE, Businessman & Global Social Worker, Golden Visa Holder", image: "images/person21.png" }
];

// Reference to the team container
const teamContainer = document.getElementById("team-container");

// Generate and insert cards
if (teamContainer) {
    teamMembers.forEach(member => {
        // Create the card element
        const card = document.createElement("div");
        card.classList.add("team-card");

        // Add content to the card
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
        `;

        // Append the card to the container
        teamContainer.appendChild(card);
    });
}

// Splash screen logic
window.addEventListener('load', () => {
    setTimeout(() => {
        const splashScreen = document.getElementById('splash-screen');
        const mainContent = document.getElementById('main-content');

        if (splashScreen) {
            splashScreen.style.display = 'none'; // Hide splash screen
        }
        if (mainContent) {
            mainContent.style.display = 'block'; // Show main content
        }
    }, 1500);
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
