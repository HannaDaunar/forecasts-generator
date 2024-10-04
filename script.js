/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


function generateRandomValue(min, max) {
    const number = Math.random() * (max - min) + min;
    return +number.toFixed();
}
const forecastItemTemplate = document.querySelector('#forecast-item');

function makeForecastByTemplate(text, probability) {
    const myForecastItem = forecastItemTemplate.content.cloneNode(true);
    myForecastItem.querySelector('.forecast-item h3').textContent = text;
    myForecastItem.querySelector('.forecast-item p').textContent = probability;
    return myForecastItem;
}

const sendButton = document.querySelector('.forecast-btn');
sendButton.addEventListener('click', function() {

    const predictionNumber = generateRandomValue(1, 5);
    let predictionText = "";

    if (predictionNumber == 1) {
        predictionText = "Все будет супер!";
    } else if (predictionNumber == 2) {
        predictionText = "Будешь чаще улыбаться: все мечты начнут сбываться!";
    } else if (predictionNumber == 3) {
        predictionText = "Сегодня вечером тебя ждет сюрприз!";
    } else if (predictionNumber == 4) {
        predictionText = "Радости много не бывает - тебя ждет еще одна!";
    } else {
        predictionText = "Помни, все, что ты можешь вообразить - реально!";
    }
    const newPrediction = document.querySelector('.current-forecast h1');
    newPrediction.textContent = predictionText;
    const newProbability = document.querySelector('.current-forecast p');
    newProbability.textContent = `Вероятность: ${generateRandomValue(0, 100) + "%"}`

    const newForecastItem = makeForecastByTemplate(newPrediction.textContent, newProbability.textContent);
    const containerForecasts = document.querySelector('.forecasts');
    containerForecasts.prepend(newForecastItem);

})