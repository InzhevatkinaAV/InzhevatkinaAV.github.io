const quest = ['Клад зарыт там, где встретились вода и камень.',
    'А еще я помню осень, 5 ноября. <br>Стемнело, шел дождь. <br>Совсем сгустились тучи. <br>Вела меня дорога в ночь, <br>за темный лес дремучий.',
    'От леса дракона на юго-востоке до пещеры троллей, сотворенной звёздами. <br>От южной крепости до верхнего озера.'];
const trueExamenatorAnswer = ['Хм, почти в точку! Почти...<br><br>Ладно, тяните следующий билет.',
    'Клады не так просто искать! Но первые буквы строк о многом могут рассказать. <br><br>Тяните следующий билет.',
    'Так-так... сотворённой звёздами - северо-запад... А вот и мимо! <br><br>Подойдите поближе, сейчас посчитаем, сколько Вы обнаружили кладов.'];
const falseExamenatorAnswer = ['Верно! Вода - водоем, а камень - горы. <br><br>Тяните следующий билет.',
    'Верно! Первые буквы строк о многом могут рассказать. <br><br>Тяните следующий билет.',
    'Так-так... сотворённой звёздами - северо-запад... Клад Ваш! <br><br>Подойдите поближе, сейчас посчитаем, сколько Вы обнаружили кладов.'];
const trueAnswer = [16, 12, 28];
const resultText = ['Вы не нашли ни одного клада, потрясающе! <br><br>Получите справку о том, что Вы пытались стать кладоискателем.',
    'Вы нашли один клад из трёх. <br><br>Получите диплом приемлемого кладоискателя.',
    'Вы нашли два клада из трёх. <br><br>Получите диплом хорошего кладоискателя.',
    'Вы нашли все три клада! <br><br>Получите диплом выдающегося кладоискателя.'];
const diplom = ['',
    '',
    '',
    ''];

const startButton = document.querySelector('.answers_wrapper');

startButton.addEventListener('touched', function(e) {
    e.preventDefault();
    e.target.click();
    start(e);
});

startButton.addEventListener('click', function(e) {
    start(e);
});

function start(e) {
    if (e.target.classList.contains('answer')) {
        const startScreen = document.querySelector('.start-screen');
        const answersWrapper = startScreen.querySelector('.answers_wrapper');
        answersWrapper.style.display = 'none';

        const wrapperForMyMessages = startScreen.querySelector('.wrapper-for-my-messages');

        const message = wrapperForMyMessages.getElementsByTagName('p');
        message[0].innerHTML = e.target.closest('.answer').innerHTML;

        wrapperForMyMessages.classList.remove('invisible');

        setTimeout(showMessageExamenator, 500);

        function showMessageExamenator() {
            const messageExamenatorStart = startScreen.querySelector('.message-examenator-start');
            messageExamenatorStart.style.display = 'block';
            messageExamenatorStart.style.opacity = 1;
        }
        
        setTimeout(showTickets, 1000);

        function showTickets() {
            const ticketsWrapper = startScreen.querySelector('.tickets_wrapper');
            ticketsWrapper.style.opacity = 1;
        }
    }
}

let ticketsWrapper = document.querySelector('.tickets_wrapper');
let counter = 0;
let counterTrue = 0;
let counterFalse = 0;

