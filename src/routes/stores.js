import { writable } from 'svelte/store';

export const progress = writable({
    math: 'false',
    code: 'false',
    cj: 'false',
    gaming: 'false'
});