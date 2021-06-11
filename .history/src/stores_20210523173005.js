import { writable } from 'svelte/store';

 
export let todaysDate = writable(0);
export const initialDate = writable(0); 
export let currentImgDate = writable(0);