$(document).ready(
    function () {
        $("#approvedDish").submit(function (event) {
            // Prevent the form from submitting via the browser.
            event.preventDefault();
            ajaxPost();
        });

        function ajaxPost() {
            var dish = {
                id: $("#dishId").val()
            }
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "approvedDish",
                success: function () {
                    showSuccessMessage1();
                },
                data: JSON.stringify(dish),
                dataType: 'json'
            });
        }
    });

function showSuccessMessage1() {
    $("#AddOnProcessing").fadeOut();
    $("#AddOnProcessing").fadeIn(1000);
    setTimeout(function () {
        $("#AddOnProcessing").fadeOut(1000);
    }, 3000);
}
