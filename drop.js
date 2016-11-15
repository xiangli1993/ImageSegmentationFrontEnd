/**
 * Created by xiangli on 11/14/16.
 */
var imageLoader = document.getElementById('filePhoto');
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {

        $('.uploader img').attr('src',event.target.result);
    }
    // console.log("success")
    reader.readAsDataURL(e.target.files[0]);
}
