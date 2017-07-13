var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.post('/:reportId', function(req, res, next) {
    var reportId = req.params.reportId;
    var file = './' + reportId + '.json';
    console.log(req.body);
    fs.exists(file, function (exists) {
        console.log(file);
        if (exists) {
            fs.writeFile(file, JSON.stringify(req.body), function(err){
                if (err){
                    res.send("File Not Saved with error " + err);
                }else{
                    res.send("File Saved Successfully");
                    console.log('The file has been saved!');
                }
            });
        }else {
            console.log('file does not exists');
            res.send("File Not Found");
        }
    });
});

module.exports = router;
