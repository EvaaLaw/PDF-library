const { jsPDF } = require('jspdf');

const doc = new jsPDF();
doc.text("Hello, World!", 10,10);
doc.save("test_jsPDF_PDF.pdf");

// run node app.js will get the test_jsPDF_PDF.pdf