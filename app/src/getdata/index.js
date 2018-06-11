//引入axios模块
import axios from 'axios';
//创建axios 实例
var $http=axios.create({
    baseURL:'https://www.vue-js.com/api/v1/',
    headers: {
        'X-Custom-Header': 'foobar'
    }

});

//获取主题列表
function getPicsList(params){
    //默认参数设置
    var newParams=Object.assign({
        limit:20,
    },params);
    //配置参数
    return $http({
        method:'get',
        url:'/topics',
        params:newParams,
    })
}

export { getPicsList}