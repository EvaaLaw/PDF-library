// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const generatePdf = require('./generatePdf');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         // Serve the HTML page
//         const indexPath = path.join(__dirname, '..', 'public', 'index.html');
//         fs.readFile(indexPath, (err, data) => {
//             if (err) {
//                 res.writeHead(500, {'Content-Type': 'text/html'});
//                 res.end('Internal Server Error');
//             } else {
//                 res.writeHead(200, {'Content-Type': 'text/html'});
//                 res.end(data);
//             }
//         });
//     } else if (req.url === '/generate-pdf') {
//         // Generate PDF
//         generatePdf((pdfBuffer) => {
//             res.writeHead(200, {
//                 'Content-Type': 'application/pdf',
//                 'Content-Disposition': 'attachment; filename="test_jsPDF_PDF.pdf"'
//             });
//             res.end(pdfBuffer);
//         });
//     } else {
//         // Handle other requests
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         res.end('404 Not Found');
//     }
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
