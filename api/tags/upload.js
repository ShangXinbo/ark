/**
 * NAME 2016/9/5
 * DATE 2016/9/5
 * AUTHOR shangxinbo
 */

var Mock = require('mockjs');
var Random = Mock.Random;
var formidable = require('formidable')
var util = require('util')


module.exports = function(req,res){
    var param = req.body;
    var form = new formidable.IncomingForm();
    var d = ''
    form.parse(req, function(err, fields, files){
        if(err){

        }else{
            d = util.inspect({fields: fields, files: files});
        }
    })
    // if(!param.id){
    //     return 'param id error';
    // }
    // if(!param.project_id){
    //     return 'param project_id error';
    // }
    // var d = {};
    return Mock.mock(d);
}