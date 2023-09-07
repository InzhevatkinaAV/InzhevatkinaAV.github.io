const startScreen = document.querySelector('.start-screen');

export function start(e) {
    if (e.target.classList.contains('answer')) {
        const answersWrapper = startScreen.querySelector('.answers_wrapper');
        answersWrapper.style.display = 'none';

        const wrapperForMyMessages = startScreen.querySelector('.wrapper-for-my-messages');
        const message = wrapperForMyMessages.getElementsByTagName('p');
        message[0].innerHTML = e.target.closest('.answer').innerHTML;

        wrapperForMyMessages.classList.remove('invisible');

        setTimeout(showMessageExamenator, 500);
        setTimeout(showTickets, 1000);
    }
}

function showMessageExamenator() {
    const messageExamenatorStart = startScreen.querySelector('.message-examenator-start');
    messageExamenatorStart.style.opacity = 1;
}

function showTickets() {
    const ticketsWrapper = startScreen.querySelector('.tickets_wrapper');
    ticketsWrapper.style.display = 'flex';
    setTimeout(function() {
        ticketsWrapper.style.opacity = 1;
    }, 500);
}