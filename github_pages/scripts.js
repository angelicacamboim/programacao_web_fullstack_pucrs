fetch("https://api.github.com/user", {
  headers: {
    Authorization: `token `,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const avatarElement = document.getElementById("avatar");
    avatarElement.src = data.avatar_url;

    document.getElementById("name").innerHTML = data.name;
    document.getElementById("bio").innerHTML = data.bio;

    fetch(data.repos_url)
    .then((response) => response.json())
    .then((repos) => {
      const repositoriesList = document.getElementById("repositoriesList");
  
      repos.forEach((repo) => {
        //col
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4"
        //card
        const card = document.createElement("div");
        card.className = "card"
        //card body
        const cardBody = document.createElement("div");
        cardBody.className = "card-body"
        //card title
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title"
        cardTitle.textContent = "Repository";
        //card text
        const cardText = document.createElement("p");
        cardText.className = "card-text"
        cardText.textContent = repo.name;
        //link
        const link = document.createElement("a");
        link.className = "btn btn-primary"
        link.href = `https://github.com/${repo.full_name}`;
        link.target = "_blank"
        link.textContent = "View Repository"
        //append child
        repositoriesList.appendChild(col);
        col.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(link);

      });
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
  
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
