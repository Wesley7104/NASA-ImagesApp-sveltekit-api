import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    // Redirect old route format /YYYY-MM-DD to new query parameter format /?date=YYYY-MM-DD
    const date = params.date;
    
    // Validate date format (YYYY-MM-DD)
    if (date && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
        // Redirect to query parameter format
        throw redirect(301, `/?date=${date}`);
    }
    
    // If invalid date format, redirect to home
    throw redirect(301, '/');
}

