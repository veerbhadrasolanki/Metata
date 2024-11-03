jQuery(document).ready(function() {
    $('.generate-button').click(function () {
        console.log(CryptoJS.MD5($('#input-box').val()));
            $('#output').val(CryptoJS.MD5($('#input-box').val()).toString());
        });
});

const copymd5Password = () => {
    navigator.clipboard.writeText(output.value); // copying random password
    copywithme.innerText = "check"; // changing copy icon to tick
    copywithme.style.color = "#4285F4";
    setTimeout(() => { // after 1500 ms, changing tick icon back to copy
        copywithme.innerText = "copied!!";
        copywithme.style.color = "#707070";
    }, 1500);
}