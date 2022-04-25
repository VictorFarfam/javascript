const myPromise = new Promise ((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    } , 2000);
});

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

    //sempre que voce quiser o resultado da "promise" voce precisa usar "await"