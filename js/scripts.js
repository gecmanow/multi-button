let multiButton = document.getElementById('callback_multi-button');
let multiButtonDrop = document.getElementById('callback_dropdown');
let multiButtonDropItemTelegram = document.getElementById('callback_dropdown-item_telegram');
let multiButtonDropItemWhatsapp = document.getElementById('callback_dropdown-item_whatsapp');
let multiButtonDropItemPhone = document.getElementById('callback_dropdown-item_phone');
let multiButtonTelegramIcon = document.getElementById('callback_telegram-icon');
let multiButtonWhatsappIcon = document.getElementById('callback_whatsapp-icon');
let multiButtonTelegramText = document.getElementById('callback_telegram-text');
let multiButtonWhatsappText = document.getElementById('callback_whatsapp-text');
let multiButtonPhoneText = document.getElementById('callback_phone-text');
let multiButtonPhoneIcon = document.getElementById('callback_phone-icon');
let multiButtonDropPhoneText = document.getElementById('callback_phone-text-mobile');
let multiButtonDropPhoneIcon = document.getElementById('callback_phone-icon-mobile');
let go = true;
let arrD = ["fa fa-phone", "fab fa-telegram-plane", "fab fa-whatsapp"], i = -1;

if (document.documentElement.clientWidth > 768) {
    change();
    multiButton.addEventListener('mouseover', function () {
        multiButtonDrop.classList.remove('callback_stop');
        multiButtonPhoneText.classList.remove('callback_stop');
        go = false;
        clearInterval(interval);
        multiButtonPhoneIcon.className = 'fa fa-phone';
    });
    multiButton.addEventListener('mouseout', function () {
        multiButtonDrop.classList.add('callback_stop');
        multiButtonPhoneText.classList.add('callback_stop');
        go = true;
        change();
    });
} else {
    change();
    document.getElementById('callback_dropdown-item_phone-link').addEventListener('click', function (event) {
        event.preventDefault();
    });
    multiButton.addEventListener('click', function () {
        if((multiButtonDrop.classList.contains('callback_stop'))) {
            multiButtonDrop.classList.remove('callback_stop');
            multiButtonDropItemPhone.classList.remove('callback_stop');
            go = false;
            clearInterval(interval);
            multiButtonPhoneIcon.className = 'fa fa-phone';
        } else {
            multiButtonDrop.classList.add('callback_stop');
            multiButtonDropItemPhone.classList.add('callback_stop');
            go = true;
            change();
        }
    });
}

multiButtonDropItemTelegram.addEventListener('mouseover', function () {
    multiButtonTelegramIcon.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
    multiButtonTelegramText.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
});
multiButtonDropItemTelegram.addEventListener('mouseout', function () {
    multiButtonTelegramIcon.style.boxShadow = 'none';
    multiButtonTelegramText.style.boxShadow = 'none';
});
multiButtonDropItemWhatsapp.addEventListener('mouseover', function () {
    multiButtonWhatsappIcon.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
    multiButtonWhatsappText.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
});
multiButtonDropItemWhatsapp.addEventListener('mouseout', function () {
    multiButtonWhatsappIcon.style.boxShadow = 'none';
    multiButtonWhatsappText.style.boxShadow = 'none';
});
multiButtonDropItemPhone.addEventListener('mouseover', function () {
    multiButtonDropPhoneIcon.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
    multiButtonDropPhoneText.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
});
multiButtonDropItemPhone.addEventListener('mouseout', function () {
    multiButtonDropPhoneIcon.style.boxShadow = 'none';
    multiButtonDropPhoneText.style.boxShadow = 'none';
});

function change() {

    let multiButtonPhoneIcon = document.getElementById('callback_phone-icon');
    let arrD = ["fa fa-phone", "fab fa-telegram-plane", "fab fa-whatsapp"], i = -1;

    interval = setInterval(function () {
        multiButtonPhoneIcon.className = arrD[i = ++i == arrD.length ? 0 : i];
    }, 1200)
}