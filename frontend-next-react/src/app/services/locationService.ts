export async function fetchLocations() {
    const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    const apiKey: string | undefined = process.env.API_KEY;

    if (!apiUrl || !apiKey) {
        throw new Error('API_URL or API_KEY is not defined');
    }

    const headers = new Headers({
        'Content-Type': 'application/json',
        'x-api-key': apiKey || '',
    });

    const response: Response = await fetch(`${apiUrl}locations`, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Failed to fetch locations');
    }

    const result = await response.json();
    return result.data;
}
