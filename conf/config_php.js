//"baseurl":"http://192.168.13.111/YchLrestServer/api",

var Config = {

    "baseurl": "http://test3.gouchehui.com:8082/cashsysback.php",

    "sessionid": ""


};

var t;

var NavigationListDATA_wx = [
    {
        "title": "微信 拉取授权登录 /auth2"
        ,
        "desc": "微信授权登录 redirect_uri 是后台通过appid 认证的回调接口 回调成功后 auth2接口会重定向去state 的参数网址 并且加入获取到openid\n 其中appid是你微信appid redirect_uri就是本接口地址 需要在微信公众号的授权处配置该地址的域名或IP"
        ,
        "url": "/wx/auth2"
        ,
        "method": "GET"
        ,
        "parameters": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx02330baa7e87a9b5&redirect_uri=http://192.168.13.111/YchLrestServer/api/wx/auth2&response_type=code&scope=snsapi_userinfo&state=http://www.gouchehui.com#wechat_redirect"
        ,
        "example_url": "/wx/auth2"
        ,
        "example_body": ""
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "微信支付 生成预订单"
        , "desc": "通过发送pay_id和openid,微信返回prepay_id等相关参数"
        , "url": "/nl/order/weixin/jsapi/{pay_id}/{open_id}"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/nl/order/weixin/jsapi/99e0414cf75bc3dedc7161298565d1f6/okI-ws1xSGawmy9zZSUFOxuhgnHU"
        , "example_body": ""
        , "example_result": "{}"
    },
    {
        "title": "APP微信支付 生成预订单"
        , "desc": "通过发送pay_id,微信返回prepayid等相关参数"
        , "url": "/nl/order/weixin/app/{pay_id}"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/nl/order/weixin/app/12"
        , "example_body": ""
        , "example_result": "{}"
    },
    {
        "title": "微信支付 支付结果通知接口"
        ,
        "desc": "微信支付结果通知接口，从而改变系统内订单的支付状态"
        ,
        "url": "/nl/order/weixin/notify"
        ,
        "method": "POST"
        ,
        "parameters": ""
        ,
        "example_url": "/nl/order/weixin/notify"
        ,
        "example_body": "<xml><appid><![CDATA[wx2421b1c4370ec43b]]></appid><attach><![CDATA[支付测试]]></attach><bank_type><![CDATA[CFT]]></bank_type><fee_type><![CDATA[CNY]]></fee_type><is_subscribe><![CDATA[Y]]></is_subscribe><mch_id><![CDATA[10000100]]></mch_id><nonce_str><![CDATA[5d2b6c2a8db53831f7eda20af46e531c]]></nonce_str><openid><![CDATA[oUpF8uMEb4qRXf22hE3X68TekukE]]></openid><out_trade_no><![CDATA[G810623772715]]></out_trade_no><result_code><![CDATA[SUCCESS]]></result_code><return_code><![CDATA[SUCCESS]]></return_code><sign><![CDATA[B552ED6B279343CB493C5DD0D78AB241]]></sign><sub_mch_id><![CDATA[10000100]]></sub_mch_id><time_end><![CDATA[20140903131540]]></time_end><total_fee>1</total_fee><trade_type><![CDATA[JSAPI]]></trade_type><transaction_id><![CDATA[1004400740201409030005092168]]></transaction_id></xml>"
        ,
        "example_result": "{}"
    },
    {
        "title": "微信支付 订单取消支付"
        , "desc": "通过发送pay_id,改变支付状态"
        , "url": "/nl/order/inquiry/cancel/{pay_id}"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/nl/order/inquiry/cancel/5766e16ec1f84388bcf0ab2d31bf6fe0"
        , "example_body": ""
        , "example_result": "{}"
    },
];

