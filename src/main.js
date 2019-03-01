'use strict';

const filterContainer = document.querySelector(`.main__filter`);
const boardTasks = document.querySelector(`.board__tasks`);

const filters = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];
const filtersCount = [`5`, `13`, `154`, `19`, `0`, `47`, `63`];

const cardsData = [
  {
    modificators: [`black`],
    text: `This is example of new task, you can add picture, set date and time, add tags.`,
    date: ``,
    deadline: ``,
    hashtags: [],
    src: ``,
    alt: ``
  },
  {
    modificators: [`pink`, `repeat`],
    text: `This is example of new task, you can add picture, set date and time, add tags.`,
    date: ``,
    deadline: ``,
    hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
    src: ``,
    alt: ``
  },
  {
    modificators: [`yellow`, `deadline`],
    text: `This is card with missing deadline`,
    date: ``,
    deadline: ``,
    hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
    src: ``,
    alt: ``
  },
  {
    modificators: [`yellow`, `repeat`],
    text: `Here is a card with filled data`,
    date: `23 SEPTEMBER`,
    deadline: `11:15 PM`,
    hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
    src: `img/sample-img.jpg`,
    alt: `task picture`
  },
  {
    modificators: [`blue`],
    text: ``,
    date: ``,
    deadline: ``,
    hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
    src: ``,
    alt: ``
  },
  {
    modificators: [`blue`],
    text: ``,
    date: ``,
    deadline: ``,
    hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
    src: `img/sample-img.jpg`,
    alt: `task picture`
  },
  {
    modificators: [`pink`, `repeat`],
    text: `It is example of repeating task. It marks by wave.`,
    date: `23 September`,
    deadline: `11:15 PM`,
    hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
    src: `img/sample-img.jpg`,
    alt: `task picture`
  }
];

let newFiltersList = ``;
let newCardsList = ``;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const drawFilter = function (name, count, state = ``) {
  // const count = getRandomInt(0, 150);

  if (newFiltersList.length === 0) {
    state = `checked`;
  }

  if (count === `0`) {
    state = `disabled`;
  }

  const newFilter = `<input
    type="radio"
    id="filter__${name}"
    class="filter__input visually-hidden"
    name="filter"
    ${state}
  />
  <label for="filter__${name}" class="filter__label">
    ${name} <span class="filter__${name}-count">${count}</span></label
  >`;

  newFiltersList += newFilter;
};

const createHashtag = (hashtag) => `<span class="card__hashtag-inner">
    <input
      type="hidden"
      name="hashtag"
      value="repeat"
      class="card__hashtag-hidden-input"
    />
    <button type="button" class="card__hashtag-name">
      ${hashtag}
    </button>
    <button type="button" class="card__hashtag-delete">
      delete
    </button>
  </span>`;

const drawCard = function (card) {
  let mods = ``;

  card.modificators.forEach((mod) => {
    mods += `card--${mod} `;
  });

  let hashtagsHTML = ``;

  if (card.hashtags.length > 0) {
    card.hashtags.forEach((ht) => {
      hashtagsHTML += createHashtag(ht);
    });
  }

  let noImg = `--empty`;
  if (card.src.length > 0) {
    noImg = ``;
  }

  const newCard = `<article class="card ${mods}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled"
          >
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >${card.text}</textarea>
          </label>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">no</span>
              </button>

              <fieldset class="card__date-deadline" disabled>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder="${card.date}"
                    name="date"
                  />
                </label>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__time"
                    type="text"
                    placeholder="${card.time}"
                    name="time"
                  />
                </label>
              </fieldset>

              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">no</span>
              </button>

              <fieldset class="card__repeat-days" disabled>
                <div class="card__repeat-days-inner">
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-mo-5"
                    name="repeat"
                    value="mo"
                  />
                  <label class="card__repeat-day" for="repeat-mo-5"
                    >mo</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-tu-5"
                    name="repeat"
                    value="tu"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-tu-5"
                    >tu</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-we-5"
                    name="repeat"
                    value="we"
                  />
                  <label class="card__repeat-day" for="repeat-we-5"
                    >we</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-th-5"
                    name="repeat"
                    value="th"
                  />
                  <label class="card__repeat-day" for="repeat-th-5"
                    >th</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-fr-5"
                    name="repeat"
                    value="fr"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-fr-5"
                    >fr</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    name="repeat"
                    value="sa"
                    id="repeat-sa-5"
                  />
                  <label class="card__repeat-day" for="repeat-sa-5"
                    >sa</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-su-5"
                    name="repeat"
                    value="su"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-su-5"
                    >su</label
                  >
                </div>
              </fieldset>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                ${hashtagsHTML}
              </div>

              <label>
                <input
                  type="text"
                  class="card__hashtag-input"
                  name="hashtag-input"
                  placeholder="Type new hashtag here"
                />
              </label>
            </div>
          </div>

          <label class="card__img-wrap card__img-wrap${noImg}">
            <input
              type="file"
              class="card__img-input visually-hidden"
              name="img"
            />
            <img
              src="${card.src}"
              alt="${card.alt}"
              class="card__img"
            />
          </label>

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input
                type="radio"
                id="color-black-5"
                class="card__color-input card__color-input--black visually-hidden"
                name="color"
                value="black"
              />
              <label
                for="color-black-5"
                class="card__color card__color--black"
                >black</label
              >
              <input
                type="radio"
                id="color-yellow-5"
                class="card__color-input card__color-input--yellow visually-hidden"
                name="color"
                value="yellow"
              />
              <label
                for="color-yellow-5"
                class="card__color card__color--yellow"
                >yellow</label
              >
              <input
                type="radio"
                id="color-blue-5"
                class="card__color-input card__color-input--blue visually-hidden"
                name="color"
                value="blue"
              />
              <label
                for="color-blue-5"
                class="card__color card__color--blue"
                >blue</label
              >
              <input
                type="radio"
                id="color-green-5"
                class="card__color-input card__color-input--green visually-hidden"
                name="color"
                value="green"
                checked
              />
              <label
                for="color-green-5"
                class="card__color card__color--green"
                >green</label
              >
              <input
                type="radio"
                id="color-pink-5"
                class="card__color-input card__color-input--pink visually-hidden"
                name="color"
                value="pink"
              />
              <label
                for="color-pink-5"
                class="card__color card__color--pink"
                >pink</label
              >
            </div>
          </div>
        </div>

        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;

  newCardsList += newCard;
};

const onFilterClick = function () {
  let count = getRandomInt(0, 10);
  newCardsList = ``;
  boardTasks.innerHTML = ``;

  for (let i = 0; i < count; i++) {
    drawCard(cardsData[0]);
  }

  boardTasks.insertAdjacentHTML(`beforeend`, newCardsList);
};

filterContainer.innerHTML = ``;
boardTasks.innerHTML = ``;

filters.forEach((filter) => {
  let i = filters.indexOf(filter);
  drawFilter(filter, filtersCount[i]);
});
filterContainer.insertAdjacentHTML(`beforeend`, newFiltersList);

const filtersList = filterContainer.querySelectorAll(`.filter__label`);

filtersList.forEach((filterItem) => filterItem.addEventListener(`click`, onFilterClick));

cardsData.forEach((cd) => drawCard(cd));
boardTasks.insertAdjacentHTML(`beforeend`, newCardsList);
