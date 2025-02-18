// serve the user the pdf at $lib/RaeNoble-CV.pdf

export function load() {
    return fetch('$lib/RaeNoble-CV.pdf')
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob));
}