//Выбор ячейки на карте
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('map-item')) {
        const questScreen =  document.querySelector('.quest-screen');
        const selectedMapItem = questScreen.querySelector('.map-item_selected');

        if (selectedMapItem) selectedMapItem.classList.remove('map-item_selected');

        e.target.classList.add('map-item_selected')
    }

    if (e.target.classList.contains('ticket') && counter < 3) {
        removeQuestScreen();
        showQuestScreen();
    } else if (e.target.classList.contains('complete') && counter === 3) {
        removeQuestScreen();
        showFinalScreen();
    }

    function showQuestScreen() {
        const startScreen = document.querySelector('.start-screen');
        startScreen.classList.add('invisible'); 

        setQuest();
        const questScreen =  document.querySelector('.quest-screen');
        questScreen.classList.remove('invisible');

        removeGrid();
        drawGrid();
    }

    function setQuest() {
        const questScreen =  document.querySelector('.quest-screen');
        const questionWrapper = questScreen.querySelector('.question_wrapper');
        const question = questionWrapper.getElementsByTagName('p');

        question[0].innerHTML = quest[counter];
    }

    function removeQuestScreen() {
        const questScreen =  document.querySelector('.quest-screen');
        questScreen.classList.add('invisible');

        const answersWrapper = questScreen.querySelector('.answers_wrapper');
        answersWrapper.style.display = 'flex';

        const wrapperForMyMessages = questScreen.querySelector('.wrapper-for-my-messages');
        wrapperForMyMessages.classList.add('invisible');

        const messageExamenator = questScreen.querySelector('.message-examenator-answer');
        messageExamenator.style.opacity = 0;
        setTimeout(messageExamenator.style.display = 'none', 500);
        messageExamenator.style.backgroundColor = 'var(--message-neutral)';

        ticketsWrapper = questScreen.querySelector('.tickets_wrapper');
        ticketsWrapper.style.opacity = 0;

        const complete = questScreen.querySelector('.complete');
        complete.classList.add('.invisible');

        removeGrid();
    }

    function drawGrid() {
        const map = document.querySelector('.map');

        for (let i = 0; i < 36; i++) {
            const div = document.createElement('div');
            div.classList.add('map-item');
            map.append(div);
        }
    }

    function removeGrid() {
        const map = document.querySelector('.map');
        map.innerHTML = '';
    }

    function showFinalScreen() {
        const finishScreen = document.querySelector('.finish-screen');

        const resultWrapper = finishScreen.querySelector('.result_wrapper');
        const result = resultWrapper.getElementsByTagName('p');

        result[0].innerHTML = resultText[counterTrue];

        finishScreen.classList.remove('invisible');
    }
});

//Подтверждение выбора
const confirmButton = document.querySelector('.confirm');
confirmButton.addEventListener('touched', function(e) {
    e.preventDefault();
    e.target.click();
    confirmButtonEvent(e);
});

confirmButton.addEventListener('click', function(e) {
    confirmButtonEvent(e);
});

function confirmButtonEvent(e) {
    const questScreen =  document.querySelector('.quest-screen');
    const selectedMapItem = questScreen.querySelector('.map-item_selected');

    if (!selectedMapItem) return;

    if (selectedMapItem) {
        const map = questScreen.querySelector('.map');
        const mapItems = map.childNodes;

        let answer = mapItems[trueAnswer[counter]].classList.contains('map-item_selected');

        const answersWrapper = questScreen.querySelector('.answers_wrapper');
        answersWrapper.style.display = 'none';

        const wrapperForMyMessages = questScreen.querySelector('.wrapper-for-my-messages');
        wrapperForMyMessages.classList.remove('invisible');

        setTimeout(showMessageExamenator, 500);

        function showMessageExamenator() {
            const messageExamenator = questScreen.querySelector('.message-examenator-answer');
            const examenatorAnswer = messageExamenator.getElementsByTagName('p');

            if (!answer) {
                messageExamenator.style.backgroundColor = 'var(--message-negative)';
                selectedMapItem.classList.add('map-item_false');
                examenatorAnswer[0].innerHTML = trueExamenatorAnswer[counter - 1];
                counterFalse++;
            } else {
                messageExamenator.style.backgroundColor = 'var(--message-positive)';
                selectedMapItem.classList.add('map-item_true');
                examenatorAnswer[0].innerHTML = falseExamenatorAnswer[counter - 1];
                counterTrue++;
            }
            messageExamenator.style.display = 'block';
            messageExamenator.style.opacity = 1;
        }
        
        counter++;

        if (counter < 3) {
            setTimeout(showTickets, 1000);
        } else {
            setTimeout(showFinish, 1000);
        }

        function showTickets() {
            ticketsWrapper = questScreen.querySelector('.tickets_wrapper');
            ticketsWrapper.style.opacity = 1;
        }

        function showFinish() {
            ticketsWrapper = questScreen.querySelector('.tickets_wrapper');
            ticketsWrapper.style.display = 'none';

            const complete = questScreen.querySelector('.complete');
            complete.classList.remove('invisible');
        }
    }
}