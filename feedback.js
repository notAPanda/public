var feedbackId = Math.random().toString(36).substring(7);

var header = document.createElement('div');
header.innerHTML = 'Czy instrukcja była dla Ciebie przydatna?';

var question = document.createElement('div');
question.innerHTML = 'Proszę napisz co stanowiło problem. Bardzo nam to pomoże rozwiązać go w przyszłości.';

var feedbackInput = document.createElement('textarea');

var sendFeedbackButton = document.createElement('button');
sendFeedbackButton.innerHTML = 'Wyślij';
sendFeedbackButton.addEventListener('click', function (e) {
    $.get('https://script.google.com/macros/s/AKfycbwP928r2gqqbzP46KF2hJvJtePAp8dupIfrCIxWHhkLzBtuXFY/exec', {
        url: window.location.href,
        answer: 'no',
        timestamp: new Date(),
        id: feedbackId,
        additional: feedbackInput.value
    });
    feedback.innerHTML = '';
    feedback.appendChild(thankYou);
});

var additionalFeedback = document.createElement('div');
additionalFeedback.appendChild(question);
additionalFeedback.appendChild(feedbackInput);
additionalFeedback.appendChild(sendFeedbackButton);

var thankYou = document.createElement('div');
thankYou.innerHTML = 'Dziękujemy za opinię :)';

var yesButton = document.createElement('button');
yesButton.innerHTML = 'Tak';
yesButton.addEventListener('click', function (e) {
    e.target.setAttribute('disabled', 'true');
    noButton.setAttribute('disabled', 'true');

    feedback.innerHTML = '';
    feedback.appendChild(thankYou);
    $.get('https://script.google.com/macros/s/AKfycbwP928r2gqqbzP46KF2hJvJtePAp8dupIfrCIxWHhkLzBtuXFY/exec', {
        url: window.location.href,
        answer: 'yes',
        timestamp: new Date(),
        id: feedbackId
    });
});

var noButton = document.createElement('button');
noButton.innerHTML = 'Nie';
noButton.addEventListener('click', function (e) {
    e.target.setAttribute('disabled', 'true');
    yesButton.setAttribute('disabled', 'true');

    feedback.appendChild(additionalFeedback);
    $.get('https://script.google.com/macros/s/AKfycbwP928r2gqqbzP46KF2hJvJtePAp8dupIfrCIxWHhkLzBtuXFY/exec', {
        url: window.location.href,
        answer: 'no',
        timestamp: new Date(),
        id: feedbackId
    });
});

var buttons = document.createElement('div');
buttons.appendChild(yesButton);
buttons.appendChild(noButton);

var feedback = document.getElementById('feedback');
feedback.appendChild(header);
feedback.appendChild(buttons);

