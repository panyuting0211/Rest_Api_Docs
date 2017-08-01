//"baseurl":"http://192.168.13.111/YchLrestServer/api",

var Config = {

    "baseurl": "http://192.168.13.111/YchLrestServer/api",

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
        "title": "4s 登录 /auth"
        , "desc": "4s登录 "
        , "url": "/login/auth/4s/web"
        , "method": "POST"
        , "parameters": "{\"username\":\"sssaaa\",\"password\":\"gchjsb\"}"
        , "example_url": "/login/auth/4s/web"
        , "example_body": "{\"username\":\"sssaaa\",\"password\":\"gchjsb\"}"
        , "example_result": "{}"
        , "otherurl": 1

    },
    {
        "title": "4s 注销 /auth/4s/logOut"
        , "desc": "4s 注销 "
        , "url": "/login/auth/4s/logOut"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/login/auth/4s/logOut"
        , "example_body": ""
        , "example_result": "{}"
        , "otherurl": 1

    },
    {
        "title": "4s 登录 /home/test"
        , "desc": "4s登录 "
        , "url": "/4s/home/test"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/4s/home/test"
        , "example_body": ""
        , "example_result": "{}"
        , "otherurl": 1

    },
    {
        "title": "获取4S店基本信息 /4s/accountmanagement/information"
        , "desc": "获取4S店基本信息 "
        , "url": "/4s/accountmanagement/information"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/4s/accountmanagement/information"
        , "example_body": "{\"query\":{\"uid\":\"7\"}}"
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "修改4S店基本信息 /4s/accountmanagement/updateinformation"
        ,
        "desc": "修改 4S店基本信息 "
        ,
        "url": "/4s/accountmanagement/updateinformation"
        ,
        "method": "POST"
        ,
        "parameters": ""
        ,
        "example_url": "/4s/accountmanagement/updateinformation"
        ,
        "example_body": "{\"query\":{\"uid\":\"7\",\"tel\":\"15358309720\",\"contacts\":\"孙磊\",\"email\":\"1231561@qq.com\"}}"
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "4S店首页 /4s/home/index"
        , "desc": "修改 4S店基本信息 "
        , "url": "/4s/home/index"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/4s/home/index"
        , "example_body": "{\"query\":{\"user_id\":\"7\"}}"
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "获得4S店收货地址列表 /4s/accountmanagement/addrlist"
        , "desc": "获得4S店收货地址列表 "
        , "url": "/4s/accountmanagement/addrlist"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/4s/accountmanagement/addrlist"
        , "example_body": "{\"query\":{\"uid\":\"7\"}}"
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "设置一个地址作为一个默认的收货地址 /4s/accountmanagement/setdefault"
        , "desc": "设置一个地址作为一个默认的收货地址 "
        , "url": "/4s/accountmanagement/setdefault"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/4s/accountmanagement/setdefault"
        , "example_body": "{\"query\":{\"uid\":\"7\",\"id\":\"02a185e2b262c9c67418a0e2f2fb0da2\"}}"
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "添加收货地址 /4s/accountmanagement/addaddress"
        ,
        "desc": "添加收货地址 "
        ,
        "url": "/4s/accountmanagement/addaddress"
        ,
        "method": "POST"
        ,
        "parameters": ""
        ,
        "example_url": "/4s/accountmanagement/addaddress"
        ,
        "example_body": "{\"query\":{\"user_id\":\"7\",\"receiver\":\"aasfasdf\",\"telphone\":\"15358309720\",\"province_id\":\"456456\",\"receipt_province\":\"asdfasdf\",\"city_id\":\"asdfsdf\",\"receipt_city\":\"asdfasdf\",\"quarter_id\":\"123123asdf\",\"receipt_quarter\":\"12123sfasfd\",\"receipt_address\":\"sdfa阿斯顿法师打发\"}}"
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "修改收货地址 /4s/accountmanagement/updateaddress"
        ,
        "desc": "修改收货地址 "
        ,
        "url": "/4s/accountmanagement/updateaddress"
        ,
        "method": "POST"
        ,
        "parameters": ""
        ,
        "example_url": "/4s/accountmanagement/updateaddress"
        ,
        "example_body": "{\"query\":{\"id\":\"006e12a219728c1103386b6c003d202c\",\"receiver\":\"asfd\",\"telphone\":\"afd\",\"province_id\":\"adfaf\",\"receipt_province\":\"fafda\",\"city_id\":\"adf\",\"receipt_city\":\"asfda\",\"quarter_id\":\"afdaf\",\"receipt_quarter\":\"afdadfs\",\"receipt_address\":\"afdadsf\",\"status\":1}}"
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "删除收货地址 /4s/accountmanagement/deladdress"
        , "desc": "删除收货地址 "
        , "url": "/4s/accountmanagement/deladdress"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/4s/accountmanagement/deladdress"
        , "example_body": "{\"query\":{\"id\":\"006e12a219728c1103386b6c003d202c\"}}"
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "修改密码 /4s/accountmanagement/resetpassword"
        , "desc": "修改密码 "
        , "url": "/4s/accountmanagement/resetpassword"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/4s/accountmanagement/resetpassword"
        , "example_body": "{\"query\":{\"id\":\"7\",\"password\":\"gchjsb\",\"newpassword\":\"123456\"}}"
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "获取4S店定车订单 /4s/order/list"
        ,
        "desc": "获取4S店定车订单 "
        ,
        "url": "/4s/order/list"
        ,
        "method": "POST"
        ,
        "parameters": ""
        ,
        "example_url": "/4s/order/list"
        ,
        "example_body": "{\"query\":{\"id_4s\":\"223\",\"status\":[0,1,2],\"pagenum\":3,\"page\":1,\"keyword\":\"英菲尼迪\"}}"
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "获取4S店特价车列表 /4s/special/list"
        ,
        "desc": "获取4S店特价车列表 "
        ,
        "url": "/4s/special/list"
        ,
        "method": "POST"
        ,
        "parameters": "查询条件id，可传可不传，传的话代表根据ID查询出某个特价车的详情  不传代表查询出所有的特价车  传的话参数如：{\"query\":{\"user_id\":\"186\",\"status\":[1,2,5],\"pagenum\":5,\"page\":1,\"id\":\"1ec99dcab36e1e19be0bf5df370bb96e\"}} 不传如下："
        ,
        "example_url": "/4s/special/list"
        ,
        "example_body": "{\"query\":{\"user_id\":\"186\",\"status\":[1,2,5],\"pagenum\":5,\"page\":1}}"
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "删除4S店某个特价车 /4s/special/delete/{car_special_id}"
        , "desc": "删除4S店某个特价车 "
        , "url": "/4s/special/delete/{car_special_id}"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/4s/special/delete/fa95c7fc5ccba3a43c5461055445d3e5"
        , "example_body": ""
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "获取省市关系 /nl/common/provincecity"
        , "desc": "获取省市关系 "
        , "url": "/nl/common/provincecity"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/nl/common/provincecity"
        , "example_body": ""
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "获取省市区县关系 "
        , "desc": "添加区关系 "
        , "url": "/static/areas.json"
        , "method": "GET"
        , "parameters": ""
        , "example_url": "/static/areas.json"
        , "example_body": ""
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "获取4S店积分使用记录列表 /4s/score/list"
        , "desc": "获取4S店积分使用记录列表 "
        , "url": "/4s/score/list"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/4s/score/list"
        , "example_body": "{\"query\":{\"user_id\":\"223\",\"pagenum\":10,\"page\":1}}"
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "获取4S店积分兑换剩余次数 /4s/score/times/{user_id}"
        , "desc": "获取4S店积分兑换剩余次数 "
        , "url": "/4s/score/times/{user_id}"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/4s/score/times/223"
        , "example_body": ""
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "获取当前4S店总积分 /4s/score/values/{user_id}"
        , "desc": "获取当前4S店总积分 "
        , "url": "/4s/score/values/{user_id}"
        , "method": "POST"
        , "parameters": ""
        , "example_url": "/4s/score/values/223"
        , "example_body": ""
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "4S店使用积分兑换商品 /4s/score/add"
        ,
        "desc": "4S店使用积分兑换商品 "
        ,
        "url": "/4s/score/add"
        ,
        "method": "POST"
        ,
        "parameters": ""
        ,
        "example_url": "/4s/score/add"
        ,
        "example_body": "{\"query\":{\"user_id\":\"223\",\"role\":2,\"tel\":\"13809040655\",\"code\":\"096478\",\"md5code\":\"609889d2b2fb8a1683d1e3bee9481c78\",\"goods_id\":\"gd0251236\",\"goods_name\":\"500元苏果卡\",\"score_value\":500,\"address_id\":\"1232454251325\"}}"
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "获得4S店下的品牌,车型,车款 /4s/activity/carActivity"
        , "desc": "获得4S店下的品牌,车型,车款  "
        , "url": "/4s/activity/carActivity"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"258ce5ebe63161f7f265fbb508696d7b"}}'
        , "example_url": "/4s/activity/carActivity"
        , "example_body": '{"query":{"userId":"258ce5ebe63161f7f265fbb508696d7b"}}'
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "添加 新增活动 /4s/activity/addCarActivity"
        ,
        "desc": "添加 新增活动  "
        ,
        "url": "/4s/activity/addCarActivity/"
        ,
        "method": "POST"
        ,
        "parameters": '{"query": {"user_id":1,"interior_color_id":1,"exterior_color_id":2,"car_image":"/Upload/type/2016-08-08/type_57a8233f2a954.jpg","car_id":"1","price":"1000","special_price":200,"start_date":"2016-01-01 01:01:10","end_date":"2017-01-01 01:01:10","number":10,"status":1,"remark":"备注信息 备注(审核不通过）","description":"活动说明","attention_count":22,"createuser":"12","areas":[{"sales_area_name":"江苏","sales_area_level":"2"}]}}'
        ,
        "example_url": "/4s/activity/addCarActivity"
        ,
        "example_body": ""
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "修改 新增活动 /4s/activity/updateCarActivity"
        ,
        "desc": "修改 新增活动  "
        ,
        "url": "/4s/activity/updateCarActivity/"
        ,
        "method": "POST"
        ,
        "parameters": '{"query":{"id":"fe3c43d06e029004c2aefbe51be0e158","user_id":21,"interior_color_id":21,"exterior_color_id":21,"car_image":"/Upload/type/2016-08-08/type_57ahan21.jpg","car_id":"21","price":"21000","special_price":2100,"start_date":"2016-01-01 01:01:10","end_date":"2017-01-01 01:01:10","number":210,"description":"活动说明","areas":[{"sales_area_name":"江苏","sales_area_level":2},{"sales_area_name":"河南","sales_area_level":1}]}}'
        ,
        "example_url": "/4s/activity/updateCarActivity"
        ,
        "example_body": ""
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "新增活动 列表 /4s/activity/list"
        , "desc": "新增活动 列表 "
        , "url": "/4s/activity/list/"
        , "method": "POST"
        , "parameters": '{"query":{"pagenum":1,"page":10,"car_id":2071}}'
        , "example_url": "/4s/activity/list"
        , "example_body": ""
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "活动历史 列表 /4s/activityTrend/list"
        ,
        "desc": "活动历史 列表 "
        ,
        "url": "/4s/activityTrend/list/"
        ,
        "method": "POST"
        ,
        "parameters": '{"query":{"pagenum":10,"page":1,"car_id":4033,"user_id":"199","interior_color_id":"1574e9c6b41793d8b39374cc8424a359","exterior_color_id":"0037ba11d61238ddc35680d4a67e3663"}} '
        ,
        "example_url": "/4s/activityTrend/list"
        ,
        "example_body": ""
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "修改 本店活动状态 /4s/activity/updateCarActivityStatus"
        , "desc": "修改 本店活动状态  "
        , "url": "/4s/activity/updateCarActivityStatus/"
        , "method": "POST"
        , "parameters": '特价车状态（1：审核中，2：未开始，3：在售，4：停售，5：过期，6：审核失败）'
        , "example_url": "/4s/activity/updateCarActivityStatus"
        , "example_body": '{"query":{"id":1,"user_id":10,"status":1}}'
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "喜好  列表品牌 车型 车款 三级联动方法 /4s/prefer/preferBrandModelCar"
        , "desc": "喜好  列表品牌 车型 车款 三级联动方法   "
        , "url": "/4s/prefer/preferBrandModelCar"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"258ce5ebe63161f7f265fbb508696d7b"}}'
        , "example_url": "/4s/prefer/preferBrandModelCar"
        , "example_body": '{"query":{"userId":"258ce5ebe63161f7f265fbb508696d7b"}}'
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "喜好  通过品牌的Id 找到品牌下所有的车型 /4s/prefer/findCarModelByBrand"
        , "desc": "喜好  通过品牌的Id 找到品牌下所有的车型   "
        , "url": "/4s/prefer/findCarModelByBrand"
        , "method": "POST"
        , "parameters": ''
        , "example_url": "/4s/prefer/findCarModelByBrand"
        , "example_body": '{"query":{"brandId":"258ce5ebe63161f7f265fbb508696d7b"}}'
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "喜好  通过品牌的Id 找到品牌下所有的车款 /4s/prefer/findCarByCarModel"
        , "desc": "喜好  通过品牌的Id 找到品牌下所有的车款   "
        , "url": "/4s/prefer/findCarByCarModel"
        , "method": "POST"
        , "parameters": ''
        , "example_url": "/4s/prefer/findCarByCarModel"
        , "example_body": '{"query":{"carModelId":"258ce5ebe63161f7f265fbb508696d7b"}}'
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "喜好  执行批量添加或者修改喜好车型的操作 /4s/prefer/updateCarModelPrefer"
        ,
        "desc": "喜好  执行批量添加或者修改喜好车型的操作  "
        ,
        "url": "/4s/prefer/updateCarModelPrefer"
        ,
        "method": "POST"
        ,
        "parameters": ''
        ,
        "example_url": "/4s/prefer/updateCarModelPrefer"
        ,
        "example_body": '{"query":{"brandId":"121","userId":"190","carModels":[{"carModelId":"281","carModelName":"281车lg"},{"carModelId":"283","carModelName":"283lg"},{"carModelId":"285","carModelName":"2835glg车 "},{"carModelId":"han","carModelName":"hanlg车  "},{"carModelId":"hanhan","carModelName":"hanhanlg车  "}]}}'
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "喜好  执行批量添加或者修改喜好车款的操作 /4s/prefer/updateCarPrefer"
        ,
        "desc": "喜好  执行批量添加或者修改喜好车款的操作  "
        ,
        "url": "/4s/prefer/updateCarPrefer"
        ,
        "method": "POST"
        ,
        "parameters": ''
        ,
        "example_url": "/4s/prefer/updateCarPrefer"
        ,
        "example_body": '{"query":{"carModelId":"279","userId":"190","cars":[{"carId":"281","carName":"281车lg"},{"carId":"283","carName":"283lg"},{"carId":"285","carName":"2835glg车 "},{"carId":"han","carName":"hanlg车  "},{"carId":"hanhan","carName":"hanhanlg车  "}]}}'
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "喜好  根据车款 查询出外观 和内饰颜色 /4s/offer/findCarColorByCarId"
        , "desc": "喜好  根据车款 查询出外观 和内饰颜色   "
        , "url": "/4s/offer/findCarColorByCarId"
        , "method": "POST"
        , "parameters": ''
        , "example_url": "/4s/offer/findCarColorByCarId"
        , "example_body": '{"query":{"carId":"aaa"}}'
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "报价  列表品牌 车型 车款 三级联动方法 /4s/prefer/findMyBrandModelCar"
        , "desc": "报价  列表品牌 车型 车款 三级联动方法   "
        , "url": "/4s/prefer/findMyBrandModelCar"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"258ce5ebe63161f7f265fbb508696d7b"}}'
        , "example_url": "/4s/prefer/findMyBrandModelCar"
        , "example_body": '{"query":{"userId":"258ce5ebe63161f7f265fbb508696d7b"}}'
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "报价  查询出当前报价的内饰和外观颜色 /4s/prefer/findMyCarColorByCarId"
        , "desc": "报价  查询出当前报价的内饰和外观颜色  "
        , "url": "/4s/prefer/findMyCarColorByCarId"
        , "method": "POST"
        , "parameters": ''
        , "example_url": "/4s/prefer/findMyCarColorByCarId"
        , "example_body": '{"query":{"userId":"7","carId":"2071"}}'
        , "example_result": "{}"
        , "otherurl": 1
    },
    {
        "title": "报价  本店的我的报价的车款的内饰 外饰 /4s/offer/findMyOfferlist"
        ,
        "desc": "报价  本店的我的报价的车款的内饰 外饰  "
        ,
        "url": "/4s/offer/findMyOfferlist"
        ,
        "method": "POST"
        ,
        "parameters": '参数说明: userId,pagenum,page为必填写  其他参数 如有则可填写 如无则填""或者"-1"'
        ,
        "example_url": "/4s/offer/findMyOfferlist"
        ,
        "example_body": "{\"query\":{\"pagenum\":1,\"page\":10,\"carId\":2071,\"userId\":\"adf\",\"brandId\":\"111\",\"carModelId\":\"111\",\"interiorColorId\":'\"beaaf261ac4b28ecb519be2c04944e5e\",\"de418d9bbe9666c227358c78c75f4f28\",\"fc5c75d22208275cdd7db7fd1def7f7a\"',\"exteriorColorId\":'\"26052\",\"29667\"'}}"
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "报价  修改或者批量修改我的报价  /4s/offer/batchUpdateCarPrice"
        ,
        "desc": "报价  修改或者批量修改我的报价  "
        ,
        "url": "/4s/offer/batchUpdateCarPrice"
        ,
        "method": "POST"
        ,
        "parameters": ''
        ,
        "example_url": "/4s/offer/batchUpdateCarPrice"
        ,
        "example_body": '{"query":[{"carPriceId":"00027e6e68c2ca875c2d728f710b2fda","stock":"110","onWay":"11","discount":"111111","lowPrice":"222222","createUser":"342","areas":[{"salesAreaName":"江苏","salesAreaLevel":2}]}]}'
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "报价  删除或者批量删除我的报价  /4s/offer/batchDeleteCarPrice"
        ,
        "desc": "报价  删除或者批量删除我的报价  "
        ,
        "url": "/4s/offer/batchDeleteCarPrice"
        ,
        "method": "POST"
        ,
        "parameters": ''
        ,
        "example_url": "/4s/offer/batchDeleteCarPrice"
        ,
        "example_body": '{"query":[{"carPriceId":"00027e6e68c2ca875c2d728f710b2fda"},{"carPriceId":"000793c4001c5c0b72c8312ffbfbb1db"},{"carPriceId":"000a65ebd2fadae90764940994607e41"},{"carPriceId":"000a65ebd2fadae90764940994607e42"}]}'
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "报价  本店的新增报价的车款的内饰和外饰的列表  /4s/offer/findNewOfferlist"
        ,
        "desc": "报价  本店的新增报价的车款的内饰和外饰的列表  "
        ,
        "url": "/4s/offer/findNewOfferlist"
        ,
        "method": "POST"
        ,
        "parameters": ''
        ,
        "example_url": "/4s/offer/findNewOfferlist"
        ,
        "example_body": "{\"query\":{\"pagenum\":1,\"page\":10,\"carId\":2071,\"interiorColorId\":\"'3c35d3f14db843d2a806e312d66fb378','55457753ba92d0d69286c53a1e8c9350'\",\"exteriorColorId\":\"'26204','26207'\"}}"
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "报价  添加或者批量添加我的报价  /4s/offer/batchAddCarPrice"
        ,
        "desc": "报价  添加或者批量添加我的报价  "
        ,
        "url": "/4s/offer/batchAddCarPrice"
        ,
        "method": "POST"
        ,
        "parameters": ''
        ,
        "example_url": "/4s/offer/batchAddCarPrice"
        ,
        "example_body": '{"query":[{"carId":"han","exteriorColorId":"hanhan","interiorColorId":"hanhanhan","stock":"110","onWay":"22","price":"3333333","discount":"111111","lowPrice":"222222","userId":"342","areas":[{"salesAreaName":"江苏","salesAreaLevel":5}]}]}'
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    },
    {
        "title": "报价  返回4店的报价历史活动  /4s/offerTrend/list"
        ,
        "desc": "报价  返回4店的报价历史活动  "
        ,
        "url": "/4s/offerTrend/list"
        ,
        "method": "POST"
        ,
        "parameters": ''
        ,
        "example_url": "/4s/offerTrend/list"
        ,
        "example_body": '{"query":{"pagenum":10,"page":1,"carId":"5958","userId":"174","interiorColorId":"310f4fc3bf4311e5ba4114dda95160ab","exteriorColorId":"11509"}}'
        ,
        "example_result": "{}"
        ,
        "otherurl": 1
    }
];