var NavigationListDATA_car = [
    {
        "title": "汽车 特价车信息 /nl/car/specialcar/{model_id}"
        , "desc": "specialcar 通过车model_id 获取特价车信息"
        , "url": "/nl/car/specialcar/{model_id}"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/nl/car/specialcar/1263"
        , "example_body": ""
        , "example_result": "{}"

    },
    {
        "title": "汽车 特价车信息根据车ID /nl/car/carlist/{car_id}"
        , "desc": "carlist 通过车car_id 获取特价车信息"
        , "url": "/nl/car/carlist/{car_id}"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/nl/car/carlist/1c41562fb91597a95504ef8dee9aa37d"
        , "example_body": ""
        , "example_result": "{}"

    },
    {
        "title": "汽车 通过model_id查询汽车详情 /nl/car/carDetails/{model_id}"
        , "desc": "carDetails 通过车model_id 查询汽车详情"
        , "url": "/nl/car/carDetails/{model_id}"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/nl/car/carDetails/163"
        , "example_body": ""
        , "example_result": "{}"

    },
    {
        "title": "汽车 车品牌 /nl/car/brand/{list/quotes}"
        , "desc": "list:获取车库内所有的车品牌信息；quotes：获取有报价的品牌信息"

        , "url": "/nl/car/brand/{list/quotes}"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/car/brand/quotes"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "汽车 车品牌字母排序输出 /nl/car/brand/list/letter"
        , "desc": "获取车品牌信息"

        , "url": "/nl/car/brand/list/letter"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/car/brand/list/letter"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "汽车 车型 /nl/car/carmodel/list/{brand_id}"
        , "desc": "通过车品牌 获取品牌下车型"

        , "url": "/nl/car/carmodel/list/{brand_id}"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/car/carmodel/list/10"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "汽车 车型 有报价/nl/car/carmodel/listhasprice/{brand_id}"
        , "desc": "通过车品牌 获取品牌下有价格的车型"

        , "url": "/nl/car/carmodel/listhasprice/{brand_id}"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/car/carmodel/listhasprice/61"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "汽车 车款 /nl/car/cartype/list/{model_id}"
        , "desc": "通过车型 获取车型下车款"

        , "url": "/nl/car/cartype/list/{model_id}"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/car/cartype/list/1263"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "汽车 车款 有报价 /nl/car/cartype/listhasprice/{model_id}"
        , "desc": "通过车型 获取车型下有报价的车款"

        , "url": "/nl/car/cartype/listhasprice/{model_id}"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/car/cartype/listhasprice/384"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "汽车 活动 添加活动信息 /nl/car/user_activity/add"
        ,
        "desc": "通过车型 获取车型下车款"

        ,
        "url": "/nl/car/user_activity/add"

        ,
        "method": "POST"

        ,
        "parameters": ""

        ,
        "example_url": "/nl/car/user_activity/add"

        ,
        "example_body": "{\"query\":{\"source\":2,\"flag\":2,\"user_name\":\"徐飞\",\"tel\":\"18951765003\",\"activity_price\":99000,\"activity_number\":\"zt01_qrj\",\"activity_name\":\"情人节专场活动\",\"brand_id\":101,\"brand_name\":\"雪佛兰\",\"car_model_id\":\"1391\",\"car_model_name\":\"科鲁兹\",\"car_id\":\"5937\",\"car_name\":\"2016款 1.5L 自动豪华版\",\"exterior_color_id\":\"16633\",\"exterior_color_name\":\"潮流灰\",\"interior_color_name\":\"黑色\",\"interior_color_id\":\"310fdf1fbf4311e5ba4114dda95160ab\",\"createuser\":\"openid\",\"remarks\":\"b备注\",\"reward_id\":\"32332\",\"reward_type\":\"1\"}}"
        ,
        "example_result": "{}"
    },
    {
        "title": "汽车 活动 判断是否是第一次参加 /nl/car/user_activity/isfisrt"
        , "desc": "判断是否是第一次参加"

        , "url": "/nl/car/user_activity/isfisrt"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/car/user_activity/isfisrt"

        , "example_body": "{\"query\":{\"activity_number\":\"zhongqiu_wx\",\"flag\":\"1\",\"tel\":\"15951876192\"}}"
        , "example_result": "{}"
    },
    {
        "title": "汽车 活动 消息条/nl/car/user_activity/count/{activitynumber}"
        , "desc": "通过车型 获取车型下车款"

        , "url": "/nl/car/user_activity/count/{activitynumber}"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/car/user_activity/count/zt01_qrj"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "汽车 活动 获得不同分组列表 /nl/car/activitylist/{map/list}/{activity_id}"
        , "desc": "通过活动ID 传入map根据group_id分组数据，传入list无分组数据"

        , "url": "/nl/car/activitylist/{map/list}/{activity_id}"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/car/activitylist/map/4"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "汽车 活动 根据车款获取报名人数 /nl/car/activitycount/{activity_number}"
        , "desc": "汽车 活动 根据车款获取报名人数"

        , "url": "/nl/car/activitycount/{activity_number}"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/car/activitycount/wxjiaxiao"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "获取热卖车款 /nl/recommend/bestselling/list"
        , "desc": "详情页内左下侧推荐的热卖车款"

        , "url": "/nl/recommend/bestselling/list"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/recommend/bestselling/list"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "添加活动用户 /nl/user/add"
        , "desc": "添加活动用户"

        , "url": "/nl/user/add"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/user/add"
        //{\"query\":{\"tel\":\"15358309723\",\"name\":\"孙磊\",\"openid\":\"1234567\"}}
        , "example_body": "{\"query\":{\"tel\":\"15358309723\",\"name\":\"孙磊\",\"openid\":\"1234567\"}}"
        , "example_result": "{}"
    },
    {
        "title": "添加询价订单 /nl/order/inquiry/add"
        ,
        "desc": "添加询价订单"

        ,
        "url": "/nl/order/inquiry/add"

        ,
        "method": "POST"

        ,
        "parameters": ""

        ,
        "example_url": "/nl/order/inquiry/add"

        ,
        "example_body": "{\"query\":{\"user_id\":\"c5b3e3a08fad7be435b9aa24d2ccdfac\",\"car_price_id\":\"03b2e1b341839f3f5d01529b9cc2db1e\",\"bpcities\":[[1,\"全国\"],[2,\"江苏省\"],[3,\"南京市\"]],\"upCardCityName\":\"不限\"}}"

        ,
        "example_result": "{}"
    },
    {
        "title": "添加微信免费询价订单 /nl/order/inquiry/addfree"
        ,
        "desc": "添加询价订单"

        ,
        "url": "/nl/order/inquiry/addfree"

        ,
        "method": "POST"

        ,
        "parameters": ""

        ,
        "example_url": "/nl/order/inquiry/addfree"

        ,
        "example_body": "{\"query\":{\"user_id\":\"c5b3e3a08fad7be435b9aa24d2ccdfac\",\"car_price_id\":\"03b2e1b341839f3f5d01529b9cc2db1e\",\"bpcities\":[[1,\"全国\"],[2,\"江苏省\"],[3,\"南京市\"]],\"upCardCityName\":\"不限\",\"fromorder\":\"移动端\",\"fromacticityid\":\"11\"}}"

        ,
        "example_result": "{}"
    },
    {
        "title": "询价订单列表 /nl/order/inquiry/list/{user_id}"
        , "desc": "通过输入用户id查找该用户下的所有询价订单"

        , "url": "/nl/order/inquiry/list/{user_id}"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/order/inquiry/list/80d2646c90b6b66a4b0cd40b5f7fb5ee"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "询价订单详情 /nl/order/inquiry/details/{pay_id}"
        , "desc": "通过输入订单id查找该订单的详情"

        , "url": "/nl/order/inquiry/details/{pay_id}"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/order/inquiry/details/d25a498abec1200b1036af55c31ae5ff"

        , "example_body": ""

        , "example_result": "{}"
    },
    {
        "title": "给粉丝发送客服消息 http://php.woodche.com/index.php/Home/Api/reply_customer_text/opendid/{openid}/contents/{内容}"
        ,
        "desc": "添加活动用户"

        ,
        "url": "https://php.woodche.com/index.php/Home/Api/reply_customer_text/opendid/{openid}/contents/{内容}"

        ,
        "method": "get"

        ,
        "parameters": ""

        ,
        "example_url": "https://php.woodche.com/index.php/Home/Api/reply_customer_text/opendid/oItA9v52kZQ9sf-aiNcMsgir-89E/contents/asgdasdgasdgasdg"
        //{\"query\":{\"tel\":\"15358309723\",\"name\":\"孙磊\",\"openid\":\"1234567\"}}
        ,
        "example_body": ""
        ,
        "example_result": "{}"
    }
];

var NavigationListDATA_member4s = [
    {
        "title": "test"
        , "desc": "添加活动用户"
        , "url": "/public/login"
        , "method": "post"
        , "parameters": '{"admin_name":"admin","pwd":"123456"}'
        , "example_url": "/public/login"
        , "example_body": '{"admin_name":"admin","pwd":"123456"}'
        , "example_result": "{}"
    },
    {
        "title": "test11111111111"
        , "desc": "添加活动用户"
        , "url": "/part/newsList"
        , "method": "post"
        , "parameters": ''
        , "example_url": "/part/newsList"
        , "example_body": ''
        , "example_result": "{}"
    }

];


var NavigationListDIRDATA = [
    {
        title: "微信 wx",
        list: NavigationListDATA_wx
    },
    {
        title: "汽车 Car",
        list: NavigationListDATA_car
    },
    {
        title: "PHP 的接口文档",
        list: NavigationListDATA_member4s
    },

];








