const refs = {
    daysField: document.querySelector('span[data-value="days"]'),
    hoursField: document.querySelector('span[data-value="hours"]'),
    minsField: document.querySelector('span[data-value="mins"]'),
    secsField: document.querySelector('span[data-value="secs"]'),
}

class CountdownTimer {
    constructor({onTick, targetDate}) {
        this.onTick = onTick
        this.targetDate = targetDate
    }

    start() {
        const date = this.targetDate;
        setInterval(() => {
            const currentDate = Date.now();
            const time = date - currentDate;
            const timer = this.getTimeComponents(time);
            this.onTick(timer);
        }, 1000);
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
}

const timer = new CountdownTimer({
    onTick: uptadeTimer,
    selector: '#timer-1',
    targetDate: new Date('Dec 1, 2020'),
});

timer.start();

function uptadeTimer({days, hours, mins, secs}) {
    refs.daysField.textContent = days;
    refs.hoursField.textContent = hours;
    refs.minsField.textContent = mins;
    refs.secsField.textContent = secs;
}