var NavigationListDATA_user = [
    {
        "title": "查看用户之前是否关注这个车型和关注取消关注改车型 /nl/user/attention/{isattention 或者 attention}/{user_id}/{car_model_id}"
        , "desc": "查看用户之前是否关注这个车型和关注取消关注改车型"

        , "url": "/nl/user/attention/{isattention 或者 attention}/{user_id}/{car_model_id}"

        , "method": "POST"

        , "parameters": "isattention:查看这个用户之前是否关注，attention：这个用户关注改车型返回的状态，user_id:用户ID,car_model_id:车型ID"

        , "example_url": "/nl/user/attention/attention/a8611412240342ca8bfddf2093b72254/163"
        //{\"query\":{\"tel\":\"15358309723\",\"name\":\"孙磊\",\"openid\":\"1234567\"}}
        , "example_body": ""
        , "example_result": "{}"
    },
    {
        "title": "微信用户登录 /nl/user/login/wx/{openid}"
        , "desc": "微信用户登录"

        , "url": "/nl/user/login/wx/{openid}"

        , "method": "POST"

        , "parameters": "openid:根据OPENID查找这个用户如果之前存在返回ID和WX_OPEN_ID，如果不存在创建新用户后返回ID和WX_OPEN_ID"

        , "example_url": "/nl/user/login/wx/oItA9v52kZQ9sf-aiNcMsgir-89q"
        //{\"query\":{\"tel\":\"15358309723\",\"name\":\"孙磊\",\"openid\":\"1234567\"}}
        , "example_body": ""
        , "example_result": "{}"
    },
    {
        "title": "微信绑定用户的手机和姓名 /nl/user/binding"
        , "desc": "微信用户登录"

        , "url": "/nl/user/binding"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/user/binding"
        , "example_body": "{\"query\":{\"tel\":\"15358309723\",\"name\":\"孙磊\",\"open_id\":\"1234567\"}}"
        , "example_result": "{}"
    },
    {
        "title": "根据OPENID获得微信用户的昵称和头像 /nl/user/getuserinfo/{open_id}"
        , "desc": "获得微信用户的昵称和头像"

        , "url": "/nl/user/getuserinfo/{open_id}"

        , "method": "POST"

        , "parameters": ""

        , "example_url": "/nl/user/getuserinfo/okI-ws1xSGawmy9zZSUFOxuhgnHU"
        , "example_body": ""
        , "example_result": "{}"
    }
];

