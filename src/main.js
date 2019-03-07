import makeFilter from './make-filter.js';
import makeCard from './make-card.js';

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

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min; // Возвращает случайное целое число между min (включительно) и max (не включая max)

const renderFilters = (dist) => {
  let filtersArray = [];

  filters.forEach((filter) => {
    let i = filters.indexOf(filter);
    filtersArray.push(makeFilter(filter, filtersCount[i]));
  });

  dist.insertAdjacentHTML(`beforeend`, filtersArray.join(``));
};

const renderCards = (dist) => {
  let cardsArray = [];
  cardsData.forEach((card) => cardsArray.push(makeCard(card)));
  dist.insertAdjacentHTML(`beforeend`, cardsArray.join(``));
};

const onFilterClick = function () {
  boardTasks.innerHTML = ``;
  let count = getRandomInt(1, 10);

  const tasks = new Array(count)
    .fill()
    .map(() => makeCard(cardsData[0]));
  boardTasks.insertAdjacentHTML(`beforeend`, tasks.join(``));
};

filterContainer.innerHTML = ``;
boardTasks.innerHTML = ``;

renderFilters(filterContainer);
renderCards(boardTasks);

const filtersList = filterContainer.querySelectorAll(`.filter__label`);

filtersList.forEach((filterItem) => filterItem.addEventListener(`click`, onFilterClick));
