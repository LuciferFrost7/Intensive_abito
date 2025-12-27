const cardList = [
  {
    id: "1",
    image: {
      src: "./source/assets/images/products/product-1.png",
      alt: "Product image",
    },
    name: "Пвх материал 1-й сорт",
    price: "170 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
  {
    id: "2",
    image: {
      src: "./source/assets/images/products/product-1.png",
      alt: "Product image",
    },
    name: "Пвх материал 2-й сорт",
    price: "171 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
  {
    id: "3",
    image: {
      src: "./source/assets/images/products/product-1.png",
      alt: "Product image",
    },
    name: "Пвх материал 3-й сорт",
    price: "172 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
  {
    id: "4",
    image: {
      src: "./source/assets/images/products/product-1.png",
      alt: "Product image",
    },
    name: "Пвх материал 4-й сорт",
    price: "173 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
  {
    id: "5",
    image: {
      src: "./source/assets/images/products/product-1.png",
      alt: "Product image",
    },
    name: "Пвх материал 5-й сорт",
    price: "174 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
  {
    id: "6",
    image: {
      src: "./source/assets/images/products/product-1.png",
      alt: "Product image",
    },
    name: "Пвх материал 6-й сорт",
    price: "175 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
];

function fillCards(sequence = "") {
  const cardsContainer = document.querySelector("#content-cards");

  cardsContainer.innerHTML = "";

  const filteredCardList = cardList.filter(
    (c) => c.name.includes(sequence) || c.price.includes(sequence)
  );

  filteredCardList.forEach((c) => {
    const card = document.createElement("div");
    card.className = "content-card";

    card.innerHTML = `
            <img
                class="content-card__image"
                src="${c.image.src}"
                alt="${c.image.alt}"
            />
            <h3 class="content-card__name">${c.name}</h3>
            <p class="content-card__price">${c.price}</p>
            <div class="content__box card-info">
                <address class="address">${c.place}</address>
                <p class="time">${c.date}</p>
            </div>
        `;

    cardsContainer.appendChild(card);
  });
}

fillCards();

const searchButton = document.querySelector(".search__button");

searchButton.addEventListener("click", () => {
  const searchInput = document.querySelector(".search__input");

  console.log(searchInput.value);
  fillCards(searchInput.value);
});
