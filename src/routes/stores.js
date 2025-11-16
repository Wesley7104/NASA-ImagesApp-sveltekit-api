import { writable } from 'svelte/store';
import { format } from 'date-fns';

 
export const todaysDate = writable(format(new Date(), 'yyyy-MM-dd'));
export const initialDate = writable("2000-01-01"); 
export const currentImgDate = writable("2000-01-01");