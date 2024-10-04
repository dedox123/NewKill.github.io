$(document).ready(function () {
    $("#reg-button").on("click", function (e) {
        e.preventDefault();

        var login = $("#reg-login").val();
        var password = $("#reg-pas").val();
        var confirmPassword = $("#reg-pas2").val();
        var email = $("#reg-mail").val();
        var captchaResponse = $("#g-recaptcha-response").val();

        if (password !== confirmPassword) {
            $("#reg-pas").notify("Пароли не совпадают", { position: "right" });
            return;
        }

        $.ajax({
            type: "POST",
            url: "backend/auth/register.php",
            data: {
                login: login,
                password: password,
                mail: email,
                "g-recaptcha-response": captchaResponse
            },
            dataType: "json",
            success: function (response) {
                if (response.status) {
                    window.location.href = "userpanel.php";
                } else {
                    $("#reg-button").notify(response.Message, { position: "right" });
                }
            },
            error: function () {
                alert("Ошибка при отправке данных на сервер");
            }
        });
    });

    $("#log-button").on("click", function (e) {
        e.preventDefault();

        var login = $("#log-login").val();
        var password = $("#log-password").val();
        var captchaResponse = $("#g-recaptcha-response").val();

        $.ajax({
            type: "POST",
            url: "backend/auth/login.php",
            data: {
                login: login,
                password: password,
                "g-recaptcha-response": captchaResponse
            },
            dataType: "json",
            success: function (response) {
                if (response.status) {
                    window.location.href = "userpanel.php";
                } else {
                    $("#log-login").notify(response.Message, { position: "right" });
                }
            },
            error: function () {
                alert("Ошибка при отправке данных на сервер");
            }
        });
    });
});