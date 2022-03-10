$(document).ready(function() {
    $('#register').submit(function() {
        $.ajax({
            type: 'post',
            data: {
                url: '../Model/login.php',
                email: $('#email').val(),
                pass: $('#pass').val(),
            },
            success: function(data) {},
        });
    });
});