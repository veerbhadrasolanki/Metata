function el(id) { return document.getElementById(id); } // Get elem by ID

function readImage() {
    if (this.files && this.files[0]) {
        var FR = new FileReader();
        FR.onload = function (e) {
            el("img").src = e.target.result;
            el("base64").innerHTML = e.target.result;
        };
        FR.readAsDataURL(this.files[0]);
    }
}

el("asd")?.addEventListener("change", readImage, false);
