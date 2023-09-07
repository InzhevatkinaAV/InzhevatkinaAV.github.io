import { start } from "./startScreen.js";
import { checkMap, confirmButtonEvent, showNextScreen } from "./questsScreen.js";

//Отслеживания события начала игры
const startButton = document.querySelector('.answers_wrapper');
startButton.addEventListener('touched', function(e) {
    e.preventDefault();
    e.target.click();
    start(e);
});

startButton.addEventListener('click', function(e) {
    start(e);
});

//Отслеживание выбора координаты на карте, анализ пора ли завершать игру
document.addEventListener('click', function(e) {
    checkMap(e);
    showNextScreen(e);
});

//Подтверждение выбора координаты на карте
const confirmButton = document.querySelector('.confirm');
confirmButton.addEventListener('touched', function(e) {
    e.preventDefault();
    e.target.click();
    confirmButtonEvent();
});

confirmButton.addEventListener('click', function(e) {
    confirmButtonEvent();
});