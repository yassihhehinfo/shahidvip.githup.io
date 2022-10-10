// TOGGLE NAV
function toggleNav() {
    var nav = document.getElementById("we_header_list");
    nav.classList.toggle("we_header_list_active");
}

// OPEN FORM
function openForm() {
    var nav = document.getElementById("we_keyform");
    nav.classList.remove("we_hide");
}

// CLOSE FORM
function closeForm() {
    var nav = document.getElementById("we_keyform");
    nav.classList.add("we_hide");

    var inpt = document.getElementById("shahidKey");
    var errm = document.getElementById("we_error_msg");

    inpt.value = "";
    errm.innerHTML = "هذه الخانة مطلوبة.";
    inpt.classList.remove("we_input_error");
    errm.classList.add("we_hide");
}

// OPEN KEY WINNER PAGE
function openKeyWin() {
    var nav = document.getElementById("we_key_winner");
    nav.classList.remove("we_hide");
}

// CLOSE KEY WINNER PAGE
function closeKeyWin() {
    var nav = document.getElementById("we_key_winner");
    nav.classList.add("we_hide");
}

// COPIE KEY
function copyToClipboard() {
    var textBox = document.getElementById("we_key_input");
    textBox.select();
    document.execCommand("copy");

    var copyDone = document.getElementById("we_valid_msg");
    copyDone.classList.remove("we_hide");

    setTimeout(function() {
        var copyDone = document.getElementById("we_valid_msg");
        copyDone.classList.add("we_hide");
    }, 2000);
}

// CLOSE CPA VIEWER
function closeCPAOFFER() {
    var viewerbox = document.getElementById("we_cpa_viewer");
    viewerbox.classList.remove("we_cpa_viewer_active");
    document.getElementById("offerIframe").src = "";
}

/*
=========================
  OFFER 1 SCRIPTS
=========================
*/

function openOffer1() {

    var offerType = document.getElementById("we_offer1_type");
    offerType.classList.add("we_offer_confirmed_button");

    document.getElementById("offerIframe").src = "https://smrturl.co/o/229551/53210068?s1=";
    document.getElementById("we_cpa_viewer").classList.add("we_cpa_viewer_active");

}

function acceptOffer1() {

    var loading = document.getElementById("we_loading");
    loading.classList.remove("we_hide");

    setTimeout(function() {

        loading.classList.add("we_hide");

        var offerType = document.getElementById("we_offer1_type");
        var nextOffer = document.getElementById("offerlast_box");

        offerType.classList.remove("we_offer_confirmed_button");
        offerType.classList.add("we_offer_accepted_button");

        nextOffer.classList.add("we_offer_box_active");
    }, 2000);

}

/*
=========================
  LAST OFFER SCRIPTS
=========================
*/

function openOfferLast() {
    var offerType = document.getElementById("we_offerlast_type");
    offerType.classList.add("we_offer_confirmed_button");

    document.getElementById("offerIframe").src = "https://smrturl.co/o/229551/53212098?s1=";
    document.getElementById("we_cpa_viewer").classList.add("we_cpa_viewer_active");

}

function acceptOfferLast() {

    var loading = document.getElementById("we_loading");
    loading.classList.remove("we_hide");

    setTimeout(function() {

        document.getElementById("lastOfferForm").submit();

    }, 2000);

}

/*
=========================
  CHANNELS REMOTE
=========================
*/

function ssc1() {
    document.getElementById("iframe").src = "https://www.youtube.com/embed/0Y-IRcUJi6o";
}

function ssc2() {
    document.getElementById("iframe").src = "https://www.youtube.com/embed/mg7FweYjasE";
}

function ssc3() {
    document.getElementById("iframe").src = "https://www.youtube.com/embed/w9zFaCNXTCY";
}

function ssc4() {
    document.getElementById("iframe").src = "https://www.youtube.com/embed/EeCn9FN94RU";
}

function ssc5() {
    document.getElementById("iframe").src = "https://www.youtube.com/embed/Eo5RPdTt0e0";
}

function ssc6() {
    document.getElementById("iframe").src = "https://www.youtube.com/embed/LxgTUmdR8Io";
}

function ssc7() {
    document.getElementById("iframe").src = "https://www.youtube.com/embed/9Auq9mYxFEE";
}