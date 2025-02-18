// serve the user the pdf at $lib/RaeNoble-CV.pdf

export function load({ params }){
  const file = '/src/lib/RaeNoble-CV.pdf';
  const pdf = import.meta.glob(file);

  return {
    status:200,
    headers: {
      "Content-type" : "application/pdf",
      "Content-Disposition": "attachment; filename="+params.file+".pdf"
    },
    body: pdf
  }
}
