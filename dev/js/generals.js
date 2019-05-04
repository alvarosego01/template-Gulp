

function typeValid(type, value, dataValid) {

    switch (type) {
        // campo vacio
        case 'null':
            if ((value == null) || (value == '')) return true; else return false;
            break;
        case 'nullSignature':
            if ((value == null) || (value == '')) return true; else return false;
            break;
        case 'nullImage':
            if ((value == null) || (value == '') || (value == 'empty_file')) return true; else return false;
            break;
        // letras
        case 'letters':
            return !(/^[a-zA-Z]*$/.test(value));
            break;
        // codigo postal
        case 'postalCode':
            if (value.match('^[0-9]{2}\-[0-9]{3}$')) return true; else return false;
            break;
        case 'phone':
            var regex = /^\+?(\d.*){3,}$/;
            return regex.test(value);
            break;
        case 'number':
            return !/^-?[\d.]+(?:e-?\d+)?$/.test(value);
            break;
        case 'email':
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(value);
            break;
        case 'maxChar':
            var characters = value.length;
            if ((characters >= dataValid.max)) return true; else return false;
            break;
        // debo continuar este..
        case 'maxWords':
            var words = value.split(" ");
            if ((words.length >= dataValid.max)) return true; else return false;
            break;
        case 'nullSelect':
            if ((value == null) || (value == '')) return true; else return false;
            break;
        case 'nullCheckbox':
            if (jQuery(value).is(":checked")) {
                return false;
            } else {
                return true;
            }
            break;
        default:
            break;
    }

}


function typeField(indexInArray, field) {


    if ((field.field == 'textfield')) {

        $('.' + indexInArray + '').on('keyup click change', function (e) {
            var error = [];
            var val = jQuery('input', this).val();
            $.each(field.valid, function (index, valueValid) {

                if (typeValid(index, val)) {
                    $('.' + indexInArray + ' .validateMessage').text(valueValid.message);
                    $('.' + indexInArray + ' .validateMessage').attr('error', true);
                    error.push(true);
                } else {
                    error.push(false);
                }
            });
            // si no existen errores entonces elimina el mensaje de error
            if (!error.includes(true)) {
                $('.validateMessage', this).text('');
                $('.validateMessage', this).removeAttr('error');

                // jQuery('input#um-submit-btn').removeAttr('disabled');
                // jQuery('input#um-submit-btn').removeAttr('title');
            } else {
                // jQuery('input#um-submit-btn').attr('disabled', true);
                // jQuery('input#um-submit-btn').attr('title', 'Debes completar la información de forma correcta para continuar');
            }
        });
    }
    if ((field.field == 'textarea')) {

        $('.' + indexInArray + '').on('keyup click change', function (e) {
            var error = [];
            var val = jQuery('textarea', this).val();
            $.each(field.valid, function (index, valueValid) {

                if (typeValid(index, val, valueValid)) {
                    $('.' + indexInArray + ' .validateMessage').text(valueValid.message);
                    $('.' + indexInArray + ' .validateMessage').attr('error', true);
                    error.push(true);
                } else {
                    error.push(false);
                }
            });
            // si no existen errores entonces elimina el mensaje de error
            if (!error.includes(true)) {
                $('.validateMessage', this).text('');
                $('.validateMessage', this).removeAttr('error');

                // jQuery('input#um-submit-btn').removeAttr('disabled');
                // jQuery('input#um-submit-btn').removeAttr('title');
            } else {
                // jQuery('input#um-submit-btn').attr('disabled', true);
                // jQuery('input#um-submit-btn').attr('title', 'Debes completar la información de forma correcta para continuar');
            }
        });
    }
    if ((field.field == 'select')) {

        $('.' + indexInArray + '').on('keyup click change', function (e) {
            var error = [];
            // si es seleccion multiple entonces..
            var val = jQuery('select', this).val();

            $.each(field.valid, function (index, valueValid) {



                if (typeValid(index, val, valueValid)) {
                    $('.' + indexInArray + ' .validateMessage').text(valueValid.message);
                    $('.' + indexInArray + ' .validateMessage').attr('error', true);
                    error.push(true);
                } else {
                    error.push(false);
                }
            });

            if (!error.includes(true)) {
                $('.validateMessage', this).text('');
                $('.validateMessage', this).removeAttr('error');

                // jQuery('input#um-submit-btn').removeAttr('disabled');
                // jQuery('input#um-submit-btn').removeAttr('title');
            } else {
                // jQuery('input#um-submit-btn').attr('disabled', true);
                // jQuery('input#um-submit-btn').attr('title', 'Debes completar la información de forma correcta para continuar');
            }
        });
    }
    if ((field.field == 'checkbox')) {

        $('.' + indexInArray + '').on('keyup click change', function (e) {
            var error = [];
            // si es seleccion multiple entonces..
            var val = jQuery('input[type="checkbox"]', this);

            $.each(field.valid, function (index, valueValid) {

                if (typeValid(index, val, valueValid)) {
                    $('.' + indexInArray + ' .validateMessage').text(valueValid.message);
                    $('.' + indexInArray + ' .validateMessage').attr('error', true);
                    error.push(true);
                } else {
                    error.push(false);
                }
            });

            if (!error.includes(true)) {
                $('.validateMessage', this).text('');
                $('.validateMessage', this).removeAttr('error');

                // jQuery('input#um-submit-btn').removeAttr('disabled');
                // jQuery('input#um-submit-btn').removeAttr('title');
            } else {
                // jQuery('input#um-submit-btn').attr('disabled', true);
                // jQuery('input#um-submit-btn').attr('title', 'Debes completar la información de forma correcta para continuar');
            }
        });
    }
    if ((field.field == 'signature')) {

        $('.' + indexInArray + '').on('keyup click change', function (e) {
            var error = [];
            // si es seleccion multiple entonces..
            var val = jQuery('input', this).val();

            $.each(field.valid, function (index, valueValid) {

                if (typeValid(index, val, valueValid)) {
                    $('.' + indexInArray + ' .validateMessage').text(valueValid.message);
                    $('.' + indexInArray + ' .validateMessage').attr('error', true);
                    error.push(true);
                } else {
                    error.push(false);
                }
            });
            if (!error.includes(true)) {
                $('.validateMessage', this).text('');
                $('.validateMessage', this).removeAttr('error');
                // jQuery('input#um-submit-btn').removeAttr('disabled');
                // jQuery('input#um-submit-btn').removeAttr('title');
            } else {
                // jQuery('input#um-submit-btn').attr('disabled', true);
                // jQuery('input#um-submit-btn').attr('title', 'Debes completar la información de forma correcta para continuar');
            }
        });
    }
}

function configValidatorType(data) {

    jQuery.each(data, function (indexInArray, valueOfElement) {
        typeField(indexInArray, valueOfElement);
    });

}




jQuery(document).ready(function () {
    jQuery('<img class="logoFooter" src="/wp-content/uploads/logoForge.png" alt="ForgeSystem">').appendTo("#footer-info > div > div.devFooter > a");
});