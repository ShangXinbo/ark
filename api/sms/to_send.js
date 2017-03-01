var Mock = require('mockjs');
var Random = Mock.Random;
module.exports = function(req,res){
    var d = {
		"template_id":234    
    };
    return Mock.mock(d)
// 	return result.error(400,'短信模版未创建，请联系管理员！');
}