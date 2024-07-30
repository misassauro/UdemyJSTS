const date = new Date("2024-07-30 13:30:15:100");
console.log("Data completa:", date);
console.log("Dia:", date.getDate());
console.log("Mês:", date.getMonth() + 1); // meses são contados a partir do zero (0 - janeiro até 11 - dezembro)
console.log("Ano:", date.getFullYear());
console.log("Hora:", date.getHours());
console.log("Minutos:", date.getMinutes());
console.log("Segundos:", date.getSeconds());
console.log("Milisegundos:", date.getMilliseconds());
console.log("Dia da semana:", date.getDay()); //0 - domingo / 6 - sábado
console.log(Date.now()); // isso retornou 1722357422249 (milisegundos contados a partir do marco 0, isto é, 01/01/1970 00:00:00);
console.log(Date(1722357422249)); // isso retorna Tue Jul 30 2024 13:38:18 GMT-0300 (Horário Padrão de Brasília)