var NavigationListDATA_mobile = [
    {
        "title": "mobile/login 通过帐号名和密码或者token登录平台 /nl/mobile/login/auth/mobileLogin"
        , "desc": "通过帐号名和密码或者token登录平台"

        , "url": "/nl/mobile/login/auth/mobileLogin"

        , "method": "POST"

        , "parameters": '{"username":"18751852690","password":"123456"}'

        , "example_url": "/nl/mobile/login/auth/mobileLogin"
        , "example_body": '{"username":"18751852690","password":"123456"}'
        , "example_result": "{}"
    },
    {
        "title": "mobile/login 免登录 /nl/mobile/login/auth/mobileVoidLogin"
        , "desc": "免登录"

        , "url": "/nl/mobile/login/auth/mobileVoidLogin"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/nl/mobile/login/auth/mobileVoidLogin"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "mobile/login 根据微信OPENID登录 /nl/mobile/login/auth/mobileLoginByWeChat"
        , "desc": "根据微信OPENID登录"

        , "url": "/nl/mobile/login/auth/mobileLoginByWeChat"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/nl/mobile/login/auth/mobileLoginByWeChat"
        , "example_body": '{"openId":"187518526923"}'
        , "example_result": "{}"
    },
    {
        "title": "(韩 20170330修改)mobile/login 注册接口 /nl/mobile/login/auth/loginUp"
        , "desc": "注册接口"

        , "url": "/nl/mobile/login/auth/loginUp"

        , "method": "POST"

        , "parameters": '注册接口 注册接口增加groupId属性,说明是小组组长邀请之后注册的'

        , "example_url": "/nl/mobile/login/auth/loginUp"
        , "example_body": '{"cellphone":"18751852690","signInNo":"8650141","password":"123456"}'
        , "example_result": "{}"
    },
    {
        "title": "mobile/login 修改密码操作 /nl/mobile/login/auth/forgetPassword"
        , "desc": "修改密码操作"

        , "url": "/nl/mobile/login/auth/forgetPassword"

        , "method": "POST"

        , "parameters": '修改密码操作'

        , "example_url": "/nl/mobile/login/auth/forgetPassword"
        , "example_body": '{"query":{"cellphone":"18751852690","signInNo":"8650141","password":"12345116"}}'
        , "example_result": "{}"
    },
    {
        "title": "authCode 发送授权的验证码 authCode/sentSignInNo"
        ,
        "desc": "授权的验证码"

        ,
        "url": "/authCode/sentSignInNo"

        ,
        "method": "POST"

        ,
        "parameters": 'type的类别是:1:注册验证码, 2:修改密码验证码 3:免费查询底价车 4.修改手机验证码 5.修改支付密码的验证码 {"cellphone":"18751852690","type":"1"}'

        ,
        "example_url": "/authCode/sentSignInNo"
        ,
        "example_body": '{"cellphone":"18751852690","type":"1"}'
        ,
        "example_result": "{}"
    },
    {
        "title": "authCode 校验发送的授权的验证码是否正确 authCode/checkSignInNoIsTrue"
        ,
        "desc": "校验发送的授权的验证码是否正确"

        ,
        "url": "/authCode/checkSignInNoIsTrue"

        ,
        "method": "POST"

        ,
        "parameters": 'type的类别是:1:注册验证码, 2:修改密码验证码 3:免费查询底价车 4.修改手机验证码 5.修改支付密码的验证码 {"cellphone":"18751852690","signInNo":"8650141","type":"1"}'

        ,
        "example_url": "/authCode/checkSignInNoIsTrue"
        ,
        "example_body": '{"cellphone":"18751852690","signInNo":"8650141","type":"1"}'
        ,
        "example_result": "{}"
    },
    {
        "title": "myScore 个人中心-积分记录 /general/myscore"
        , "desc": "个人中心-积分记录"

        , "url": "/general/myscore/{user_id}/{pagenum}/{page}"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/general/myscore/7/10/1"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "myTicket 个人中心-普通用户的优惠券 /general/myticket"
        , "desc": "个人中心-普通用户的优惠券"

        , "url": "/general/myticket/{user_id}/{status}/{pagenum}/{page}"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/general/myticket/c5b3e3a08fad7be435b9aa24d2ccdfac/3/10/1"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "myTicket 个人中心-我的活动订单 /general/myactivityorder"
        , "desc": "个人中心-普通用户的优惠券"

        , "url": "/general/myactivityorder"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/general/myactivityorder"
        , "example_body": '{"user_id":"187518526923","pagenum":"10","page":"1"}'
        , "example_result": "{}"
    },
    {
        "title": "myTicket 个人中心-根据活动订单ID获得订单详情 /general/getorderdetail"
        , "desc": "个人中心-根据活动订单ID获得订单详情"

        , "url": "/general/getorderdetail"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/general/getorderdetail"
        , "example_body": '{"id":"asdfasfdasdfasdf"}'
        , "example_result": "{}"
    },
    {
        "title": "myTicket 个人中心-修改个人信息 updateGeneralInfo"
        ,
        "desc": "个人中心-修改个人信息"

        ,
        "url": "/general/updateGeneralInfo"

        ,
        "method": "POST"

        ,
        "parameters": '说明: 当修改手机号的时候需要验证码,注意需先请求接口判断验证码是否正确'

        ,
        "example_url": "/general/updateGeneralInfo"
        ,
        "example_body": '{"query":{"id":"9124a9f6224c7beefff69cd74b239cee","headUrl":"http://yichenghui.oss-cn-shanghai.aliyuncs.com/gouchehui/web/Upload/headimg/3D9ABE96D5332DFD2F767CFB10CB06A2","name":"HAN","nick":"1231","signInNo":"255520","tel":"18751852690","sex":"1","cellphone":"18751111152"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "首页-轮播图 /mobile/ad/findAllShowAdByMobile"
        , "desc": "首页-轮播图"

        , "url": "/mobile/ad/findAllShowAdByMobile"

        , "method": "POST"

        , "parameters": '找到所有可视的轮播图'

        , "example_url": "/mobile/ad/findAllShowAdByMobile"
        , "example_body": '{"query":{"pagenum":10,"page":1}}'
        , "example_result": "{}"
    },
    {
        "title": "首页-底价车 /mobile/carPrice/findCarPriceList"
        , "desc": "首页-底价车"

        , "url": "/mobile/carPrice/findCarPriceList"

        , "method": "POST"

        , "parameters": ' '

        , "example_url": "/mobile/carPrice/findCarPriceList"
        , "example_body": '{"query":{"pagenum":10,"page":1}}'
        , "example_result": "{}"
    },
    {
        "title": "首页-车生活 /mobile/carLifeBBS/findCarLifeBBSList"
        , "desc": "首页-车生活"

        , "url": "/mobile/carLifeBBS/findCarLifeBBSList"

        , "method": "POST"

        , "parameters": 'typeId可传可不传,不传的话为空 {"query":{"pagenum":10,"page":1,"pid":"1","typeId":""}}  '

        , "example_url": "/mobile/carLifeBBS/findCarLifeBBSList"
        , "example_body": '{"query":{"pagenum":10,"page":1,"pid":"1","typeId":""}}'
        , "example_result": "{}"
    },
    {
        "title": "首页-热门推荐 /mobile/attentionCarModel/findAttentionCarModelList"
        , "desc": "首页-热门推荐"

        , "url": "/mobile/attentionCarModel/findAttentionCarModelList"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/mobile/attentionCarModel/findAttentionCarModelList"
        , "example_body": '{"query":{"pagenum":10,"page":1}}'
        , "example_result": "{}"
    },
    {
        "title": "首页-查询出数字对应的 目前在售的品牌 /mobile/carPrice/findOnSellBrand/letter "
        , "desc": "首页-查询出数字对应的 目前在售的品牌"

        , "url": "/mobile/carPrice/findOnSellBrand/letter"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/mobile/carPrice/findOnSellBrand/letter"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "首页-查询出所有在售品牌下的车型  /mobile/carPrice/findOnSellCarModelByBracnd "
        , "desc": "首页-查询出所有在售品牌下的车型 "

        , "url": "/mobile/carPrice/findOnSellCarModelByBracnd"

        , "method": "POST"

        , "parameters": '{"query":{"brandId":"74"}}'

        , "example_url": "/mobile/carPrice/findOnSellCarModelByBracnd"
        , "example_body": '{"query":{"brandId":"74"}}'
        , "example_result": "{}"
    },
    {
        "title": "首页-查询出所有在售车型下的车款  /mobile/carPrice/findOnSellCarByCarModelId "
        , "desc": "首页-查询出所有在售车型下的车款 "

        , "url": "/mobile/carPrice/findOnSellCarByCarModelId"

        , "method": "POST"

        , "parameters": '{"query":{"carModelId":"1015"}}'

        , "example_url": "/mobile/carPrice/findOnSellCarByCarModelId"
        , "example_body": '{"query":{"carModelId":"1015"}}'
        , "example_result": "{}"
    },
    {
        "title": "首页 查询  /mobile/carPrice/searchBrandCarModelCar "
        ,
        "desc": "首页 查询 "

        ,
        "url": "/mobile/carPrice/searchBrandCarModelCar"

        ,
        "method": "POST"

        ,
        "parameters": '{"query":{"name":"6247","carTypeId":"6247","brandAlif":"6247","minAuthPrice":"6247","maxAuthPrice":"11111111"}}'

        ,
        "example_url": "/mobile/carPrice/searchBrandCarModelCar"
        ,
        "example_body": '{"query":{"name":"6247","carTypeId":"6247","brandAlif":"6247","minAuthPrice":"6247","maxAuthPrice":"11111111"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "查询出所有车款下在售所有的内饰和外观  /mobile/carPrice/findMyCarColorByCarId "
        , "desc": "查询出所有车款下在售所有的内饰和外观 "

        , "url": "/mobile/carPrice/findMyCarColorByCarId"

        , "method": "POST"

        , "parameters": '{"query":{"carId":"6247"}}'

        , "example_url": "/mobile/carPrice/findMyCarColorByCarId"
        , "example_body": '{"query":{"carId":"6247"}}'
        , "example_result": "{}"
    },
    {
        "title": "查询出车款下在售所有有底价的的内饰和外观  /mobile/carPrice/findMyIndexPriceCarColorByCarId "
        , "desc": "查询出车款下在售所有底价的内饰和外观 "

        , "url": "/mobile/carPrice/findMyIndexPriceCarColorByCarId"

        , "method": "POST"

        , "parameters": '{"query":{"carId":"6247"}}'

        , "example_url": "/mobile/carPrice/findMyIndexPriceCarColorByCarId"
        , "example_body": '{"query":{"carId":"6247"}}'
        , "example_result": "{}"
    },
    {
        "title": "首页-特价车-查询出所有的特价车  /mobile/specialPriceCar/findSpecialPriceCarList "
        ,
        "desc": "首页-特价车-查询出所有的特价车 "

        ,
        "url": "/mobile/specialPriceCar/findSpecialPriceCarList"

        ,
        "method": "POST"

        ,
        "parameters": 'orderRule有两种规则 降序:"DESC" 升序:"ASC" orderField有两个字段: discount和price 参数如下: {"query":{"pagenum":10,"page":1,"orderField":"discount","orderRule":"desc"}}'

        ,
        "example_url": "/mobile/specialPriceCar/findSpecialPriceCarList"
        ,
        "example_body": '{"query":{"pagenum":10,"page":1,"orderField":"discount","orderRule":"desc"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "特价车-详情页  /mobile/specialPriceCar/specialPriceCarDetails "
        ,
        "desc": "首页-特价车-查询出所有的特价车 "

        ,
        "url": "/mobile/specialPriceCar/specialPriceCarDetails"

        ,
        "method": "POST"

        ,
        "parameters": 'carSpecialId(特价车id);userId'

        ,
        "example_url": "/mobile/specialPriceCar/specialPriceCarDetails"
        ,
        "example_body": '{"query":{"carSpecialId":"0138780983ae454fb2f6ae9f309d1fc9","userId":"37f0601a687ecb9410481831ac45805c"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "车型关注（取消关注）  /mobile/specialPriceCar/attentionCarModel "
        , "desc": "首页-特价车-查询出所有的特价车 "

        , "url": "/mobile/specialPriceCar/attentionCarModel"

        , "method": "POST"

        , "parameters": 'userId;carModelId'

        , "example_url": "/mobile/specialPriceCar/attentionCarModel"
        , "example_body": '{"query":{"userId":"1592084fa48153969d7b8d6fd225bb09","carModelId":"5198"}}'
        , "example_result": "{}"
    },
    {
        "title": "问题咨询列表  /mobile/specialPriceCar/carQuestionList "
        , "desc": "详情页内问题咨询列表 "

        , "url": "/mobile/specialPriceCar/carQuestionList"

        , "method": "POST"

        , "parameters": 'carModelId'

        , "example_url": "/mobile/specialPriceCar/carQuestionList"
        , "example_body": '{"query":{"carModelId":"224"}}'
        , "example_result": "{}"
    },
    {
        "title": "添加问题咨询  /mobile/specialPriceCar/carQuestion "
        ,
        "desc": "添加问题咨询 "

        ,
        "url": "/mobile/specialPriceCar/carQuestion"

        ,
        "method": "POST"

        ,
        "parameters": 'carBrandId;carModelId;question;questionType;from;userId;'

        ,
        "example_url": "/mobile/specialPriceCar/carQuestion"
        ,
        "example_body": '{"query":{"carBrandId":"52","carModelId":"224","question":"好车！","questionType":"1","from":"1","userId":"3338cd23f4475df4b37082f8a4aee05f"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "意见反馈  /mobile/specialPriceCar/carUserQuestion "
        ,
        "desc": "首页右下角添加意见反馈功能 "

        ,
        "url": "/mobile/specialPriceCar/carUserQuestion"

        ,
        "method": "POST"

        ,
        "parameters": 'carModelId'

        ,
        "example_url": "/mobile/specialPriceCar/carUserQuestion"
        ,
        "example_body": '{"query":{"username":"张三","type":"商品咨询","tel":"15263063231","email":"22236@qq.com","view":"好好好","userId":"3338cd23f4475df4b37082f8a4aee05f"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "首页-区域-找到销售地区  /mobile/area/findOnSellArea "
        , "desc": "首页-区域-找到销售地区  "

        , "url": "/mobile/area/findOnSellArea"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/mobile/area/findOnSellArea"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "找车-汽车详情-图片 0: 外观 1: 内饰 2:空间 3:细节  /mobile/carColorImage/findCarImageByQuery "
        ,
        "desc": "找到-汽车详情-0: 外观 1: 内饰 2:空间 3:细节"

        ,
        "url": "/mobile/carColorImage/findCarImageByQuery"

        ,
        "method": "POST"

        ,
        "parameters": '返回说明各个数字代表的意思 0: 外观 1: 内饰 2:空间 3:细节 {"query":{"carId":"carId","interiorColorId":"1015","exteriorColorId":"1015"}}'

        ,
        "example_url": "/mobile/carColorImage/findCarImageByQuery"
        ,
        "example_body": '{"query":{"carId":"carId","interiorColorId":"1015","exteriorColorId":"1015"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "找车-查询出低价车详情  /mobile/carPrice/findCarPriceDetails "
        ,
        "desc": "找到-查询出低价车详情"

        ,
        "url": "/mobile/carPrice/findCarPriceDetails"

        ,
        "method": "POST"

        ,
        "parameters": '{"query":{"userId":"123213","carPriceId":"08a4811ffb3d48cae39e8e3e1633c176","carId":"3524"}}'

        ,
        "example_url": "/mobile/carPrice/findCarPriceDetails"
        ,
        "example_body": '{"query":{"userId":"aa1","carId":"6247","interiorColorId":"4e16e330781e69843cec0ca9b6450b61","exteriorColorId":"14839"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "找车-查询出低价车列表  /mobile/carPrice/findCarPriceByQuery "
        ,
        "desc": "找到-查询出低价车列表"

        ,
        "url": "/mobile/carPrice/findCarPriceByQuery"

        ,
        "method": "POST"

        ,
        "parameters": 'orderRule有两种规则 降序:"DESC" 升序:"ASC" orderField有两个字段: xjCount(询价量)和authPrice(官方指导价) 默认以官方指导价升序排列{"query":{"pagenum":"10","page":"1","brandId":"52","carModelId":"223","carTypeId":"0ff0c498bf3d11e5ba4114dda95160ab","maxPrice":"50000000","minPrice":"0","orderField":"xjCount","orderRule":"DESC"}}'

        ,
        "example_url": "/mobile/carPrice/findCarPriceByQuery"
        ,
        "example_body": '{"query":{"pagenum":"10","page":"1","brandId":"52","carModelId":"223","carTypeId":"0ff0c498bf3d11e5ba4114dda95160ab","maxPrice":"50000000","minPrice":"0","orderField":"xjCount","orderRule":"DESC"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "(首页)免费看底价-列表  /mobile/indexCarPrice/findCarPriceByQuery "
        ,
        "desc": "免费看底价-列表"

        ,
        "url": "/mobile/indexCarPrice/findCarPriceByQuery"

        ,
        "method": "POST"

        ,
        "parameters": 'orderRule有两种规则 降序:"DESC" 升序:"ASC" orderField有一个字段: lowPrice(最低价) 默认以lowPrice了降序排列{"query":{"pagenum":"10","page":"1","brandId":"102","carTypeId":"0ff0c9d4bf3d11e5ba4114dda95160ab","maxPrice":"50000000","minPrice":"0","orderField":"lowPrice","orderRule":"DESC"}}'

        ,
        "example_url": "/mobile/indexCarPrice/findCarPriceByQuery"
        ,
        "example_body": '{"query":{"pagenum":"10","page":"1","brandId":"102","carTypeId":"0ff0c9d4bf3d11e5ba4114dda95160ab","maxPrice":"50000000","minPrice":"0","orderField":"lowPrice","orderRule":"DESC"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "免费看底价-详情  /mobile/indexCarPrice/findIndexPriceDetails "
        ,
        "desc": "免费看底价-详情"

        ,
        "url": "/mobile/indexCarPrice/findIndexPriceDetails"

        ,
        "method": "POST"

        ,
        "parameters": '{"query":{"userId":"184","carId":"7363","interiorColorId":"3111c4a9bf4311e5ba4114dda95160ab","exteriorColorId":"37257"}}'

        ,
        "example_url": "/mobile/indexCarPrice/findIndexPriceDetails"
        ,
        "example_body": '{"query":{"carId":"7363","interiorColorId":"3111c4a9bf4311e5ba4114dda95160ab","exteriorColorId":"37257","userId":"184"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "车款类型-列表   /mobile/carType/findAllCarType "
        , "desc": "车款类型-列表"

        , "url": "/mobile/carType/findAllCarType"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/mobile/carType/findAllCarType"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "个人中心-我的主贴   /mobile/carLifeBBS/userCarLifeBBSList "
        , "desc": "我的主贴"

        , "url": "/mobile/carLifeBBS/userCarLifeBBSList"

        , "method": "POST"

        , "parameters": 'userId'

        , "example_url": "/mobile/carLifeBBS/userCarLifeBBSList"
        , "example_body": '{"query":{"userId":"58c11488953f81aed938bd935e8b0b34","pagenum":10,"page":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心-我的主贴-删除   /mobile/carLifeBBS/userCarLifeBBSDel "
        , "desc": "我的主贴"

        , "url": "/mobile/carLifeBBS/userCarLifeBBSDel"

        , "method": "POST"

        , "parameters": 'bbsId'

        , "example_url": "/mobile/carLifeBBS/userCarLifeBBSDel"
        , "example_body": '{"query":{"bbsId":"037d6a19a8c3d69821764d4a1c2ba56d"}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心-我的关注   /mobile/attentionCarModel/userAttentionCarModelList "
        , "desc": "我的关注"

        , "url": "/mobile/attentionCarModel/userAttentionCarModelList"

        , "method": "POST"

        , "parameters": 'userId'

        , "example_url": "/mobile/attentionCarModel/userAttentionCarModelList"
        , "example_body": '{"query":{"userId":"385b9abc339f87cfac5bf4be66a4a887"}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心-我的关注-删除   /mobile/attentionCarModel/userAttentionCarModelDel "
        , "desc": "我的关注"

        , "url": "/mobile/attentionCarModel/userAttentionCarModelDel"

        , "method": "POST"

        , "parameters": 'id'

        , "example_url": "/mobile/attentionCarModel/userAttentionCarModelDel"
        , "example_body": '{"query":{"id":"0194ffc12eee9b55d7f5ee9b58243290"}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心-询价订单   findIsPaycarInquiryOrder "
        ,
        "desc": "询价订单"

        ,
        "url": "/mobile/order/findIsPaycarInquiryOrder"

        ,
        "method": "POST"

        ,
        "parameters": ' callback为1时表示:PC端询价 2:Mobile端找车 3.免费看底价 4.特价车  status: 0未支付 ，1已支付（未完善），2已失效，3审核中,4通过审核，5未通过审核，6出库中，7提车中，8已完成，9支付中，10支付失败，11支付取消 money:定金'

        ,
        "example_url": "/mobile/order/findIsPaycarInquiryOrder"
        ,
        "example_body": '{"query":{"pagenum":10,"page":"1","userId":184}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "个人中心-购车订单   findIsPaycarPaycarOrder "
        , "desc": "购车订单"

        , "url": "/mobile/order/findIsPaycarPaycarOrder"

        , "method": "POST"

        , "parameters": 'status: 0未支付 ，1已支付（未完善），2已失效，3审核中,4通过审核，5未通过审核，6出库中，7提车中，8已完成，9支付中，10支付失败，11支付取消'

        , "example_url": "/mobile/order/findIsPaycarPaycarOrder"
        , "example_body": '{"query":{"pagenum":10,"page":"1","userId":184}}'
        , "example_result": "{}"
    },
    {
        "title": "车生活详情页   /mobile/carLifeBBS/carLifeBBSDetail"
        , "desc": "车生活详情页"

        , "url": "/mobile/carLifeBBS/carLifeBBSDetail"

        , "method": "POST"

        , "parameters": 'id'

        , "example_url": "/mobile/carLifeBBS/carLifeBBSDetail"
        , "example_body": '{"query":{"id":"47edb134ad689ac688038653b4c5d63d","user":"id"}}'
        , "example_result": "{}"
    },
    {
        "title": "订单 一键免费询价   /mobile/order/aKeyBuyCar"
        ,
        "desc": "订单 - 一键免费询价"

        ,
        "url": "/mobile/order/aKeyBuyCar"

        ,
        "method": "POST"

        ,
        "parameters": '{"query":{"cellphone":"187518526911","signInNo":"123456","carPriceId":"a3507382be2dd729b94d1b41097c67c2","carId":"7391","userId":"0e7d07c240e24eb18b58c205679638e0","userRemark":"备注...."}}'

        ,
        "example_url": "/mobile/order/freeFindCarPrice"
        ,
        "example_body": '{"query":{"cellphone":"187518526911","signInNo":"123456","carPriceId":"a3507382be2dd729b94d1b41097c67c2","carId":"7391","userId":"0e7d07c240e24eb18b58c205679638e0","userRemark":"备注...."}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "订单 一键免费询价   /mobile/order/freeFindCarPrice"
        ,
        "desc": "订单 - 一键免费询价"

        ,
        "url": "/mobile/order/freeFindCarPrice"

        ,
        "method": "POST"

        ,
        "parameters": 'userId:如果是免登录userId不可传{"query":{"interiorColorId":"000a9d1430458c3bfadf04e730040ffb","exteriorColorId":"33370","cellphone":"187518526911","signInNo":"123456","carPriceId":"a3507382be2dd729b94d1b41097c67c2","carId":"7391","userId":"0e7d07c240e24eb18b58c205679638e0"}}'

        ,
        "example_url": "/mobile/order/freeFindCarPrice"
        ,
        "example_body": '{"query":{"interiorColorId":"000a9d1430458c3bfadf04e730040ffb","exteriorColorId":"33370","cellphone":"187518526911","signInNo":"123456","carId":"7391","userId":"0e7d07c240e24eb18b58c205679638e0",userRemark":"备注...."}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "订单 一键免费订车（特价车）   /mobile/order/freeFindCarSpecial"
        ,
        "desc": "订单 - 一键免费订车（特价车）"

        ,
        "url": "/mobile/order/freeFindCarSpecial"

        ,
        "method": "POST"

        ,
        "parameters": 'userId:如果是免登录userId不可传{"query":{"cellphone":"187518526911","signInNo":"123456","carSpecialId":"0e09a077e07b4eb2bb163bfa022c0c75","userId":"0e7d07c240e24eb18b58c205679638e0"}}'

        ,
        "example_url": "/mobile/order/freeFindCarSpecial"
        ,
        "example_body": '{"query":{"cellphone":"187518526911","signInNo":"123456","carSpecialId":"0e09a077e07b4eb2bb163bfa022c0c75","userId":"0e7d07c240e24eb18b58c205679638e0","userRemark":"备注...."}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "车生活帖子评论接口   /mobile/carLifeBBS/carLifeBBSComments"
        ,
        "desc": "车生活帖子评论接口"

        ,
        "url": "/mobile/carLifeBBS/carLifeBBSComments"

        ,
        "method": "POST"

        ,
        "parameters": '{"query":{"id(帖子ID)":"231564safdsfdasdfasdf","user_id(评论用户ID)":"asdfasdfasdfasdf","comment(评论内容)":"asdfasfdafsd"}}'

        ,
        "example_url": "/mobile/carLifeBBS/carLifeBBSComments"
        ,
        "example_body": '{"query":{"id":"47edb134ad689ac688038653b4c5d63d","user_id":"a7c9b39e56d24de7ac45296d7e1c1e68","comment":"asdfasfasfd"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "车生活帖子点赞接口   /mobile/carLifeBBS/carLifeBBSThumbs"
        ,
        "desc": "车生活帖子点赞接口"

        ,
        "url": "/mobile/carLifeBBS/carLifeBBSThumbs"

        ,
        "method": "POST"

        ,
        "parameters": '{"query":{"id(帖子ID)":"231564safdsfdasdfasdf","user_id(点赞用户ID)":"asdfasdfasdfasdf"}}'

        ,
        "example_url": "/mobile/carLifeBBS/carLifeBBSThumbs"
        ,
        "example_body": '{"query":{"bbs_id":"4db67e9cc60833e0d62f15f1cbd26d00","user_id":"a7c9b39e56d24de7ac45296d7e1c1e68"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "每日签到   /general/coineveryday/user_id"
        , "desc": "每日签到"

        , "url": "/general/coineveryday/user_id"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/general/coineveryday/a7c9b39e56d24de7ac45296d7e1c1e68"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "查询出Tel在普通用户中是否存在   /general/findTelIsEmptyByQuery"
        , "desc": "查询出Tel在普通用户中是否存在"

        , "url": "/general/findTelIsEmptyByQuery"

        , "method": "POST"

        , "parameters": '{"query":{"tel":"18751852690"}}'

        , "example_url": "/general/findTelIsEmptyByQuery"
        , "example_body": '{"query":{"tel":"18751852690"}}'
        , "example_result": "{}"
    },
    {
        "title": "我的车币记录   /general/mycoin/user_id"
        , "desc": "我的车币记录"

        , "url": "/general/mycoin/{user_id}/{pagenum}/{page}"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/general/mycoin/a7c9b39e56d24de7ac45296d7e1c1e68/10/1"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "获取车币首页接口   /general/coinhome/user_id"
        , "desc": "获取车币首页接口"

        , "url": "/general/coinhome/user_id"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/general/coinhome/a7c9b39e56d24de7ac45296d7e1c1e68"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "查询搜索时,换车款的入口    /findCarPriceEnter"
        , "desc": "查询搜索时,换车款的入口  "

        , "url": "/mobile/carPrice/findCarPriceEnter"

        , "method": "POST"

        , "parameters": ''

        , "example_url": "/mobile/carPrice/findCarPriceEnter"
        , "example_body": '{"query":{"carId":"6247","interiorColorId":"6247","exteriorColorId":"6247"}}'
        , "example_result": "{}"
    }
];

