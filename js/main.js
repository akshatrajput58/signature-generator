$(document).ready(function() {
  var $sigdiv = $("#signature");
  $sigdiv.jSignature();
  var datapair = $sigdiv.jSignature("getData", "svgbase64");

  $("#signature").bind("change", function(e) {
    var data = $("#signature").jSignature("getData");
    $("#signature_capture").val(data);
    $("#signature_capture").show();

    // enable copy button and change cursor to pointer
    $("#copydata").prop("disabled", false);
    $("#copydata").css("cursor", "pointer");
  });

  $("#reset").click(function(e) {
    $("#signature").jSignature("clear");
    var data = $("#signature").jSignature("getData");
    $("#signature_capture").val("");

    // disable copy button and change cursor to not-allowed
    $("#copydata").prop("disabled", true);
    $("#copydata").css("cursor", "not-allowed");

    e.preventDefault();
  });

  $("#copydata").click(function(e) {
    var dataToCopy = $("#signature_capture").val();

    // copy data to clipboard
    navigator.clipboard.writeText(dataToCopy).then(function() {
      alert("Data copied to clipboard 👏👏👏!");
    }, function() {
      alert("Failed to copy data to clipboard 😒😒😒.");
    });

    e.preventDefault();
  });

  // disable copy button and change cursor to not-allowed if there is no data in the textarea
  if ($("#signature_capture").val() === "") {
    $("#copydata").prop("disabled", true);
    $("#copydata").css("cursor", "not-allowed");
  }
});
