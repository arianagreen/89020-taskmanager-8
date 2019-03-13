const msPerDay = 24 * 60 * 60 * 1000;

const tasksData = new Array(10)
  .fill()
  .map(() => {
    return {
      title: [
        `Изучить теорию`,
        `Сделать домашку`,
        `Пройти интенсив на соточку`
      ][Math.floor(Math.random() * 3)],
      dueDate: new Date(Date.now() - 7 * msPerDay + Math.floor(Math.random() * 14) * msPerDay),
      tags: new Set([
        `homework`,
        `theory`,
        `practice`,
        `intensive`,
        `keks`,
        `procrastinatination`,
        `job`
      ].sort(() => {
        return Math.random() - 0.5;
      })
      .slice(0, Math.floor(Math.random() * 4))),
      picture: `//picsum.photos/100/100?r=${Math.random()}`,
      color: [`black`, `yellow`, `blue`, `green`, `pink`][Math.floor(Math.random() * 5)],
      repeatingDays: {
        'mo': true,
        'tu': false,
        'we': true,
        'th': false,
        'fr': false,
        'sa': true,
        'su': false,
      },
      isFavorite: true,
      isDone: true
    };
  });

export default tasksData;
