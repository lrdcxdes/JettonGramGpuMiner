"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
function sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
}
function randomBoolean() {
    return Math.random() >= 0.7;
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let i = 0;
while (true) {
    i++;
    const smail = randomBoolean();
    if (smail) {
        console.log(`${new Date()}:     ${chalk_1.default.bold(chalk_1.default.green('Смайнилось!'))}, попытка ${i}`);
    }
    else {
        console.log(`${new Date()}:     ${chalk_1.default.bold(chalk_1.default.red('Не смайнилось!'))}, попытка ${i}`);
    }
    sleep(randomInt(1000, 5000));
}
