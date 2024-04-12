"use strict"; 

import { catalog } from './catalog.js';

const century = 19;
const search = 'Федор Достоевский';

function outputLanguage() {
    let set = new Set()
    
    for (let key in catalog) {
        let lang = catalog[key].language;

        if (set.has(lang)) {
            continue;
        }

        set.add(lang);
        console.log(lang);
    }
}

function outputCenturyBook(target_century) {
    for (let key in catalog) {
        let entry = catalog[key];
        let cent = Math.trunc(entry.year / 100) + 1;

        if (cent == target_century) {
            console.log(entry);
        }
    }
}

function outputSearchBook(target_text) {
    for (let key in catalog) {
        let entry = catalog[key];

        if (entry.title == target_text || entry.author == target_text) {
            console.log(entry);
        }
    }
}

outputLanguage();
//outputCenturyBook(century);
//outputSearchBook(search);