var NavigationListDATA_app = [
    {
        "title": "汽车服务--首页汽车服务列表（小logo） /appnl/shop/getServiceList"
        , "desc": "汽车服务--首页汽车服务列表（小logo）"
        , "url": "/appnl/shop/getServiceList"
        , "method": "POST"
        , "parameters": ''
        , "example_url": "/appnl/shop/getServiceList"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--首页汽车服务列表（小logo han0621） /appnl/shop/getAllServiceList"
        , "desc": "汽车服务--首页汽车服务列表（小logo han0621）"
        , "url": "/appnl/shop/getAllServiceList"
        , "method": "POST"
        , "parameters": ''
        , "example_url": "/appnl/shop/getAllServiceList"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--首页广告位 /appnl/shop/getAdvertisementList"
        , "desc": "汽车服务--首页广告位"
        , "url": "/appnl/shop/getAdvertisementList"
        , "method": "POST"
        , "parameters": ''
        , "example_url": "/appnl/shop/getAdvertisementList"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--首页消息列表 /appnl/shop/getNewsList"
        , "desc": "汽车服务--首页消息列表"
        , "url": "/appnl/shop/getNewsList"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"4f2ab6976d7d41f78896b942995027fc","page":1,"pagenum":10}}'
        , "example_url": "/appnl/shop/getNewsList"
        , "example_body": '{"query":{"userId":"4f2ab6976d7d41f78896b942995027fc","page":1,"pagenum":10}}'
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--首页消息详情 /appnl/shop/getNewsDetails"
        , "desc": "汽车服务--首页消息详情"
        , "url": "/appnl/shop/getNewsDetails"
        , "method": "POST"
        , "parameters": '{"query":{"messageId":"1"}}'
        , "example_url": "/appnl/shop/getNewsDetails"
        , "example_body": '{"query":{"messageId":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--首页领取积分 /appnl/shop/receiveScore"
        , "desc": "汽车服务--首页领取积分"
        , "url": "/appnl/shop/receiveScore"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"4f2ab6976d7d41f78896b942995027fc","score":"20","pay_id":"1"}}'
        , "example_url": "/appnl/shop/receiveScore"
        , "example_body": '{"query":{"userId":"4f2ab6976d7d41f78896b942995027fc","score":"20","pay_id":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--首页热门店铺推荐 /appnl/shop/getHotShopList"
        , "desc": "汽车服务--首页热门店铺推荐"
        , "url": "/appnl/shop/getHotShopList"
        , "method": "POST"
        , "parameters": ''
        , "example_url": "/appnl/shop/getHotShopList"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--店铺列表页 /appnl/shop/getShopList"
        , "desc": "汽车服务首页模糊搜索店铺（店铺名称或者商品名称）"
        , "url": "/appnl/shop/getShopList"
        , "method": "POST"
        , "parameters": '{"query":{"select":" ","pagenum":2,"page":1}}'
        , "example_url": "/appnl/shop/getShopList"
        , "example_body": '{"query":{"select":" ","pagenum":2,"page":1}}'
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--店铺详情页 /appnl/shop/getShopDetails"
        , "desc": "汽车服务--店铺详情页"
        , "url": "/appnl/shop/getShopDetails"
        , "method": "POST"
        , "parameters": '{"query":{"shop_id":1}}'
        , "example_url": "/appnl/shop/getShopDetails"
        , "example_body": '{"query":{"shop_id":1}}'
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--商品列表页 /appnl/shop/getGoodsList"
        ,
        "desc": "汽车服务--商品列表页"
        ,
        "url": "/appnl/shop/getGoodsList"
        ,
        "method": "POST"
        ,
        "parameters": '{"query":{"service_id":"1","pagenum":2,"page":1,"provinceId":"10","cityId":"74","districtId":"740","userLongitude":"118.905082","userLatitude":"32.043496","goodsOrder":"goodsCreateTime","sortOrder":"DESC"}}'
        ,
        "example_url": "/appnl/shop/getGoodsList"
        ,
        "example_body": '{"query":{"service_id":"1","pagenum":2,"page":1,"provinceId":"10","cityId":"74","districtId":"740","userLongitude":"118.905082","userLatitude":"32.043496","goodsOrder":"goodsCreateTime","sortOrder":"DESC"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "汽车服务--店铺内商品列表页 /appnl/shop/getShopGoodsList"
        , "desc": "汽车服务--店铺内商品列表页"
        , "url": "/appnl/shop/getShopGoodsList"
        , "method": "POST"
        , "parameters": '{"query":{"shop_id":"1","service_id":"1","pagenum":2,"page":1}}'
        , "example_url": "/appnl/shop/getShopGoodsList"
        , "example_body": '{"query":{"shop_id":"1","service_id":"1","pagenum":2,"page":1}}'
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--商品详情页 /appnl/shop/getGoodsDetails"
        , "desc": "汽车服务--商品详情页"
        , "url": "/appnl/shop/getGoodsDetails"
        , "method": "POST"
        , "parameters": '{"query":{"goods_id":"1"}}'
        , "example_url": "/appnl/shop/getGoodsDetails"
        , "example_body": '{"query":{"goods_id":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--筛选省份 /appnl/shop/getFilterProvince"
        , "desc": "汽车服务--筛选省份"
        , "url": "/appnl/shop/getFilterProvince"
        , "method": "POST"
        , "parameters": ''
        , "example_url": "/appnl/shop/getFilterProvince"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--筛选城市 /appnl/shop/getFilterCity"
        , "desc": "汽车服务--筛选城市"
        , "url": "/appnl/shop/getFilterCity"
        , "method": "POST"
        , "parameters": '{"query":{"provinceId":1}}'
        , "example_url": "/appnl/shop/getFilterCity"
        , "example_body": '{"query":{"provinceId":1}}'
        , "example_result": "{}"
    },
    {
        "title": "汽车服务--筛选地区 /appnl/shop/getFilterDistrict"
        , "desc": "汽车服务--筛选地区"
        , "url": "/appnl/shop/getFilterDistrict"
        , "method": "POST"
        , "parameters": '{"query":{"cityId":1}}'
        , "example_url": "/appnl/shop/getFilterDistrict"
        , "example_body": '{"query":{"cityId":1}}'
        , "example_result": "{}"
    },
    {
        "title": "充值--订单添加 /nl/order/carServiceOrder/add"
        ,
        "desc": "充值--订单添加"
        ,
        "url": "/nl/order/carServiceOrder/add"
        ,
        "method": "POST"
        ,
        "parameters": '{"query":{"user_id":"4f2ab6976d7d41f78896b942995027fc","money":"1000","card_id":"1","pay_obj":"2","goods_id":"1"}}'
        ,
        "example_url": "/nl/order/carServiceOrder/add"
        ,
        "example_body": '{"query":{"user_id":"4f2ab6976d7d41f78896b942995027fc","money":"1000","card_id":"1","pay_obj":"2","goods_id":"1"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "充值--订单读取 /nl/order/carServiceOrder/read"
        , "desc": "充值--订单读取"
        , "url": "/nl/order/carServiceOrder/read"
        , "method": "POST"
        , "parameters": '{"query":{"pay_id":"111"}}'
        , "example_url": "/nl/order/carServiceOrder/read"
        , "example_body": '{"query":{"pay_id":"111"}}'
        , "example_result": "{}"
    },
    {
        "title": "充值--订单更新 /nl/order/carServiceOrder/update"
        , "desc": "充值--订单更新"
        , "url": "/nl/order/carServiceOrder/update"
        , "method": "POST"
        , "parameters": '{"query":{"pay_id":"111","goods_price_type":"2","money":"35.6"}}'
        , "example_url": "/nl/order/carServiceOrder/update"
        , "example_body": '{"query":{"pay_id":"111","goods_price_type":"2","money":"35.6"}}'
        , "example_result": "{}"
    },
    {
        "title": "充值--发送支付宝订单数据 /nl/order/alipay/app/20"
        , "desc": "充值--发送支付宝订单数据"
        , "url": "/nl/order/alipay/app/20"
        , "method": "POST"
        , "parameters": ''
        , "example_url": "/nl/order/alipay/app/20"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "充值--支付宝接口整合（充值专用） /nl/order/carServiceOrder/alipayAdd"
        ,
        "desc": "充值--支付宝接口整合（充值专用）"
        ,
        "url": "/nl/order/carServiceOrder/alipayAdd"
        ,
        "method": "POST"
        ,
        "parameters": '{"query":{"user_id":"4f2ab6976d7d41f78896b942995027fc","money":"3000","card_id":"1","pay_obj":"1"}}'
        ,
        "example_url": "/nl/order/carServiceOrder/alipayAdd"
        ,
        "example_body": '{"query":{"user_id":"4f2ab6976d7d41f78896b942995027fc","money":"3000","card_id":"1","pay_obj":"1"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "充值--支付宝接收同步参数 /nl/order/alipay/syncNotify"
        ,
        "desc": "充值--支付宝接收同步参数"
        ,
        "url": "/nl/order/alipay/syncNotify"
        ,
        "method": "POST"
        ,
        "parameters": 'resultStatus={9000};memo={};result={_input_charset="utf-8"&body="购车惠汽车服务平台相关商品"&notify_url="https://www.woodche.com/YchLrestServerWxorder/server/nl/order/alipay/notify"&out_trade_no="H2218134190028"&partner="2088021404956391"&payment_type="1"&seller_id="2088021404956391"&service="mobile.securitypay.pay"&subject="购车惠汽车服务平台"&total_fee="0.01"&success="true"&sign_type="RSA"&sign="LmB4PWGLQi7uU2XGrttyzUctd5HiBaIaO868sOtlH7lnY9YUE6RYDNizVIHAl0PSirq7dR/ovpZlydeLy4YTlp3OyVfoHthvX0COXgVHpL9r/J0yu6X8TqeQzOXjE6KeFVcx/Q6/bgTCllrcWaqMWGdd+h7/XKBnBegsuTjUXQk="}'
        ,
        "example_url": "/nl/order/alipay/syncNotify"
        ,
        "example_body": 'resultStatus={9000};memo={};result={_input_charset="utf-8"&body="购车惠汽车服务平台相关商品"&notify_url="https://www.woodche.com/YchLrestServerWxorder/server/nl/order/alipay/notify"&out_trade_no="H2218134190028"&partner="2088021404956391"&payment_type="1"&seller_id="2088021404956391"&service="mobile.securitypay.pay"&subject="购车惠汽车服务平台"&total_fee="0.01"&success="true"&sign_type="RSA"&sign="LmB4PWGLQi7uU2XGrttyzUctd5HiBaIaO868sOtlH7lnY9YUE6RYDNizVIHAl0PSirq7dR/ovpZlydeLy4YTlp3OyVfoHthvX0COXgVHpL9r/J0yu6X8TqeQzOXjE6KeFVcx/Q6/bgTCllrcWaqMWGdd+h7/XKBnBegsuTjUXQk="}'
        ,
        "example_result": "{}"
    },
    {
        "title": "充值--余额支付 /nl/order/balance/pay"
        , "desc": "充值--余额支付"
        , "url": "/nl/order/balance/pay"
        , "method": "POST"
        , "parameters": '{"query":{"pay_id":"111","pay_password":"123456"}}'
        , "example_url": "/nl/order/balance/pay"
        , "example_body": '{"query":{"pay_id":"111","pay_password":"123456"}}'
        , "example_result": "{}"
    },
    {
        "title": "充值--积分支付 /nl/order/score/pay"
        , "desc": "充值--积分支付"
        , "url": "/nl/order/score/pay"
        , "method": "POST"
        , "parameters": '{"query":{"pay_id":"112"}}'
        , "example_url": "/nl/order/score/pay"
        , "example_body": '{"query":{"pay_id":"112"}}'
        , "example_result": "{}"
    },
    {
        "title": "充值--APP支付--微信预支付订单 /nl/order/weixin/app/20"
        , "desc": "充值--APP支付--微信预支付订单"
        , "url": "/nl/order/weixin/app/20"
        , "method": "POST"
        , "parameters": ''
        , "example_url": "/nl/order/weixin/app/20"
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "充值--微信接口整合（充值专用） /nl/order/carServiceOrder/WXAdd"
        ,
        "desc": "充值--微信接口整合（充值专用）"
        ,
        "url": "/nl/order/carServiceOrder/WXAdd"
        ,
        "method": "POST"
        ,
        "parameters": '{"query":{"user_id":"4f2ab6976d7d41f78896b942995027fc","money":"3000","card_id":"1","pay_obj":"1"}}'
        ,
        "example_url": "/nl/order/carServiceOrder/WXAdd"
        ,
        "example_body": '{"query":{"user_id":"4f2ab6976d7d41f78896b942995027fc","money":"3000","card_id":"1","pay_obj":"1"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "充值--APP支付--支付之后回调（积分和价格） /nl/order/payReturn/notify"
        , "desc": "充值--APP支付--支付之后回调（积分和价格）,status=0是支付成功，status < 0 是支付失败"
        , "url": "/nl/order/payReturn/notify"
        , "method": "POST"
        , "parameters": '{"query":{"pay_id":"111","status":"0"}}'
        , "example_url": "/nl/order/payReturn/notify"
        , "example_body": '{"query":{"pay_id":"111","status":"0"}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--支付密码--修改支付密码操作  /nl/mobile/login/auth/forgetPayPassword"
        , "desc": "个人中心--支付密码--修改支付密码操作"
        , "url": "/nl/mobile/login/auth/forgetPayPassword"
        , "method": "POST"
        , "parameters": '{"cellphone":"18751852690","signInNo":"8650141","payPassword":"12345116"}'
        , "example_url": "/nl/mobile/login/auth/forgetPayPassword"
        , "example_body": '{"cellphone":"18751852690","signInNo":"8650141","payPassword":"12345116"}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的车辆--查询出我的所有车辆 /myCar/findAllMyCar"
        , "desc": "个人中心--我的车辆--查询出我的所有车辆"
        , "url": "/myCar/findAllMyCar"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"111"}}'
        , "example_url": "/myCar/findAllMyCar"
        , "example_body": '{"query":{"userId":"111"}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的车辆--添加我的车辆 /myCar/insertMyCar"
        ,
        "desc": "个人中心--我的车辆--添加我的车辆"
        ,
        "url": "/myCar/insertMyCar"
        ,
        "method": "POST"
        ,
        "parameters": '{"query":{"carNumber":"111","brandId":"111","brandName":"111","carModelName":"111","userId":"111","vehicleDate":"2017/07/07","vin":"11","insuranceExpiration":"2017-7-07","carName":"kwkw"}}'
        ,
        "example_url": "/myCar/insertMyCar"
        ,
        "example_body": '	'
        ,
        "example_result": "{}"
    },
    {
        "title": "个人中心--我的车辆--删除我的爱车 /myCar/deleteMyCar"
        , "desc": "个人中心--我的车辆--删除我的爱车"
        , "url": "/myCar/deleteMyCar"
        , "method": "POST"
        , "parameters": '{"query":{"myCarId":"1"}}'
        , "example_url": "/myCar/deleteMyCar"
        , "example_body": '{"query":{"myCarId":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的车辆--更新我的爱车 /myCar/updateMyCar"
        ,
        "desc": "个人中心--我的车辆--更新我的爱车"
        ,
        "url": "/myCar/updateMyCar"
        ,
        "method": "POST"
        ,
        "parameters": '{"query":{"myCarId":"35","carNumber":"222","brandId":"22","brandName":"2222222222222222222222","carModelName":"111","userId":"111","isDefault":"1"}}'
        ,
        "example_url": "/myCar/updateMyCar"
        ,
        "example_body": '{"query":{"myCarId":"35","carNumber":"222","brandId":"22","brandName":"2222222222222222222222","carModelName":"111","userId":"111","isDefault":"1","vehicleDate":"2017/07/07","vin":"11","insuranceExpiration":"2017-7-07","carName":"kwkw"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "个人中心--我的VIP--查询出我的消费明细 /appOrder/findMyPayExpendDetails"
        , "desc": "个人中心--我的VIP--查询出我的消费明细"
        , "url": "/appOrder/findMyPayExpendDetails"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"7"}} 查询出我的消费明细  monthPayExpend月份充值消费  monthPayExpendDetails月份充值消费明细'
        , "example_url": "/appOrder/findMyPayExpendDetails"
        , "example_body": '{"query":{"userId":"7"}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的VIP--查询出我的消费明细(新) /appOrder/findAllMoneyByDay"
        , "desc": "个人中心--我的VIP--查询出我的消费明细"
        , "url": "/appOrder/findAllMoneyByDay"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"7","pagenum":10,"page":1}}'
        , "example_url": "/appOrder/findAllMoneyByDay"
        , "example_body": '{"query":{"userId":"7","pagenum":10,"page":1}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的资产--查询出我的资产和车B /myScore/mySocreAndMyCoin"
        , "desc": "个人中心--我的资产--查询出我的资产和车B"
        , "url": "/myScore/mySocreAndMyCoin"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"7","pagenum":10,"page":1}}'
        , "example_url": "/myScore/mySocreAndMyCoin "
        , "example_body": '{"query":{"userId":"7","pagenum":10,"page":1}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的资产--赠送积分 /myScore/presentedScore"
        ,
        "desc": "个人中心--我的资产--赠送积分"
        ,
        "url": "/myScore/presentedScore"
        ,
        "method": "POST"
        ,
        "parameters": '赠送积分 presentedUserId为被赠送人Id  {"query":{"userId":"7","userName":"赠送人","presentedUserId":10,"presentedUserName":"被赠送人","score":10}}    每日签到为API TEST 4-48接口/general/coineveryday/{userId}'
        ,
        "example_url": "/myScore/presentedScore"
        ,
        "example_body": '{"query":{"userId":"7","userName":"韩武洽(赠送人)","presentedUserId":111,"presentedUserName":"被赠送人","score":10}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "个人中心--我的订单--查询出的我订单 /appOrder/findAllMyOrderList"
        ,
        "desc": "个人中心--我的订单--查询出的我订单"
        ,
        "url": "/appOrder/findAllMyOrderList"
        ,
        "method": "POST"
        ,
        "parameters": 'status:订单状态(1:未支付,2:支付中,3:已支付4:支付失败,5:订单失效6:订单废除 7.已评价)status:不传的时候是查询所有订单{"query":{"userId":"7","pagenum":10,"page":1}}'
        ,
        "example_url": "/appOrder/findAllMyOrderList"
        ,
        "example_body": '{"query":{"userId":"7","pagenum":10,"page":1}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "个人中心--我的订单--批量添加对商品的评价 /appOrder/insertCommend"
        ,
        "desc": "个人中心--我的订单--批量添加对商品的评价 "
        ,
        "url": "/appOrder/insertCommend"
        ,
        "method": "POST"
        ,
        "parameters": 'imgArr 是数组 {"query":[{"payId":"1","goodsId":"1","userId":"1","score":"1","comments":"1"},{"payId":"11","goodsId":"11","userId":"11","score":"11","comments":"11","imgArr":["hanhan1","hanhan2","hanhan3"]}]}'
        ,
        "example_url": "/appOrder/insertCommend"
        ,
        "example_body": '{"query":[{"payId":"1","goodsId":"1","userId":"1","score":"1","comments":"1"},{"payId":"11","goodsId":"11","userId":"11","score":"11","comments":"11","imgArr":["hanhan1","hanhan2","hanhan3"]}]}'
        ,
        "example_result": "{}"
    },
    {
        "title": "个人中心--我的订单--查询订单Id 找到所有已经支付 需要评价的商品 /appOrder/findShopGoodsByPayId"
        , "desc": "个人中心--我的订单--查询订单Id 找到所有已经支付 需要评价的商品"
        , "url": "/appOrder/findShopGoodsByPayId"
        , "method": "POST"
        , "parameters": '{"query":{"payId":"5"}}'
        , "example_url": "/appOrder/findShopGoodsByPayId"
        , "example_body": '{"query":{"payId":"5"}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的小组--添加我的小组 /userGroup/insertUserGroup"
        , "desc": "个人中心--我的小组--添加我的小组"
        , "url": "/userGroup/insertUserGroup"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"1"}}  点击添加我的小组的时候调用,如果小组不存在,添加群组(自己是管理员)把自己添加到小组成员'
        , "example_url": "/userGroup/insertUserGroup"
        , "example_body": '{"query":{"userId":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的小组--找到我的下组下面所有的人 /userGroup/findAllUserGroup"
        , "desc": "个人中心--我的小组--找到我的下组下面所有的人"
        , "url": "/userGroup/findAllUserGroup"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"1"}}'
        , "example_url": "/userGroup/findAllUserGroup"
        , "example_body": '{"query":{"userId":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的小组--删除用户群组成员 /userGroup/deleteUserGroup"
        , "desc": "个人中心--我的小组--删除用户群组成员"
        , "url": "/userGroup/deleteUserGroup"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"1","userGroupId":"1222"}}'
        , "example_url": "/userGroup/deleteUserGroup"
        , "example_body": '{"query":{"userId":"1","userGroupId":"1222"}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理----商家中心--申请合作(添加商铺信息)-- /merchant/insertMerchant"
        ,
        "desc": "商家管理--商家中心--申请合作(添加商铺信息)"
        ,
        "url": "/merchant/insertMerchant"
        ,
        "method": "POST"
        ,
        "parameters": '{"query":{"shopTitle":"00027e6e68c2ca875c2d728f710b2fda","storePhone":"18751852690","tel":"11","address":"江苏省南京市大明路130号","description":"明细,备注,详细","longitude":"3420611.112345","latitude":"3420611.112345","merchantImgArr":["/adfadsfsadf.jpg","adfadsfas.jpg"]}}添加商铺信息  merchantImgArr为图片信息,如有则以["aa","bbb"]的形式传过来'
        ,
        "example_url": '/merchant/insertMerchant'
        ,
        "example_body": '{"query":{"shopTitle":"00027e6e68c2ca875c2d728f710b2fda","storePhone":"18751852690","tel":"11","address":"江苏省南京市大明路130号","description":"明细,备注,详细","longitude":"3420611.112345","latitude":"3420611.112345","merchantImgArr":["/adfadsfsadf.jpg","adfadsfas.jpg"]}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "商家管理--商家中心--根据店铺ID找到店铺信息/merchant/findShopDetailsByUserId"
        , "desc": "商家管理--商家中心--根据店铺ID找到店铺信息"
        , "url": "/merchant/findShopDetailsByUserId"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"zxcv"}}'
        , "example_url": '/merchant/findShopDetailsByUserId'
        , "example_body": '{"query":{"userId":"zxcv"}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理--商家中心--修改商铺信息/merchant/updateMerchant"
        ,
        "desc": "商家管理--商家中心--修改商铺信息"
        ,
        "url": "/merchant/updateMerchant"
        ,
        "method": "POST"
        ,
        "parameters": ' 修改商铺信息  merchantImgArr为图片信息,如有则以["aa","bbb"]的形式传过来 {"query":{"userId":"1","shopId":"1","shopTitle":"00027e6e68c2ca875c2d728f710b2fda","storePhone":"18751852690","tel":"11","address":"江苏省南京市大明路130号","description":"明细,备注,详细","longitude":"311.112345","latitude":"611.112345","merchantImgArr":["/adfadsfsadf.jpg","adfadsfas.jpg"]}}'
        ,
        "example_url": '/merchant/updateMerchant'
        ,
        "example_body": '{"query":{"userId":"1","shopId":"1","shopTitle":"00027e6e68c2ca875c2d728f710b2fda","storePhone":"18751852690","tel":"11","address":"江苏省南京市大明路130号","description":"明细,备注,详细","longitude":"311.112345","latitude":"611.112345","merchantImgArr":["/adfadsfsadf.jpg","adfadsfas.jpg"]}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "商家管理--商家中心--商铺统计信息 /userGroup/findMerchantStatistics"
        , "desc": "商家管理--商家中心--商铺统计信息"
        , "url": "/merchant/findMerchantStatistics"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"1"}}'
        , "example_url": '/merchant/findMerchantStatistics'
        , "example_body": '{"query":{"userId":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理--卡的种类- 找到所有的卡的种类/card/findAllCardList"
        , "desc": "商家管理--卡的种类- 找到所有的卡的种类"
        , "url": "/card/findAllCardList"
        , "method": "POST"
        , "parameters": ''
        , "example_url": '/card/findAllCardList'
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "商家管理--卡的种类- 找到APP中所有充值的卡的种类/card/findAllCardListByApp"
        , "desc": "商家管理--卡的种类- 找到APP中所有充值的卡的种类"
        , "url": "/card/findAllCardListByApp"
        , "method": "POST"
        , "parameters": ''
        , "example_url": '/card/findAllCardListByApp'
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "商家管理--省市区- 省市区三级联动/provinceCity/findAllProvince"
        , "desc": "商家管理--省市区- 省市区三级联动"
        , "url": "/provinceCity/findAllProvince"
        , "method": "POST"
        , "parameters": ''
        , "example_url": '/provinceCity/findAllProvince'
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "商家管理--省市区- 查询出所有的省/provinceCity/findAllCardList"
        , "desc": "商家管理--省市区- 查询出所有的省"
        , "url": "/provinceCity/findAllProvince"
        , "method": "POST"
        , "parameters": ''
        , "example_url": '/provinceCity/findAllProvince'
        , "example_body": ''
        , "example_result": "{}"
    },
    {
        "title": "商家管理--省市区- 查询省下面所有的市/provinceCity/findAllCityByProvinceId"
        , "desc": "商家管理--省市区- 查询省下面所有的市"
        , "url": "/provinceCity/findAllProvince"
        , "method": "POST"
        , "parameters": '{"query":{"provinceId":"1"}}'
        , "example_url": '/provinceCity/findAllCityByProvinceId'
        , "example_body": '{"query":{"provinceId":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理--省市区- 查询市下面所有的区/provinceCity/findAllDistrictByCityId"
        , "desc": "商家管理--省市区- 查询市下面所有的区"
        , "url": "/provinceCity/findAllDistrictByCityId"
        , "method": "POST"
        , "parameters": '{"query":{"cityId":"1"}}'
        , "example_url": '/provinceCity/findAllDistrictByCityId'
        , "example_body": '{"query":{"cityId":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理--店铺商品- 添加店铺商品/shopGoods/insertShopGoods"
        ,
        "desc": "商家管理--店铺商品- 添加店铺商品"
        ,
        "url": "/shopGoods/insertShopGoods"
        ,
        "method": "POST"
        ,
        "parameters": 'goods_namevarchar(40)NOTNULLCOMMENT商品名称,goods_infovarchar(255)DEFAULTNULLCOMMENT商品说明,goods_pricedecimal(10,2)unsignedNOTNULLCOMMENT商品价格,goods_typeint(3)unsignedNOTNULLCOMMENT商品类型(1:出售中，2：待售中),goods_price_typeint(3)unsignedNOTNULLCOMMENT商品定价类型(1：固定,2:非固定),goods_disfloatDEFAULTNULLCOMMENT商品折扣,shop_idint(6)NOTNULLCOMMENT店铺ID,service_idint(6)NOTNULLCOMMENT所属汽车服务ID,user_idvarchar(30)NOTNULLCOMMENT用户ID,image_urltinytextCOMMENT商品图片(JSON格式),createtimebigint(15)DEFAULTNULLCOMMENT创建时间,business_time_startvarchar(15)DEFAULTNULLCOMMENT营业开始时间,business_time_endvarchar(15)DEFAULTNULLCOMMENT营业结束时间,appointment_infovarchar(255)DEFAULTNULLCOMMENT预约说明,suitable_modelsvarchar(255)DEFAULTNULLCOMMENT合适车型,另:具体是否必须填写参考上面,cardArr也必填写{"query":{"goodsName":"商品名称Han1","goodsPrice":"88.9","goodsType":"1","goodsPriceType":"1","shopId":"2","serviceId":"11","userId":"1","imgArr":["aaaa.jsp","bbbb.png"],"cardArr":[{"cardId":"1","proportion":"0.1"},{"cardId":"2","proportion":"0.2"},{"cardId":"3","proportion":"0.3"}]}}'
        ,
        "example_url": '/shopGoods/insertShopGoods'
        ,
        "example_body": '{"query":{"goodsName":"商品名称Han1","goodsPrice":"88.9","goodsType":"1","goodsPriceType":"1","shopId":"2","serviceId":"11","userId":"1","imgArr":["aaaa.jsp","bbbb.png"],"cardArr":[{"cardId":"1","proportion":"0.1"},{"cardId":"2","proportion":"0.2"},{"cardId":"3","proportion":"0.3"}]}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "商家管理--店铺商品- 正在出售和待售中的商品/shopGoods/findAllShopGoodByShopId"
        ,
        "desc": "商家管理--店铺商品- 正在出售和待售中的商品"
        ,
        "url": "/shopGoods/findAllShopGoodByShopId"
        ,
        "method": "POST"
        ,
        "parameters": '查询商品管理中正在出售和待售中的商品商品定价类型(1：固定,2:非固定)goods_price_type商品类型(1:出售中，2：待售中)goods_type{"query":{"userId":"商品名称Han1","pagenum":"11","page":"1","shopId":"1","goodsType":"1"}}'
        ,
        "example_url": '/shopGoods/findAllShopGoodByShopId'
        ,
        "example_body": '{"query":{"userId":"商品名称Han1","pagenum":"11","page":"1","shopId":"1","goodsType":"1"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "商家管理--店铺商品- 查询店铺的服务项/shopGoods/findGoodsServiceByShopId"
        , "desc": "商家管理--店铺商品- 查询店铺的服务项"
        , "url": "/shopGoods/findGoodsServiceByShopId"
        , "method": "POST"
        , "parameters": '{"query":{"shopId":"1"}}'
        , "example_url": '/shopGoods/findGoodsServiceByShopId'
        , "example_body": '{"query":{"shopId":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理--店铺商品- 删除或者上架商品商品(下架商品) /shopGoods/deleteShopGoods"
        , "desc": "商家管理--店铺商品- 删除或者上架商品商品(下架商品)"
        , "url": "/shopGoods/deleteShopGoods"
        , "method": "POST"
        , "parameters": '删除商品(下架商品) 商品类型(1:出售中，2：待售中，3：商品已下架) {"query":{"shopGoodsId":"1","goodsType":"3"}}'
        , "example_url": '/shopGoods/deleteShopGoods'
        , "example_body": '{"query":{"shopGoodsId":"1","goodsType":"3"}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理--店铺商品- 批量删除商品(下架商品) /shopGoods/batchDeleteShopGoods"
        , "desc": "商家管理--店铺商品- 批量删除商品(下架商品)"
        , "url": "/shopGoods/batchDeleteShopGoods"
        , "method": "POST"
        , "parameters": '批量删除商品(下架商品) 商品类型(1:出售中，2：待售中，3：商品已下架) {"query":{"arr":[111,222,333,444,555]}}'
        , "example_url": '/shopGoods/batchDeleteShopGoods'
        , "example_body": '{"query":{"arr":[111,222,333,444,555]}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理--店铺商品--修改店铺商品/shopGoods/updateShopGoods"
        ,
        "desc": "商家管理--店铺商品-修改店铺商品"
        ,
        "url": "/shopGoods/updateShopGoods"
        ,
        "method": "POST"
        ,
        "parameters": '修改店铺商品*@Return:goods_namevarchar(40)NOTNULLCOMMENT商品名称,*goods_infovarchar(255)DEFAULTNULLCOMMENT商品说明,*goods_pricedecimal(10,2)unsignedNOTNULLCOMMENT商品价格,*goods_typeint(3)unsignedNOTNULLCOMMENT商品类型(1:出售中，2：待售中),*goods_price_typeint(3)unsignedNOTNULLCOMMENT商品定价类型(1：固定,2:非固定),*goods_disfloatDEFAULTNULLCOMMENT商品折扣,*shop_idint(6)NOTNULLCOMMENT店铺ID,*service_idint(6)NOTNULLCOMMENT所属汽车服务ID,*user_idvarchar(30)NOTNULLCOMMENT用户ID,*image_urltinytextCOMMENT商品图片(JSON格式),*createtimebigint(15)DEFAULTNULLCOMMENT创建时间,*business_time_startvarchar(15)DEFAULTNULLCOMMENT营业开始时间,*business_time_endvarchar(15)DEFAULTNULLCOMMENT营业结束时间,*appointment_infovarchar(255)DEFAULTNULLCOMMENT预约说明,*suitable_modelsvarchar(255)DEFAULTNULLCOMMENT合适车型,*另:具体是否必须填写参考上面,cardArr,imgArr也必填写{"query":{"shopGoodsId":"1","goodsName":"商品名称Han1","goodsPrice":"88.9","goodsType":"1","goodsPriceType":"1","shopId":"2","serviceId":"11","userId":"1","imgArr":["aaaa.jsp","bbbb.png"],"cardArr":[{"cardId":"1","proportion":"0.1"},{"cardId":"2","proportion":"0.2"},{"cardId":"3","proportion":"0.3"}]}}'
        ,
        "example_url": '/shopGoods/updateShopGoods'
        ,
        "example_body": '修改店铺商品*@Return:goods_namevarchar(40)NOTNULLCOMMENT商品名称,*goods_infovarchar(255)DEFAULTNULLCOMMENT商品说明,*goods_pricedecimal(10,2)unsignedNOTNULLCOMMENT商品价格,*goods_typeint(3)unsignedNOTNULLCOMMENT商品类型(1:出售中，2：待售中),*goods_price_typeint(3)unsignedNOTNULLCOMMENT商品定价类型(1：固定,2:非固定),*goods_disfloatDEFAULTNULLCOMMENT商品折扣,*shop_idint(6)NOTNULLCOMMENT店铺ID,*service_idint(6)NOTNULLCOMMENT所属汽车服务ID,*user_idvarchar(30)NOTNULLCOMMENT用户ID,*image_urltinytextCOMMENT商品图片(JSON格式),*createtimebigint(15)DEFAULTNULLCOMMENT创建时间,*business_time_startvarchar(15)DEFAULTNULLCOMMENT营业开始时间,*business_time_endvarchar(15)DEFAULTNULLCOMMENT营业结束时间,*appointment_infovarchar(255)DEFAULTNULLCOMMENT预约说明,*suitable_modelsvarchar(255)DEFAULTNULLCOMMENT合适车型,*另:具体是否必须填写参考上面,cardArr,imgArr也必填写{"query":{"shopGoodsId":"1","goodsName":"商品名称Han1","goodsPrice":"88.9","goodsType":"1","goodsPriceType":"1","shopId":"2","serviceId":"11","userId":"1","imgArr":["aaaa.jsp","bbbb.png"],"cardArr":[{"cardId":"1","proportion":"0.1"},{"cardId":"2","proportion":"0.2"},{"cardId":"3","proportion":"0.3"}]}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "商家管理--订单管理--找到购买我的商铺商品的订单 /merchant/findMyMerchantOrder"
        ,
        "desc": "商家管理--订单管理--找到购买我的商铺商品的订单"
        ,
        "url": "/merchant/findMyMerchantOrder"
        ,
        "method": "POST"
        ,
        "parameters": '找到购买我的商铺商品的订单startTime和endTime=查询时间的毫秒数/1000当startTime和endTime不传时,查询的是所有订单{"query":{"userId":"1","pagenum":"10","page":"1","startTime":"1460083894","endTime":"1590083894"}}'
        ,
        "example_url": '/merchant/findMyMerchantOrder'
        ,
        "example_body": '{"query":{"userId":"1","pagenum":"10","page":"1","startTime":"1460083894","endTime":"1590083894"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "商家管理--收益报表--查询XX月份收益报表 /merchant/findServiceExpendCountList"
        , "desc": "商家管理--收益报表--查询XX月份收益报表"
        , "url": "/merchant/findServiceExpendCountList"
        , "method": "POST"
        , "parameters": '{"query":{"shopId":"1","longTimeByMonth":"1488672000"}} longTimeByMonth为当前月份的毫秒数 / 1000'
        , "example_url": '/merchant/findServiceExpendCountList'
        , "example_body": '{"query":{"shopId":"1","longTimeByMonth":"1488672000"}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理--收益报表--收益报表首页 /merchant/earningReport"
        ,
        "desc": "商家管理--收益报表--收益报表首页"
        ,
        "url": "/merchant/earningReport"
        ,
        "method": "POST"
        ,
        "parameters": 'expendSumDetailsByDay找到每天的消费的集合   serviceExpendSum查询出某个月消费的集合  expendSum收益报表(本日,本月,本年的收益) {"query":{"shopId":"1","userId":"1"}}'
        ,
        "example_url": '/merchant/earningReport'
        ,
        "example_body": '{"query":{"shopId":"1","userId":"1"}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "商家管理--收益报表--查询出所有的收益明细 /merchant/expendDetails"
        , "desc": "商家管理--收益报表--查询出所有的收益明细"
        , "url": "/merchant/expendDetails"
        , "method": "POST"
        , "parameters": '{"query":{"shopId":"1"}}'
        , "example_url": '/merchant/expendDetails'
        , "example_body": '{"query":{"shopId":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理--代客下单--查询出Tel在普通用户中是否存在 /appOrder/findUserIsEmptyByTel"
        , "desc": "商家管理--代客下单--查询出Tel在普通用户中是否存在"
        , "url": "/appOrder/findUserIsEmptyByTel"
        , "method": "POST"
        , "parameters": '{"query":{"tel":"187518526906"}}'
        , "example_url": '/appOrder/findUserIsEmptyByTel'
        , "example_body": '{"query":{"tel":"187518526906"}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理--代客下单--商家中心,代客下单,服务选择 /appOrder/findOnSellGoodsByServiceId"
        , "desc": "商家管理--代客下单--商家中心,代客下单,服务选择"
        , "url": "/appOrder/findOnSellGoodsByServiceId"
        , "method": "POST"
        , "parameters": '{"query":{"shopId":1,"cardId":"1"}}'
        , "example_url": '/appOrder/findOnSellGoodsByServiceId'
        , "example_body": '{"query":{"shopId":1,"cardId":"1"}}'
        , "example_result": "{}"
    },
    {
        "title": "商家管理--代客下单--发送订单 /appOrder/sentOrder"
        ,
        "desc": "商家管理--代客下单--发送订单"
        ,
        "url": "/appOrder/sentOrder"
        ,
        "method": "POST"
        ,
        "parameters": '{ "query":{ "userId":"222", "toUserId":"111", "cardId":"1", "money":"55.6", "handselPoints":"0", "creditPoints":"20", "shopId":"1", "payGoods":[ {"serviceId":"1","goodsId":"2","money":50.1,"handselPoints":"5"}, {"serviceId":"2","goodsId":"3","money":5.5,"handselPoints":"1"} ] } }'
        ,
        "example_url": '/appOrder/sentOrder'
        ,
        "example_body": '{ "query":{ "userId":"222", "toUserId":"111", "cardId":"1", "money":"55.6", "handselPoints":"0", "creditPoints":"20", "shopId":"1", "payGoods":[ {"serviceId":"1","goodsId":"2","money":50.1,"handselPoints":"5"}, {"serviceId":"2","goodsId":"3","money":5.5,"handselPoints":"1"} ] } }'
        ,
        "example_result": "{}"
    },
    {
        "title": "App版本--版本更新--查询最新版本 /appVersion/findNewAppVersion"
        , "desc": "App版本--版本更新--查询最新版本"
        , "url": "/appVersion/findNewAppVersion"
        , "method": "POST"
        , "parameters": '查询出最新版本 平台: 0、安卓平台 1、IOS平台 2、其他 {"query": {"type":"1" }}'
        , "example_url": '/appVersion/findNewAppVersion'
        , "example_body": ' {"query": {"type":"1" }}'
        , "example_result": "{}"
    },
    {
        "title": "优惠卷--领取优惠卷 /ticket/getSticket"
        , "desc": "优惠卷--领取优惠卷"
        , "url": "/ticket/getSticket"
        , "method": "POST"
        , "parameters": '领取优惠卷  {"query":{"cellphone":"18751852690","signInNo":"123456","userId":"111"}}'
        , "example_url": '/ticket/getSticket'
        , "example_body": '{"query":{"cellphone":"18751852690","signInNo":"123456","userId":"111"}}'
        , "example_result": "{}"
    },
    {
        "title": "优惠卷--领取开店免费洗车优惠卷 /ticket/getSticket"
        , "desc": "优惠卷--领取开店免费洗车优惠卷"
        , "url": "/ticket/getSticket"
        , "method": "POST"
        , "parameters": '领取开店免费洗车优惠卷  {"query":{"cellphone":"18751852690","signInNo":"123456","userId":"111"}}'
        , "example_url": '/ticket/getSticket'
        , "example_body": '{"query":{"cellphone":"18751852690","signInNo":"123456","userId":"111"}}'
        , "example_result": "{}"
    },
    {
        "title": "优惠卷--查询出用户所有的洗车优惠卷 /ticket/findXiCheTicketByUserId"
        , "desc": "优惠卷--查询出用户所有的洗车优惠卷"
        , "url": "/ticket/findXiCheTicketByUserId"
        , "method": "POST"
        , "parameters": '{"query":{"userId":"111"}}'
        , "example_url": '/ticket/findXiCheTicketByUserId'
        , "example_body": '{"query":{"userId":"111"}}'
        , "example_result": "{}"
    },
    {
        "title": "优惠卷--使用优惠卷 /ticket/useTicket"
        , "desc": "优惠卷--使用优惠卷"
        , "url": "/ticket/useTicket"
        , "method": "POST"
        , "parameters": '{"query":{"id":"111"}}'
        , "example_url": '/ticket/useTicket'
        , "example_body": '{"query":{"id":"111"}}'
        , "example_result": "{}"
    },
    {
        "title": "极光推送--推送消息 /jpush/sendToAliasArr"
        ,
        "desc": "极光推送--推送消息"
        ,
        "url": "/jpush/sendToAliasArr"
        ,
        "method": "POST"
        ,
        "parameters": 'notification_title为推送显示的消息 aliasArr为推送给XX人 '
        ,
        "example_url": '/jpush/sendToAliasArr'
        ,
        "example_body": '{"query":{"notification_title":"13813381313","msg_title":"","msg_content":"","extrasparam":"","aliasArr":"04c83ecfb53e40bab62a1f0f819311f1"}}'
        ,
        "example_result": "{}"
    }
];

