const path = require(`path`);

module.exports = {
  mode: `development`, // Режим сборки
  entry: `./src/main.js`, // Точка входа приложения
  output: { // Настройка выходного файла
    path: path.join(__dirname, `public`),
    filename: `bundle.js`
  },
  devtool: `source-map`, // Подключаем sourcemaps
  module: { // Расширяем функциональность лоадерами
    rules: [{
    test: /\.js$/, // Проверка типов файлов, над которыми будет работать лоадерами
    use: `babel-loader` // Лоадер, который будет применен
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, `public`), // Где искать сборку
    publicPath: 'http://localhost:8080/', // Веб адрес сборки
    compress: true, // Сжатие
    watchContentBase: true
  }
};
