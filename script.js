const getPortofolios = async () => {
  const response = await fetch("/portfolios.json");
  const json = await response.json();
  populatePortofoliosContent(json);
};

const populatePortofoliosContent = (portfolios) => {
  const wrapper = document.getElementById("portfoliosContentWrapper");

  const contents = portfolios.map((x) => {
    return `<div class='content' onclick="showDetail('${x.title}', '${x.description}', '${x.imageOne}', '${x.imageTwo}', '${x.imageThree}')">
        <img src='${x.imageOne}' alt='portfolio' />
        <div>
            <p class='title'>${x.title}</p>
            <p class='subtitle'>${x.description}</p>
        </div>
    </div>`;
  });

  wrapper.innerHTML = contents.join("");
};

const showDetail = (title, description, imageOne, imageTwo, imageThree) => {
  const modal = document.getElementById("modal");
  modal.classList.remove("modal");
  modal.classList.add("modal-active");

  modal.innerHTML = `<div class='modal-content'>
    <div class='modal-header'>
      <p>${title}</p>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' onclick="hideDetail()">
        <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
      </svg>
    </div>
    <div class='modal-body'>
      <div class='images'>
        <img src='${imageOne}' alt='image' />
        <img src='${imageTwo}' alt='image' />
        <img src='${imageThree}' alt='image' />
      </div>
      <p>${description}</p>
    </div>
  </div>`;
};

const hideDetail = () => {
  const modal = document.getElementById("modal");
  modal.classList.remove("modal-active");
  modal.classList.add("modal");

  modal.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", async () => {
  getPortofolios();
});
