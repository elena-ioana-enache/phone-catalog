var appRouter = function (app) {
    app.get("/phones", function (req, res) {
        setTimeout(function () {
            var fs = require('fs');
            var phoneList = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
            phoneList = appendImagesToPhoneList(phoneList.phonesList);
            return res.send(phoneList);

        }, 0);

    });

}
appendImagesToPhoneList = function (phoneList) {

    phoneList.forEach((phone, i) => {
        console.log(phone);
        var path = "data/img/";
        var base64str = base64_encode(path + phone.id + ".jpg");
        phone.imageInBase64 = base64str;
    });
    return phoneList;

}
function base64_encode(file) {
    var fs = require('fs');
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
module.exports = appRouter;