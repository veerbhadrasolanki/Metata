
// SOLID
$(document).on("change", "#bgcolor", function () {
    var x = $(this).val();
    document.getElementById('randomColor').style.backgroundColor = x;
    document.getElementById('lcolorcode').innerText = x;
});

function generaterandom() {
    let clr1 = '', clr2 = '';

    const array = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

    for (let i = 0; i < 6; i++) {
        clr1 += array[Math.floor(Math.random() * array.length)]
    }

    clr2 = '#' + clr1;
    //alert(clr2); 
    document.getElementById('randomColor').style.backgroundColor = clr2;
    document.getElementById('lcolorcode').innerText = clr2;
    document.getElementById('bgcolor').value = clr2;
}


function copycmd() {
    // Get the text field
    var copyText = document.getElementById("lcolorcode");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

}


// html 2 canvas 
document.querySelector('.ss').addEventListener('click', function () {
    html2canvas(document.querySelector('.container-option'), {
        onrendered: function (canvas) {
            // document.body.appendChild(canvas);
            return Canvas2Image.saveAsPNG(canvas);
        }
    });
});