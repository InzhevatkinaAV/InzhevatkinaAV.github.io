import { quest, trueAnswer, 
    trueExamenatorAnswer, falseExamenatorAnswer } from "./data.js";
import { finish } from './finalScreen.js'

export function showNewQuest(counter) {
    removeQuestScreen();
    showQuestScreen(counter);
}

let counter = 0;
let counterTrue = 0;

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

export function removeQuestScreen() {
    const questScreen =  document.querySelector('.quest-screen');
    questScreen.classList.add('invisible');

    const answersWrapper = questScreen.querySelector('.answers_wrapper');
    answersWrapper.style.display = 'flex';

    const wrapperForMyMessages = questScreen.querySelector('.wrapper-for-my-messages');
    wrapperForMyMessages.classList.add('invisible');

    const messageExamenator = questScreen.querySelector('.message-examenator-answer');
    messageExamenator.style.opacity = 0;
    messageExamenator.style.display = 'none';
    messageExamenator.classList.remove('message-examenator-answer_true');
    messageExamenator.classList.remove('message-examenator-answer_false');

    const ticketsWrapper = questScreen.querySelector('.tickets_wrapper');
    ticketsWrapper.style.display = 'none';
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

export function confirmButtonEvent() {
    const questScreen =  document.querySelector('.quest-screen');
    const selectedMapItem = questScreen.querySelector('.map-item_selected');

    if (!selectedMapItem) return;

    if (selectedMapItem) {
        const map = questScreen.querySelector('.map');
        const mapItems = map.childNodes;

        const answer = mapItems[trueAnswer[counter]].classList.contains('map-item_selected');

        const answersWrapper = questScreen.querySelector('.answers_wrapper');
        answersWrapper.style.display = 'none';

        const wrapperForMyMessages = questScreen.querySelector('.wrapper-for-my-messages');
        wrapperForMyMessages.classList.remove('invisible');

        counter++;
        setTimeout(function() {
            showMessageExamenator(answer, selectedMapItem)
        }, 500);

        if (counter < 3)
            setTimeout(showTickets, 1000);
        else 
            setTimeout(showCompleteButton, 1000);

        function showTickets() {
            const ticketsWrapper = questScreen.querySelector('.tickets_wrapper');
            ticketsWrapper.style.display = 'flex';
            setTimeout(function() {
                ticketsWrapper.style.opacity = 1;
            }, 1000);
        }
        
        function showCompleteButton() {
            const ticketsWrapper = questScreen.querySelector('.tickets_wrapper');
            ticketsWrapper.style.display = 'none';
        
            const complete = questScreen.querySelector('.complete');
            complete.classList.remove('invisible');
        }
    }
}

function showMessageExamenator(answer, selectedMapItem) {
    const questScreen = document.querySelector('.quest-screen');
    const messageExamenator = questScreen.querySelector('.message-examenator-answer');
    const examenatorAnswer = messageExamenator.getElementsByTagName('p');

    if (!answer) {
        messageExamenator.classList.add('message-examenator-answer_false');
        selectedMapItem.classList.add('map-item_false');
        examenatorAnswer[0].innerHTML = trueExamenatorAnswer[counter - 1];
    } else {
        messageExamenator.classList.add('message-examenator-answer_true');
        selectedMapItem.classList.add('map-item_true');
        examenatorAnswer[0].innerHTML = falseExamenatorAnswer[counter - 1];
        counterTrue++;
    }
    messageExamenator.style.display = 'block';
    setTimeout(function() {
        messageExamenator.style.opacity = 1;
    }, 500);
}

export function checkMap(e) {
    if (e.target.classList.contains('map-item')) {
        const questScreen =  document.querySelector('.quest-screen');
        const selectedMapItem = questScreen.querySelector('.map-item_selected');

        if (selectedMapItem) 
            selectedMapItem.classList.remove('map-item_selected');

        e.target.classList.add('map-item_selected');
    }
}

export function showNextScreen(e) {
    if (e.target.classList.contains('ticket') && counter < 3) {
        e.target.classList.remove('ticket');
        e.target.classList.add('ticket-used');
        showNewQuest(counter);
    } else if (e.target.classList.contains('complete') && counter === 3)
        finish(counterTrue);
}