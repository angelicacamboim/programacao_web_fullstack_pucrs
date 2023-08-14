fetch("https://api.github.com/users/angelicacamboim/repos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0]);
    const avatarElement = document.getElementById("avatar");
    avatarElement.src = data[0].owner.avatar_url;

    document.getElementById("name").innerHTML = data[0].owner.login;

    const repositoriesList = document.getElementById("repositoriesList");

    const repos = data.map((repo) => {
      //col
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";
      //card
      const card = document.createElement("div");
      card.className = "card";
      //card body
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      //card title
      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.textContent = "Repository";
      //card text
      const cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.textContent = repo.name;
      //link
      const link = document.createElement("a");
      link.className = "btn btn-primary";
      link.href = `https://github.com/${repo.full_name}`;
      link.target = "_blank";
      link.textContent = "View Repository";
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
    console.error("Erro:", error);
  });
