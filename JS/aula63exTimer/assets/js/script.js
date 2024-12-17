function clock() {
    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;

    document.addEventListener('click', (e) => {
        const element = e.target;

        if (element.classList.contains('start')) startClock();
        if (element.classList.contains('pause')) pauseClock();
        if (element.classList.contains('reset')) resetClock();
    })

    function startClock() {
        clearInterval(timer);
        clock.classList.remove('paused');
        timer = setInterval(() => {
            seconds++;
            clock.innerHTML = getTimeInSeconds(seconds);
        }, 1000)
    }

    function pauseClock() {
        clearInterval(timer);
        clock.classList.add('paused');
    }

    function resetClock() {
        seconds = 0;
        clearInterval(timer);
        clock.classList.remove('paused');
        clock.innerHTML = getTimeInSeconds(seconds);
    }

    function getTimeInSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: "UTC",
        });
    }
}

clock();

