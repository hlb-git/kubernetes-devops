const uuid4 = require('uuid4');

function sleep(millisecond) {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
}

async function logInterval(log) {
    console.log(log);
    await sleep(5000);
}

async function main(){
    while (true) {
        let logData = `${Date()}: ${uuid4()}`;
        await logInterval(logData);
    }
}

main();
