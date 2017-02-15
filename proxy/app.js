
const express = require('express');
const path = require('path');
const glob = require('glob');
const request = require('request');
const bodyParser = require('body-parser');
const proxy_port = require('./prod.env').PROXY_PORT
const app = express();

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(function(req,res,next){
        var file = glob.sync('..'+ req.path+'.js')[0];
        if(file){
            var data = require(file);
            res.json({
                code:200,
                message:"",
                detail: data(req,res)
            });
        }else{
            res.send('error');
        }
    });


//php真实数据服务器代理
/*app.use(function(req,res,next){
    var host = "http://ark.geotmt.com";
    if(req.url.indexOf('php/')>0){
        var url = host + req.originalUrl.replace('/php','');
        var token = req.header('api-token');
        request({
            uri: url,
            formData: req.body,
            method: 'POST',
            headers:{
                "api-token":token
            }
        },function(error, response, body){
            res.send(body);
        });
    }else{
        res.render(path.join(__dirname,'views',req.path));
    }
});*/

app.listen(proxy_port);
