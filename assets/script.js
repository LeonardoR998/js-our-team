const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png",
  },
];

// ! Contenitore per le card
const teamCardsContainer = document.getElementById("team-cards");

// ! Itero e creo una card per ciascuno
teamMembers.forEach((member) => {
  const cardHTML = `
    <div class="col mb-4">
      <div class="card" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${member.img}" class="img-fluid" alt="${member.name}" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${member.name}</h5>
              <p class="card-text">${member.role}</p>
              <p>
                <a href="mailto:${member.email}" class="link-underline-primary">${member.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  teamCardsContainer.innerHTML += cardHTML; // ! Aggiungo la card al contenitore
});
