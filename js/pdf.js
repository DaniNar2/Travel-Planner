function downloadPDF(){

let element=document.body

html2pdf().from(element).save("planning.pdf")

}