var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.post('/:reportId', function(req, res, next) {
    var reportId = req.params.reportId;
    var file = './' + reportId + '.json';
    fs.writeFile(file, JSON.stringify(req.body), function(err){
        if (err){
            res.send("File Not Saved with error " + err);
        }else{
            console.log('The file has been saved!');
            res.send("File Saved Successfully");
        }
    });
});

module.exports = router;
