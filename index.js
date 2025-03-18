'use strict';


Event.prototype.addParticipant = function (participant) {
    if (!(participant instanceof Participant)) {
        console.log('Участник не объект Participant');
        return;
    }
    this.participants.push(participant);
};



function Participant(name, email) {
    if (!new.target) return new Participant(name, email);
    this.name = name;
    this.email = email;
};

function Event(title, date) {
    this.title = title;
    this.date = date;
    this.participants = [];
};


Object.defineProperty(Event.prototype, 'listParticipants', {
    value: function listParticipants() {
        if (this.participants.length === 0) {
            return `Участников в событии "${this.title}" нет.`;
        }

        const participantNames = this.participants.map(participant => participant.name);
        return `Участники "${this.title}" : ${participantNames.join(', ')}.`;
    },
    writable: true,
    enumerable: true,
    configurable: true
});


Object.defineProperty(Event.prototype, 'findParticipantByEmail', {
    value: function findParticipantByEmail(email) {
        return this.participants.find(participant => participant.email === email);
    },
    writable: true,
    enumerable: true,
    configurable: true
});


//Создание участников
const participant1 = new Participant('Dasha', 'dashakotsuba@mail.ru');
const participant2 = new Participant('Roma', 'roma1995@gmail.com');

//специально написала без new, так как в функции-консутркторе Participant есть проверка

const participant3 =  Participant('Jordan', 'jordan@gmail.com');
const participant4 =  Participant('Nick', 'nicksmith@gmail.com');

//Создание событий

const event1 = new Event('Webinar', '2024-10-30');
const event2 = new Event('Conference', '2024-12-01');

//Добавление участников к событиям

event1.addParticipant(participant1);
event1.addParticipant(participant3);


event2.addParticipant(participant2);
event2.addParticipant(participant4);

//Вывод информации об участниках

console.log(event1.listParticipants());
console.log(event2.listParticipants());
console.log(event2.findParticipantByEmail('roma1995@gmail.com'));
console.log(event1.findParticipantByEmail('dashakotsuba@mail.ru'));