import { getMessage } from './hello';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
    button.addEventListener('click', () => {
        getMessage(input.value);
    });
}

// console.log(getMessage()); // Hello World!