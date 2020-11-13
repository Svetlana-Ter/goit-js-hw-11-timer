class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate
        this.selector = selector
        this.daysField = document.querySelector(`${selector} [data-value="days"]`)
        this.hoursField = document.querySelector(`${selector} [data-value="hours"]`)
        this.minsField = document.querySelector(`${selector} [data-value="mins"]`)
        this.secsField = document.querySelector(`${selector} [data-value="secs"]`)
    }

    start() {
        const date = this.targetDate;
        setInterval(() => {
            const currentDate = Date.now();
            const time = date - currentDate;
            const timer = this.getTimeComponents(time);
            this.uptadeTimer(timer);
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

    uptadeTimer({days, hours, mins, secs}) {
        this.daysField.textContent = days;
        this.hoursField.textContent = hours;
        this.minsField.textContent = mins;
        this.secsField.textContent = secs;
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 11, 2020'),
});

timer.start();