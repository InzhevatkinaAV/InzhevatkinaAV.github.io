import { diplomImg, resultText } from './data.js';
import { removeQuestScreen } from './questsScreen.js';

export function finish(counterTrue) {
    removeQuestScreen();
    const finishScreen = document.querySelector('.finish-screen');

    const resultWrapper = finishScreen.querySelector('.result_wrapper');
    const result = resultWrapper.getElementsByTagName('p');

    result[0].innerHTML = resultText[counterTrue];
    const diplom = finishScreen.querySelector('.diplom');

    diplom.src = diplomImg[counterTrue];

    finishScreen.classList.remove('invisible');
}