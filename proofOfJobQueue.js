async function queueTest() {
    setTimeout(() => console.log('Timed Out and callback displayed'), 0);
    return new Promise((resolve) => {
        for(let i =0 ; i< 10; i++) {
            console.log(i);
        }
        return resolve('promise resolved!');

    });
};

queueTest().then(console.log);
// Output
// promise resolved!
// Timed out and callback displayed

// Because JOB QUEUE has higher priority than callback queue