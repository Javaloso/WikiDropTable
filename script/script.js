import { fetchTranslatedName } from './items.js';
import { dropTableHead } from './parameters.js';
import { parameterTranslator } from './parameterTranslator.js';

const inputDrops = document.querySelector('#input');
const outputDrops = document.querySelector('#output');

const handleFetchItems = (item, lines, i, start, end) => {
    if (item.indexOf(start) != -1) {
        item = item.split(start);
        item = item[1].split(end);
        item = item[0].trim();
        
        const translatedName = fetchTranslatedName(item.toLowerCase());
        if (translatedName) {
            // Replace the item name with the translated name.
            lines[i] = lines[i].replace(item, translatedName);
        }
    }
};

const translateItemNames = () => {
    let lines = outputDrops.value.split('\n');

    for (let i = 0; i < lines.length; i++) {
        let item = lines[i];

        // Check if it has a name to be translated.
        handleFetchItems(item, lines, i, '=', '|')
        handleFetchItems(item, lines, i, '[[', ']')
    }

    outputDrops.value = lines.join('\n');
};


inputDrops.addEventListener('input', () => {
    outputDrops.value = inputDrops.value;

    parameterTranslator(inputDrops, outputDrops,dropTableHead)
    translateItemNames();
});

outputDrops.addEventListener('click', () => {
    outputDrops.select();
    document.execCommand('copy');

    // Unselect it all after copying
    const selection = window.getSelection();
    selection.removeAllRanges();

    setTimeout(() => {
        outputDrops.textContent = outputDrops.value;
    }, 1500);
});
