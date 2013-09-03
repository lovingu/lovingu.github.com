(function ($) {
    var methods = {
        init: function () {
        },

        ContactSupportHandler: function () {
            var txtName = $("#txtName");
            var txtEmail = $("#txtEmail");
            var txtMessage = $("#txtMessage");

            var cgp_txtName = $("#cgp_txtName");
            var cgp_txtEmail = $("#cgp_txtEmail");
            var cgp_txtMessage = $("#cgp_txtMessage");

            cgp_txtName.removeClass("error");
            cgp_txtEmail.removeClass("error");
            cgp_txtMessage.removeClass("error");

            cgp_txtName.find(".error-message").remove();
            cgp_txtEmail.find(".error-message").remove();
            cgp_txtMessage.find(".error-message").remove();

            var error = new Array(); //{ container: '', element: '', isvalid: false });

            var regexp = new RegExp(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

            txtName.blur(function () {
                if (txtName.val() != '') {
                    cgp_txtName.removeClass("error");
                    cgp_txtName.find(".error-message").remove();
                }
            });
            txtEmail.blur(function () {
                if (txtEmail.val() != '') {
                    if (regexp.test(txtEmail.val())) {
                        cgp_txtEmail.removeClass("error");
                        cgp_txtEmail.find(".error-message").remove();
                    }
                }
            });
            txtMessage.blur(function () {
                if (txtMessage.val() != '') {
                    cgp_txtMessage.removeClass("error");
                    cgp_txtMessage.find(".error-message").remove();
                }
            });

            if (txtName.val() == '') {
                error.push({ container: cgp_txtName, element: txtName, isvalid: false });
            } else {
                error.push({ container: cgp_txtName, element: txtName, isvalid: true });
            }

            if (txtEmail.val() == '') {
                error.push({ container: cgp_txtEmail, element: txtEmail, isvalid: false });
            } else {
                if (!regexp.test(txtEmail.val())) {
                    error.push({ container: cgp_txtEmail, element: txtEmail, isvalid: false });
                } else {
                    error.push({ container: cgp_txtEmail, element: txtEmail, isvalid: true });
                }
            }

            if (txtMessage.val() == '') {
                error.push({ container: cgp_txtMessage, element: txtMessage, isvalid: false });
            } else {
                error.push({ container: cgp_txtMessage, element: txtMessage, isvalid: true });
            }

            for (var i in error) {
                var container = error[i].container;
                var element = error[i].element;
                var isvalid = error[i].isvalid;

                if (!isvalid) {
                    container.addClass("error");
                    var $error = $('<div class="error-message">' + element.data("title") + '</div>');
                    container.append($error);

                    $error.offset({ top: element.offset().top - $error.height(), left: element.offset().left + (element.width() - $error.width()) });
                    $error.css({ opacity: 0 }).animate({ left: "+=10", opacity: 1 }, 200).fadeIn(1000);
                }
            }

            var errorCount = error.filter(function (eValue, eIndex) {
                return eValue.isvalid == false;
            }).length;

            if (errorCount == 0) {
                $(document).ajaxStart(
                    function () {
                        $("#btnSend").button('loading');
                    }
                );

                $(document).ajaxSuccess(
                    function () {
                        $("#btnSend").button('reset');
                        $("#support_form_container")[0].reset();
                    }
                );

                var ajaxRequest = $.ajax({
                    url: "ContactSupportHandler.ashx",
                    type: "POST",
                    data: { txtName: txtName.val(), txtEmail: txtEmail.val(), txtMessage: txtMessage.val() }
                });

                ajaxRequest.done(
                function (response) {
                    var $message = '<span><i class="icon-ok"></i> ' + response + '</span>';
                    $("#support_form_message").addClass("alert alert-success").html($message);
                    $("#support_form_message").css({ opacity: 0 }).animate({ opacity: 1 }, 200).fadeIn(1000);
                });
            }
        }
    };

    $.fn.Utilities = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.Comingsoon');
        }
    };

})(jQuery);
