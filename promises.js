const promisify = (item, delay) => {
    return new Promise((resolve) => {
      setTimeout(()=> resolve(item), delay);
    })
};

const a = () => promisify('Function a', 10000);
const b = () => promisify('Function b', 5000);
const c = () => promisify('Function c', 3000);

async function parallelPromise() {
    const promises = [a(), b(), c()];
    const [op1, op2, op3] = await Promise.all(promises);
    return `Finished executing promises in parallel --- ${op1}, ${op2}, ${op3}`;
}
parallelPromise().then(console.log);

async function racePromises() {
    const promises = [a(), b(), c()];
    const raceOp = await Promise.race(promises);
    return `First to win the race --- ${raceOp}`;
}

racePromises().then(console.log);

async function sequence() {
    const op1 = await a();
    const op2 = await b();
    const op3 = await c();
    return `Promises executed in sequence are ${op1}, ${op2} and ${op3}`;
}
sequence().then(console.log);