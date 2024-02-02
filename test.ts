import chalk from 'chalk';


function sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
}

function randomBoolean() {
    return Math.random() >= 0.7;
}


function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let i = 0;


while (true) {
    i++;

    const smail = randomBoolean();
    if (smail) {
        console.log(`${new Date()}:     ${chalk.bold(chalk.green('Смайнилось!'))}, попытка ${i}`)
    } else {
        console.log(`${new Date()}:     ${chalk.bold(chalk.red('Не смайнилось!'))}, попытка ${i}`)
    }
    sleep(randomInt(1000, 5000));
}