var NavigationManagerListDATA_app = [
    {
        "title": "首页--查询出首页Home数据 /profit/findHomeData"
        , "desc": "首页--查询出首页Home数据"
        , "url": "/profit/findHomeData"
        , "method": "POST"
        , "parameters": '{"query": {"managerId":89}}'
        , "example_url": '/profit/findHomeData'
        , "example_body": '{"query": {"managerId":89}}'
        , "example_result": "{}"
    },
    {
        "title": "首页--任务列表 /task/findAllNoFinshTaskByManagerId"
        , "desc": "首页--任务列表"
        , "url": "/task/findAllNoFinshTaskByManagerId"
        , "method": "POST"
        , "parameters": '{query: {page:1, pagenum: 10, managerId: 89}}'
        , "example_url": '/task/findAllNoFinshTaskByManagerId'
        , "example_body": '{query: {page:1, pagenum: 10, managerId: 89}}'
        , "example_result": "{}"
    },
    {
        "title": "首页--任务列表--开始任务 /task/startTask"
        ,
        "desc": "首页--任务列表-开始任务"
        ,
        "url": "/task/startTask"
        ,
        "method": "POST"
        ,
        "parameters": '{"query":{"payId":"1",taskParam:[{"serviceId":"53","goodsId":"22"},{"serviceId":"52","goodsId":"21"}]}}'
        ,
        "example_url": '/task/startTask'
        ,
        "example_body": '{"query":{"payId":"1",taskParam:[{"serviceId":"53","goodsId":"22"},{"serviceId":"52","goodsId":"21"}]}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "首页--任务列表--结束施工 /task/endTask"
        ,
        "desc": "首页--任务列表--结束施工 "
        ,
        "url": "/task/endTask"
        ,
        "method": "POST"
        ,
        "parameters": '{"query":{"payId":"1","shopId":"6","payType":"3","managerCount":"3",taskParam:[{"serviceId":"53","goodsId":"22","money":"60"},{"serviceId":"52","goodsId":"21","money":"20"}]}}'
        ,
        "example_url": '/task/endTask'
        ,
        "example_body": '{"query":{"payId":"1","shopId":"6","payType":"3","managerCount":"3",taskParam:[{"serviceId":"53","goodsId":"22","money":"60"},{"serviceId":"52","goodsId":"21","money":"20"}]}}'
        ,
        "example_result": "{}"
    },
    {
        "title": "个人中心--查询出所有已完成的任务 /task/findAllFinshTaskByManagerId"
        ,
        "desc": "个人中心--查询出所有已完成的任务"
        ,
        "url": "/task/findAllFinshTaskByManagerId"
        ,
        "method": "POST"
        ,
        "parameters": "查询出所有已完成的任务 如果查询当天date入参数为2017-07-07 本月为:2015-06 如果日期不传 则查询出当天的任务 {query: {page:1, pagenum: 10, managerId: '89','date':'2017-07'}}"
        ,
        "example_url": '/task/findAllFinshTaskByManagerId'
        ,
        "example_body": "{query: {page:1, pagenum: 10, managerId: '89','date':'2017-07'}}"
        ,
        "example_result": "{}"
    },
    {
        "title": "个人中心--我的提成  /profit/findProfitSumByMonthAndManagerId"
        , "desc": "个人中心--我的提成"
        , "url": "/profit/findProfitSumByMonthAndManagerId"
        , "method": "POST"
        , "parameters": '{"query": {"managerId":63}}'
        , "example_url": '/profit/findProfitSumByMonthAndManagerId'
        , "example_body": '{"query": {"managerId":63}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的订单--今日订单  /managerorder/findTodayOrder"
        , "desc": "个人中心--我的订单--今日订单"
        , "url": "/managerorder/findTodayOrder"
        , "method": "POST"
        , "parameters": '{"query":{"managerId":"89","pagenum":10,"page":1}}'
        , "example_url": '/managerorder/findTodayOrder'
        , "example_body": '{"query":{"managerId":"89","pagenum":10,"page":1}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的订单--本月订单  /managerorder/findThisMonthOrder"
        , "desc": "个人中心--我的订单--本月订单"
        , "url": "/managerorder/findThisMonthOrder"
        , "method": "POST"
        , "parameters": '{"query":{"managerId":"89","pagenum":10,"page":1}}'
        , "example_url": '/managerorder/findThisMonthOrder'
        , "example_body": '{"query":{"managerId":"89","pagenum":10,"page":1}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的订单--上月订单  /managerorder/findLastMonthOrder"
        , "desc": "个人中心--我的订单--上月订单"
        , "url": "/managerorder/findLastMonthOrder"
        , "method": "POST"
        , "parameters": '{"query":{"managerId":"89","pagenum":10,"page":1}}'
        , "example_url": '/managerorder/findLastMonthOrder'
        , "example_body": '{"query":{"managerId":"89","pagenum":10,"page":1}}'
        , "example_result": "{}"
    },
    {
        "title": "个人中心--我的订单--时间筛选订单  /managerorder/findTimeOrder"
        , "desc": "个人中心--我的订单--时间筛选订单"
        , "url": "/managerorder/findTimeOrder"
        , "method": "POST"
        , "parameters": '{"query":{"managerId":"89","beginTime":"2017-05-21","endTime":"2017-07-31","pagenum":10,"page":1}}'
        , "example_url": '/managerorder/findTimeOrder'
        , "example_body": '{"query":{"managerId":"89","beginTime":"2017-05-21","endTime":"2017-07-31","pagenum":10,"page":1}}'
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
        title: "4S店 Member4S",
        list: NavigationListDATA_member4s
    },
    {
        title: "普通用户 user",
        list: NavigationListDATA_user
    },
    {
        title: "Mobile user",
        list: NavigationListDATA_mobile
    },
    {
        title: "APP 补充接口",
        list: NavigationListDATA_app
    },
    {
        title: "员工版 APP",
        list: NavigationManagerListDATA_app
    }
];








