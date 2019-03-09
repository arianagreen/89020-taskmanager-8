// console.log(`wapapapapapow`)
import tasksData from './data.js';
import makeFilter from './make-filter.js';
import makeTask from './make-task.js';

const filterContainer = document.querySelector(`.main__filter`);
const boardTasks = document.querySelector(`.board__tasks`);

const filters = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];
const filtersCount = [`5`, `13`, `154`, `19`, `0`, `47`, `63`];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min; // Возвращает случайное целое число между min (включительно) и max (не включая max)

const renderFilters = (dist) => {
  let filtersArray = [];

  for (const filter of filters) {
    let i = filters.indexOf(filter);
    filtersArray.push(makeFilter(filter, filtersCount[i]));
  }

  dist.insertAdjacentHTML(`beforeend`, filtersArray.join(``));
};

const renderTasks = (dist) => {
  let tasksArray = [];
  tasksData.forEach((task) => tasksArray.push(makeTask(task)));
  dist.insertAdjacentHTML(`beforeend`, tasksArray.join(``));
};

const onFilterClick = function () {
  boardTasks.innerHTML = ``;
  let count = getRandomInt(1, 10);

  const tasks = new Array(count)
    .fill()
    .map(() => makeTask(tasksData[0]));
  boardTasks.insertAdjacentHTML(`beforeend`, tasks.join(``));
};

filterContainer.innerHTML = ``;
boardTasks.innerHTML = ``;

renderFilters(filterContainer);
renderTasks(boardTasks);

const filtersList = filterContainer.querySelectorAll(`.filter__label`);

filtersList.forEach((filterItem) => filterItem.addEventListener(`click`, onFilterClick));
