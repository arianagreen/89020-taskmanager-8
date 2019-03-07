export default (name, count, state = ``) => {
  // if (newFiltersList.length === 0) {
  //   state = `checked`;
  // }

  if (count === `0`) {
    state = `disabled`;
  }

  return `<input
    type="radio"
    id="filter__${name}"
    class="filter__input visually-hidden"
    name="filter"
    ${state}
  />
  <label for="filter__${name}" class="filter__label">
    ${name} <span class="filter__${name}-count">${count}</span></label
  >`;
};
