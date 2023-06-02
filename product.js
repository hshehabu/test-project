$(document).ready(
  function () {
  $(".select2").select2();

  function changeDateTime() {
    var dateTimeInput = document.getElementById("myDateTimeInput");
    dateTimeInput.value = "2023-06-02T12:34"; // Set the new value here
  }
  
});
