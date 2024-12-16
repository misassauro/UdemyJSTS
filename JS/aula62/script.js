function showHours() {
    let date = new Date;

    return date.toLocaleTimeString('pt-br', {hour12: false});
}

const timer = setInterval(() => {
    console.log(showHours());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 10000);

setTimeout(() => {
    console.log("Hello, world!");
}, 5000)