const getPortofolios = async () => {
  const response = await fetch("/portfolios.json");
  const json = await response.json();
  populatePortofoliosContent(json);
};

const populatePortofoliosContent = (portfolios) => {
  const wrapper = document.getElementById("portfoliosContentWrapper");

  const contents = portfolios.map((x) => {
    return `<div class='content'>
        <img src='${x.imageOne}' alt='portfolio' />
        <div>
            <p class='title'>${x.title}</p>
            <p class='subtitle'>${x.description}</p>
        </div>
    </div>`;
  });

  wrapper.innerHTML = contents.join("");
};

document.addEventListener("DOMContentLoaded", async () => {
  getPortofolios();
});
