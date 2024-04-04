$(document).ready(function () {
  $("#cmd").click(function () {
    var doc = new jsPDF();
    doc.fromHTML($("#target").html(), 15, 15, {
      width: 170,
    });
    doc.save("sample-file.pdf");
  });
});
