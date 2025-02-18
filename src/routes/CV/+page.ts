// serve the user the pdf at $lib/RaeNoble-CV.pdf

export async function load() {
    const response = await fetch('$lib/RaeNoble-CV.pdf');
    const blob = await response.blob();
    return URL.createObjectURL(blob);
}