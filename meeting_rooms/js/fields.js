//Функции для работы с полями.

//Проверка: заполнены ли все обязательные к заполнению поля?
export function checkFields(selectTown, selectFloor, selectRoom, inputDate, timeInterval) {
	return (selectTown.value !== 'default' && selectFloor.value !== 'default' &&
		selectRoom.value !== 'default' && inputDate.value && timeInterval.value != 'default');
}

//Возвращение значений всех select'ов в значение по-умолчанию, очистка списка их возможных значений.
//Перевод select'а выбора интервала времени в неактивное состояние.
export function cleanFields(selectTown, selectFloor, selectRoom, inputDate, timeInterval, textareaComment) {
	selectTown.value = 'default';
	cleanSelect(selectTown);

	selectFloor.value = 'default';
	cleanSelect(selectFloor);

	selectRoom.value = 'default';
	cleanSelect(selectRoom);

	inputDate.value = '';
	
	timeInterval.value = 'default';
	cleanSelect(timeInterval);
	timeInterval.classList.remove('active_time');
	timeInterval.classList.add('non-ative_time');

	textareaComment.value = '';
}

export function cleanSelect(select) {
	while (select.childNodes.length > 1)
		select.removeChild(select.lastChild);

	const option = select.getElementsByTagName('option');
	option[0].selected = true;
}

//Перевод всех полей в состояние, недоступное для изменений.
export function blokFields(selectTown, selectFloor, selectRoom, inputDate, timeInterval, textareaComment) {
	selectTown.setAttribute("readonly", true);
	selectTown.style.pointerEvents = 'none';

	selectFloor.setAttribute("readonly", true);
	selectFloor.style.pointerEvents = 'none';

	selectRoom.setAttribute("readonly", true);
	selectRoom.style.pointerEvents = 'none';

	inputDate.setAttribute("readonly", true);
	inputDate.style.cursor = 'auto';

	timeInterval.setAttribute("readonly", true);
	timeInterval.style.pointerEvents = 'none';

	textareaComment.setAttribute("readonly", true);   
}

//Очистка и перевод select'а выбора интервала времени в состояние, недоступное для изменений. 
export function blokTimeInterval(timeInterval) {
	cleanSelect(timeInterval);
	timeInterval.classList.remove('active_time');
	timeInterval.classList.add('non-ative_time');
	timeInterval.style.pointerEvents = 'none';
}

//Перевод всех полей в состояние, доступное для изменений.
export function unblokFields(selectTown, selectFloor, selectRoom, inputDate, timeInterval, textareaComment) {
	selectTown.removeAttribute('readonly');
	selectTown.style.pointerEvents = '';

	selectFloor.removeAttribute('readonly');
	selectFloor.style.pointerEvents = '';

	selectRoom.removeAttribute('readonly');
	selectRoom.style.pointerEvents = '';

	inputDate.removeAttribute('readonly');
	inputDate.style.cursor = 'pointer';

	timeInterval.removeAttribute('readonly');
	timeInterval.style.pointerEvents = '';

	textareaComment.removeAttribute('readonly');
}

//Изменение смысла подзаголовков.
export function switchTitles(flag) {
	const placeTitle = document.querySelector('.place_title');
	const dateAndTimeTitle = document.querySelector('.date_and_time_title');

	if (flag) {
		placeTitle.innerHTML = 'Выбранное место:';
		dateAndTimeTitle.innerHTML = 'Выбранное время:';
		placeTitle.style.marginRight = '0px';
		dateAndTimeTitle.style.marginRight = '0px';
	} else {
		placeTitle.innerHTML = '*Выберете место:';
		dateAndTimeTitle.innerHTML = '*Выберете время:';
		placeTitle.style.marginRight = '5px';
		dateAndTimeTitle.style.marginRight = '5px';
	}
}

//Проверка: выбрана ли дата, которая уже прошла?
export function isPastTime(inputDate, timeInterval) {
	const inputDay = Number(inputDate.value.split('-')[2]);
	const inputMonth = Number(inputDate.value.split('-')[1]) - 1;
	const inputYear = Number(inputDate.value.split('-')[0]);

	const minDay = inputDate.min.split('-')[2];
	const minMonth = inputDate.min.split('-')[1] - 1;
	const minYear = inputDate.min.split('-')[0];

	const input = new Date(inputYear, inputMonth, inputDay);
	const min = new Date(minYear, minMonth, minDay);

	return input < min;
}

//Проверка: выбрана ли дата, которая наступит более чем через 6 месяцев?
//Сделано допущение, что бронировать переговорную комнату можно не ранее, чем за полгода.
export function isFarFutureTime(inputDate) {
	const inputDay = Number(inputDate.value.split('-')[2]);
	const inputMonth = Number(inputDate.value.split('-')[1]) - 1;
	const inputYear = Number(inputDate.value.split('-')[0]);

	const maxDay = inputDate.max.split('-')[2];
	const maxMonth = inputDate.max.split('-')[1] - 1;
	const maxYear = inputDate.max.split('-')[0];

	const input = new Date(inputYear, inputMonth, inputDay);
	const max = new Date(maxYear, maxMonth, maxDay);

	return input > max;
}