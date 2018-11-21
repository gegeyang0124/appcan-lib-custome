/**
 * Created by Administrator on 2017/6/29.
 */

/**
 * 封装的方法：
 ScrollPositonOperate; //获取滚动页面的滚动位置，或滚动到指定位置
 LoadingOperate.toast ;//toast窗口的弹出和关闭（提示窗口）
 getPlatform; verifyPlatform2; verifyPlatform;//判断当前平台
 loading；//加载条
 alr; alrBtn; alrBtn2; alr2; alrBtn22; alrBtn22Step;//对话框
 showHideEleCtrl；ShowHideEleOperate；showHideEleCtrl2；//显示影藏元素
 pageOperate;//打开页面 页面跳转 传值和取值的函数集
 openPageData2；openPageData；//打开新页面并传递数据，（与hrefData
 配合使用）
 closePage；//关闭页面
 ImgOperate;//图片操作
 scaner；//扫描二维码
 takePicture；//拍照
 DeviceOperate；//设配操作
 upOrDownrefresh；upOrDownRefreshOperate；SwipeOperate；//上下左右拉监控
 dateCtr；dateCtr2；dateCtrGetCurrentTime；//得到当前时间
 accountInfo;//获取账户信息
 setJsonData；LocalStoreOperate;//保存数据
 getJsonData;// 获取json数据
 LocationOperate; getLocation；//定位
 MediaMgrOperate；//操作视频
 calendar;// 日历
 BaiduGeoMapCtrl;// 加载百度地图
 timerOperate;//时间控制器
 timeFormatConvert；//时间格式转化 使用时先引入moment.js
 asyncLoaded;// 异步加载js文件
 statusConvert;// 状态转化
 DatabaseOperate;// 数据库操作（原生） 一下所有方法的回调方法，均可以不传
 isNumber;// 判断是否是数字
 openDocument;// 打开文档
 fileMgrOperate;// 文件系统管理器
 DownloaderMgr;// 下载管理器，下载操作！
 buttonOperate;// 额外按钮操作
 DrawTableChart;// 画表图,如折线图，比例图等
 localStorageOperate;// 本地临时存储
 taskStatusConvert;//任务类型转化
 refreshBack；//返回上一页刷新
 getTimeByRank; getTimeByRank2;// 获取本周周一和周五的时间戳 对象；获取本月的月初的时间戳和月底的时间戳 对象
 weekConert;// 星期几的数字转化为汉字
 headTop;// 内容距离顶部的距离（内容div相对于绝对定位）
 hei;// 获取设备高度
 nofind;// 图片不存在显示默认图片
 HexagonalOperate://六棱柱菜单操作
 stepEnter://巡店任务跳转
 StringOperate: //字符替换处理
 isDoorInvest: //判断是否是门店投资中心的人员
 PopoverOperate://浮动窗口操作
 * **/

var ONE_DAY_TIME = 86400000;//一天的时间，单位毫秒

/**
 * 平台验证操作，可获取在什么平台，主要是Android/ios/浏览器
 * **/
var PlatformOperate = {
    /**
     * 是否是手机
     * return true;//手机
     * false //iPad
     * **/
    isPhone: (window.navigator.userAgent.indexOf('iPhone') >= 0) ? true : false,
    /**
     * 获取当前平台
     * @param 0 是否 是浏览器 ,是返回true，否则false
     *  @param 1 是否 android ,是返回true，否则false
     *  @param 2 是否 ios ,是返回true，否则false
     *  @param 3 是否 ios 或android ,是返回true，否则false
     * **/
    getPlatform:function(tag) {

        // var isPhone = (window.navigator.platform != "Win32");
        // var isAndroid = (window.navigator.userAgent.indexOf('Android')>=0)?true : false;
        // alert("platform : " + window.navigator.userAgent);
        //ipad (window.navigator.userAgent.indexOf('iPad')>=0)

        switch (tag){
            case 0:{
                return (window.navigator.userAgent.indexOf('Brewer') >= 0)? true : false;
            }
            case 1:{
                return (window.navigator.userAgent.indexOf('Android') >= 0)? true : false;
            }
            case 2:{
                return (window.navigator.userAgent.indexOf('OS') >= 0) ? true : false;
            }
            case 3:{
                return (PlatformOperate.getPlatform(1) || PlatformOperate.getPlatform(2))
                    ? true
                    : false;
            }
        }
    },
    /**
     * 验证平台，并且提示信息，
     * @param func 是ios或android平台时的回调函数
     * @param funErr 不是ios或android平台时的回调函数
     * **/
    verifyPlatform2:function(func,funErr) {
        if(PlatformOperate.getPlatform(3)){
            func();
            // alert("func");
        }
        else if(funErr != null)
        {
            // alert("err");
            funErr();
        }

    },
    /**
     * 验证平台，并且提示信息，
     * @param func 回调函数
     * **/
    verifyPlatform:function(func) {
        PlatformOperate.verifyPlatform2(function () {
            func();
        },function () {
            // alr2("请安装app！");
        });
    }
};

/**
 * 获取滚动页面的滚动位置，或滚动到指定位置，浏览器滚动操作
 * **/
var ScrollPositonOperate = {
    /**
     * 记录滚动位置
     * **/
    posion:{
        contHeight:0,//标签内容的滚动后的高度
        contHeightFinal:0,//标签内容的常量高度
        scrollTop:document.body.scrollTop,//获取滚动到距离body顶部的位置
        scrollLeft:document.body.scrollLeft,//获取滚动到距离body左边的位置
        scrollWidth:document.body.scrollWidth,//现在body的宽度
        scrollHeight:document.body.scrollHeight//现在body的高度
    },
    /**
     * 滚动到指定位置
     * @param x number,x轴上的滚动到的位置
     * @param y number,y轴上的滚动到的位置
     * **/
    scrollTo:function (x,y) {

        window.scrollTo(x == undefined ? 0 :x,y == undefined ? 0 : y);//第一个参数x轴上的滚动，第二个参数y轴上的滚动
        // window.scroll(x == undefined ? 0 :y,y == undefined ? 0 : y);//第一个参数x轴上的滚动，第二个参数y轴上的滚动

        // var t = document.documentElement.scrollTop;//获取滚动到距离document顶部的位置
        // var l = document.documentElement.scrollLeft;
        // var w = document.documentElement.scrollWidth;
        // var h = document.documentElement.scrollHeight;

        // var t = document.body.scrollTop;//获取滚动到距离body顶部的位置
        // var l = document.body.scrollLeft;
        // var w = document.body.scrollWidth;
        // var h = document.body.scrollHeight;

        // alert("t:" + t + "\nl:" + l + "\nw:" + w + "\nh:" + h);
    },
    /**
     * 获取滚动位置
     * return ScrollPositonOperate.posion;**/
    getScrollPostion:function () {
        var posion = {
            scrollTop:document.body.scrollTop,//获取滚动到距离body顶部的位置
            scrollLeft:document.body.scrollLeft,//获取滚动到距离body左边的位置
            scrollWidth:document.body.scrollWidth,//现在body的宽度
            scrollHeight:document.body.scrollHeight//现在body的高度
        };

        ScrollPositonOperate.posion = posion;

        return posion;
    },
    /**
     * 滚动监听方法，不断调用
     * @param callbackFunc function,//回调函数
     * **/
    onScroll:function (callbackFunc) {
        // alert("ss");
        // window.onscroll = callbackFunc();
        window.onscroll = callbackFunc();
    },
    /**
     * 获取内容标签的高度
     * @param tagId string,//标签id
     * **/
    getContTagHeight:function (tagId) {
        ScrollPositonOperate.posion.contHeight = document.getElementById(tagId).offsetHeight;
        ScrollPositonOperate.posion.contHeightFinal = ScrollPositonOperate.posion.contHeight;
        // LoadingOperate.toast(ScrollPositonOperate.posion.contHeight);
    },
    /**
     * 上下滚动，事件 appcan
     * @param id,//滚动标签Id
     * @param callbackDwonFunc function,//上拉触底促发事件
     * @param callbackUpFunc function,//下拉刷新促发事件
     * **/
    scroll:function(id,callbackDwonFunc,callbackUpFunc) {

        $("#" + id).on("more",function(ev,scrollbox) {
            console.log("触底");

            setTimeout(function () {
                /* var htmlStr = "";
                 for (var i = 0; i < 120; i++) {
                 htmlStr += "<li>append" + i + "</li>"
                 };
                 $("#ScrollContent ul").append(htmlStr);*/
                scrollbox.reset();
                callbackDwonFunc&&callbackDwonFunc();
            }, 0);
        });

        $("#" + id).on("reload",function(ev,scrollbox){
            console.log("下拉");
            setTimeout(function(){
                scrollbox.reset();
                callbackUpFunc&&callbackUpFunc();
            },0);
        });

    }
};

/**
 * 页面跳转 传值和取值的函数集
 * **/
var PageGuideOperate = {
    /**
     * 配置数据
     * **/
    config:{
        isOpenedWeb:false,//是否已经打开浏览器
    },
    /**
     * 打开页面 全路径
     * @param title 页面标识，在移动平台有用
     * @param pageSrc 页面路径 全路径
     * @param flag number,//页面标记 flag=128时页面支持缩放,默认为0
     *  **/
    openPageFullPath:function(title,pageSrc,flag) {
        // alert(pageSrc.substring((pageSrc.indexOf('?') + 1)));
        flag = flag == undefined || flag == null ? 0 : flag;

        var  index = pageSrc.indexOf('?');
        if(index > -1)
        {
            appcan.locStorage.setVal("tempData", pageSrc.substring((index + 1)));
        }

        /* pageSrc = pageSrc.substring(0,pageSrc.indexOf('.html') + 5 );
         if(PlatformOperate.isPhone)
         {
             pageSrc = pageSrc.substring(0,pageSrc.lastIndexOf(".html")) + "_iph.html";
         }*/

        // pageSrc = pageSrc.indexOf("http") == 0 ? pageSrc : IPConfig.isDebug ? IPConfig.IPDebug + "/phone/pages" + pageSrc.substring(pageSrc.indexOf("/")) : pageSrc;

        if(PlatformOperate.getPlatform(3)){

            uexWindow.open(title, '0', pageSrc, 2, '', '', flag,0);

            /*  loading(true);
              window.location.href = pageSrc;  //电脑调试用
              alert(pageSrc);
              appcan.openWinWithUrl(title,pageSrc); //打包用*/
            /**
             windName	String	是	窗口名字，可为空，不能为”root”，若已经打开过该名字的窗口，则直接跳转至该窗口。
             dataType	Number	是	窗口载入的数据的类型，0：url方式载入；1：html内容方式载入
             data	String	是	url或html数据，支持“wgtroot://” 协议头，此协议头用于某些将项目部署在服务器上 的appcan应用，在应用执行过程中加载本地网页用。当dataType为0时，url支持相对路径、 绝对路径。其中，当url以“wgtroot://” 协议开头时，支持从服务器网页中打开本地应用沙箱中相应widget目录下的网页文件。 例如：当前窗口加载的是服务器上的http://www.xxx.com/xxx.html 网页，如果在xxx.html页面中open一个窗口时，传入的data为“wgtroot://index.html”, 那么本次open执行时，引擎将会到本应用沙箱目录的widget路径下去寻找此页面， 例如Android上找到的路径会是：file:///android_assert/widget/index.html 当dataType为1时，把相应html的内容传进去（不建议）
             animationID	Number	是	动画ID，详见术语表-WindowAnimationId 窗口动画Id
             w	Number	是	窗口宽度，请传0
             h	Number	是	窗口高度，请传0
             flag	Number	是	窗口标记，默认传空为0，详见CONSTANT中其他标记的窗口属性WindowFlags
             animDuration	Number	否	动画持续时长，单位为毫秒，默认为260毫秒
             * **/
            // uexWindow.open(windName,dataType,data,animID,w,h,flag,animDuration,extras);
            /* uexWindow.open(title, '0', pageSrc, 0, '', '',0,0);
             uexWindow.open({
                 name:title,
                 data:pageSrc,
                 animID:0,
                 flag:1024
             });*/
            /*uexWindow.openPopover({
                name:title,
                url:pageSrc,
                x:400,
                y:0,
                bottomMargin:100
            });*/
            /*appcan.window.open({
                name :title,
                dataType : 0,
                data : pageSrc,
                aniId:2,
                type:0,
                // animDuration:1000
            });*/
        }
        else
        {
            window.location.href = pageSrc;
        }
    },
    /**
     * 打开页面 并且传递数据
     * @param title 页面标识，在移动平台有用
     * @param pageSrc 页面路径 全路径
     * @param data 传递数据为字符串
     * @param flag number,//页面标记 flag=128时页面支持缩放,默认为0
     **/
    openPageData:function(title,pageSrc,data={}, flag) {

        if(typeof(data) == 'object' || data.constructor == Array)
        {
            //0,表示是json,1表示是字符串
            data = "0" + JSON.stringify(data);
        }
        else
        {
            data = "1" + data;
        }

        PageGuideOperate.openPageFullPath(pageSrc,pageSrc + "?" + data,flag);
    },
    /**
     * 关闭页面
     * @param isTimeout,// 是否延迟关闭，true延迟
     **/
    closePage:function(isTimeout) {

        if(PlatformOperate.getPlatform(3)){
            // if(true){

            if (PageGuideOperate.config.isOpenedWeb){
                BrowerOperate.closePageBrower();
                return;
            }

            if(isTimeout != null && isTimeout != undefined)
            {
                // appcan.window.close(-1);
                setTimeout(function () {
                    /**animID	Number	否	为空时无动画，-1时代表Open时指定动画的方向动画
                     animDuration	Number	否	动画持续时长，单位为毫秒，默认为260毫秒
                     * **/
                    // uexWindow.close(animID,animDuration);
                    uexWindow.close();
                    // uexWindow.close({
                    //     animID:0,
                    //     animDuration:0
                    // });
                    // appcan.window.close(0);
                    // uexWindow.close();
                },1000);

            }
            else
            {

                // uexWindow.onStateChange = function(state){
                //     alert("ds");
                //     // var arr = state?"压入后台":"回到前台";
                //     // console.log(arr);
                //     // if(!state){
                //     // }
                // }
                // uexWindow.close();
                // appcan.window.evaluatePopoverScript("guide","../guide/guide.html",);
                // appcan.window.close(13);

                // uexWindow.close({
                //     animID:0,
                //     animDuration:0
                // });

                // uexWindow.close(1);
                uexWindow.close({
                    animID:13
                });

                // setTimeout(function () {
                //     alert("close");
                //     uexWindow.reload();
                // },1000);

            }


        }
        else
        {
            window.history.back();
        }
    },
    /**
     * 关闭页面
     * @apram data,// 需要回传的数据
     * @apram isTimeout,// 是否延迟关闭，true延迟
     **/
    closePageData:function(data,isTimeout) {
        if(data.length == undefined)
        {
            //0,表示是json,1表示是字符串
            data = "0" + JSON.stringify(data);
        }
        else
        {
            data = "1" + data;
        }
        appcan.locStorage.setVal("tempData",data);
        PageGuideOperate.closePage(isTimeout);
    },
    /**
     * 通过本地跳转传参时，返回数据
     * **/
    getHrefData:function() {
        // alert(encodeURI('http://baidu.com?hello=您好&word=文档'));
        // console.log("href 2 : " + decodeURI(window.location.href));
        // console.log("href 3 : " + window.location.search);
        // alert(decodeURI(window.location.search.substring(1)));

        /*var data = decodeURI(window.location.search.substring(1));

    // alert(data);
        var isJson = data[0];
        data = data.substring(1);

        ///0,表示是json,1表示是字符串
        if(isJson == 0)
        {
            data = JSON.parse(data);
            // alert("json");
            // alert(data);
        }
        else if(isJson == 2)
        {
            data = appcan.locStorage.getVal("tempData");
            isJson = data[0];
            data = data.substring(1);
            ///0,表示是json,1表示是字符串
            if(isJson == 0)
            {
                data = JSON.parse(data);
            }
        }*/

        var data = appcan.locStorage.getVal("tempData");

        if(data != null && data != 'null')
        {
            var isJson = data[0];
            data = data.substring(1);
            ///0,表示是json,1表示是字符串
            if(isJson == 0)
            {
                data = JSON.parse(data);
            }
        }
        else
        {
            data = {};
        }


        return data;

    },
    /**
     * 返回上一页刷新
     * @param callbackFuncPre function,//回调函数，刷新时回调函数 进入前台回调
     * @param callbackFuncBack function,//回调函数，刷新时回调函数 压入后台回调
     * **/
    refreshBack:function(callbackFuncPre,callbackFuncBack, viewModel) {
        appcan.ready(function() {
            //state: 状态值,0:回到前台;1:压入后台
            uexWindow.onStateChange = function(state){
                setTimeout(function () {
                    // alert(LocalStoreOperate.getIsForceRefresh())
                    // alert("state:" + state);
                    if(LocalStoreOperate.getIsRefresh() || LocalStoreOperate.getIsForceRefresh())
                    {
                        if(state == 0 && callbackFuncPre != undefined)
                        {
                            callbackFuncPre(state);
                            LocalStoreOperate.setIsRefresh(false);
                            LocalStoreOperate.setIsForceRefresh(false);
                        }
                        else if(callbackFuncBack != undefined && callbackFuncBack != null)
                        {
                            callbackFuncPre(state);
                        }
                    }
                });

            }
        });
    }
};

/**
 * 本地存储操作
 * **/
var LocalStoreOperate = {
    /**
     * 保存数据
     * @param key string,//键值
     * @param value Object,//数据值，可以是json对象，提取时也是json对象；也可以是字符串，提取时也是字符串
     * **/
    setData:function (key,value) {
        // var obj = JSON.stringify({b:0});
        // obj = {b:0};
        // var obj = JSON.stringify([0]);
        // obj = [0];
        // alert("dd: "+ (typeof(obj) == 'object'));

        //0 是对象 1是字符串
        if(typeof(value) == 'object')
        {
            //0 是对象 1是字符串
            value = "0" + JSON.stringify(value);
        }
        else
        {
            //0 是对象 1是字符串
            value = "1" + value;
        }

        appcan&&appcan.locStorage.setVal(key,value);
    },
    /**
     * 获取数据，若是子字符串则返回子字符串，若是json数据则返回json对象
     * @param key string,//键值
     * **/
    getData:function(key) {
        var val = appcan.locStorage.getVal(key);
        if(val == null)
        {
            // alert("空");
            return null;
        }
        //0 是对象 1是字符串
        if(val[0] == '0')
        {
            val = val.substring(1);
            return val == '' || val == undefined || val == null ? null : JSON.parse(val);
        }
        else
        {
            val = val.substring(1);
            return val;
        }
    },
    /**
     * 设置返回是否刷新
     * @param bool boolean;//true:返回需要刷新，false:返回不刷新
     * @param data string/json;//刷新需要回传的数据
     * **/
    setIsRefresh:function (bool,data) {
        bool = bool == undefined ? false : bool;
        data == undefined
            ? ""
            : LocalStoreOperate.setData("tempData",data);
        LocalStoreOperate.setData("backToRefresh",bool);
    },
    /**
     * 获取是否刷新
     * **/
    getIsRefresh:function () {
        var bool = LocalStoreOperate.getData("backToRefresh");
        bool = bool == null || bool == 'null' ? true : bool == "false" ? false : true;
        return bool;
    },
    /**
     * 设置是否强制刷新
     * @param bool boolean;//true:返回需要刷新，false:返回不刷新
     * **/
    setIsForceRefresh:function (bool) {
        bool = bool == undefined ? true : bool;
        LocalStoreOperate.setData("backToForceRefresh",bool);
    },
    /**
     * 获取是否强制刷新
     * **/
    getIsForceRefresh:function () {
        var bool = LocalStoreOperate.getData("backToForceRefresh");
        bool = bool == null || bool == 'null' ? false : bool == "false" ? false : true;
        return bool;
    },
    /**
     * 获取刷新回传数据
     * **/
    getRefreshData:function () {
        return PageGuideOperate.getHrefData();
    }
};

/**
 * 设备操作
 * **/
var DeviceOperate = {
    /**
     * 配置信息
     * @param callbackFuncW function,//横屏回调函数
     * @param callbackFuncH function,//竖屏回调函数
     * @param callbackFuncWH function,//横竖屏切换时回调函数
     * @param orientation number,//屏幕方向: 1:竖屏,home键在屏幕下方; 2:横屏,home键在屏幕右边;4:竖屏,home键在屏幕上方; 8:横屏,home键在屏幕左边;
     * **/
    config:{
        isExe:true,//屏幕切换执行
        callbackFuncW:null,
        callbackFuncH:null,
        callbackFuncWH:null,
        orientation:null,
        onloadFunc:null,//所有window.uexOnload都会回调的函数
    },
    /**
     * 屏幕变化监听事件
     * @param callbackFuncW function,//横屏回调函数
     * @param callbackFuncH function,//竖屏回调函数
     * @param callbackFuncWH function,//横竖屏切换时回调函数
     * **/
    orientationChange:function (callbackFuncW,callbackFuncH, callbackFuncWH) {
        appcan.ready(function() {
            DeviceOperate.orientationCge(callbackFuncW,callbackFuncH, callbackFuncWH);
        });
    },
    /**
     * 初始化横竖屏切换回调函数
     * **/
    orientationCge:function (callbackFuncW,callbackFuncH, callbackFuncWH) {
        /**
         * mode	Number	是	屏幕方向,1-正竖屏;2-左横屏;4倒竖屏;8右横屏
         * **/
        uexDevice.onOrientationChange = function(mode){

            // setTimeout(function () {
            //     document.width = screen.width;
            //     document.height = screen.height;
            // },0);

            if(DeviceOperate.config.isExe)
            {
                DeviceOperate.config.isExe = false;

                DeviceOperate.config.callbackFuncWH = callbackFuncWH != null && callbackFuncWH != undefined
                    ? callbackFuncWH
                    : DeviceOperate.config.callbackFuncWH;
                DeviceOperate.config.callbackFuncW = callbackFuncW != null && callbackFuncW != undefined
                    ? callbackFuncW
                    : DeviceOperate.config.callbackFuncW;
                DeviceOperate.config.callbackFuncH = callbackFuncH != null && callbackFuncH != undefined
                    ? callbackFuncH
                    : DeviceOperate.config.callbackFuncH;

                if(DeviceOperate.config.callbackFuncWH != null && DeviceOperate.config.callbackFuncWH != undefined)
                {
                    DeviceOperate.config.callbackFuncWH(mode);
                }

                if(mode == 1 || mode == 4)
                {
                    // alert("正竖屏");
                    if(DeviceOperate.config.callbackFuncW != null && DeviceOperate.config.callbackFuncW != undefined)
                    {
                        DeviceOperate.config.callbackFuncW();
                    }
                }
                else if(mode == 2 || mode == 8)
                {
                    // alert("左横屏");
                    if(DeviceOperate.config.callbackFuncH != null && DeviceOperate.config.callbackFuncH != undefined)
                    {
                        DeviceOperate.config.callbackFuncH();
                    }
                }

                setTimeout(function () {
                    DeviceOperate.config.isExe = true;
                },500);

            }


        };

    },
    /**
     * 设置屏幕方向
     * @param orientation number;// 1:竖屏,home键在屏幕下方; 2:横屏,home键在屏幕右边;4:竖屏,home键在屏幕上方; 8:横屏,home键在屏幕左边; 15:随系统设置自动转屏.
     * **/
    setOrientation:function (orientation) {
        uexWindow.setOrientation(orientation);
    },
    /**
     * 获取当前屏幕方向
     * return number ;// 1:竖屏,home键在屏幕下方; 2:横屏,home键在屏幕右边;4:竖屏,home键在屏幕上方; 8:横屏,home键在屏幕左边; 15:随系统设置自动转屏.
     * **/
    getOrientation:function () {
        DeviceOperate.config.orientation = window.orientation == 0
            ? 1
            : window.orientation == 90
                ? 2
                : window.orientation == 180
                    ? 4
                    : 8;
        return DeviceOperate.config.orientation;
    },
    /**
     * 是否链接网络(internet)
     * **/
    getInternetInfo:function () {
        var internetInfo = uexDevice.getInfo(13);
        if(internetInfo == -1)
        {
            LoadingOperate.toast("无法连接网络");
        }
        return internetInfo;
    },
    /**
     * 当前窗口重载
     * **/
    reloadCurrentWindow:function () {
        uexWindow.reload();
    },
    /**
     * app重启或页面重载
     * **/
    reStart:function () {
        PlatformOperate.verifyPlatform2(function () {
            uexWidgetOne.restart();
        },function () {
            DeviceOperate.reloadCurrentWindow();
        });
    }
};

/**
 * 浏览器组件操作
 * **/
var BrowerOperate = {
    /**
     * 浏览器配置数据
     * x Number 否 View左上顶点x坐标，默认为0
     y Number 否 View左上顶点y坐标，默认为0
     width Number 否 View左上顶点y坐标，默认撑满屏幕
     height Number 否 View左上顶点y坐标，默认撑满屏幕
     * **/
    config:{
        x:null,
        y:null,
        width:null,
        height:null
    },
    /**
     * 打开外部网页
     * @param url string,//打开网页地址
     * x Number 否 View左上顶点x坐标，默认为0
     y Number 否 View左上顶点y坐标，默认为0
     width Number 否 View左上顶点y坐标，默认撑满屏幕
     height Number 否 View左上顶点y坐标，默认撑满屏幕
     url String 否 需要加载的url
     * **/
    openPageBrower:function (url,y,x,height,width) {
        PlatformOperate.verifyPlatform(function () {
            DeviceOperate.setOrientation(2);

            var interval = setInterval(function () {

                if(DeviceOperate.getOrientation() == 2)
                {
                    clearInterval(interval);
                    /**各字段含义如下:


                     字段名称

                     类型

                     是否必选

                     说明


                     debug Boolean 否 是否开启调试
                     userAgent String 否 传此参数会添加到原有agent

                     * **/
                    var params = {
                        debug:false,
                    };
                    uexWebBrowser.init(params);

                    // var href = "https://e.honey-lovely.com/honey-lovely/jmkh/new2014/1215clgksuqiu%20(LMS)/res/index.html";
                    // var param = {
                    //     "basicData":{
                    //         "index":1,
                    //         "id":1000,
                    //         "containerID":998,
                    //         "x": 0,
                    //         "y": 64,
                    //         "w":320,
                    //         "h":560
                    //     },
                    //     "detailedData":{
                    //         "webUrl" :href
                    //     }
                    // };
                    // uexWebView.open(param);

                    /**各字段含义如下:


                     字段名称

                     类型

                     是否必选

                     说明


                     x Number 否 View左上顶点x坐标，默认为0
                     y Number 否 View左上顶点y坐标，默认为0
                     width Number 否 View左上顶点y坐标，默认撑满屏幕
                     height Number 否 View左上顶点y坐标，默认撑满屏幕
                     url String 否 需要加载的url

                     * **/
                    var params = {
                        // width:1080,
                        // height:600,
                        // x:600,
                        // y:20,
                        // url:"http://www.appcan.cn"
                    };

                    /*url != undefined && url != null ? params["url"] = url: '';
                    x != undefined && x != null ? (params["x"] = x, browerOperate.config.x = x) : browerOperate.config.x != null ? params["x"] = browerOperate.config.x : '';
                    y != undefined && y != null ? (params["y"] = y, browerOperate.config.y = y) : browerOperate.config.y != null ? params["y"] = browerOperate.config.y : '';
                    width != undefined && width != null ? (params["width"] = width, browerOperate.config.width = width) : browerOperate.config.width != null ? params["width"] = browerOperate.config.width : '';
                    height != undefined && height != null ? (params["height"] = height, browerOperate.config.height = height)
                        : browerOperate.config.height != null ? params["height"] = browerOperate.config.height
                        : getPlatform(2) && y != undefined && y != null ? (params["height"] = screen.height - y, browerOperate.config.height = screen.height - y)
                            : '';*/

                    url != undefined && url != null ? params["url"] = url: '';
                    x != undefined && x != null ? params["x"] = x : '';
                    y != undefined && y != null ? params["y"] = y : '';
                    width != undefined && width != null ? params["width"] = width : '';
                    // height != undefined && height != null ? params["height"] = height
                    //     : ((DeviceOperate.config.orientation == 2 || DeviceOperate.config.orientation == 8)
                    // && y != undefined && y != null) ? params["height"] = uexWindow.getHeight() - y
                    //     : '';
                    height != undefined && height != null ? params["height"] = height
                        : (y != undefined && y != null) ? params["height"] = uexWindow.getHeight() - y
                        : '';

                    PageGuideOperate.config.isOpenedWeb = true;
                    uexWebBrowser.open(params);
                }

            },50);

        });
    },
    /**
     * 关闭外部网页
     * **/
    closePageBrower:function(){
        PageGuideOperate.config.isOpenedWeb = false;
        DeviceOperate.setOrientation(1);
        uexWebBrowser.reload();
        setTimeout(function () {
            uexWebBrowser.close();
            DeviceOperate.setOrientation(15);
        },200);

    },
    /**
     * 获取标题
     * callbackFunc function ;//回调函数,回传一个标题字段（string）;不传或传空（null）;return string,//标题
     * **/
    getPageTitle:function (callbackFunc) {
        PlatformOperate.verifyPlatform(function () {
            if(callbackFunc != undefined && callbackFunc != null)
            {
                var interval = setInterval(function () {
                    var title = uexWebBrowser.getTitle();
                    if(title != '')
                    {
                        clearInterval(interval);
                        callbackFunc(title);
                    }
                },100);
            }
            else
            {
                return uexWebBrowser.getTitle();
            }
        });
    }
};

/**
 * 对话框操作对象
 * **/
var DialogOperate = {
    /**
     * 对话框
     * @param title string,//提示
     * @param msg string,//信息
     * **/
    alr:function(title, msg) {
        appcan.window.alert({
            title: title,
            content: msg,
            buttons: '确定',
            callback: function(err, data, dataType, optId) {
                console.log(err, data, dataType, optId);
            }
        });
    },
    /**
     * 对话框
     * @param msg string,//信息
     * **/
    alr2:function(msg) {
        DialogOperate.alr("提示",msg);
    },
    /**
     * 对话框 2个按钮
     * @param title string,//提示文本
     * @param msg string,//显示内容文本
     * @param callback function,//回调函数
     * **/
    alrBtn2:function(title, msg, callback) {
        DialogOperate.alrBtn(title, msg, ['返回', '确认'],callback);
    },
    /**
     * 对话框,2个按钮
     * @param msg string,//显示内容文本
     * @param callback function,//回调函数
     * **/
    alrBtn22:function( msg,callback) {
        DialogOperate.alrBtn2("是否确认",msg,callback);
    },
    /**
     * 对话框 多个按钮
     * @param title string,//提示文本
     * @param msg string,//显示内容文本
     * @param btnList array,//按钮数组
     * @param callback function,//回调函数 btnList的第一个按钮被点击时回调
     * **/
    alrBtn:function(title, msg, btnList,callback) {
        appcan.window.alert({
            title : title,
            content : msg,
            buttons : btnList,
            callback : function(err, index, dataType, optId) {
                // console.log(err, data, dataType, optId);
                callback = callback.constructor == Array ? callback : [null,callback];
                // if(callback != null && callback != undefined && index == 1)
                if(callback != null && callback != undefined)
                {
                    if(callback[index] != null)
                    {
                        callback[index]();
                    }
                }
            }
        });
    }
};

/**
 * 显示影藏元素
 */
var ShowHideEleOperate = {
    eleIdArr:[],//元素id数组
    showId:null,//显示id
    showIdArr:[],//显示id数组
    /**
     * 显示影藏元素
     * @param hideId [],影藏元素id数组,可以传
     * @param showId int,显示元素的id或数组地址
     * func回调函数
     * **/
    showHideEleCtrl:function (hideIdArr,showIdArr,func) {
        /*(typeof obj=='object')&&obj.constructor==Array;
         var obj = "ss";
         var obj = [{f:"ds"}];
         var b = (typeof obj=='object');
         var b = (typeof obj=='string');
         var b = obj.constructor==Array;
         alert("b 1: " + b);*/
        if(hideIdArr != null && hideIdArr != undefined)
        {
            if(!(hideIdArr.constructor == Array))
            {
                ShowHideEleOperate.eleIdArr = [hideIdArr];
            }
            else
            {
                ShowHideEleOperate.eleIdArr = hideIdArr;
            }

        }

        for(var i = 0; i < ShowHideEleOperate.eleIdArr.length; i++)
        {
            // $("#" + ShowHideEleOperate.eleIdArr[i]).removeClass("uhide");
            $("#" + ShowHideEleOperate.eleIdArr[i]).addClass("uhide");
        }

        if(showIdArr == null || showIdArr == undefined)
        {
            showIdArr = [];
        }
        else if(!(showIdArr.constructor==Array))
        {
            showIdArr = [showIdArr];
        }

        var showId = null;
        ShowHideEleOperate.showIdArr = showIdArr;
        for(var i = 0; i < showIdArr.length; i++)
        {
            showId = showIdArr[i];
            // var reg = "^\\d+$"; "^\\d{11}$"
            var reg = new RegExp("^\\d+$");
            if(reg.test(showId))
            {
                showId = ShowHideEleOperate.eleIdArr[showId];
                // $("#" + ShowHideEleOperate.eleIdArr[showId]).removeClass("uhide");
            }
            else if(showId != null)
            {
                // $("#" + showId).removeClass("uhide");
            }

            ShowHideEleOperate.showId = showId;
            $("#" + showId).removeClass("uhide");
            if(showId != undefined && showId != null)
            {
                $("#" + ShowHideEleOperate.showId).blur(function () {
                    // alert(showId);
                    $("#" + ShowHideEleOperate.showId).addClass("uhide");
                    if(func != null && func != undefined)
                    {
                        func();
                    }
                });
            }
        }
    },
    /**
     * 需要显示的元素，
     * @param showId ,显示元素的id或数组地址;可以传入数组或单个对象
     * @param isHisShow ,是否显示 已显示的元素;显示则传入，不显示则不传入；
     * **/
    showEle:function (showId,isHisShow) {

        if(showId == null || showId == undefined)
        {
            showId = [];
        }
        else if(!(showId.constructor == Array))
        {

            showId = [showId];
        }
        if(isHisShow != undefined && ShowHideEleOperate.showIdArr.length > 0)
        {
            showId = showId.concat(ShowHideEleOperate.showIdArr);
        }
        ShowHideEleOperate.showHideEleCtrl(null,showId,null);
    }
};

/**
 * 浮动窗口操作
 * **/
var PopoverOperate = {
    /**
     * 打开一个浮动框
     * @param title 页面标识，在移动平台有用
     * @param pageSrc 页面路径 全路径
     * @param flag number,//页面标记 flag=128时页面支持缩放,默认为128
     * **/
    openPopoverFullPath:function(title,pageSrc,flag) {

        flag = flag == undefined || flag == null ? 128 :flag;

        var  index = pageSrc.indexOf('?');
        if(index > -1)
        {
            appcan.locStorage.setVal("tempData", pageSrc.substring((index + 1)));
        }

        /*pageSrc = pageSrc.substring(0,pageSrc.indexOf('.html') + 5 );
        if(PlatformOperate.isPhone)
        {
            pageSrc = pageSrc.substring(0,pageSrc.lastIndexOf(".html")) + "_iph.html";
        }*/

        if(PlatformOperate.getPlatform(1) || PlatformOperate.getPlatform(2)){

            /* name:要打开弹出窗的名称
             dataType:新窗口填充的数据类型
             0: url
             1: html 数据//必如传入的是一个<div></div>
             2: html 和 url 混合数据
             url:弹出框要加载的页面的地址
             data:弹出框要加载的数据内容
             left:弹出框距离左边的距离
             top:弹出框距离上边的距离
             width:弹出框的宽度
             height:弹出框的高度
             fontSize:页面基础的字体大小
             type:窗口类型
             0: 普通窗口
             1: OAuth 窗口
             2: 加密页面窗口
             4: 强制刷新
             16: view不透明
             32: 隐藏的window
             64: 等待popOver加载完毕后显示
             128: 支持手势
             256: 标记open的window上一个window不隐藏
             512: 标记open的浮动窗口用于打开webapp。此浮动窗口将不进行默认字体的设置，缩放比例的设置等，WebApp的排版适配交由系统处理。注意:此flag仅用于open浮动窗口。
             bottomMargin:浮动窗口相对父窗口底部的距离。为空或0时，默认为0。当值不等于0时，height参数无效
             extraInfo:扩展参数，设置值时，bottomMargin参数必传
             * */
            // var param = {
            //     name:title,
            //     dataType:0,
            //     url:pageSrc,
            //     top:0,
            //     left:0,
            //     // width:screen.width,
            //     // height:screen.height,
            //     extraInfo:{
            //         opaque:true,
            //         bgColor:"white",
            //     },
            //     type:128,
            //     bottomMargin:200,
            // };
            // appcan.window.openPopover(param) //打开一个浮动窗口/弹出框
            // appcan.window.open({
            //     name:title,
            //     dataType:0,
            //     aniId:2,
            //     data:pageSrc,
            //     type:512,
            //     extraInfo:{
            //         opaque:true,
            //         // bgColor:bg
            //     }
            // });
            uexWindow.openPopover(title,0,pageSrc,"",0,0,"","","",flag,0);
        }
        else
        {
            window.location.href = pageSrc;
        }

    },
    /**
     * 打开一个浮动框 并且传递数据
     * @param title 页面标识，在移动平台有用
     * @param pageSrc 页面路径
     * @param data 传递数据为字符串
     **/
    openPopoverDataFullPath:function(title,pageUrl,data={},flag) {

        if(typeof(data) == 'object' || data.constructor == Array)
        {
            //0,表示是json,1表示是字符串
            data = "0" + JSON.stringify(data);
        }
        else
        {
            data = "1" + data;
        }

        PopoverOperate.openPopoverFullPath(title,pageUrl + "?" + data, flag);
    }
};

/**
 * 图片操作
 * **/
var ImgOperate = {
    /**
     * 选择图片 （原生）
     * @param 回调函数
     *从本地相册中选择图片
     * min	Number	否	最小选择数量 ,传0表示无限制	1
     max	Number	否	最大选择数量 ,传0表示无限制	0
     quality	Number	否	JPG压缩质量 取值范围 0-1 越大表示质量越好	0.5
     usePng	Boolean	否	用png格式导出图片 ,此参数为true时,quality参数无效	false
     detailedInfo	Boolean	否	此参数为true时,回调中会包含图片的额外信息	false
     style	Number	否	如果不传或者传0 为默认样式，传1为新样式(仿微信)	0
     */
    pickImg:function(func) {
        PlatformOperate.verifyPlatform(function () {
            var optionsImg = {
                min:0,
                max:1,
                quality:0.8,
                usePng:false,
                detailedInfo:true,
                style:0
            };
            var json = JSON.stringify(optionsImg);
            if(PlatformOperate.getPlatform(2))
            {
                //设置iPad是否启用pop窗口 为0时表示禁用pop窗口,非0时表示启用pop窗口
                uexImage.setIpadPopEnable(0);
            }
            uexImage.openPicker(optionsImg,function (err,info) {
                /**
                 * info数据结构：
                 info = {
                             detailedImageInfo:,//Array	否 ,仅openPicker有设置detailedInfo为true时才有此参数	导出的图片的信息uexImageInfo结构构成的数组
                             ata:,//Array	否	导出的图片地址构成的数组
                      }
                 detailedImageInfo	Array	否 ,仅openPicker有设置detailedInfo为true时才有此参数	导出的图片的信息uexImageInfo结构构成的数组
                 data	Array	否	导出的图片地址构成的数组
                 * **/
                if(err == 0)
                {
                    // alert(JSON.stringify(info));
                    if(info.data.length > 0)
                    {
                        func(info);
                    }

                }
            });
            // uexImageBrowser.open(imageUrlSet,activeIndex)
        });

    },
    /**
     * 打开图片浏览器
     * @param data array,//图片数组
     * @param callback function,//回调函数
     * data = [
     "http://img0.imgtn.bdimg.com/it/u=2472221060,3111898232&fm=26&gp=0.jpg",
     "http://img01.taopic.com/150715/240497-150G50J45235.jpg"
     ];

     * **/
    openBrowserImg:function (data, callback) {
        /**
         * 参数名称	参数类型	是否必选	说明	默认值
         displayActionButton	Boolean	否	显示分享按钮	false
         displayNavArrows	Boolean	否	显示切换箭头(仅iOS支持此参数)	false
         enableGrid	Boolean	否	允许九宫格视图	true
         startOnGrid	Boolean	否	以九宫格视图起始	false
         startIndex	Number	否	非负整数 起始图片位置	0
         data	Array	是	图片资源构成的数组	无
         style	Number	否	UI样式，0：插件旧风格UI；1：仿照微信优化后的UI。	0
         gridBackgroundColor	String	否	九宫格背景颜色，style为1时支持	黑色
         gridTitle	String	否	九宫格预览图片的标题，style为1时支持	图片浏览
         viewFramePicPreview	Object	否	单张图片视图的位置大小信息，形如"viewFramePicPreview":{ x:0, y:0,w:1080, h:1767}，style为1时才有效	全屏
         viewFramePicGrid	Object	否	九宫格视图的位置大小信息，形如："viewFramePicGrid":{ x:0, y:0,w:1080, h:1767}，style为1时才有效	全屏


         src:,//(String,必选)图片资源路径,支持 wgt:// wgts:// res:// file:// http:// https://
         thumb:,//(String,可选)图片缩略图路径
         desc:,//(String,可选) 为图片添加一段文字描述
         showBigPic:,//(Boolean 可选) 是否显示大图，默认不显示false，参数值为false、true

         * **/

        // data = [
        //     "http://img0.imgtn.bdimg.com/it/u=2472221060,3111898232&fm=26&gp=0.jpg",
        //     "http://img01.taopic.com/150715/240497-150G50J45235.jpg"
        // ];

        /**
         * data也可以是这个
         * data = {

         src:,//(String,必选)图片资源路径,支持 wgt:// wgts:// res:// file:// http:// https://
         thumb:,//(String,可选)图片缩略图路径
         desc:,//(String,可选) 为图片添加一段文字描述
         showBigPic:,//(Boolean 可选) 是否显示大图，默认不显示false，参数值为false、true

        }**/

        if(PlatformOperate.getPlatform(2))
        {
            //设置iPad是否启用pop窗口 为0时表示禁用pop窗口,非0时表示启用pop窗口
            uexImage.setIpadPopEnable(0);
        }

        if(!(data.constructor == Array))
        {
            data = [data];
        }

        var picsList = [];
        if(typeof(data[i]) == 'object')
        {
            for(var i = 0; i < data.length; i++)
            {
                picsList.push({
                    src:data[i].src,//(String,必选)图片资源路径,支持 wgt:// wgts:// res:// file:// http:// https://
                    thumb:data[i].thumb == undefined ? data[i].src : data[i].thumb,//(String,可选)图片缩略图路径
                    desc:data[i].desc == undefined ? '' : data[i].desc,//(String,可选) 为图片添加一段文字描述
                    showBigPic:data[i].showBigPic == undefined ? true
                        : data[i].showBigPic == true || data[i].showBigPic == false ? data[i].showBigPic
                            : true //(Boolean 可选) 是否显示大图，默认不显示false，参数值为false、true
                });
            }
        }
        else
        {
            // for(var i = 0; i < data.length; i++)
            // {
            //     picsList.push({
            //         src:data[i],//(String,必选)图片资源路径,支持 wgt:// wgts:// res:// file:// http:// https://
            //         thumb:data[i] ,//(String,可选)图片缩略图路径
            //         desc:"dsdsafds",//(String,可选) 为图片添加一段文字描述
            //         showBigPic:true,//(Boolean 可选) 是否显示大图，默认不显示false，参数值为false、true
            //     });
            // }
            picsList = data;

        }

        // alert(JSON.stringify(data));
        var param ={
            displayActionButton:true,
            displayNavArrows:true,
            enableGrid:true,
            startOnGrid:false,
            startIndex:0,
            data:picsList,
            style:1,
            gridBackgroundColor:"white",  // style为1时生效
            gridBrowserTitle:"图片浏览",
            // viewFramePicPreview:{   //位置、大小
            //     x:0,
            //     y:0,
            //     w:screen.width,
            //     h:screen.height,
            // },
            // viewFramePicGrid:{   //位置、大小
            //     x:0,
            //     y:0,
            //     // w:200,
            //     // h:1767,
            //     w:screen.width,
            //     h:screen.height,
            // }
        }
        uexImage.openBrowser(param,function(){
            if(callback != null && callback != undefined)
            {
                callback();
            }

            // alert("browser closed!");
        });

    },
    /**
     * 保存图片到图库 不支持网络图片
     * @param data array 或 string ,//需要保存图片的路径 如:data = ["路径1","路径2".......]或"路径1";
     * @param index number,//data数组的地址
     * @param callbackSucess function,//保存成功回调函数
     * @param callbackErr function,//保存失败回调函数
     * @param filePath string,//文件路径
     * **/
    saveToPhotoAlbum:function (data,index,callbackSucess,callbackErr,filePath) {
        if(data.constructor != Array)
        {
            data = [data];
        }
        if(filePath != undefined && filePath.constructor != Array)
        {
            data = [filePath];
        }

        var localSrc = {
            // localPath:data[index]
            localPath:filePath == undefined ?
                data[index].files == undefined ? "wgts://download/" + data[index].substring(data[index].lastIndexOf('/') + 1)
                    : data[index].files : data[index]
        };

        uexImage.saveToPhotoAlbum(JSON.stringify(localSrc),function(err,errStr){
            // error	Number	是	为0表示储存成功,非0表示储存失败
            // errorInfo	String	否	储存失败的错误信息.储存成功时,errorInfo为null
            if(!err){
                if(index == (data.length - 1))
                {
                    // alert("储存成功!");
                    if(callbackSucess != undefined)
                    {
                        callbackSucess();
                    }
                }
                else
                {
                    index++;
                    ImgOperate.saveToPhotoAlbum(data,index,callbackSucess,callbackErr);
                }
            }
            else
            {
                // alert("储存失败:" + errStr);
                if(callbackErr != undefined)
                {
                    callbackErr(errStr);
                }
            }
        });
    },
    /**
     * 保存图片到图库 不支持网络图片
     * @param data array,//需要保存图片的路径 data = ["路径1","路径2".......];
     * @param index number,//data数组的地址
     * @param callbackSucess function,//保存成功回调函数
     * @param callbackErr function,//保存失败回调函数
     * **/
    saveToSysPhotoAlbum:function (data,callbackSucess,callbackErr,filePath) {
        ImgOperate.saveToPhotoAlbum(data,0,callbackSucess,callbackErr,filePath);
    },
    /**
     * 拍照，（原生）
     * @param func 拍照成功回调函数
     * opId	Number类型	必选	操作ID,此函数中不起作用,可忽略
     dataType	Number类型	必选	数据类型详见CONSTANT中Callback dataType数据类型
     data	String类型	必选	拍照成功后图片的保存路径
     **/
    takePicture:function(func) {

        PlatformOperate.verifyPlatform(function () {
            //调用系统相机
            uexCamera.open(0,100,function (data) {
                setTimeout(function(){
                    func(data);
                },0);
                setTimeout(function(){
                    ImgOperate.saveToSysPhotoAlbum([{files:data}]);
                },0);

            });

            /* //打开自定义相机
             uexCamera.openInternal(0,100,function (data) {
                 // filePathPic = data;
                 func(data);
             });*/

        });

    }
};

/**
 * 上下左右滑动监控,上拉加载更多，下拉刷新等
 * **/
var SwipeOperate = {
    /**
     * 配置信息
     * **/
    config:{
        isSlideBottom:true,//上下划底是否弹动，true是，反之不是
        type:1,//	 Number	是	弹动的位置,0:顶端;1:底部
        isForbiddenCloseSpringing:false,//是否禁止弹动，false:不禁止，true：禁止
    },//配置数据
    /**
     * 下拉刷新,上拉加载 (原生)
     * @param funcTop function,// 下拉刷新回调函数
     * @param funcBottom function,//上拉加载回调函数
     * @param callbackFuncPre function,//回到前台 回调函数
     * @param callbackFuncBack function,//回到后台 回调函数
     * @param isOrientation bool,//true屏幕方向切换 回调函数，false屏幕方向切换 不回调
     * **/
    upOrDownRefresh:function(funcTop, funcBottom,callbackFuncPre,callbackFuncBack, isOrientation) {

        // document.getElementById("Header").style.paddingTop = "40px";

        /**
         * 上拉加载，下拉刷新
         * window.uexOnload 窗口加载完毕后平台将触发此方法.类比window.onload方法,都是html页面加载完成 之后触发的方法.区别是,
         * window.uexOnload方法会晚于window.onload方法,
         * 原因是window.uexOnload需要等 待AppCan扩展对象,即'uex'前缀的对象初始化完毕.事件加载完成之后,可以安全的使用uex扩展对象.
         *
         *@param type	Number	是	当前加载完毕View的类型.0:主窗口或者浮动窗口(即代表自己);1:上个slibing;2:下个slibing
         * **/

        window.uexOnload = function(type)   {
            if(DeviceOperate.config.onloadFunc != null)
            {
                DeviceOperate.config.onloadFunc();
            }

            DeviceOperate.orientationCge();
            uexWindow.setBounce(0);

            /*if(isOrientation != null && isOrientation != undefined)
            {
                DeviceOperate.orientationCge();
            }*/

            /*弹动状态改变的监听方法
                 //      参数名称	参数类型	是否必选	说明
                 //      type	Number	是	对应的部位值,0:网页顶端;1:网页底部
                 //      state	Number	是	状态值,0:滑动事件开始;1:刷新事件开始;2:滑动事件结束
                 //      * */
            uexWindow.onBounceStateChange = function(type, state) {
                // LoadingOperate.toast("onBounceStateChange");
                setTimeout(function () {
                    SwipeOperate.closeSpringingView();

                },1000);

            };

            /**onSlipedDownward //滑到顶部的监听方法，内容超过一屏时有效
             * **/
            uexWindow.onSlipedUpEdge = function () {
                uexWindow.setBounce(0);//是否支持网页弹动1支持，0不支持
                // LoadingOperate.toast("refresh:");
                // SwipeOperate.startSringingView("",0);
                if(funcTop != undefined && funcTop != null)
                {
                    funcTop();
                }
            }

            if(callbackFuncPre != undefined)
            {
                //state: 状态值,0:回到前台;1:压入后台
                uexWindow.onStateChange = function(state){

                    /* setTimeout(function () {
                         alert(LocalStoreOperate.getIsForceRefresh())
                     });*/

                    if(LocalStoreOperate.getIsRefresh() || LocalStoreOperate.getIsForceRefresh())
                    {
                        if(state == 0 && callbackFuncPre != undefined && callbackFuncPre != null)
                        {
                            // alert(0);
                            callbackFuncPre(state);
                            LocalStoreOperate.setIsRefresh(false);
                            LocalStoreOperate.setIsForceRefresh(false);
                        }
                        else if(callbackFuncBack != undefined && callbackFuncBack != null)
                        {
                            callbackFuncBack(state);
                        }


                    }

                }
            }

            if(funcBottom != undefined && funcBottom != null)
            {

                /**滑到底部的监听方法，内容超过一屏时有效
                 * **/
                uexWindow.onSlipedDownEdge = function () {
                    if(SwipeOperate.config.isSlideBottom)
                    {
                        uexWindow.setBounce(1);//是否支持网页弹动1支持，0不支持
                        SwipeOperate.startSringingView();
                    }
                    funcBottom();
                    setTimeout(function () {
                        if(SwipeOperate.config.isSlideBottom)
                        {
                            uexWindow.setBounce(0);//是否支持网页弹动1支持，0不支持
                        }
                    },1200);
                };
            }

            // 设置网页是否支持滑动的相关监听方法
            var param = {
                isSupport:true//(必选)true:支持;false:不支持.默认为false.
            };

            uexWindow.setIsSupportSlideCallback(param);


        }

        /*  /!**上拉加载，下拉刷新
           * window.uexOnload 窗口加载完毕后平台将触发此方法.类比window.onload方法,都是html页面加载完成 之后触发的方法.区别是,
           * window.uexOnload方法会晚于window.onload方法,
           * 原因是window.uexOnload需要等 待AppCan扩展对象,即'uex'前缀的对象初始化完毕.事件加载完成之后,可以安全的使用uex扩展对象.
           *
           *@param type	Number	是	当前加载完毕View的类型.0:主窗口或者浮动窗口(即代表自己);1:上个slibing;2:下个slibing
           * **!/
          window.uexOnload = function(type) {
              uexWindow.setBounce(1);//是否支持网页弹动1支持，0不支持
              // uexWindow.setBounce("1");

              /!*uexWindow.showBounceView(json)
               uexWindow.showBounceView({
               type:"1",
               color:"rgba(15, 155, 155, 100)",
               flag:1
               });
               参数名称	参数类型	是否必选	说明
               type	Number	是	弹动的位置,0:顶端弹动;1:底部弹动
               color	String	是	弹动显示部位的颜色值,内容不超过一屏时底部弹动内容不显示
               flag	String	是	是否显示内容,1:显示;0:不显示
               * *!/
              // alert("funcTop   funcBottom");

              // uexWindow.showBounceView(0, "rgba(255,255,255,0)", "1");
              // uexWindow.showBounceView(1, "rgba(255,255,255,0)", "1");
              // return;

              //state: 状态值,0:回到前台;1:压入后台
              uexWindow.onStateChange = function(state){
                  // LoadingOperate.toast(state);
                  // alert(state);
                  if(state == 0 && callbackFuncPre != undefined)
                  {
                      // alert(0);
                      callbackFuncPre(state);
                  }
                  else if(callbackFuncBack != undefined && callbackFuncBack != null)
                  {
                      callbackFuncPre(state);
                  }
                  else
                  {
                      // alert("ds");
                  }
                  // alert("ds22");
                  // alert(state);
                  // console.log(state);

              }

              var top = 0, btm = 1;
              /!*弹动状态改变的监听方法
               参数名称	参数类型	是否必选	说明
               type	Number	是	对应的部位值,0:网页顶端;1:网页底部
               state	Number	是	状态值,0:滑动事件开始;1:刷新事件开始;2:滑动事件结束
               * *!/
              uexWindow.onBounceStateChange = function(type, state) {
                  // alert("sd");
                  if (type == top && state == 2) { //顶部弹动
                      uexWindow.resetBounceView(0);//resetBounceView //设置弹动效果结束后显示的网页;type 	Number	是	弹动的位置,0:顶端;1:底部
                      funcTop();

                  }
                  if (type == btm && state == 2) { //底部弹动
                      uexWindow.resetBounceView(1);//resetBounceView //设置弹动效果结束后显示的网页;type	 Number	是	弹动的位置,0:顶端;1:底部
                      funcBottom();
                  }

              }

              uexWindow.onSlipedDownEdge = function () {
                  alert("sd");
              }
              // 设置网页是否支持滑动的相关监听方法
              var param = {
                  isSupport:true//(必选)true:支持;false:不支持.默认为false.
              };
              uexWindow.setIsSupportSlideCallback(param);


              if (true) {
                  // alert("funcTop setBounceParams");
                  //uexWindow.setBounceParams(type,status)//设置弹动参数
                  /!*type	Number	是	弹动的位置,0:顶端弹动;1:底部弹动
                   status	JSON	是	json
                   var status={
                   "textColor":"#000",
                   "imagePath":"res://refesh_icon.png",
                   "levelText":"更新日期",
                   "pullToReloadText":"拖动到底部",
                   "releaseToReloadText":"释放回原处",
                   "loadingText":"更新中..."
                   };
                   uexWindow.setBounceParams(0, status);

                   imagePath	是	下拉状态小图标的路径,只支持res:// 格式.路径协议详见CONSTANT中Pathtypes
                   textColor	是	展示下拉状态文字的颜色,如:"#ffffff"
                   levelText	是	显示的二级文字,如:"上次更新时间:xxxxx".
                   pullToReloadText	是	开始拖动直到超过刷新临界线之前显示的文字,如:"拖动刷新"
                   releaseToReloadText	是	拖动超过刷新临界线后显示的文字,如:"释放刷新"
                   loadingText	是	拖动超过刷新临界线并且释放拖动,进入刷新状态时显示的文字,如:"加载中,请稍等"
                   loadingImagePath	否	等待状态loading小图标的路径,只支持res:// 格式(该字段为定制需求,默认无效)

                   * *!/
                  uexWindow.setBounceParams(
                      '0',
                      "{'pullToReloadText':'下拉','releaseToReloadText':'下拉','loadingText':'下拉'}"
                  );
                  // uexWindow.showBounceView(top, "rgba(255,255,255,0)", 1);
                  // uexWindow.showBounceView(top, "rgba(15, 155, 155, 100)", 1);
                  uexWindow.showBounceView({
                      type:top,
                      color:"rgba(255,255,255,1)",
                      flag:1
                  });
                  //uexWindow.notifyBounceEvent(type,status) //注册接收弹动事件

                  /!**弹动显示的部位,0:顶端;1:底部**!/
                  // uexWindow.hiddenBounceView(0);

                  // uexWindow.hideStatusBar();

                  /!*
                   参数名称	参数类型	是否必选	说明
                   type	Number	是	弹动的位置,0:顶端弹动;1:底部弹动
                   status	Number	是	是否调用onBounceStateChange方法,0:不调用;1:调用
                   * *!/
                  uexWindow.notifyBounceEvent(top, 1);
              }



              if (true) {
                  // alert("funcBottom setBounceParams");
                  uexWindow
                      .setBounceParams(
                          '1',
                          "{'pullToReloadText':'加载更多','releaseToReloadText':'加载更多','loadingText':'加载中，请稍候'}");
                  // uexWindow.showBounceView(btm, "rgba(255,255,255,0)", 1); //设置弹动位置及效果([1:显示内容;0:不显示])
                  /!**R：
                   红色值。正整数 | 百分数
                   G：
                   绿色值。正整数 | 百分数
                   B：
                   蓝色值。正整数 | 百分数
                   A：
                   Alpha透明度。取值0~1之间。
                   * **!/
                  uexWindow.showBounceView({
                      type:btm,
                      color:"rgba(255,255,255,1)",
                      flag:1
                  }); //设置弹动位置及效果([1:显示内容;0:不显示])
                  uexWindow.notifyBounceEvent(btm, 1); //注册接收弹动事件([0:不接收onBounceStateChange方法回调;1:接收])
              }
          }*/

    },
    /**
     * 向左滑动监听方法
     * @param callbackFuncBack function,//回调函数
     * **/
    swipeLeftAndRight:function (callbackFuncLeft,callbackFuncRight) {
        window.uexOnload = function(type) {

            if(DeviceOperate.config.onloadFunc != null)
            {
                DeviceOperate.config.onloadFunc();
            }

            DeviceOperate.orientationCge();

            // 设置网页是否支持滑动的相关监听方法
            var param = {
                isSupport:true//(必选)true:支持;false:不支持.默认为false.
            };
            uexWindow.setIsSupportSwipeCallback(param);
            uexWindow.onSwipeRight = function(){
                // alert("onSwipeRight");
                // console.log('onSwipeRight');
                if(callbackFuncRight != undefined)
                {
                    callbackFuncRight();
                }
            }
            uexWindow.onSwipeLeft = function(){
                // alert("onSwipeLeft");
                // console.log('onSwipeLeft');
                if(callbackFuncLeft != undefined)
                {
                    callbackFuncLeft();
                }
            }

        }
    },
    /**
     * 左右上下滑动监听事件(原生)
     * @param funcTop function,// 下拉刷新回调函数
     * @param funcBottom function,//上拉加载回调函数
     * @param callbackFuncPre function,//回到前台 回调函数
     * @param callbackFuncBack function,//回到后台 回调函数
     * @param callbackFuncUp function,//向上滑动 回调函数
     * @param callbackFuncDown function,//向下滑动 回调函数
     * @param isOrientation bool,//true屏幕方向切换 回调函数，false屏幕方向切换 不回调
     * **/
    swipeLefRigUpDwn:function (funcTop, funcBottom,callbackFuncPre, callbackFuncBack, callbackFuncUp, callbackFuncDown,isOrientation) {
        // document.getElementById("Header").style.paddingTop = "40px";

        /**
         * 上拉加载，下拉刷新
         * window.uexOnload 窗口加载完毕后平台将触发此方法.类比window.onload方法,都是html页面加载完成 之后触发的方法.区别是,
         * window.uexOnload方法会晚于window.onload方法,
         * 原因是window.uexOnload需要等 待AppCan扩展对象,即'uex'前缀的对象初始化完毕.事件加载完成之后,可以安全的使用uex扩展对象.
         *
         *@param type	Number	是	当前加载完毕View的类型.0:主窗口或者浮动窗口(即代表自己);1:上个slibing;2:下个slibing
         * **/
        window.uexOnload = function(type) {

            if(DeviceOperate.config.onloadFunc != null)
            {
                DeviceOperate.config.onloadFunc();
            }

            DeviceOperate.orientationCge();
            uexWindow.setBounce(0);
            // if(isOrientation != null && isOrientation != undefined)
            // {
            //     DeviceOperate.orientationCge();
            // }

            /**
             弹动状态改变的监听方法
             //      参数名称	参数类型	是否必选	说明
             //      type	Number	是	对应的部位值,0:网页顶端;1:网页底部
             //      state	Number	是	状态值,0:滑动事件开始;1:刷新事件开始;2:滑动事件结束
             //      * */
            uexWindow.onBounceStateChange = function(type, state) {
                // LoadingOperate.toast("onBounceStateChange");
                setTimeout(function () {
                    SwipeOperate.closeSpringingView();
                },1000);

            };


            if(callbackFuncPre != undefined && callbackFuncPre != null)
            {
                //state: 状态值,0:回到前台;1:压入后台
                uexWindow.onStateChange = function(state){

                    if(LocalStoreOperate.getIsRefresh() || LocalStoreOperate.getIsForceRefresh())
                    {
                        if(state == 0 && callbackFuncPre != undefined && callbackFuncPre != null)
                        {
                            // alert(0);
                            callbackFuncPre(state);
                            LocalStoreOperate.setIsRefresh(false);
                            LocalStoreOperate.setIsForceRefresh(false);
                        }
                        else if(callbackFuncBack != undefined && callbackFuncBack != null)
                        {
                            callbackFuncBack(state);
                        }

                    }

                }
            }

            if(funcBottom != undefined && funcBottom != null)
            {

                /**
                 * 滑到底部的监听方法，内容超过一屏时有效
                 * **/
                uexWindow.onSlipedDownEdge = function () {
                    if(SwipeOperate.config.isSlideBottom)
                    {
                        uexWindow.setBounce(1);//是否支持网页弹动1支持，0不支持
                        SwipeOperate.startSringingView();
                    }
                    funcBottom();
                    setTimeout(function () {
                        if(SwipeOperate.config.isSlideBottom)
                        {
                            uexWindow.setBounce(0);//是否支持网页弹动1支持，0不支持
                        }
                    },1200);
                };
            }
            /**
             * onSlipedDownward //滑到顶部的监听方法，内容超过一屏时有效
             * **/
            uexWindow.onSlipedUpEdge = function () {
                uexWindow.setBounce(0);//是否支持网页弹动1支持，0不支持
                // LoadingOperate.toast("refresh:");
                // SwipeOperate.startSringingView("",0);
                if(funcTop != undefined && funcTop != null)
                {
                    funcTop();
                }
            }


            if(callbackFuncUp != undefined && callbackFuncUp != null)
            {
                /**
                 * 上滑的监听方法，内容超过一屏时有效
                 * **/
                uexWindow.onSlipedUpward = function () {
                    callbackFuncUp();
                }
            }

            if(callbackFuncDown != undefined && callbackFuncDown != null)
            {
                /**
                 * 上滑的监听方法，内容超过一屏时有效
                 * **/
                uexWindow.onSlipedDownward = function () {
                    callbackFuncDown();
                }
            }

            // 设置网页是否支持滑动的相关监听方法
            var param = {
                isSupport:true//(必选)true:支持;false:不支持.默认为false.
            };
            uexWindow.setIsSupportSlideCallback(param);
        }
    },
    /**
     * 关闭弹动
     * @param type number,//弹动的位置,0:顶端;1:底部
     * **/
    closeSpringingView:function (type) {
        PlatformOperate.verifyPlatform(function () {
            if(!SwipeOperate.config.isForbiddenCloseSpringing)
            {
                type = type == undefined ? SwipeOperate.config.type : 0;
                uexWindow.resetBounceView(type);//resetBounceView //设置弹动效果结束后显示的网页;type	 Number	是	弹动的位置,0:顶端;1:底部
            }

        });
    },
    /**
     * 开启弹动
     *  @param showTxt string,//显示弹动文本
     *  @param type number,//undefined,底部弹动，否则顶部弹动
     * **/
    startSringingView:function (showTxt,type) {
        if(SwipeOperate.config.isSlideBottom)
        {
            /**
             * 上拉加载，下拉刷新
             * window.uexOnload 窗口加载完毕后平台将触发此方法.类比window.onload方法,都是html页面加载完成 之后触发的方法.区别是,
             * window.uexOnload方法会晚于window.onload方法,
             * 原因是window.uexOnload需要等 待AppCan扩展对象,即'uex'前缀的对象初始化完毕.事件加载完成之后,可以安全的使用uex扩展对象.
             *
             *@param type	Number	是	当前加载完毕View的类型.0:主窗口或者浮动窗口(即代表自己);1:上个slibing;2:下个slibing
             * **/
            uexWindow.setBounce(1);//是否支持网页弹动1支持，0不支持

            if(type == undefined)
            {
                SwipeOperate.config.type = 1;

                showTxt = showTxt == undefined ? '加载更多' : showTxt;

                var param = {
                    textColor:"#000000",
                    // "imagePath":"res://refesh_icon.png",
                    levelText:'',
                    pullToReloadText:showTxt,
                    releaseToReloadText:showTxt,
                    loadingText:showTxt
                };

                uexWindow.setBounceParams(1, param);
                // uexWindow.showBounceView(btm, "rgba(255,255,255,0)", 1); //设置弹动位置及效果([1:显示内容;0:不显示])
                /**R：
                 红色值。正整数 | 百分数
                 G：
                 绿色值。正整数 | 百分数
                 B：
                 蓝色值。正整数 | 百分数
                 A：
                 Alpha透明度。取值0~1之间。
                 * **/
                // uexWindow.showBounceView({
                //     type:"1",
                //     // color:"rgba(255,255,255,100)",
                //     color:"rgba(15, 155, 155, 100)",
                //     flag:1
                // }); //显示弹动效果([1:显示内容;0:不显示]),这个方法颜色设置无效
                uexWindow.showBounceView(1,"#FFFFFF", 1);
                // uexWindow.showBounceView(1,"rgba(15, 155, 155, 100)", 1);
                // uexWindow.showBounceView("1","rgba(255,255,255, 100)", 1);//显示弹动效果([1:显示内容;0:不显示])
                // uexWindow.showBounceView(top, "rgba(255,255,255,0)", 1);//显示弹动效果([1:显示内容;0:不显示])
                uexWindow.notifyBounceEvent(1, 1); //注册接收弹动事件([0:不接收onBounceStateChange方法回调;1:接收])
                // uexWindow.showBounceView("1","rgba(15, 155, 155, 100)", 1);

            }
            else
            {
                SwipeOperate.config.type = 0;

                showTxt = showTxt == undefined ? '刷新' : showTxt;//alert("refresh:" + showTxt);

                var param = {
                    textColor:"#000000",
                    // "imagePath":"res://refesh_icon.png",
                    levelText:'',
                    pullToReloadText:showTxt,
                    releaseToReloadText:showTxt,
                    loadingText:showTxt
                };

                uexWindow.setBounceParams(0, param);
                // uexWindow.showBounceView(btm, "rgba(255,255,255,0)", 1); //设置弹动位置及效果([1:显示内容;0:不显示])
                /**R：
                 红色值。正整数 | 百分数
                 G：
                 绿色值。正整数 | 百分数
                 B：
                 蓝色值。正整数 | 百分数
                 A：
                 Alpha透明度。取值0~1之间。
                 * **/
                // uexWindow.showBounceView({
                //     type:"1",
                //     // color:"rgba(255,255,255,100)",
                //     color:"rgba(15, 155, 155, 100)",
                //     flag:1
                // }); //显示弹动效果([1:显示内容;0:不显示]),这个方法颜色设置无效
                uexWindow.showBounceView(0,"#FFFFFF", 1);
                // uexWindow.showBounceView("1","rgba(255,255,255, 100)", 1);//显示弹动效果([1:显示内容;0:不显示])
                // uexWindow.showBounceView(top, "rgba(255,255,255,0)", 1);//显示弹动效果([1:显示内容;0:不显示])
                /**
                 * **/
                uexWindow.notifyBounceEvent(0, 1); //注册接收弹动事件([0:不接收onBounceStateChange方法回调;1:接收])
                // uexWindow.showBounceView("1","rgba(15, 155, 155, 100)", 1);
            }
        }
    },
    /**
     * 没有数据时，关闭弹动
     * **/
    closeSpringingViewInNoData:function () {
        PlatformOperate.verifyPlatform(function () {
            SwipeOperate.closeSpringingView();
            SwipeOperate.startSringingView("没有数据了");
        }) ;

        // setTimeout(function () {
        //     SwipeOperate.closeSpringingView();
        // },1000);
    },
    /**
     * 隐藏弹动效果
     * @param number ;//是	弹动显示的部位,0:顶端;1:底部,默认为影藏底部
     * **/
    hiddenSpringingView:function (type) {
        type = type == undefined ? SwipeOperate.config.type : 0;

        /**type	Number	是	弹动显示的部位,0:顶端;1:底部
         * **/
        uexWindow.hiddenBounceView(type);
    },
    /**
     * 设置网页是否支持滑动的相关监听方法
     */
    setIsSupportSlideCallback:function (bool) {
        if(bool != true || bool != false)
        {
            bool = true;
        }
        // 设置网页是否支持滑动的相关监听方法
        var param = {
            isSupport:bool//(必选)true:支持;false:不支持.默认为false.
        };
        uexWindow.setIsSupportSlideCallback(param);
    }
};

/**
 * 上下左右滑动监控(JS)
 * **/
var SwipeOperateJS = {
    /**
     * 左右上下滑动监听事件(JS)
     * @param callbackFuncUp function,//向上滑动 回调函数
     * @param callbackFuncDown function,//向下滑动 回调函数
     * @param callbackFuncLeft function,//向左滑动 回调函数
     * @param callbackFuncRight function,//向右滑动 回调函数
     * **/
    swipeLefRigUpDwn:function (callbackFuncUp, callbackFuncDown,callbackFuncLeft, callbackFuncRight) {
        var startx, starty,endx, endy;

        /*//获得角度
        function getAngle(angx, angy) {
            return Math.atan2(angy, angx) * 180 / Math.PI;
        };*/

        /*//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
        function getDirection(startx, starty, endx, endy) {
            var angx = endx - startx;
            var angy = endy - starty;
            var result = 0;

            //如果滑动距离太短
            if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
                return result;
            }

            var angle = getAngle(angx, angy);
            if (angle >= -135 && angle <= -45) {
                result = 1;
            } else if (angle > 45 && angle < 135) {
                result = 2;
            } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                result = 3;
            } else if (angle >= -45 && angle <= 45) {
                result = 4;
            }

            return result;
        }*/


        //手指接触屏幕
        document.addEventListener("touchstart", function(e) {
            /*startx = e.touches[0].pageX;
            starty = e.touches[0].pageY;*/
            startx = e.changedTouches[0].pageX;
            starty = e.changedTouches[0].pageY;
        }, false);
        //手指离开屏幕
        document.addEventListener("touchend", function(e) {

            endx = e.changedTouches[0].pageX;
            endy = e.changedTouches[0].pageY;

            // LoadingOperate.toast("starty:" + starty + "\n"  + "endy:" + endy);

            /* var direction = getDirection(startx, starty, endx, endy);
             switch (direction) {
                 case 0:
                     // alert("未滑动！");
                     break;
                 case 1:
                     // alert("向上！")
                     break;
                 case 2:
                     // alert("向下！")
                     break;
                 case 3:
                     // alert("向左！")
                     break;
                 case 4:
                     // alert("向右！")
                     break;
                 default:
             }*/

            if(endy < starty && callbackFuncUp != undefined)
            {
                callbackFuncUp();
            }

        }, false);
    },
    /**
     * 上滑动监听事件(JS)
     * @param callbackFuncUp function,//向上滑动 回调函数
     * **/
    swipeUp:function (callbackFuncUp) {
        if(callbackFuncUp != undefined)
        {
            SwipeOperateJS.swipeLefRigUpDwn(callbackFuncUp);
        }
    },
    /**
     * 下拉刷新,上拉加载
     * @param funcTop 下拉刷新回调函数
     * @param funcBottom //上拉加载回调函数
     * **/
    upOrDownrefreshJS:function(funcTop, funcBottom) {
        /**上拉加载，下拉刷新
         * bounceType:弹动的类型,如果为多个请用数组
         0: 是向下拖动
         1: 是向上拖动
         startPullCall:开始滑动时触发回调
         downEndCall:上拉或者下拉超过边界执行回调
         upEndCall:上拉或者下拉，超过边界之后，恢复最初状态执行回调
         color:如果超过了该边界显示的背景颜色
         imgSettings:如果超过了该边界，并且想要设置显示的内容包括图片文字则设置该参数
         * appcan.frame.setBounce(bounceType,startPullCall,downEndCall,upEndCall,color,imgSettings) //设置上下弹动效果
         * **/
// alert("dsf");

        /*{
         bounceType:[0,1],
         startPullCall:function(type){
         alert("startPullCall");
         },
         downEndCall:function(type){
         alert("downEndCall");
         },
         upEndCall:function(type){
         alert("upEndCall");
         if (type == 0) {
         // load()
         } else {
         // loadMore();
         }
         },
         color:'#EEEEEE',
         imgSettings: {
         "textColor":"#a1a1a1",
         "pullToReloadText":"下拉刷新",
         "releaseToReloadText":"释放刷新",
         "loadingText":"加载中"
         }
         }
         * */
        appcan.frame.setBounce([0,1],function (data) {
            alert("startPullCall");
        },function (data) {
            alert("downEndCall");
        },function (data) {
            alert("upEndCall");
        },"#a1a1a1",{
            "textColor":"#a1a1a1",
            "pullToReloadText":"下拉刷新",
            "releaseToReloadText":"释放刷新",
            "loadingText":"加载中"
        });

    }
};

/**
 * 时间选择 时间/日期格式转化 使用时先引入moment.js
 * **/
var TimerOperate = {
    /**
     * 时间格式转化
     * @param time ,需要转化的时间，format不传：time为undefined返回当天时间
     * @param format string ,需要转化成的时间格式，若为null或undefined,返回时间戳
     * @param isZero bool;//是否是返回0点0分0秒时间戳，非undefined:是，反之否
     * return 返回format格式的时间或时间戳
     * **/
    timeFormatConvert:function(time,format,isZero) {
        if(time == undefined  && format == undefined && isZero != undefined)
        {
            var date = new Date();
            return date.getTime();
        }
        else if(time == undefined  && format == undefined)
        {
            var date = new Date();
            return (new Date(date.getFullYear(),date.getMonth(), date.getDate(),0,0,0)).getTime();
        }
        else if(time == undefined  && format != undefined)
        {
            time = new Date().getTime();
            return moment(time).format(format);
        }
        else if(time != undefined && time != null && format == undefined && isZero == undefined)
        {
            // return (new Date(time)).getTime();
            // return moment(time).format();
            return moment(time).toDate().getTime();
        }
        else if(time != null && time != '' && time != undefined && format != undefined && format != ''  && format != null)
        {
            // alert(time + "    " + format);
            return moment(time).format(format);
        }
        else if(isZero != undefined)
        {
            var date = new Date(time);
            return (new Date(date.getFullYear(),date.getMonth(), date.getDate(),0,0,0)).getTime();
        }
        else
        {
            return time == null || time == undefined ? '' : time;
        }
        /*alert("YYYY-MM-DD HH:mm:ss");
         alert(moment("2017-07-21 14:25:30", "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss"));
         alert(moment("2017-07-21 14:25:30").format("YYYY-MM-DD HH:mm:ss"));
         alert((new Date("2017-07-21 14:25:30")).getTime());
         alert(moment((new Date("2017-07-21 14:25:30")).getTime()).format("YYYY-MM-DD HH:mm:ss"))
         */
    },
    /**
     * 获取传入时间当月的天数（公历）
     * @param time int;//传入时间戳,不传则默认当前的时间
     * return 获取传入时间当月的天数（公历）
     * **/
    daysNumberofMonth:function(time) {
        var dateGL = time ? new Date(time) : new Date();
        var MM1 = dateGL.getFullYear();
        MM1 < 100 ? MM1 += 1900 : MM1;
        var MM2 = MM1;
        MM1 += "/" + (dateGL.getMonth() + 1);
        MM2 += "/" + (dateGL.getMonth() + 2);
        MM1 += "/1";
        MM2 += "/1";
        return parseInt((Date.parse(MM2) - Date.parse(MM1)) / 86400000);
    },
    /**
     * 获取传入时间的年初到传入时间已经过了多少天（公历）
     * @param time int;//传入时间戳,不传则默认当前的时间
     * return 传入时间的年初到传入时间已经过了多少天
     * **/
    daysNumberofDate:function(time) {
        var dateGL = time ? new Date(time) : new Date();
        return parseInt((Date.parse(dateGL)
            - Date.parse(dateGL.getFullYear() + "/1/1"))
            / 86400000) + 1;
    },
    /**
     * 星期几的数字转化为汉字
     *  @param weekInt number,//星期几的数字
     *  return //星期几的汉字
     * **/
    weekConert:function(weekInt) {
        switch (weekInt)
        {
            case 0:
            {
                return '日'
            }
            case 1:
            {
                return '一'
            }
            case 2:
            {
                return '二'
            }
            case 3:
            {
                return '三'
            }
            case 4:
            {
                return '四'
            }
            case 5:
            {
                return '五'
            }
            case 6:
            {
                return '六'
            }
        }
    },
    /**
     * 获取本周周一和周日的时间戳 对象；或，获取本月的月初的时间戳和月底的时间戳 对象
     * @param time number,//时间戳
     * @param tag number,//0 获取本周周一和周日的时间戳 对象；1 是获取本月的
     * @param type bool,//是否 月初(周一)的时间戳和月底(周日)的时间戳 值为00：00：00和23：59：59 默认true 是
     1 获取本月的月初的时间戳和月底的时间戳 对象
     *
     * return {
       time1:'',//本周一的时间戳或本月初
       time2:'',//本周日的时间戳或本月底
       }
     * **/
    getTimeByRank:function(time,tag = 1,type = true) {

        type = type == undefined ? true : type;

        tag = tag == undefined ? 1 : tag;
        if(time == undefined)
        {
            let d = new Date();
            time = (new Date(d.getFullYear(),d.getMonth(),d.getDate(),0,0,0)).getTime();
        }

        var timeObj = {
            time1:null,//本周一的时间戳或本月初
            time2:null,//本周日的时间戳或本月底
        };
        var oneDayTime = ONE_DAY_TIME;//一天的时间，单位毫秒
        var date = new Date(time);

        switch (tag)
        {
            //获取一周的时间戳
            case 0 :{

                if(date.getDay() != 0)
                {
                    timeObj.time1 = time - oneDayTime * (date.getDay() - 1);
                }
                else
                {
                    timeObj.time1 = time - oneDayTime * 6;
                }
                date = new Date(timeObj.time1);
                if(type){
                    timeObj.time1 = (new Date(date.getFullYear()
                        , date.getMonth()
                        ,date.getDate()
                        ,0,0,0)).getTime();
                    timeObj.time2 = timeObj.time1 + oneDayTime * 7 - 1000;
                }
                else {
                    timeObj.time1 = (new Date(date.getFullYear()
                        , date.getMonth()
                        ,date.getDate()
                        ,date.getHours()
                        ,date.getMinutes()
                        ,date.getSeconds())).getTime();
                    timeObj.time2 = timeObj.time1 + oneDayTime * 6;
                }
                break;
            }
            case 1:
            {
                var year = date.getFullYear();
                var month = date.getMonth();
                if(type){
                    timeObj.time1 = (new Date(year, month,1,0,0,0)).getTime();
                }
                else {
                    timeObj.time1 = (new Date(year, month,1
                        ,date.getHours()
                        ,date.getMinutes()
                        ,date.getSeconds())).getTime();
                }

                if(month == 11)
                {
                    year += 1;
                    month = 0;
                }
                else
                {
                    month += 1;
                }

                if(type){
                    timeObj.time2 = (new Date(year, month,1,23,59,59))
                        .getTime() - oneDayTime;
                }
                else {
                    timeObj.time2 = (new Date(year, month,1
                        ,date.getHours()
                        ,date.getMinutes()
                        ,date.getSeconds())).getTime() - oneDayTime;
                }

                break;
            }
        }

        return timeObj;

    },
    /**
     * 选择日期（原生）
     * @param opt ,0打开日历，1时关闭日历
     * @param func function,选中日期后的回调函数，回传的数据params，
     * func = function(params){
     * }
     *   params = {
    date:{  //返回的日期
        year:,//年
        month:,//月
        day://日
    }
     * **/
    dateSel:function (opt, func) {
        PlatformOperate.verifyPlatform(function () {

            switch (opt)
            {
                case 0:
                {
                    var b = false;
                    document.onclick = function(){
                        if(b)
                        {
                            // alert(1);   //只要是点击页面的任何一个地方，都会弹1.
                            uexCalendarView.close();
                            document.onclick = null;
                            // alert(2);
                        }
                        b = true;
                    };

                    /*onItemClick //点击日期时的监听方法
                     * 返回数据，日期：{
                     date:{  //返回的日期
                     year:,//年
                     month:,//月
                     day://日
                     }
                     */
                    uexCalendarView.onItemClick = function (data) {
                        uexCalendarView.close();
                        if(PlatformOperate.getPlatform(2))
                        {
                            params2.date.year = data.substring(data.indexOf('r') + 4, data.indexOf(',') - 1);
                            params2.date.month = data.substring(data.indexOf('h') + 4, data.indexOf('day') - 3);
                            params2.date.day = data.substring(data.lastIndexOf(':') + 2, data.lastIndexOf('}') - 2);
                        }
                        else
                        {
                            params2.date.year = data.substring(data.indexOf('r') + 2, data.indexOf(','));
                            params2.date.month = data.substring(data.indexOf('h') + 2, data.indexOf('day') - 1);
                            params2.date.day = data.substring(data.lastIndexOf(':') + 1, data.lastIndexOf('}') - 1);
                        }
                        params2.date.year = parseInt(params2.date.year);
                        params2.date.month = parseInt(params2.date.month) - 1;
                        params2.date.day = parseInt(params2.date.day);

                        func&&func(params2);

                    };

                    /* uexCalendarView.open(params) //打开日历
                     * x	Number	是	view距离当前网页左边框的距离(px)
                     y	Number	是	view距离当前网页顶部的距离(px)
                     w	Number	是	view宽度(px)
                     h	Number	是	view高度(px)*/
                    var params = {
                        x:screen.width/6,
                        y:screen.height/4,
                        w:500,
                        h:500
                    }
                    uexCalendarView.open(params);
                    //设置被选中的日期
                    var date = new Date();
                    var params2 = {
                        date:{
                            year:date.getFullYear(),
                            month:date.getMonth() + 1,
                            day:date.getDate()
                        }
                    }
                    uexCalendarView.setSelectedDate(params2);
                    // uexCalendarView.setSelectedDate();
                    break;
                }
                case 1:
                {
                    // close //关闭日历

                    uexCalendarView.close();
                }
            }
        });
    }
};

/**
 * 下载管理器，下载操作！
 * **/
var DownloaderMgr = {
    /**
     * 配置信息
     * **/
    config:{
        downloader:null,//下载器对象
        savePath:"wgts://download/",//保存文件路径 "/widgets/download/文件名.jpg"
        fileNameFixed:null,//若不为null则为使用固定文件名保存
        // savePath:"wgts://download/img" + (new Date()).getTime() + ".jpg",//保存文件路径 "/widgets/download/文件名.jpg"
        // savePath:"/private/var/mobile/Media/DCIM/img" + (new Date()).getTime() + ".jpg",//保存文件路径 "/widgets/download/文件名.jpg"
    },
    /**
     * 下载文件
     * @param serverURL String,//下载文件的地址
     * @param callbackFunc Function,//下载成功时，回调函数 callbackFunc(info)
     * info = {
         fileSize:fileSize,//	要下载的文件大小
         percent:percent,//下载进度百分比 取值为0~100
         status:status,//下载状态 0-下载中 1-下载完成 2-下载发生错误
         filePath:filePath //下载文件的存储路径
       }
     * **/
    downloadFile:function (serverURL,callbackFunc) {
        PlatformOperate.verifyPlatform(function () {
            DownloaderMgr.config.downloader = uexDownloaderMgr.create();
            if(!DownloaderMgr.config.downloader){
                LoadingOperate.toast("失败!");
            }
            else
            {
                var headJson = '{"Content-type":"application/json;charset=utf-8"}';
                var savePath = null
                if(DownloaderMgr.config.fileNameFixed == null)
                {
                    savePath = DownloaderMgr.config.savePath + serverURL.substring(serverURL.lastIndexOf('/') + 1);
                }
                else
                {
                    savePath = DownloaderMgr.config.savePath + DownloaderMgr.config.fileNameFixed;
                }

                if(DownloaderMgr.config.fileNameFixed == null && FileMgrOperate.isFileExistByPath(savePath))
                {
                    callbackFunc({
                        filePath:savePath
                    });
                }
                else
                {

                    // uexDownloaderMgr.setHeaders(DownloaderMgr.config.downloader, headJson);//设置请求头
                    /**
                     * 下载文件
                     *
                     参数名称	参数类型	是否必选	说明
                     downloader	Object	是	由create接口创建的下载对象
                     serverURL	String	是	服务器地址
                     savePath	String	是	本地保存地址
                     mode	Number	是	是否支持断点续传,0:不支持,1:支持
                     cb	Function	是	下载进度回调,详见下**/
                    uexDownloaderMgr.download(DownloaderMgr.config.downloader,
                        serverURL,savePath,1, function (fileSize,percent,status) {

                            /**
                             * 字段名称	类型	是否必选	说明
                             * path	String	是	文件路径.支持"wgt://","wgts://"、"file://"协议
                             mode	Number	是	打开设置,1-可读 2-可写 4-不存在时创建新文件,可累加,如1+2 = 3表示可读可写.
                             * **/
                            // var file = uexFileMgr.open({
                            //     path: DownloaderMgr.config.savePath,
                            //     mode: 3
                            // });
                            // var filePath = uexFileMgr.getFilePath(file);//文件路径
                            // // alert(path);

                            /**
                             * 参数名称	参数类型	是否必选	说明
                             fileSize	Number	是	要下载的文件大小
                             percent	Number	是	下载进度百分比 取值为0~100
                             status	Number	是	下载状态 0-下载中 1-下载完成 2-下载发生错误**/
                            var info = {
                                fileSize:fileSize,
                                percent:percent,
                                status:status,
                                filePath:savePath
                            };

                            switch (info.status) {
                                case 0:
                                    LoadingOperate.toast("下载进度" + info.percent + "%",{duration:0,
                                        position:5,
                                        type:1});
                                    break;
                                case 1:
                                    appcan.window.closeToast();
                                    // 下载完成
                                    // DownloaderMgr.cancelDownload(serverURL);
                                    DownloaderMgr.closeDownloader();
                                    callbackFunc(info);

                                    break;
                                case 2:
                                    LoadingOperate.toast("下载失败");
                                    DownloaderMgr.cancelDownload(serverURL);
                                    DownloaderMgr.closeDownloader();
                                    break;
                            }


                        });

                }

            }
        });
    },
    /**
     * 取消下载
     * @param serverURL,//下载文件的地址
     * **/
    cancelDownload:function (serverURL) {
        PlatformOperate.verifyPlatform(function () {
            /**
             * serverURL	String	是	服务器下载地址
             clearMode	Number	否	默认为0.0-只取消此次下载任务,不清除已经下载的临时文件. 1-取消此次下载任务并清除已经下载的临时文件**/
            uexDownloaderMgr.cancelDownload(serverURL,1);
        });
    },
    /**
     * 关闭下载对象
     * **/
    closeDownloader:function () {
        PlatformOperate.verifyPlatform(function () {
            uexDownloaderMgr.closeDownloader(DownloaderMgr.config.downloader);
        });

    },
};

/**
 * 操作视频 （原生）
 * **/
var MediaMgrOperate = {
    /**
     * 多媒体操作对象配置
     * **/
    config:{
        filePathAuto:null,//录音后的录音文件路径
    },
    /**
     * 录制视频
     * @param leng //录制视频时间长度
     * @param func //录制视频完成回调函数
     * func(info)
     info = {
        result,//	Number	录制结果. 0-录制成功 1-用户取消录制 2-视频录制或者压缩过程发送错误
        path,//	String	仅录制成功时才会有此参数,录制压缩得到的视频文件路径
       }

     * **/
    recordVideo:function (leng,func) {
        // alert("recorde 1");
        PlatformOperate.verifyPlatform(function () {
            // alert("recorde");
            if(func != null && func != undefined)
            {
                //onRecordFinish(info) //录制结束的监听方法
                uexVideo.onRecordFinish = function (info) {

                    /**
                     info = {
                               result,//	Number	录制结果. 0-录制成功 1-用户取消录制 2-视频录制或者压缩过程发送错误
                               path,//	String	仅录制成功时才会有此参数,录制压缩得到的视频文件路径
                           }
                     * **/

                    info = JSON.parse(info);//alert(JSON.stringify(info))
                    if(info.result == 0)
                    {

                        setTimeout(function () {
                            localStorage["videoPath"] = info.path.substring(0,info.path.lastIndexOf('/'));
                        },0);
                        func(info);

                    }

                };
            }

            if(leng == null || leng != undefined)
            {
                leng = 60;
            }

            /*
             参数名称	参数类型	是否必选	说明
             maxDuration	Number	否	视频录制最大时间,单位s(秒)
             qualityType	Number	否	视频分辨率类型,取值为0,1,2,默认为0.0:1920x1080, 1:1280x720, 2:640x480
             bitRateType	Number	否	视频录制时采样率类型,取值为0, 1, 2, 默认为0, 0: 高采样率, 1: 中采样率, 2: 低采样率
             fileType	String	否	输出的视频文件格式,默认为mp4.Android 平台上支持的的视频文件格式有:mp4、3gp; IOS支持的压缩视频文件格式有:mp4,mov*/
            var params = {
                maxDuration:leng,
                qualityType:1,
                bitRateType:1,
                fileType:"mp4"
            };

            uexVideo.record(params);
        });
    },
    /**
     * 播放视频
     * @param func ;各种状态的监听回调方法;若为1时，
     * func = {
     * onPlayerFinish :function,//onPlayerFinish //播放完成后的监听方法
     * onPlayerStatusChange：function，onPlayerStatusChange //播放器状态改变的监听方法
     * onPlayerEndTime：function，onPlayerEndTime //视频播放到endTime 的监听
     * onPlayerClose：function，onPlayerClose //播放器被关闭时的监听方法
     * **/
    playVideo:function (path,func) {

        PlatformOperate.verifyPlatform(function () {

            MediaMgrOperate.closeVideo();

            /*
             uexVideo.onPlayerStatusChange(info) //播放器状态改变的监听方法
             var info = {
             status:
             }
             字段名称	类型	说明
             status	Number	播放器状态 0-暂停中 1-缓冲中 2-播放中 3-发生错误.*/
            uexVideo.onPlayerStatusChange = function (info) {
                // alert("info: " + JSON.stringify(info));
                if(func != null && func != undefined)
                {
                    if(func.onPlayerStatusChange != null && func.onPlayerStatusChange != undefined){
                        /**info = {status:}
                         * status	Number	播放器状态 0-暂停中 1-缓冲中 2-播放中 3-发生错误.
                         * **/
                        func.onPlayerStatusChange(info);
                    }
                }

            };

            //onPlayerFinish //播放完成后的监听方法
            uexVideo.onPlayerFinish = function() {
                // alert("完成");
                if(func != null && func != undefined)
                {
                    if(func.onPlayerFinish != null && func.onPlayerFinish != undefined){
                        func.onPlayerFinish();//无回传参数
                    }
                }
            };

            //onPlayerEndTime //视频播放到endTime 的监听
            uexVideo.onPlayerEndTime = function () {
                // alert("完成endTime");
                if(func != null && func != undefined)
                {
                    if(func.onPlayerEndTime != null && func.onPlayerEndTime != undefined){
                        func.onPlayerEndTime();//无回传参数
                    }
                }

            };

            /*var info = {
                src:,
                currentTime:
            }
            各字段含义如下:

                字段名称	类型	说明
            src	String	视频文件路径
            currentTime	Number	被关闭时视频正在播放的时间.*/
            uexVideo.onPlayerClose = function(info){
                if(func != null && func != undefined)
                {
                    if(func.onPlayerClose != null && func.onPlayerClose != undefined){
                        func.onPlayerClose(info);//回传参数
                    }
                }
            };

            /**
             * openPlayer //打开视频播放器
             src	String	是	播放文件路径. 支持本地路径wgt://,res://,file://和网络路径http://,https://
             startTime	Number	否	视频开始播放时间,单位为s(秒).默认为0.
             endTime	Number	否	视频结束播放时间,单位为s(秒).默认为0.可以用于试看等功能，回调onPlayerEndTime
             autoStart	Boolean	否	是否自动开始.默认为false.
             forceFullScreen	Boolean	否	是否强制全屏,详见下方说明.默认为false.
             showCloseButton	Boolean	否	是否显示关闭按钮,用户可以通过点击此按钮关闭播放器.默认为false.
             showScaleButton	Boolean	否	是否显示缩放按钮,用户可以通过点击此按钮切换全屏/非全屏模式.默认为true.
             width	Number	否	播放器宽度,单位px.默认为屏幕宽度.
             height	Number	否	播放器高度,单位px.默认为屏幕高度.
             x	Number	否	播放器左边距,单位px.默认为0.
             y	Number	否	播放器上边距,单位px.默认为0.
             scrollWithWeb	Boolean	否	普通状态下播放器是否跟随网页滑动.默认为true.
             isAutoEndFullScreen	Boolean	否	全屏状态下播放完成后是否自动切换为正常状态，
             默认false，forceFullScreen参数为false时生效**/
            var param = {
                src:path,
                startTime:0,
                autoStart:true,
                forceFullScreen:false,
                showCloseButton:true,
                showScaleButton:true,
                // width:screen.width,
                height:620,
                x:0,
                y:400,
                scrollWithWeb:false,
                isAutoEndFullScreen:true,
            };
            uexVideo.openPlayer(JSON.stringify(param));
        });
    },
    /**
     * 关闭播放器
     * @param func function,//回调
     * func(info);
     * var info = {
    src:,//String	视频文件路径
    currentTime:,//Number	被关闭时视频正在播放的时间.
    }
     * **/
    closeVideo:function (func) {
        PlatformOperate.verifyPlatform(function () {
            if(func != null && func != undefined)
            {
                uexVideo.onPlayerClose = function (info) {

                    if(func != undefined && func != null)
                    {
                        func(info);
                    }

                };
            }

            uexVideo.closePlayer();
        });
    },
    /**
     * 选择视频
     * @param callbackFunc function,//回调函数
     * **/
    pickVideo:function (callbackFunc) {

        // alert("选择视频1");
        var p = localStorage["videoPath"];
        var path = p == undefined ? "file://" : p == '' ? "file://" : p == null ?  "file://" :  p == 'null' ? "file://" : p;

        // });

        // alert(JSON.stringify(path));
        // uexFileMgr.explorer("/var/mobile/Containers/Data/Application/AA1557D4-27A7-4C60-9014-D673DAE9F9A2/Documents/apps",function(err,path){
        uexFileMgr.explorer(path,function(err,path){
            if(!err){
                callbackFunc({data:[path]});
            }else{
                // alert(err);
            }
        });

        /*
        alert("选择视频1:videoPicker");

         uexVideo.videoPicker();

             uexVideo.onVideoPickerClosed = function(data){
                 /!**回传数据
                  * var data = {
            data:[
             {
                 src :,//选择视频的本地绝对路径
             }
             ...
         ]
         isCancelled:,是否为取消选择,取消为true,其他为false
               }
                  * **!/
                 if(callbackFunc != undefined && data.isCancelled)
                 {
                     callbackFunc(data);
                 }
             };

         uexFileMgr.explorer("/var/mobile/Containers/Data/Application",function(err,path){
         // uexFileMgr.explorer("/var/mobile/Media/DCIM",function(err,path){
             if(!err){
                 alert(path);
             }else{
                 alert(err);
             }
         });

         uexVideo.videoPicker();
         uexVideo.onVideoPickerClosed = function(data){
             alert("sdds:" + JSON.stringify(data));
         };

         alert("选择视频2");*/
    },
    /**
     * 录音，（原生）
     *  *@param startRecord true开始录音，false停止录音
     *@param func录音成功回调函数
     * opId	Number	是	操作ID,在此函数中不起作用,可忽略
     dataType	Number	是	数据类型,详见CONSTENT中Callback dataType数据类型
     data	String	是	文件路径
     **/
    takeAuto:function(startRecord,func) {
        // uexAudio.cbRecord(opId,dataType,data);
        // uexAudio.cbRecord = function(opCode, dataType, data){
        //     alert(data);
        //     autoPath = data;
        // };
        // uexAudio.cbRecord = func;
        // uexAudio.record(2,'20153343443');

        PlatformOperate.verifyPlatform(function () {
            if(startRecord){
                // uexAudio.cbBackgroundRecord = func;
                uexAudio.cbBackgroundRecord = function(opCode, dataType, data){
                    MediaMgrOperate.config.filePathAuto = data;
                    func(opCode, dataType, data);
                };
                uexAudio.startBackgroundRecord(2);
            }
            else
            {

                uexAudio.stopBackgroundRecord();
            }
        });
    },
    /**
     * 播放或关闭录音，（原生）
     *  *@param ctrl 0 开始播放，1 暂停播放，2 重新播播，3 停止播放
     *  @param filePath null时播放录音的音频
     **/
    playAuto:function(ctrl,filePath) {

        PlatformOperate.verifyPlatform(function () {
            if(filePath == null){
                if(MediaMgrOperate.config.filePathAuto == null){
                    DialogOperate.alr2("录音为空");
                    return;
                }
                filePath = MediaMgrOperate.config.filePathAuto;

            }

            switch (ctrl)
            {
                case 0:{
                    //开始播放
                    // alert("filePath:  " + filePath);
                    uexAudio.open(filePath);
                    // alert("ds");
                    uexAudio.play(0);
                    // alert("ds1");
                    break;
                }
                case 1:{
                    //暂停播放
                    // alert("ds2");
                    uexAudio.pause();
                    break;
                }
                case 2:{
                    //重新播播
                    uexAudio.replay();
                    break;
                }
                case 3:{
                    //停止播放
                    uexAudio.stop();
                    break;
                }
            }
        });
    },
    /**
     * 扫描二维码和条形码,
     * func 扫描成功，回调函数 func(data);data为二维码扫描成功后的数据
     * 回传参数
     *
     * **/
    scaner:function(func) {
        /*uexScanner.cbOpen = function(opCode, dataType, data){
            alert(data);
        };*/
        PlatformOperate.verifyPlatform(function () {
            /**参数名称	参数类型	是否必选	说明
             opId	Number	是	操作ID,open失败时为1,正常时为0,失败时一般是用户禁止了APP摄像头权限
             dataType	Number	是	参数类型详见CONTANT中CallbackdataType数据类型
             data	 扫描到的数据
             data = {
          code:, //二维码扫描得到的数据
          type:，//二维码类型
          }
             **/
            uexScanner.cbOpen = function(opId,dataType,data)
            {
                if(opId == 0)
                {
                    func(JSON.parse(data));
                }
                else
                {
                    LoadingOperate.toast("失败！请检查摄像头权限！");
                }

            }

            uexScanner.open();
        });
    }
};

/**
 * file代表系统路径例如file://sdcard

 wgt://代表应用空间，即应用下载文件或保存文件的地方。Android上对应file://sdcard/widgetone/app/[widgetid]/路径下

 res://对应的资源路径，这个是只读的，即 应用安装路径的asset路径下的wgtres文件夹
 * **/
/*var unzipPathAndroid = "/storage/emulated/0/widgetone/apps/001/unzip";//android解压路径
var unzipPathAndroid = "wgt://unzip";//android解压路径
var unzipPathIOS = "/storage/emulated/0/widgetone/apps/001/unzip";//苹果解压路径*/
/**
 * 文件操作 （原生）,打开文件（office类的等文件），解压文件，删除文件或文件夹
 * **/
var FileMgrOperate = {
    /**
     * 打开文档
     * @param path string/array ，//路径，可以是数组，也可以是字符串；图片可以放多张，其他文件只允许一个
     * **/
    openDocument:function(path,callbackFunc) {
        PlatformOperate.verifyPlatform(function () {
            if(!(path.constructor == Array))
            {
                path = [path];
            }

            var verfyStr = path[0];
            if(typeof(verfyStr) == 'object')
            {
                verfyStr = verfyStr.src;
            }

            // alert(JSON.stringify(path));
            if(verfyStr.indexOf('.png') > 0 || verfyStr.indexOf('.jpg') > 0)
            {
                // alert(path[0]);
                ImgOperate.openBrowserImg(path,callbackFunc);
            }
            else if(verfyStr.indexOf('.mp4') > 0)
            {
                MediaMgrOperate.playVideo(verfyStr);
            }
            else if(verfyStr.indexOf('.mp3') > 0)
            {
                playAuto(0,verfyStr);
            }
            else if(verfyStr.indexOf('.htm') > 0)
            {
                var href = verfyStr;
                var offsetHeight = document.getElementById("Header").offsetHeight;
                if(PlatformOperate.getPlatform(2))
                {
                    offsetHeight = offsetHeight / 2;
                }

                BrowerOperate.openPageBrower(href,offsetHeight);
                if(callbackFunc != undefined && callbackFunc != null)
                {
                    BrowerOperate.getPageTitle(function (title) {
                        callbackFunc(title);
                    });

                }

            }
            else
            {
                FileMgrOperate.readerDocument(verfyStr,callbackFunc);
            }
        });
    },
    /**
     * 打开文件浏览器（原生）
     * error	Number	是否发生错误. 未发生错误时error为0, 发生错误或者用户取消选择时error为非0值
     path	String	用户选择的文件的路径;若用户取消选择,则path为null
     * @param func（error，path） 选择文件成功后的回调函数
     * **/
    selectFiles:function (func) {
        PlatformOperate.verifyPlatform(function () {
            // alert("verifyPlatform");
            uexFileMgr.explorer("/sdcard/",func);
        });

    },
    /**
     * 搜索指定文件夹下的文件 （原生）
     * @param path string;//搜索文件夹路径
     * @param func（err,result）func;//搜索成功回调函数
     * err	Number	为0时表示成功,非0时表示失败
     result	Array	搜索操作结果,所有符合条件的路径构成的数组;若没有路径符合搜索条件,则为一个空数组
     * **/
    searchFiles:function (path,func) {
        PlatformOperate.verifyPlatform(function () {
            /*
            path	是	String	目标文件夹路径
             flag	否	Number	搜索设置 见下 不传默认为0
             keywords	否	Array	要搜索的文件名关键字 不传时搜索所有
             suffixes	否	Array	要搜索的文件后缀名 不传时搜索所有

             1	匹配文件夹 也搜索符合条件的文件夹(有设置suffixes时,此项设置失效)
             2	精确匹配 只搜索文件名恰为keyword的文件
             4	递归搜索 搜索目标文件夹及其子文件夹

             var param = {
             path:unzipPath(),
             flag:1,
             keywords:[],
             suffixes:[]
             };
             * */

            // alert(unzipPath());
            if(param == null){
                param = {
                    path:path,
                    flag:1
                };
            }

            uexFileMgr.search(JSON.stringify(param),func)
        });
    },
    /**
     * 文档阅读Document阅读器,是用来阅读Office文件的,包括PPT幻灯片,Excel表格,.doc或.docx文档,以及txt,pdf格式文件的. （原生）
     * @param documentPath 路径
     * @param callbackFunc //若是网络地址则可以传入下载完成的回调函数，反之不需要、传了也无效
     * **/
    readerDocument:function (documentPath,callbackFunc){
        PlatformOperate.verifyPlatform(function () {
            if(documentPath.indexOf("http") == 0 )
            {
                DownloaderMgr.downloadFile(documentPath,function (info) {
                    //openDocumentReader //打开阅读器
                    if(callbackFunc != undefined)
                    {
                        callbackFunc(info);
                    }
                    uexDocumentReader.openDocumentReader(info.filePath);
                });
            }
            else
            {
                //openDocumentReader //打开阅读器
                uexDocumentReader.openDocumentReader(documentPath);
            }

        });
    },
    /**
     * 解压文件（原生）
     * error	Number	压缩结果，0-成功，非0-失败解压
     * @param func（error） 选择文件成功后的回调函数
     * @param srcPath	String	是	要解压缩的文件路径,路径协议详见CONSTANT中PathTypes
     * @param password	String	是	解压密码,为null没有解压密码
     * **/
    unzip:function (srcPath, func, password) {
        PlatformOperate.verifyPlatform(function () {
            var path = unzipPath();

            if(password == null)
            {
                /*srcPath	String	是	要解压缩的文件路径,路径协议详见CONSTANT中PathTypes
                 zippedPath	String	是	解压缩后的文件路径,路径协议详见CONSTANT中PathTypes
                 cb	Function	否	回调函数*/
                uexZip.unzip(srcPath,path,func);
            }
            else
            {
                /*srcPath	String	是	要解压缩的文件路径,路径协议详见CONSTANT中PathTypes
                 zippedPath	String	是	解压缩后的文件路径,路径协议详见CONSTANT中PathTypes
                 password	String	是	解压密码
                 cb	Function	否	回调函数*/
                uexZip.unzipWithPassword(srcPath,path,password,func);
            }
        });
    },
    /**
     * uexFileMgr.getFileSizeByPath(params,cb) //获取文件大小
     *@param path string， 文件路径
     * @param func function ， 成功回调函数
     * error	Number	为0表示操作成功,非0时表示操作失败
     info	Object	操作获取到的结果
     info = var info = {
    unit:,//String,文件大小单位
    data://Number,文件大小
},
     * func = function(err,info){}
     参数名称	参数类型	是否必选	说明
     param	String	是	param是字典结构json字符串,详情见下
     cb	Function	是	操作结束后,会调用此函数,函数参数说明见下
     var params = {
    path:,
    unit:
}
     path	String	是	文件或文件夹路径,支持wgt://, wgts://, file://协议路径,参考协议
     unit	String	否	文件大小单位,默认为"B",取值范围参考unit
     *
     */
    getFileSizeByPath:function (path,func) {
        var params = {
            path:path,
            unit:"KB",
        }
        uexFileMgr.getFileSizeByPath(params,func)
    },
    /**
     * deleteFileByPath(path) //根据路径删除文件
     * @param path string,//文件路径
     */
    deleteFileByPath:function (path) {
        uexFileMgr.deleteFileByPath(path);
    },
    /**
     * deleteFolderByPath(path) //根据路径删除文件夹及子文件
     * @param pathFolder string,//文件夹路径
     */
    deletefolderByPath:function (pathFolder) {
        // uexFileMgr.deleteFileByPath(path);
        // uexFileMgr.getFileListByPath(pathFolder)
        // var path = "wgt://"
        var path = pathFolder;
        var result = uexFileMgr.getFileListByPath(path);
        /* result.values[0].nameValuePairs : {
         fileName:,
         filePath:,
         fileType:
         }
         字段名称	类型	说明
         fileName	String	文件名
         filePath	String	文件路径
         fileType	Number	类型.0-文件 1-文件夹
         示例:
         * */
        // alert(JSON.stringify(result));
        // alert(JSON.stringify(result.values[0].nameValuePairs.filePath));
        var fileInfo = null;
        for(var i = 0; i < result.values.length; i++)
        {
            fileInfo = result.values[i].nameValuePairs;
            if(fileInfo.fileType == 1)
            {
                setTimeout(function () {
                    FileMgrOperate.deletefolderByPath(fileInfo.filePath);
                },0);
            }
            else
            {
                FileMgrOperate.deleteFileByPath(fileInfo.filePath);
            }
        }

    },
    /**
     * 文件是否存在
     * @param filePath string,//文件路径
     * return true;//true存在，false不存在
     * **/
    isFileExistByPath:function (filePath) {
        return uexFileMgr.isFileExistByPath(filePath);
    },
    /**
     * 读取文件文件数据流
     * @param path,//文件路径
     * @param callbackFunc,//回调函数，callbackFunc(data);data为文件数据
     * **/
    readFileData:function (path,callbackFunc) {
        /**
         * uexFileMgr.open(param)
         * var param = {
    path:,
    mode:
}
         * path	String	是	文件路径.支持"wgt://","wgts://"、"file://"协议
         mode	Number	是	打开设置,1-可读 2-可写 4-不存在时创建新文件,可累加,如1+2 = 3表示可读可写.
         * **/
        var file = uexFileMgr.open({
            path: path,
            mode: 3
        });

        /**
         * uexFileMgr.readFile(file,len,flag,cb)
         *
         参数名称	参数类型	是否必选	说明
         file	String	是	uexFile对象file
         len	Number	是	字节数,传-1表示读取全部内容
         flag	Number	是	读取设置(详见下)
         cb	Function	是	读取结束后,会调用此函数,函数参数说明见下
         flag是一个枚举值,将所需设置对应的值传入即可.
         同时需要多种设置时,应将设置对应的flag相加后再传入.
         不需要这些额外设置时,flag请传0.**/
        uexFileMgr.readFile(file, -1,0,function(error,data){
            if(!error){
                // alert(data);
                if(callbackFunc != null && callbackFunc != undefined)
                {
                    callbackFunc(data);
                }
            }else{
                DialogOperate.alr2("读取失败!");
            }

        });

    }
};

/**
 * 地理定位操作 （原生/Js）
 * **/
var LocationOperate ={
    /**
     * 上一次定位数据
     * **/
    locationData:LocalStoreOperate.getData("location"),
    /**
     * 得到定位
     * * @param funcChange function,//地理位置变化时回调 funcChange(json),//json = json = {
                                lat:'纬度',
                                log:‘经度’
                            }
     * @param func，（可funct以不传入）回调函数判断是否打开成功，成功时回调 func (json)，此获取地址详细信息
     *@param isPrompt 是否显示‘正在定位.............’ 不传（undefined）显示，传入不显示
     * json = {
 err:,
  addressInfo:
 }
     *
     参数名称	类型	说明
     err	Number	0表示获取成功,非0表示获取失败
     addressInfo	Json	获取成功时的具体地址信息,flag非1时,返回地址名称字符串;为1时,返回Json对象,形式见下:

     addressInfo = {
    "formatted_address": "北京市海淀区海淀中街15号",
    "location": {
        "lat": 39.983197,
        "lng": 116.317383
    },
    "addressComponent": {
        "province": "北京市",
        "street_number": "15号",
        "district": "海淀区",
        "street": "海淀中街",
        "city": "北京市"
    }
}
     * func (error, data) {
      if(!error){
        alert(JSON.stringify(data));
      }else{
        alert(error);
      }
    }**/
    getLocation:function (func,funcChange,isPrompt) {
        PlatformOperate.verifyPlatform(function () {

            /*type	String	否	指定坐标系类型,"wgs84":采用世界标准经纬度坐标;"bd09":采用百度地图的经纬度坐标;"gcj02":采用高德地图的经纬度坐标.不传,iOS默认返回高德地图的经纬度坐标,Android默认返回百度地图的经纬度坐标
             callBackFunction（error）	Function	是	回调函数,返回打开定位功能是否成功
             error	Number	是	为0时,打开定位成功;非0时,打开失败*/
            // uexLocation.openLocation(type,callBackFunction);

            /* uexLocation.onChange(lat, log); //设备位置变化的监听方法
             uexLocation.onChange = function(lat, log)
             lat	Number	是	纬度
             log	Number	是	经度
             */
            // alert("打开地理定位");
            //打开地理定位
            uexLocation.openLocation("bd09",function (err) {
                if(isPrompt == undefined)
                {
                    LoadingOperate.toast("正在定位......");
                }
                // alert("err:  " + err + "  err ："  + err);
                if(!err)
                {
                    uexLocation.onChange = function (lat,log) {
                        // alert("完成");
                        LocationOperate.closeLocation();
                        // localStorage["isOpenLocation"] = 1;//打开
                        // alert("lat:  " + lat + "  log ："  + log);
                        var location = {
                            lat:lat,
                            log:log
                        }


                        if(funcChange != null && funcChange != undefined)
                        {
                            var json = {
                                lat:lat,
                                log:log
                            };
                            if(funcChange != null && funcChange != undefined)
                            {
                                funcChange(json);
                            }

                        }

                        if(func != null && func != undefined)
                        {
                            /**latitude	Number	是	纬度
                             longitude	Number	是	经度
                             type	String	否	指定传入经纬度所采用坐标系类型,"wgs84":采用世界标准经纬度坐标;"bd09":采用百度地图的经纬度坐标;"gcj02":采用高德地图的经纬度坐标.不传,iOS默认采用世界标准的经纬度坐标,Android默认采用百度地图的经纬度坐标
                             flag	Number	是	值为1时返回地址详情(JSON格式), 非 1 时返回地址名称
                             * **/
                            var params = {
                                latitude: lat,
                                longitude: log,
                                type: "bd09",
                                flag:1
                            };

                            uexLocation.getAddressByType(params, function (err,addressInfo) {
                                var jsonObj = {
                                    err:err,//错误原因
                                    addressInfo:addressInfo,//地址信息
                                    lat:location.lat,
                                    log:location.log
                                };

                                LocalStoreOperate.setData("location",jsonObj);

                                if(func != null && func != undefined)
                                {
                                    func(jsonObj);
                                }

                            });
                        }
                    };
                }
                // else if(localStorage["isOpenLocation"] != 1)
                else
                {
                    // alr2("请为app授予定位权限");
                    if(isPrompt == undefined)
                    {
                        LocationOperate.isStartLocationService();
                    }
                }

            });

        });
    },
    /**
     * 得到定位 不显示提示信息
     * **/
    getLocationHide:function (func,funcChange) {
        /* if(funcChange == undefined)
         {
             funcChange = undefined;
         }*/
        LocationOperate.getLocation(func,funcChange,true);
    },
    /**
     * 关闭定位
     * **/
    closeLocation:function () {
        PlatformOperate.verifyPlatform(function () {
            uexLocation.closeLocation();
        });
    },
    /**
     * 获取逆地址（地理地址）
     * @param location,//位置location={lat:'纬度',log:'经度'}
     * @param callbackFunc,//回调函数
     * 成功时回调 callbackFunc (json)，此获取地址详细信息
     *json = {
 err:,
  addressInfo:
 }
     *
     参数名称	类型	说明
     error	Number	0表示获取成功,非0表示获取失败
     addressInfo	Json	获取成功时的具体地址信息,flag非1时,返回地址名称字符串;为1时,返回Json对象,形式见下:

     addressInfo = {
    "formatted_address": "北京市海淀区海淀中街15号",
    "location": {
        "lat": 39.983197,
        "lng": 116.317383
    },
    "addressComponent": {
        "province": "北京市",
        "street_number": "15号",
        "district": "海淀区",
        "street": "海淀中街",
        "city": "北京市"
    }
}
     * func (error, data) {
      if(!error){
        alert(JSON.stringify(data));
      }else{
        alert(error);
      }
    }
     * **/
    getGeoAddress:function (loaction,callbackFunc) {
        PlatformOperate.verifyPlatform(function () {
            /**latitude	Number	是	纬度
             longitude	Number	是	经度
             type	String	否	指定传入经纬度所采用坐标系类型,"wgs84":采用世界标准经纬度坐标;"bd09":采用百度地图的经纬度坐标;"gcj02":采用高德地图的经纬度坐标.不传,iOS默认采用世界标准的经纬度坐标,Android默认采用百度地图的经纬度坐标
             flag	Number	是	值为1时返回地址详情(JSON格式), 非 1 时返回地址名称
             * **/
            var params = {
                latitude: loaction.lat,
                longitude: loaction.log,
                type: "bd09",
                flag:1
            };
            uexLocation.getAddressByType(params, function (err,addressInfo) {
                var jsonObj = {
                    err:err,//错误原因
                    addressInfo:addressInfo,//地址信息
                }
                if(callbackFunc != null && callbackFunc != undefined)
                {
                    callbackFunc(jsonObj);
                }
            });
        });
    },
    /**
     * 是否开启位置服务
     * **/
    isStartLocationService:function () {
        var params = {
            setting:"GPS"//位置服务功能
        };
        /** data	true开启,false未开启**/
        uexDevice.isFunctionEnable(JSON.stringify(params), function(data) {
            if (data) {
                // alert('已开启');
            } else {
                // alert('未开启');
                DialogOperate.alrBtn22("请开启位置服务",function () {

                    uexDevice.openSetting(JSON.stringify(params));
                });
            }
        });
    },
    /**
     * 地理定位 （JS）
     * @param open为true就是打开定位，false就是关闭定位
     * @param func，回调函数判断是否打开成功，成功时回调 func (error, data)，
     * func (error, data) {
      if(!error){
        alert(JSON.stringify(data));
      }else{
        alert(error);
      }
    }
     * **/
    getLocationJS:function (func) {
        if (navigator.geolocation) {alert("定位");
            navigator.geolocation.getCurrentPosition((position) => {alert(JSON.stringify(position));
                func(position);
            }, (error) => {
                alert("失败");
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert("定位失败,用户拒绝请求地理定位");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        // alert("定位失败,位置信息是不可用");
                        alert("定位失败,请为app打开定位权限");
                        break;
                    case error.TIMEOUT:
                        alert("定位失败,请求获取用户位置超时");
                        break;
                    default: alert("请检查是否打开定位权限！");
                }
            });
        }
        else {
            alert("不支持定位");
        }
    }
};

/**
 * 加载百度地图（js/原生，原生：baiduGeoMapCtrlNative）
 * **/
var BaiduGeoMapCtrl = {
    /**
     * 初始化地图所需配置数据
     */
    config:{
        map:null,//BMap.Map,百度地图实例
        idTag:'allmap',//显示地图区的标签id ,不允许自定义标签id
        location:{ //地图位置
            log:113.312213, //经度
            lat:23.147267,//纬度
        },
        markerArr:[],/*标注数据列,数据格式：
         var markerArrs = [
         { title: "广州火车站", location: {log:113.264531,lat:23.157003}, address: "广东省广州市广州火车站", tel: "12306",html:null },
         { title: "广州塔（赤岗塔）", location: {log:113.330934,lat:23.113401}, address: "广东省广州市广州塔（赤岗塔） ", tel: "18500000000",html:null },
         { title: "广州动物园", location: {log:113.312213,lat:23.147267}, address: "广东省广州市广州动物园", tel: "18500000000",html:null },
         { title: "天河公园", location: {log:113.372867,lat:23.134274}, address: "广东省广州市天河公园", tel: "18500000000",html:null }

         ];*/

        infos:[],//弹出气泡窗口
        markersObjLst:[],//标注对象列
    },
    /**
     * 添加script js
     * **/
    loadJScript:function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://api.map.baidu.com/api?v=2.0&ak=C93b5178d7a8ebdb830b9b557abce78b&callback=BaiduGeoMapCtrl.init";
        document.body.appendChild(script);
    },
    /**
     * 初始化地图
     * **/
    init:function () {
        var map = null;
        if(BaiduGeoMapCtrl.config.map == null)
        {
            map = new BMap.Map(BaiduGeoMapCtrl.config.idTag); // 创建Map实例
        }
        else
        {
            map = BaiduGeoMapCtrl.config.map;
        }

        var point = new BMap.Point(BaiduGeoMapCtrl.config.location.log, BaiduGeoMapCtrl.config.location.lat); // 创建点坐标
        // map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        // map.centerAndZoom(point,15);
        map.centerAndZoom(point, 13);   // 初始化地图,设置中心点坐标和地图级别。
        map.enableScrollWheelZoom();                 //启用滚轮放大缩小

        //添加标注
        {
            var markerArr =  BaiduGeoMapCtrl.config.markerArr;

            // point[0] = new window.BMap.Point(113.264531,23.157003); //循环生成新的地图点
            for(var i = 0; i < markerArr.length; i++)
            {
                var marker = new window.BMap.Marker((new window.BMap.Point(markerArr[i].location.log,markerArr[i].location.lat))); //按照地图点坐标生成标记

                // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                var label = new window.BMap.Label(markerArr[i].title, { offset: new window.BMap.Size(20, -60) });
                label.setStyle({ //给label设置样式，任意的CSS都是可以的

                    // "color":"red", //颜色

                    "fontSize":"50px", //字号

                    // "border":"0", //边

                    // "height":"120px", //高度

                    // " width":"125px", //宽

                    // "textAlign":"center", //文字水平居中显示

                    // "lineHeight":"120px", //行高，文字垂直居中显示

                    // "background":"url(http://cdn1.iconfinder.com/data/icons/CrystalClear/128x128/actions/gohome.png)", //背景图片，这是房产标注的关键！

                    // "cursor":"pointer"

                });

                var myicon = new window.BMap.Icon(
                    // '../../images/point.png', // 图片
                    'http://api.map.baidu.com/img/markers.png',
                    new BMap.Size(66,100), // 视窗大小
                    {
                        imageSize: new BMap.Size(144,1292), // 引用图片实际大小
                        imageOffset:new BMap.Size(0, -1094)  // 图片相对视窗的偏移
                    }
                );
                // var marker = new BMap.Marker(point,{icon:myicon});
                marker.setLabel(label);
                marker.setIcon(myicon);
                BaiduGeoMapCtrl.config.markersObjLst.push(marker);
                map.addOverlay(marker);//添加标注

                // BaiduGeoMapCtrl.config.infos.push(info);
                BaiduGeoMapCtrl.addClickHandler(i,marker);

                /*markers[i].addEventListener("click", function (e) {
                    // alert("e");alert(e.target);

                    // var p = e.target;
                    // var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                    // var infoWindow = new BMap.InfoWindow(info,opts);  // 创建信息窗口对象
                    // map.openInfoWindow(infoWindow,point); //开启信息窗口

                    // this.openInfoWindow(info);
                });*/
            }

        }

        BaiduGeoMapCtrl.config.map = map;
    },
    /**
     * 加载百度地图
     * @param location json,//地图位置
     * location = {
        log:int,//经度
        lat:int,//纬度
       }
     @param markerArr json,//弹出气泡html数组
     markerArr = [{
     title: "广州火车站",//显示标志
      location: {log:113.264531,lat:23.157003},//地图位置
      html:null,//弹出气泡信息
     }]
     * **/
    load:function (location,markerArr) {

        if(location != null || location != undefined){
            BaiduGeoMapCtrl.config.location = location;
        }
        if(markerArr != null || markerArr != undefined)
        {
            BaiduGeoMapCtrl.config.markerArr = markerArr;
            // console.info("BaiduGeoMapCtrl.config.markerArr: ",markerArr);
        }
        // window.onload = BaiduGeoMapCtrl.loadJScript;  //异步加载地图 window.onload :页面加载完立马触发
        BaiduGeoMapCtrl.loadJScript();
    },
    /**
     * 添加冒泡（marker）标签点击事件
     * **/
    addClickHandler:function(infoId,marker){
        marker.addEventListener("click",function(e){
            /*alert(JSON.stringify(BaiduGeoMapCtrl.config.markerArr[infoId]));
            var fourOpts = {
                width:1100,
                height:1200
            };*/

            var fourOpts = {
                width:500,
                height:1500
            };
            this.openInfoWindow(new window.BMap.InfoWindow(BaiduGeoMapCtrl.config.markerArr[infoId].html,fourOpts));
            // this.openInfoWindow(BaiduGeoMapCtrl.config.infos[infoId]);
        });
    },
    /**
     * 根据地点和地址搜索，跳动显示搜索到的位置
     * @param data string,地点或地址
     */
    search:function (data) {
        var mArr = BaiduGeoMapCtrl.config.markerArr;
        for(var i = 0; i < mArr.length; i++){
            if(mArr[i].title.indexOf(data) > -1 || mArr[i].address.indexOf(data) > -1)
            {
                // alert("yes " + i);
                BaiduGeoMapCtrl.config.markersObjLst[i].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

            }
            else
            {
                // alert("no " + i);
                BaiduGeoMapCtrl.config.markersObjLst[i].setAnimation(null); //取消动画
            }
        }

    },
    /**
     * 打开冒泡（marker）对话框
     * **/
    openInfo:function (content,e, opts) {

        // alert("content:" + content);
        BaiduGeoMapCtrl.config.map.openInfoWindow(BaiduGeoMapCtrl.config.infos[0]);
        // var p = e.target;
        // var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        // var infoWindow = new BMap.InfoWindow(content + "",opts);  // 创建信息窗口对象
        // BaiduGeoMapCtrl.config.map.openInfoWindow(infoWindow,point); //开启信息窗口
    },

    /**
     * 加载百度地图（原生）
     * @param ctrl int ;0打开地图，1关闭地图,2设置地图的中心点,3添加标注,4更新标注
     * * @param json json,//地图位置,若ctrl = 0,
     * json = {
        log:int,//经度
        lat:int,//纬度
       }*
     若 ctrl = 2
     id	String	否	唯一标识符,不传时插件随机生成
     longitude	Number	是	经度
     latitude	Number	是	纬度
     icon	String	否	标注图标路径,支持类型:"res://""http://"
     bubble	String	否	自定义弹出气泡
     title	String	是	自定义弹出气泡标题
     bgImage	String	否	自定义弹出气泡背景图片,格式:res://btn.png
     json=[
     {
     id:,
     longitude:,
     latitude:,
     icon:,
     bubble:{
          title:,
          bgImage:
     }
 }
     ]，
     若ctrl = 4,
     json={
    id:,
    longitude:,
    latitude:,
    icon:,
    bubble:{
        title:,
        bgImage:
    }
     * @param func function ;打开地图后的回传参数
     * **/
    baiduGeoMapCtrlNative:function(ctrl, json, func) {
        switch (ctrl)
        {
            case 0: {
                /*
                 x	Number	是	x坐标
                 y	Number	是	y坐标
                 width	Number	是	地图宽度
                 height	Number	是	地图高度
                 longitude	Number	是	地图中心点经度
                 latitude	Number	是	地图中心点纬度
                 callbackFunction	Function	否	地图打开后的回调
                 x,y,width,height 的单位均为px
                 (x,y)表示地图左上角的坐标
                 uexBaiduMap.open(x,y,width,height,longitude,latitude, callbackFunction)
                  */

                uexBaiduMap.open(0,0,screen.width,screen.height,json.log,json.lat, func);
                uexBaiduMap.setZoomEnable(1);//开启或关闭缩放，0-关闭,1-开启
                uexBaiduMap.setRotateEnable(1);////开启或关闭旋转，0-关闭,1-开启
                uexBaiduMap.setCompassEnable(1);//开始或关闭指南针，0-关闭,1-开启
                uexBaiduMap.setScrollEnable(1); //开启或关闭平移，0-关闭,1-开启
                /* uexBaiduMap.addMarkersOverlay(json);//添加标注
                var json=[
                    {
                        id:,
                        longitude:,
                        latitude:,
                        icon:,
                        bubble:{
                            title:,
                            bgImage:
                        }
                    }
                ]
                id	String	否	唯一标识符,不传时插件随机生成
                longitude	Number	是	经度
                latitude	Number	是	纬度
                icon	String	否	标注图标路径,支持类型:"res://""http://"
                bubble	String	否	自定义弹出气泡
                title	String	是	自定义弹出气泡标题
                bgImage	String	否	自定义弹出气泡背景图片,格式:res://btn.png
            */
                break;
            }
            case 1: {
                //关闭地图
                uexBaiduMap.close();
                break;
            }
            case 2: {
                //设置地图的中心点
                uexBaiduMap.setCenter(json.log,json.lat);
                break;
            }
            case 3:
            {
                /**
                 * 添加标注
                 * @param json ,标注数组
                 * var json=[
                 {
                 id:,
                 longitude:,
                 latitude:,
                 icon:,
                 bubble:{
                      title:,
                      bgImage:
                 }
             }
                 ]
                 * 添加到地图的标注信息的集合.该字符串为JSON格式.如下:**/
                uexBaiduMap.addMarkersOverlay(json);
                break;
            }
            case 4 : {
                /**
                 * uexBaiduMap.setMarkerOverlay(makerId,makerInfo);
                 makerId	String	是	唯一标识符
                 makerInfo	String	是	标注信息,json格式，形式见下：
                 var makerInfo={
    longitude:,
    latitude:,
    icon:,
    bubble:{
        title:,
        bgImage:
    }
}
                 longitude	Number	是	标注经度
                 latitude	Number	是	标注纬度
                 icon	String	否	标注图标
                 bubble	Object	是	气泡设置
                 title	String	是	气泡标题
                 bgImage	String	否	气泡背景图片
                 示例
                 * **/
                uexBaiduMap.setMarkerOverlay(json.id,json);
                break;
            }
        }
    }
};

/**
 * 极光推送 （原生）
 * **/
var JPush = {
    /**
     * 配置信息
     *@param tags 极光推送标签；为安装了应用程序的用户打上标签，其目的主要是方便开发者根据标签，
     来批量下发 Push 消息。 可为每个用户打多个标签。 举例： game, old_page, women
     * @param alias 极光推送别名;每个用户只能指定一个别名。 同一个应用程序内，
     对不同的用户，建议取不同的别名。这样，尽可能根据别名来唯一确定用户。
     * @param ;客户端初始化 JPush 成功后，JPush 服务端会分配一个 Registration ID，
     作为此设备的标识（同一个手机不同 APP 的 Registration ID 是不同的）。
     开发者可以通过指定具体的 Registration ID 来进行对单一设备的推送。
     * **/
    config:{
        alias:null,//极光推送别名,
        tags:["tag"],//极光推送标签 array
        registrationID:null,//JPush 服务端会分配一个 Registration ID 注册id
        // registrationID:uexJPush.getRegistrationID(),//取得应用程序对应的 RegistrationID
        receiveMessageFunc:null,//收到了自定义消息处理回调函数
        receiveNotificationFunc:null,//接收到到通知的回调函数
        receiveNotificationOpenFunc:null,//点击打开通知的回调函数
        receiveConnectionChangeFunc:null,//连接状态变化回调函数
        receiveNotPushFunc:null,//禁止推送时回调函数
    },
    /**
     * setAlias //设置别名,别名:用于给某特定用户推送消息。别名，可以近似地被认为，是用户帐号里的昵称。
     * @param alias	 string,//是	,传入参数 //String 设置的别名
     @param callBackFunction	Function	是	回调函数,callBackFunction(error,data)
     error	Number	是	0-成功,非0-失败 具体失败代码解释见文末附录
     data	Object	是	回调数据,形式见下:
     **/
    setAlias:function (callbackFunction,alias) {
        JPush.config.alias = alias == undefined || alias == null ? JPush.config.alias : alias;
        uexJPush.setAlias({alias:JPush.config.alias}, function (err,info) {
            /**
             * info = {
            alias://设置的别名
              };
             * **/
            if(err == 0)
            {

                if(callbackFunction != undefined && callbackFunction != null)
                {
                    callbackFunction(info);
                }
            }
            else
            {
                LoadingOperate.toast("别名设置失败");
            }

        });
    },
    /**
     * 设置标签,标签:用于给某一群人推送消息。标签类似于博客里为文章打上 tag ，即为某资源分类。
     * @param tags string,//设置标签
     * @param callbackFunction function,//回调函数 callbackFunction（error，data）
     error	Number	是	0-成功,非0-失败 具体失败代码解释见文末附录
     data	Object	是	回调数据，形式见下:
     * **/
    setTags:function (callbackFunction,tags) {
        JPush.config.tags = tags == undefined || tags == null ? JPush.config.tags : tags;
        JPush.config.tags = JPush.config.tags.constructor == Array ? JPush.config.tags : [JPush.config.tags];
        uexJPush.setTags({tags:JPush.config.tags}, function (err,info) {
            /**
             * info = {
            tags://设置的标签
              };
             * **/
            if(err == 0)
            {
                if(callbackFunction != undefined && callbackFunction != null)
                {
                    callbackFunction(info);
                }
            }
            else
            {
                LoadingOperate.toast("标签设置失败");
            }
        });
    },
    /**
     * 同时设置别名与标签, 执行完成后回调callbackFunction
     * @param json	Object	是	传入参数
     json={
    alias:,//string 设置的别名
    tags:,//Set<String> 设置的标签
    }
     @param callBackFunction	Function	是	回调函数 callbackFunction（error，data）
     error	Number	是	0-成功,非0-失败 具体失败代码解释见文末附录
     data	Object	是	回调数据,形式见下:
     * **/
    setAliasAndTags:function (callbackFunction,json) {
        PlatformOperate.verifyPlatform(function () {
            var aTJson = {
                tags:json != undefined ? json.tags != undefined ? json.tags : JPush.config.tags : JPush.config.tags,
                alias:json != undefined ? json.alias != undefined ? json.alias : JPush.config.alias : JPush.config.alias
            };
            aTJson.tags = aTJson.tags.constructor == Array ? aTJson.tags : [aTJson.tags];
            JPush.config.tags = aTJson.tags;
            JPush.config.alias = aTJson.alias;
            uexJPush.setAliasAndTags(aTJson, function (err,info) {
                /**
                 * info = {
                alias://设置的别名
                tags://设置的标签
                };**/
                if(err == 0)
                {
                    if(callbackFunction != undefined && callbackFunction != null)
                    {
                        // alert("info:" + JSON.stringify(info));
                        callbackFunction(info);
                    }
                    // uexJPush.resumePush();//恢复推送服务
                }
                else
                {
                    LoadingOperate.toast("别名和标签设置失败");
                }
            });
        });
    },
    /**
     * 取得应用程序对应的 RegistrationID
     * **/
    getRegistrationID:function () {
        return uexJPush.getRegistrationID();
    },
    /**
     * 开始极光推送服务
     * @param configJson json,//设置标签和别名，可为null;json={
                 alias:,//string 设置的别名
                 tags:,//Set<String> 设置的标签
               }
     * @param callbackJson json,//回调用函数json对象
     callbackJson = {
               receiveMessageFunc:null,//收到了自定义消息处理回调函数
               receiveNotificationFunc:null,//接收到到通知的回调函数
               receiveNotificationOpenFunc:null,//点击打开通知的回调函数
               receiveConnectionChangeFunc:null,//连接状态变化回调函数
               receiveNotPushFunc:null,//禁止推送时回调函数
         }
     * **/
    startJPush:function (callbackJson,configJson) {
        // alert("SD");
        window.uexOnload = function(type){

            if(DeviceOperate.config.onloadFunc != null)
            {
                DeviceOperate.config.onloadFunc(true);
            }

            PlatformOperate.verifyPlatform(function () {
                if(true)
                {
                    JPush.config.alias = configJson != undefined && configJson != null
                        ? configJson.alias == undefined
                            ? JPush.config.alias : configJson.alias : JPush.config.alias;
                    JPush.config.tags = configJson != undefined && configJson != null
                        ?  configJson.tags == undefined
                            ? JPush.config.tags : configJson.tags : JPush.config.tags;

                    JPush.config.receiveMessageFunc = callbackJson != undefined && callbackJson != null
                        ?  callbackJson.receiveMessageFunc == undefined
                            ? JPush.config.receiveMessageFunc
                            : callbackJson.receiveMessageFunc
                        : JPush.config.receiveMessageFunc;
                    JPush.config.receiveNotificationFunc = callbackJson != undefined && callbackJson != null
                        ?  callbackJson.receiveNotificationFunc == undefined
                            ? JPush.config.receiveNotificationFunc
                            : callbackJson.receiveNotificationFunc
                        : JPush.config.receiveNotificationFunc;
                    JPush.config.receiveNotificationOpenFunc = callbackJson != undefined && callbackJson != null
                        ?  callbackJson.receiveNotificationOpenFunc == undefined
                            ? JPush.config.receiveNotificationOpenFunc
                            : callbackJson.receiveNotificationOpenFunc
                        : JPush.config.receiveNotificationOpenFunc;
                    JPush.config.receiveConnectionChangeFunc = callbackJson != undefined && callbackJson != null
                        ?  callbackJson.receiveConnectionChangeFunc == undefined
                            ? JPush.config.receiveConnectionChangeFunc
                            : callbackJson.receiveConnectionChangeFunc
                        : JPush.config.receiveConnectionChangeFunc;

                    /**
                     * 增量更新回掉函数
                     * **/
                    uexUpdate.onWidgetPatchUpdate = function (opId,dataType,data){
                        var obj = JSON.parse(data);
                        // alert("已完成更新，请重启: " +  JSON.stringify(obj));
                        if(obj.status=="ok")
                        {
                            /*
                            LoadingOperate.toast("正在配置重启动",{
                                duration:2000,
                                type:1
                            });*/

                            setTimeout(function () {

                                DialogOperate.alrBtn("更新完成","是否重启，重启会黑屏一段时间，不要关闭哦！",
                                    ['否', '是'],function () {
                                        uexWidgetOne.restart();
                                    });

                            },3000);
                            //appcan.frame.open('content',"popOver_content.html",'0',titHeight,'newWin');
                            // uexWidgetOne.exit(0);
                        }
                    }

                    /**ios app桌面图标右上角气泡 显示未读数,设置默认值**/
                    uexJPush.setBadgeNumber(0);

                    JPush.setAliasAndTags();

                    /**
                     * 应用程序注册监听
                     * var json={
                            title:,//RegistrationID
                          };
                     * **/
                    uexJPush.onReceiveRegistration = function (info) {
                        info = JSON.parse(info);
                        // alert("RegistrationID: " + JSON.stringify(info));
                        JPush.config.registrationID = info.title;

                    };

                    /**
                     * 收到了自定义消息
                     * var json={
                             message:,//String 对应 Portal 推送消息界面上的"自定义消息内容"字段
                             extras:,// 对应 Portal 推送消息界面上的"可选设置"里的附加字段
                    };
                     * **/
                    uexJPush.onReceiveMessage = function (info) {
                        info = JSON.parse(info);
                        // alert("接收自定义信息：" + JSON.stringify(info));
                        if(JPush.config.receiveMessageFunc != undefined
                            && JPush.config.receiveMessageFunc != null)
                        {
                            JPush.config.receiveMessageFunc(info);
                        }
                    };

                    /**
                     * 收到了通知
                     * var json={
                            content:,//对应 Portal 推送通知界面上的"通知内容"字段.
                            extras:,//对应 Portal 推送消息界面上的"可选设置"里的附加字段.
                            notificationId:,//(仅Android以及iOS本地通知) 消息Id,用于清除通知
                            isAPNs:,//(仅iOS)本通知是否由APNs服务发出 true/false
                         };
                     * **/
                    uexJPush.onReceiveNotification = function (info) {
                        info = JSON.parse(info);
                        // alert("接收通知：" + JSON.stringify(info));
                        if(JPush.config.receiveNotificationFunc != undefined
                            && JPush.config.receiveNotificationFunc != null)
                        {
                            JPush.config.receiveNotificationFunc(info);
                        }
                    };

                    /**
                     * 用户点击了通知
                     * var param={
                              content:,//对应 Portal 推送通知界面上的"通知内容"字段.
                              extras:,//对应 Portal 推送消息界面上的"可选设置"里的附加字段.
                              notificationId:,//(仅Android)消息Id,可以用于清除通知
                              sAPNs:,//(仅iOS)本通知是否由APNs服务发出 true/false
                        };
                     * **/
                    uexJPush.onReceiveNotificationOpen = function (info) {
                        info = JSON.parse(info);
                        // alert("通知点击：" + JSON.stringify(info));
                        if(JPush.config.receiveNotificationOpenFunc != undefined
                            && JPush.config.receiveNotificationOpenFunc != null)
                        {
                            JPush.config.receiveNotificationOpenFunc(info);
                        }
                    };

                    //此接口仅 iOS 拥有,仅在iOS 10.0+系统上有效
                    uexJPush.showNotificationAlertInForeground(true);//true - 显示 , false - 不显示

                    /**
                     * 连接状态变化
                     * var json={
                            connect:,//0-已连接上,1-未连接
                          };
                     * **/
                    uexJPush.onReceiveConnectionChange = function (info) {
                        info = JSON.parse(info);
                        // alert("是否链接：" + JSON.stringify(info));
                        if(JPush.config.receiveConnectionChangeFunc != undefined
                            && JPush.config.receiveConnectionChangeFunc != null)
                        {
                            // alert("是否链接：获取");
                            JPush.config.receiveConnectionChangeFunc(info);
                        }
                    };

                    if(callbackJson != undefined && callbackJson != null && callbackJson.execFunc != undefined)
                    {
                        callbackJson.execFunc();
                    }
                }
                else
                {
                    JPush.config.receiveNotPushFunc = callbackJson.receiveNotPushFunc == undefined
                        ? JPush.config.receiveNotPushFunc
                        : callbackJson.receiveNotPushFunc;

                    if(JPush.config.receiveNotPushFunc != null)
                    {
                        JPush.config.receiveNotPushFunc();
                    }
                }

            });

        };
    },
    /**
     * 关闭极光推送；
     * **/
    closeJPush:function () {
        PlatformOperate.verifyPlatform(function () {
            //停止推送服务
            uexJPush.stopPush();
        });
    },
    /**
     * 添加一个本地通知
     * @param json json,//通知内容参数
     * json={
    builderId:0,//long 设置本地通知样式(仅Android有效)
    title:,//本地通知的title
    content:,//设置本地通知的content
    extras:,//额外的数据信息extras为json字符串
    notificationId:,//int 设置本地通知的ID
    broadCastTime:,//long 设置本地通知延迟触发时间,毫秒为单位,如设置10000为延迟10秒添加通知
     * **/
    addLocalNotification:function (json) {
        /*
        var json = {
            builderId:0,
            title:"这是title",
            content:"这是内容",
            extras:{"key":"value"},
            notificationId:3,
            broadCastTime:10000
        };*/
        uexJPush.addLocalNotification(json);
    },
    /**
     * clearLocalNotifications //移除所有的通知
     * **/
    clearLocalNotifications:function () {
        uexJPush.clearLocalNotifications();
    }
};

/**
 * 数据库操作（原生） 一下所有方法的回调方法，均可以不传
 * **/
var DatabaseOperate = {
    /**
     * 数据库配置
     * **/
    config:{
        dbId:1,//数据库唯一标识符
        db:null,//数据库对象
        nameDB:"db_file",//数据库的名字
        tables:[
            "CREATE TABLE IF NOT EXISTS tb_ctrl " +
            "(id integer primary key," +
            "service_Id varchar(100) not null," +
            "readed integer not null default 0," +
            "time varchar(100) not null," +
            "itemsTotal integer not null)",//表(tb_ctrl)--工作台

            "CREATE TABLE IF NOT EXISTS tb_attachment " +
            "(id integer primary key," +
            "task_Id varchar(100) not null," +
            "step_Id varchar(20) not null," +
            "fileUrl varchar(1000) not null," +
            "attachInfo varchar(1000) not null)",//表(tb_attachment)

        ],//需要创建表的sql数据集
    },//数据库基础配置数据
    /**
     * 打开或创建数据库
     * @param nameDB string,//数据库名
     * @param callbackFunc(data) function,//回调函数
     * data={
       err,data,db,dataType,optId
       }
     //:数据库创建成功后的回调，如果创建过程中有错误 err不为空，否则err为空，data返回的执行结果，
     db是数据库创建成功后的数据库对象，可 以执行相关的操作，dataType返回结果的数据类型，optId操作Id
     * **/
    openOrCreateDB:function (callbackFunc) {

        /**
         * opId	Number	是	数据库对象的唯一标识符
         dataType	Number	是	参数类型详见CONSTANT中Callback方法数据类型
         data	Number	是	返回uex.cSuccess或者uex.cFailed,详见CONSTANT中Callbackint类型数据
         * **/
        var interval = setInterval(function () {
            // openDataBase 打开数据库
            // window.uexOnload = function() {
            appcan.ready(function() {
                var db = uexDataBaseMgr.open(DatabaseOperate.config.nameDB);
                // alert(JSON.stringify(db));
                if(!db){
                    // alert("打开失败!");
                    console.log("------------------------------数据库：" + DatabaseOperate.config.nameDB + "创建报错 Start------------------------------------");
                    console.log("------------------------------数据库：" + DatabaseOperate.config.nameDB + "创建报错 End------------------------------------");
                }
                else
                {
                    clearInterval(interval);
                    // alert("数据库打开成功!");
                    console.log("------------------------------数据库：" + DatabaseOperate.config.nameDB + "创建成功------------------------------------");
                    DatabaseOperate.config.db = db;
                    callbackFunc(db);
                }
                /*uexDataBaseMgr.cbOpenDataBase = function (opId,dataType,data) {
                 if(data == 0){
                 alert("数据库打开成功!");
                 if(callbackFunc != null && callbackFunc != undefined)
                 {
                 callbackFunc({opId:opId,data:data,dataType:dataType});
                 }
                 console.log("------------------------------数据库：" + DatabaseOperate.config.nameDB + "创建成功------------------------------------");
                 }else{
                 alert("数据库打开失败!");
                 console.log("------------------------------数据库：" + DatabaseOperate.config.nameDB + "创建报错 Start------------------------------------");
                 }
                 };
                 uexDataBaseMgr.openDataBase(DatabaseOperate.config.nameDB,DatabaseOperate.config.dbId);*/
            });
        },100);


        //创建一个名字为''''数据库
        /*appcan.ready(function() {
         appcan.database.create(DatabaseOperate.config.nameDB,function(err,data,db,dataType,optId){
         if(err){
         //创建过程中出错了
         // alert('create error');
         console.log("------------------------------数据库：" + DatabaseOperate.config.nameDB + "创建报错 Start------------------------------------");
         console.log(err);
         console.log("------------------------------数据库：" + DatabaseOperate.config.nameDB + "创建报错 End------------------------------------");
         return;
         }

         //db就是数据库对象
         if(data == 0){
         console.log("------------------------------数据库：" + DatabaseOperate.config.nameDB + "创建成功------------------------------------");
         //数据库创建成功可以使用了
         DatabaseOperate.config.db = db;
         DatabaseOperate.config.db = db;

         setTimeout(function () {
         if(callbackFunc != null && callbackFunc != undefined)
         {
         callbackFunc({err:err,data:data,db:db,dataType:dataType,optId:optId});
         }

         },0);

         return db;

         }else{
         console.log("------------------------------数据库：" + DatabaseOperate.config.nameDB + "创建失败------------------------------------");
         //数据库创建失败了
         return;
         }
         });
         });*/

    },
    /**
     * 查询数据
     @param sql,//sql语句
     @param callbackFunc（data） function,//查询后的回调函数
     data,查询失败为null;否则为//已查到数据
     **/
    query:function (sql,callbackFunc) {
        if(DatabaseOperate.config.db != null)
        {
            /*
            * data = {data:data,//已查到数据
             err:err,//判断是否成功，执行结果,0表示成功,非0表示失败
             }*/
            uexDataBaseMgr.select(DatabaseOperate.config.db,sql, function (err,data) {
                var queryData = null;
                if (err) {
                    // alert('执行失败');
                    console.log("------------------------------查询数据：" + sql + " 查询失败 Start------------------------------------");
                    console.log(err);
                    console.log("------------------------------查询数据：" + sql + " 查询失败 End------------------------------------");
                }
                else
                {
                    console.log("------------------------------查询数据：" + sql + " 查询成功------------------------------------");
                    queryData = data;
                }

                if(callbackFunc != null && callbackFunc != undefined)
                {
                    callbackFunc(queryData);
                }


            });
        }
        else
        {
            // alert("create Tb!");
            DatabaseOperate.createTb(function (data) {
                // alert("create Tb2!");
                DatabaseOperate.query(sql,callbackFunc);
            });
        }


        //数据库创建成功了为对象db，然后就可以直接用db执行查询操作了,查询user表中的所有用户信息
        /*DatabaseOperate.config.db.select(sql,function(err,data,dataType,optId){
         alert("query data: " + JSON.stringify({err:err,data:data,dataType:dataType,optId:optId}));

         if(err){
         //如果创建过程中出错了
         console.log("------------------------------查询数据：" + sql + " 查询失败 Start------------------------------------");
         console.log(err);
         console.log("------------------------------查询数据：" + sql + " 查询失败 End------------------------------------");
         return;
         }
         else if(data != null)
         {
         console.log("------------------------------查询数据：" + sql + " 查询成功------------------------------------");
         if(callbackFunc != null && callbackFunc != undefined)
         {
         callbackFunc({err:err,data:data,dataType:dataType,optId:optId});
         }

         }
         else
         {
         console.log("------------------------------查询数据：" + sql + " 查询失败------------------------------------");
         }
         //data中的值为sql返回的内容

         });*/
    },
    /**
     * 执行sql语句
     * @param sql,//sql语句
     * @param callbackFunc（data） function,//执行后的回调函数
     data={err:err,data:data,dataType:dataType,optId:optId}
     用返回的数据库对象，进行更新操作，sql要更新用的sql语句，callback是更新 返回的结果回调，
     同样的callback(err,data,dataType,optId)第一个参数是Error对象如果为空则表示 没有错误，
     否则表示操作出错了，data表示返回的操作结果,dataType操作结果的数据类型，optId该操作id
     * **/
    exec:function (sql,callbackFunc) {
        if(DatabaseOperate.config.db != null)
        {
            uexDataBaseMgr.sql(DatabaseOperate.config.db,sql, function(err) {
                if (!err) {
                    // alert('执行成功');
                    console.log("------------------------------SQL：" + sql + " 执行成功------------------------------------");

                    if(callbackFunc != null && callbackFunc != undefined)
                    {
                        callbackFunc();
                    }
                }
                else
                {
                    // alert('执行失败');
                    console.log("------------------------------SQL：" + sql + " 执行失败 Start------------------------------------");
                    console.log(err);
                    console.log("------------------------------SQL：" + sql + " 执行失败 End------------------------------------");
                }
            });
        }
        else
        {
            DatabaseOperate.createTb(function (data) {
                DatabaseOperate.exec(sql,callbackFunc);
            });
        }

        //在指定的数据库上执行更新操作
        /*appcan.database.exec({
         name:DatabaseOperate.config.nameDB,
         sql:sql,
         callback:function(err,data,dataType,optId){
         if(err){
         alert("SQL Err 1");
         //如果创建过程中出错了
         console.log("------------------------------SQL：" + sql + " 执行失败 Start------------------------------------");
         console.log(err);
         console.log("------------------------------SQL：" + sql + " 执行失败 End------------------------------------");
         return;

         }
         //data中的值为sql返回的内容
         alert(data);
         }
         });*/

        /*appcan.database.exec(DatabaseOperate.config.nameDB,sql,function (err,data,dataType,optId) {
         if(err){

         alert("SQL Err 1");
         //如果创建过程中出错了
         console.log("------------------------------SQL：" + sql + " 执行失败 Start------------------------------------");
         console.log(err);
         console.log("------------------------------SQL：" + sql + " 执行失败 End------------------------------------");
         return;
         }

         alert(data);
         });*/

        /*appcan.ready(function() {
         //数据库创建成功了为对象db，然后就可以直接用db执行更新操作了,删除userId为1的用户
         DatabaseOperate.config.db.exec(sql,function(err,data,dataType,optId){
         alert("data: " + JSON.stringify({err:err,data:data,dataType:dataType,optId:optId}));

         if(err){

         alert("SQL Err 1");
         //如果创建过程中出错了
         console.log("------------------------------SQL：" + sql + " 执行失败 Start------------------------------------");
         console.log(err);
         console.log("------------------------------SQL：" + sql + " 执行失败 End------------------------------------");
         return;
         }
         if(data == 0){
         alert("SQL success");
         //执行成功了
         console.log("------------------------------SQL：" + sql + " 执行成功------------------------------------");
         if(callbackFunc != null && callbackFunc != undefined)
         {
         callbackFunc({err:err,data:data,dataType:dataType,optId:optId});
         }

         }else{
         alert("SQL Err 2");
         //执行失败了
         console.log("------------------------------SQL：" + sql + " 执行失败------------------------------------");
         }

         });
         });*/

    },
    /**
     * 创建表
     * * @param callbackFunc function,//回调函数
     * **/
    createTb:function (callbackFunc) {
        setTimeout(function () {
            DatabaseOperate.openOrCreateDB(function (data) {
                if(data)
                {
                    for(var i = 0; i < DatabaseOperate.config.tables.length; i++)
                    {
                        // alert(DatabaseOperate.config.tables[i]);
                        DatabaseOperate.exec(DatabaseOperate.config.tables[i]);
                    }

                    if(callbackFunc != null && callbackFunc != undefined)
                    {
                        callbackFunc(data);
                    }
                    /*var sql = "INSERT INTO tb_ctrl (service_Id,readed,time) VALUES ('fdss',1,'dfg')";
                     DatabaseOperate.exec(sql);

                     setTimeout(function () {
                     var sql2 = "select * from tb_ctrl";
                     DatabaseOperate.query(sql2,function (data) {
                     // alert('data:' + JSON.stringify(data));
                     });
                     },3000);
                     */
                    //数据库创建成功可以使用了
                }
                else
                {
                    // alert("err");
                    //数据库创建失败了
                }
            });
        },0);
    },
    /**
     * 插入数据
     * @param table string，//表名
     * @param insertData array，//insertData = [[key,value],[key,value]....] key是字段名，value是字段值
     * @param callbackFunc function,//回调函数
     * **/
    insertTb:function (table,insertData, callbackFunc ) {
        var sql = "INSERT INTO " + table + "(";
        var values = " VALUES(";
        for(var i = 0; i < insertData.length; i++)
        {
            if(i == (insertData.length - 1))
            {
                sql += "" + insertData[i][0] + ")";
                values += "'" + insertData[i][1] + "')";
            }
            else
            {
                sql += "" + insertData[i][0] + ",";
                values += "'" + insertData[i][1] + "',";
            }

        }

        sql = sql + values;
        DatabaseOperate.exec(sql,callbackFunc);

    },
    /**
     * 插入数据，转化成sql
     * @param table string,//表名
     * @param keys Array,//数据需要传入插入的数据字段名
     * @param values Array,//数据需要传入插入的数据字段值，如values
     * @param callbackFunc function,//回调函数
     * **/
    insertTbConvert:function (table, keys, values, callbackFunc) {
        /*var sql = "INSERT INTO tb_ctrl (service_Id,readed,time) VALUES (";*/
        var insertData = [];
        // var keys  = ['service_Id','readed','time','itemsTotal'];
        for(var i = 0; i < values.length; i++)
        {
            var tmp = [];
            tmp.push(keys[i]);
            tmp.push(values[i]);
            insertData.push(tmp);
        }
        DatabaseOperate.insertTb(table,insertData,callbackFunc);
    },
    /**
     * 插入数据，表（tb_ctrl）
     * @param values Array,//数据需要传入插入的数据，如values = [service_Id,readed,time,itemsTotal]
     * @param callbackFunc function,//回调函数
     * **/
    insertToTbCtrl:function (values,callbackFunc) {
        var keys  = ['service_Id','readed','time','itemsTotal'];
        DatabaseOperate.insertTbConvert("tb_ctrl",keys, values,callbackFunc);
    },
    /**
     * 插入数据，表（tb_attachment）
     * @param values Array,//数据需要传入插入的数据，如values = ['task_Id','step_Id','fileUrl','attachInfo']
     * @param callbackFunc function,//回调函数
     * **/
    insertToTbAttachment:function (values,callbackFunc) {
        var keys  = ['task_Id','step_Id','fileUrl','attachInfo'];
        DatabaseOperate.insertTbConvert("tb_attachment",keys, values,callbackFunc);

    },
    /**
     * 查询表
     * @param table string，//表名
     * @param where string，//查询条件，如 where key = value; key是字段名，value是字段值
     * * @param callbackFunc function,//回调函数
     * **/
    queryTb:function (table,where,callbackFunc) {
        var sql = "select * from ";
        if(where.indexOf("where") > 0)
        {
            sql = sql + table + " " + where;
        }
        else
        {
            sql = sql + table + " where " + where;
        }

        DatabaseOperate.query(sql,callbackFunc);
    },
    /**
     * 查询表tb_ctrl，
     * * @param where string,//查询条件
     * * @param callbackFunc function,//回调函数
     * **/
    queryTbCtrl:function (where,callbackFunc) {
        DatabaseOperate.queryTb('tb_ctrl', where, callbackFunc);
    },
    /**
     * 查询表tb_attachment，
     * * @param where string,//查询条件
     * * @param callbackFunc function,//回调函数
     * **/
    queryTbAttachment:function (where,callbackFunc) {
        DatabaseOperate.queryTb('tb_attachment', where, callbackFunc);
    },
    /**
     * 更新表
     * @param table string，//表名
     * @param updateData array，//updateData = [[key,value],[key,value]....] key是字段名，value是字段值
     * @param where string，//更新条件，如 where key = value; key是字段名，value是字段值;若不传，或为null,‘’空字符，则会更新数据表整个列
     * @param callbackFunc function,//回调函数
     *  **/
    updateTb:function(table, updateData, where, callbackFunc){
        var sql = "update " + table;
        var x;
        sql += " set ";
        for (var i = 0; i < updateData.length; i++) {
            x = updateData[i];
            if (i == (updateData.length - 1)) {
                sql += x[0] + "='" + x[1] + "'";
            }
            else {
                sql += x[0] + "='" + x[1] + "', ";
            }
        }

        if(where != null && where != undefined)
        {
            if(where.indexOf("where") > 0)
            {
                sql += " " + where;//alert(sql);
            }
            else
            {
                sql += " where " + where;//alert(sql);
            }
        }

        DatabaseOperate.exec(sql,callbackFunc);

    },
    /**
     * 更新表tb_ctrl
     * @param updateData array，//updateData = [[key,value],[key,value]....] key是字段名，value是字段值
     * @param where string，//更新条件，如 where key = value; key是字段名，value是字段值
     * @param callbackFunc function,//回调函数
     *  **/
    updateTbCtrl:function (updateData, where, callbackFunc) {
        DatabaseOperate.updateTb("tb_ctrl", updateData, where, callbackFunc);
    },
    /**
     * 更新表tb_attachment
     * @param updateData array，//updateData = [[key,value],[key,value]....] key是字段名，value是字段值
     * @param where string，//更新条件，如 where key = value; key是字段名，value是字段值
     * @param callbackFunc function,//回调函数
     *  **/
    updateTbAttachment:function (updateData, where, callbackFunc) {
        DatabaseOperate.updateTb("tb_attachment", updateData, where, callbackFunc);
    },
    /**
     * 删除表中数据
     * * @param table string，//表名
     * @param where string，//更新条件，如 where key = value; key是字段名，value是字段值;可以不传入，若没有传或传入‘’，空字符，则删除整个数据表
     * * @param callbackFunc function,//回调函数
     * **/
    delData:function (table,where,callbackFunc) {
        var sql = "delete from " + table;
        if(where != null && where != undefined)
        {
            if(where.indexOf("where") > 0)
            {
                sql = sql + " " + where;
            }
            else
            {
                sql = sql +  " where " + where;
            }
        }

        DatabaseOperate.exec(sql,callbackFunc);
    },
    /**
     * 删除数据（表tb_attachment）
     * @param where string，//更新条件，如 where key = value; key是字段名，value是字段值
     * @param callbackFunc function,//回调函数
     *  **/
    delDataTbAttachment:function (where,callbackFunc) {
        DatabaseOperate.delData("tb_attachment", where, callbackFunc);
    },
    /**
     * 删除表
     *  * * @param table string，//表名
     * * @param callbackFunc function,//回调函数
     * **/
    delTb:function (table,callbackFunc) {
        var sql = "drop table " + table;
        DatabaseOperate.exec(sql,callbackFunc);
    },
    /**
     * 删除数据库
     * @param callbackFunc function,//回调函数
     * **/
    delDB:function (callbackFunc) {
        var sql = "drop database " + DatabaseOperate.config.nameDB;
        DatabaseOperate.exec(sql,callbackFunc);
    }
};

/**
 * 画表图(js/原生)  DrawTableChart的部分方法，需要引入echarts.min.js才可运行
 *  drawChartNative(原生)
 * **/
var DrawTableChart = {
    /**
     * 条形柱水平柱状图（巡店向导）
     * @param id string//canvas元素id
     * @param sum1 number // 动态变化数值 计算数据
     * @param sum2 number //总长数值
     * @param sumTxt number // 动态变化数值 显示数据 若不传显示sum1
     */
    histogramHorizon:function (id,sum1,sum2,sumTxt) {
        setTimeout(function () {
            var b = true;

            if(sum2 == 0)
            {
                sum2 = 1;
                b = false;
            }

            var width=570; //画布总宽度
            var h=70; //图形高度

            var x=20; //图形起点坐标x
            var y=10; //图形起点坐标y

            var fx=0; //数值起点坐标x
            var fy=130; //数值坐标y

            var word="0"; //数值起点值

            var canvas = document.getElementById(id);
            canvas.width = 1536;




            var w1=(width-x)*(sum1/sum2); //图形1 width
            var w2=(width-x)-w1; //图形2 width

            var xs3 = w1; //sum1数值位置
            var fx2=width-40; //sum2数值位置


            if(canvas.getContext){
                var context = canvas.getContext("2d");

                // 图形1 填充颜色、(x,y,w,h)
                context.fillStyle="#F8BD2C";
                context.fillRect(x,y,w1,h);

                // 图形2 填充颜色、(x,y,w,h)
                context.fillStyle = "#CFCFCF";
                context.fillRect(w1,y,w2,h);

                // 文本 color,family,(font,x,y)
                context.fillStyle = "#CFCFCF";
                context.font="40px Microsoft YaHei";
                // context.fillText(word,fx,fy);
                context.fillText(word,fx,fy);
                if(sum1 != 0)
                {
                    if(sumTxt == undefined)
                    {
                        context.fillText(sum1,xs3,fy);
                    }
                    else
                    {
                        context.fillText(sumTxt,xs3,fy);
                    }

                }

                if(b)
                {
                    context.fillText(sum2,fx2,fy);
                }
                else
                {
                    context.fillText(0,fx2,fy);
                }
            }
        },0);
    },
    /**
     * 条形柱弧度图（巡店向导）
     * @param id string//canvas元素id
     * @param sum1 number // 动态变化数值 计算数据
     * @param sum2 number //总长数值
     * @param sumTxt number // 动态变化数值 显示数据 若不传显示sum1
     * **/
    histogramRadian:function (id,sum1,sum2,sumTxt) {
        setTimeout(function () {
            var b = true;

            if(sum2 == 0)
            {
                sum2 = 1;
                b = false;
            }

            var canvas=document.getElementById(id);
            var circle = {
                x : 150,    //圆心的x轴坐标值
                y : 150,    //圆心的y轴坐标值
                r : 130      //圆的半径
            };

            var width = canvas.width; //画布总宽度
            var width1 = (width)*(sum1/sum2); //图形1 width
            // var width2 = (width)-w1; //图形2 width

            var w1 = Math.PI + Math.PI * (sum1 / sum2); //图形1 width
            var w2 = Math.PI * 2; //图形2 width


            if(canvas.getContext){
                var ctx = canvas.getContext("2d");
                ctx.lineWidth=40; //线宽度

                //绘制弧线
                ctx.strokeStyle = "#F8BD2C";
                /*x	圆的中心的 x 坐标。
                 y	圆的中心的 y 坐标。
                 r	圆的半径。
                 sAngle	起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
                 eAngle	结束角，以弧度计。
                 counterclockwise	可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。

                 context.arc(x,y,r,sAngle,eAngle,counterclockwise);*/
                ctx.arc(circle.x,circle.y,circle.r,Math.PI,w1,false);
                ctx.stroke();

                //绘制圆
                ctx.beginPath();
                ctx.strokeStyle = "#CFCFCF";
                ctx.arc(circle.x,circle.y,circle.r,w1,w2,false);
                ctx.stroke();

                // 绘制线
                ctx.lineWidth = 2; //线宽度
                ctx.strokeStyle = "#CFCFCF";
                ctx.moveTo(40,150);
                ctx.lineTo(260,150);
                ctx.stroke();

                // 文本 color,family,(font,x,y)
                ctx.fillStyle = "#cfcfcf";
                ctx.font="22px Microsoft YaHei";
                ctx.fillText(0,140,175);

                if(sum1 != 0)
                {
                    if(sumTxt == undefined)
                    {
                        ctx.fillText(sum1,width1,175);
                    }
                    else
                    {
                        ctx.fillText(sumTxt,width1,175);
                    }

                }

                if(b)
                {
                    ctx.fillText(sum2,280,175);
                }
                else
                {
                    ctx.fillText(0,280,175);
                }
            }
        },0);
    },
    /**
     * 条形柱水平状图(业绩分析)
     * @param id string  //canvas元素id
     *  @param sum1 number //动态变化数值
     *  @param sum2 number //图形总长
     *  @param word string //开头显示文本
     *  @param word2 string //结尾显示文本
     *  @param bg1 string //图形1背景颜色
     * **/
    drawCanvas:function (id,sum1,word,word2,co1,co2){
        setTimeout(function () {

            var h=85; //图形高度
            var x=0; //图形起点坐标x
            var y=0; //图形起点坐标y
            var fx=40; //数值起点坐标x
            var fy=60; //数值坐标y
            var sum2=100; //总数

            var canvas = document.getElementById(id);
            canvas.width=1536;
            canvas.height=85;
            // canvas.style.background = "pink";

            var width=canvas.width; //画布总宽度

            var w1=width*(sum1/sum2); //图形1 width
            var w2=width-w1; //图形2 width

            var fx2=width-20; //sum2数值位置

            if(canvas.getContext){
                var context = canvas.getContext("2d");
                // 渐变
                var linearGradient1 = context.createLinearGradient(0,0,900,0);

                // 图形1 填充颜色、(x,y,w,h)
                // context.fillStyle=bg1;

                // 橙色渐变
                // linearGradient1.addColorStop(0,'rgb(244,206,46)');
                // linearGradient1.addColorStop(1,'rgb(255,107,0)');

                // 绿色渐变
                // linearGradient1.addColorStop(0,'rgb(153,255,204)');
                // linearGradient1.addColorStop(1,'rgb(0,204,0)');

                linearGradient1.addColorStop(0,co1);
                linearGradient1.addColorStop(1,co2);

                context.fillStyle=linearGradient1;
                context.fillRect(x,y,w1,h);

                // 图形2 填充颜色、(x,y,w,h)
                context.fillStyle = "#E4E4E4";
                context.fillRect(w1,y,w2,h);

                // 文本 color,family,(font,x,y)
                context.fillStyle = "#000";
                context.font="56px SimHei";
                context.fillText(word,fx,fy);
                context.textAlign="right";
                context.fillText(word2,fx2,fy);
            }
        },0);
    },
    /**
     * 条形柱水平状图(业绩分析)
     * @param id string  //canvas元素id
     *  @param sum1 number //动态变化数值 百分比带小数点
     *  @param sum2 number //图形总长
     *  @param word string //开头显示文本
     *  @param word2 string //结尾显示文本
     *  @param bg1 string //图形1背景颜色
     * **/
    drawCanvas_1:function (id,sum1,word,word2,co1,co2){
        setTimeout(function () {

            var h=85; //图形高度
            var x=0; //图形起点坐标x
            var y=0; //图形起点坐标y
            var fx=40; //数值起点坐标x
            var fy=60; //数值坐标y
            var sum2=100; //总数

            var canvas = document.getElementById(id);
            // canvas.width=100;
            // canvas.height=5;
            // canvas.style.background = "pink";

            var width = canvas.width; //画布总宽度

            var w1 = width * sum1; //图形1 width
            var w2 = width - w1; //图形2 width

            var fx2 = width - 20; //sum2数值位置

            if(canvas.getContext){
                var context = canvas.getContext("2d");
                // 渐变
                var linearGradient1 = context.createLinearGradient(0,0,900,0);

                // 图形1 填充颜色、(x,y,w,h)
                // context.fillStyle=bg1;

                // 橙色渐变
                // linearGradient1.addColorStop(0,'rgb(244,206,46)');
                // linearGradient1.addColorStop(1,'rgb(255,107,0)');

                // 绿色渐变
                // linearGradient1.addColorStop(0,'rgb(153,255,204)');
                // linearGradient1.addColorStop(1,'rgb(0,204,0)');

                linearGradient1.addColorStop(0,co1);
                linearGradient1.addColorStop(1,co2);

                context.fillStyle = linearGradient1;
                context.fillRect(x,y,w1,h);

                // 图形2 填充颜色、(x,y,w,h)
                context.fillStyle = "#E4E4E4";
                context.fillRect(w1,y,w2,h);

                // 文本 color,family,(font,x,y)
                context.fillStyle = "#000";
                context.font="56px SimHei";
                context.fillText(word,fx,fy);
                context.textAlign="right";
                context.fillText(word2,fx2,fy);
            }
        },0);
    },
    /**
     * 饼图 一圆
     * @param id string  //元素id
     * @param title string  //标题
     * @param data1 array  //饼图比例数据
     * @param data2 array  //显示色数据
     * @param color array  //颜色值数组，如：color = ["#ffffff"] ,不传使用随机色
     * **/
    drawPie:function (id,title,data1,data2,color){
        var option = null;
        setTimeout(function () {
            // 实例化
            var myChart = echarts.init(document.getElementById(id));

            // 指定图表的配置项和数据
            // 指定图表的配置项和数据
            // title 标题(含副标题)
            // legend 图例
            var option = {
                title : {
                    text: title,
                    subtext: '',
                    x:'center',
                    textStyle:{
                        fontSize:44
                    }
                },
                textStyle:{
                    fontSize:"32",
                },
                legend: {
                    orient : 'horizontal',
                    x : 'left',
                    bottom:"0",
                    itemWidth:60,
                    itemHeight:30,
                    padding: [5,0,0,50],
                    right :"10",
                    itemGap:25,
                    data:data2
                    // ['广东分公司===1','北京分公司','南京分公司','成都分公司','东北分公司']
                },
                series: [
                    {
                        type:'pie',
                        name:'访问来源',
                        legendHoverLink: false,
                        hoverAnimation: false,
                        radius : '70%',
                        center: ['50%', '50%'],
                        label:{
                            normal:{
                                formatter:'{c}%\n{b}'
                            }
                        },
                        labelLine:{//设置指示线
                            normal:{
                                length:50//设置指示线长度
                            }
                        },
                        data:data1
                        //     [
                        //     {value:25, name:'广东分公司===1'},
                        //     {value:30, name:'北京分公司'},
                        //     {value:10, name:'南京分公司'},
                        //     {value:15, name:'成都分公司'},
                        //     {value:20, name:'东北分公司'}
                        // ]
                    },
                ]
            };

            if(color != undefined)
            {
                option['color'] = color;
            }

            // 调用
            if (option && typeof option === "object") {
                myChart.setOption(option,true)
            }
            // myChart.setOption(option);
        },0);
    },
    /**
     * 饼图 双圆
     * @param id string  //元素id
     * @param title string  //标题
     * @param data1 array  //圆环中间数据
     * @param data2 array  //圆环外数据
     * @param data3 array  //图例 ,不传没有，可不传
     * @param color array  //颜色值数组，如：color = ["#ffffff"] ,不传使用随机色
     * @param callbackFunc function  //点击图表回调函数
     * **/
    drawPie2:function(id,titles,data1,data2,data3 ,color,callbackFunc){
        if(data2.length == 0)
        {
            data1 = [];
        }
        // setTimeout(function () {
        var option = null;

        // 路径配置
        var myChart = echarts.init(document.getElementById(id)); // 实例化

        // 指定图表的配置项和数据
        // title 标题(含副标题)
        // legend 图例
        // series 设置
        var option = {
            title : {
                text: titles,
                x:'center',
                textStyle:{
                    fontSize:44
                }
            },
            series: [
                {
                    name:'',
                    type:'pie',
                    legendHoverLink: false,
                    hoverAnimation: false,
                    clickable : true,
                    // calculable : true,
                    radius: ['0', '0'],
                    label: {
                        normal: {
                            position: 'center',
                            fontSize:28
                        }
                    },
                    data:data1
                },
                {
                    name:'',
                    type:'pie',
                    legendHoverLink: false,
                    hoverAnimation: false,
                    radius: ['30%', '70%'],
                    label: {
                        normal: {
                            fontSize:32,
                            formatter: '{b}{c}%',
                        }
                    },
                    labelLine:{//设置指示线
                        normal:{
                            length:50//设置指示线长度
                        }
                    },
                    data:data2
                }
            ],
            // color:['red','orange','yellow','green','blue','purple','pink','#666',"#ccc","#000"]
            // color:['#729F82','#CB8608','#53C6A6','#4AB6FF','#FC817A','#C4332B','#2D4454','#5E9FA8',"#729F82","#729F82"]
        };

        if(color != undefined && color.constructor == Array)
        {
            option['color'] = color;
        }

        if(data3 != undefined && data3.constructor == Array)
        {
            option['legend'] = {
                orient : 'horizontal',
                x : 'left',
                bottom:"0",
                itemWidth:60,
                itemHeight:30,
                padding: [5,0,0,50],
                right :"10",
                itemGap:25,
                data:data3 // ['广东分公司===1','北京分公司','南京分公司','成都分公司','东北分公司']
            }
        }

        if(callbackFunc != undefined)
        {
            // 添加点击事件
            myChart.on('click', function (params) {
                callbackFunc(params);

                // if(params.value){
                //     alert("单击了"+params.name+"柱状图");
                // }else{
                //     alert("单击了"+params.name+"x轴标签");
                // }
            });
        }
        // 调用

        if (option && typeof option === "object") {
            myChart.setOption(option,true);
        }
        // },0);
    },
    /**
     * 饼图 双圆
     * @param id string  //元素id
     * @param title string  //标题
     * @param data1 array  //圆环中间数据
     * @param data2 array  //圆环外数据
     * @param data3 array  //图例 ,不传没有，可不传
     * @param color array  //颜色值数组，如：color = ["#ffffff"] ,不传使用随机色
     * **/
    drawPie22:function (id,titles,data1,data2,callbackFunc,data3 ,color) {
        DrawTableChart.drawPie2(id,titles,data1,data2,data3 ,color,callbackFunc);
    },
    /**
     * 画柱状图 单个
     * @param id string  //元素id
     * @param data array  //元素数组
     * @param titlesX array  //横坐标显示数据
     * @param colors array  //颜色表
     * **/
    drawBar:function (id,data,titlesX,colors) {
        // 实例化
        var myChart = echarts.init(document.getElementById(id));

        titlesX = titlesX == undefined ? ['挑战目标','运营目标','实际完成'] : titlesX;
        colors = colors == undefined ? ['#5793f3', '#d14a61', '#675bba'] : colors;
        var seriesData = {
            zlevel:999,
            type:'bar',
            data:[],
            markPoint : {
                data : [],
                label: {
                    fontSize:25,
                    // position:'inside',
                    // shadowOffsetX:50,
                    // shadowOffsetY:50
                },
                symbolSize:[250,60],
                symbolKeepAspect:true,
            },
        };
        data.forEach(function (v,i,a) {
            seriesData.data.push({
                name:titlesX[i],
                value:v,
                itemStyle:{
                    color:colors[i],
                },
            });

            seriesData.markPoint.data.push(
                {name : titlesX[i], value : v, xAxis: titlesX[i], yAxis: v, itemStyle:{
                        color:colors[i],
                    }}
            );
        });
        var option = {
            color: colors,
            title : {
                text: '',
                subtext: '',
                //x:'center'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                //data:['蒸发量','降水量','值']
            },
            toolbox: {
                show : true,
                /* feature : {
                     dataView : {show: true, readOnly: false},
                     magicType : {show: true, type: ['line', 'bar']},
                     restore : {show: true},
                     saveAsImage : {show: true}
                 }*/
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : titlesX,
                    axisLabel: {
                        fontSize: 25,
                        // fontFamily:'Microsoft YaHei',
                        // fontWeight:'bold',
                    }
                }
            ],
            yAxis : [
                {
                    show:false,
                    type : 'value',
                }
            ],
            series : [
                seriesData
                /*  {
                      name:'运营目标',
                      type:'bar',
                      data:[2.6],
                      itemStyle:{
                          color:colors[1]
                      },
                      markPoint : {
                          data : [
                              {name : 'show', value : '75%', xAxis: '', yAxis: 2.6},
                          ]
                      },
                      // barGap:'0%',
                  },
                  {
                      name:'实际完成',
                      type:'bar',
                      data:[1.8],
                      itemStyle:{
                          color:colors[2]
                      },
                      markPoint : {
                          data : [
                              {name : 'show', value : '75%', xAxis: '', yAxis: 1.8},
                          ]
                      },
                      // barGap:'0%',
                  }*/
            ]
        };

        myChart.setOption(option,true);

    },
    /**
     * 折线图（诊断报告）
     * @param id string 实例化对象元素
     * @param data1 array x轴数值
     * @param data2 array 折线数值
     * **/
    drawGraph:function (id,data1,data2){
        setTimeout(function () {
            // 实例化
            var myChart = echarts.init(document.getElementById(id));
            // var option = {
            //     title: {
            //         text: ''
            //     },
            //     tooltip : {
            //         trigger: 'axis',
            //     },
            //     // grid: {
            //     //     left: '3%',
            //     //     right: '4%',
            //     //     bottom: '3%',
            //     //     containLabel: true
            //     // },
            //     xAxis :
            //         {
            //             type : 'category',
            //             data : data1,
            //             axisLabel:{
            //                 interval:0,
            //                 formatter: '{value}',
            //                 textStyle:{
            //                     fontSize:48
            //                 }
            //             },
            //             splitLine:{
            //                 show: true,
            //             },
            //         },
            //     yAxis :
            //         {
            //             type : 'value',
            //             // data : ['0','20','40','60','80','100'],
            //             axisLabel : {
            //                 formatter: '{value}',
            //                 textStyle:{
            //                     fontSize:48
            //                 }
            //             },
            //             splitLine:{
            //                 show: true,
            //             },
            //         },
            //     series : [
            //         {
            //             name:'',
            //             type:'line',
            //             data:data2,
            //             label: {
            //                 normal: {
            //                     show: true,
            //                     position: 'top',
            //                     textStyle:{
            //                         fontSize:48,
            //                         color:"#8C5F52"
            //                     }
            //                 },

            //             },
            //             splitLine:{
            //                 show: true,
            //             },
            //             // markPoint : {
            //             //     data : [
            //             //         {type : 'max', name: '最大值'},
            //             //         {type : 'min', name: '最小值'}
            //             //     ]
            //             // },
            //             itemStyle : {
            //                 normal : {
            //                     lineStyle:{
            //                         width:5,
            //                         color:"#FF6B00",
            //                     },
            //                 },

            //             },
            //             areaStyle: {
            //                 normal: {},
            //                 // shadowColor: 'rgba(0, 0, 0, 0.5)',
            //                 // shadowBlur: 10
            //             }
            //         }
            //     ]
            // };
            var option = {
                title: {
                    text: ''
                },
                // tooltip : {
                //     trigger: 'axis'
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                xAxis : {
                    type : 'category',
                    boundaryGap : true,
                    axisTick: {show: false},
                    axisLine: {
                        lineStyle: {
                            color: '#a5a4a4'
                        }
                    },
                    axisLabel:{
                        interval:0,
                        formatter: '{value}',
                        textStyle:{
                            fontSize:48
                        }
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color:['#dedede'],
                            type:'solid'
                        }
                    },
                    data : data1
                },
                yAxis : {
                    type : 'value',
                    axisTick: {show: false},
                    axisLine: {
                        show:true,
                        //    onZero:false
                        lineStyle: {
                            color: '#a5a4a4'
                        }
                    },
                    axisLabel: {
                        formatter:'{value}',
                        margin: 10,
                        textStyle: {
                            fontSize: 48
                        }
                    },
                    splitLine: {//网格线
                        show: true,
                        lineStyle: {
                            color: ['#dedede'],
                            type:'solid'
                        }
                    }
                },
                series : [
                    {
                        name:'',
                        type:'line',
                        symbolSize:15,
                        stack: '',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle:{
                                    fontSize:48,
                                    color:"#8C5F52"
                                }
                            },
                        },
                        splitLine:{
                            show: true,
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(255, 103, 0, 0.5)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(250, 193, 0, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                lineStyle:{
                                    width:5,
                                    color:"#FF6B00",
                                },
                                "color": 'rgb(255,103,0)',
                                "label": {
                                    "show": true,
                                    "textStyle": {
                                        "color": "#6a3122"
                                    },
                                    "position": "top",
                                }

                            }
                        },

                        data:data2
                    }
                ]
            };

            myChart.setOption(option);
        },0);
    },
    /**
     * 矩形条形图
     * @param id string;//需要画图的标签id;
     * @param sum1 number;//显示长度
     * @param sum2 number;//总长度
     * **/
    histogramHorizon2:function (id,sum1,sum2) {
        setTimeout(function () {
            var b = true;
            if(sum2 == 0)
            {
                sum2 = 1;
                b = false;
                sum1 = 0;
            }

            var width = 1385; //画布总宽度
            var h=80; //图形高度
            var x=0; //图形起点坐标x
            var y=0; //图形起点坐标y

            var fx=5; //数值起点坐标x
            var fy=55; //数值坐标y

            var word="计划业绩达成率"; //数值起点值
            var word0 = "0%";

            var canvas = document.getElementById(id);
            canvas.width = 1385;
            canvas.height = 160;

            var w1=(width-x)*(sum1/sum2); //图形1 width
            var w2=(width-x)-w1; //图形2 width
            var xs3=w1; //sum1数值位置

            // var sum = "99.99%"; //百分比
            var sum = Number(sum1/sum2*100).toFixed(2)+'%'; //百分比
            if(sum2 == 0)
            {
                sum = '0.00%';
            }

            if(canvas.getContext){
                var context = canvas.getContext("2d");
                var linearGradient1 = context.createLinearGradient(0,0,600,0);

                // 图形1 填充颜色、(x,y,w,h)
                // context.fillStyle="#FA9714";
                linearGradient1.addColorStop(0,'rgb(244,206,46)');
                linearGradient1.addColorStop(1,'rgb(255,107,0)');
                context.fillStyle=linearGradient1;
                context.fillRect(x,y,w1,h);

                // 图形2 填充颜色、(x,y,w,h)
                context.fillStyle = "#CCCCCC";
                // linearGradient1.addColorStop(0,'rgb(153,255,204)');
                // linearGradient1.addColorStop(1,'rgb(0,204,0)');
                context.fillRect(w1,y,w2,h);

                // 文本 color,family,(font,x,y)
                // 计划业绩达成率
                context.fillStyle = "#fff";
                context.font="44px SimHei";
                context.fillText(word,fx,fy);

                // >95.00%
                if(sum1 >sum2 & sum2 > 0 || sum > "95.00%")
                {
                    context.fillStyle = "#000000";
                    context.font="44px SimHei";
                    context.textAlign="right";
                    context.fillText(sum,1370,135);
                }
                // 0%
                else if(sum == '0.00%')
                {
                    context.fillStyle = "#000000";
                    context.font="44px SimHei";
                    context.textAlign="left";
                    context.fillText(sum,0,135);
                }
                // 其他
                else{
                    context.fillStyle = "#000000";
                    context.font="44px SimHei";
                    context.textAlign="right";
                    context.fillText(sum,xs3+55,135);
                }
            }
        },0);
    },
    /**
     * 条形柱水平柱状图（巡店向导）
     * @param id string//canvas元素id
     * @param sum1 number // 动态变化数值 计算数据
     * @param sum2 number //总长数值
     * @param sumTxt number // 动态变化数值 显示数据 若不传显示sum1
     * @param sumTxt2 number // 动态变化数值 显示数据 若不传显示sum2
     */
    drawCanvas2:function (id,sum1,sum2,sumTxt,sumTxt2) {
        setTimeout(function () {
            var num=true;
            if(sum2 ===0)
            {
                sum2 = 1;
                num = false;
            }

            // 实例化
            var canvas=document.getElementById(id);

            // 设置画布大小，画布大小及样式大小均默认300*150 (px)
            canvas.width=1536;
            canvas.height=150;

            // 图形1 参数 var [x,y,x,h]=[1400,80,68,35]
            var w = 1400;
            var h = 80;
            var x = 68;
            var y = 35;
            var w1 = w * (sum1/sum2);  //图形2宽度
            var fy=90; //数值y轴

            if(canvas.getContext){
                var context=canvas.getContext("2d");

                // 图形1 绘制
                context.fillStyle="#CCCCCC";
                context.fillRect(x,y,w,h);

                // 图形2 绘制
                context.fillStyle="#FB890E";
                context.fillRect(x,y,w1,h);

                // 文本 color,family,(font,x,y)
                context.fillStyle = "#fff";
                context.font="44px Arial";

                // 文本1
                context.fillText(sumTxt,68,fy);

                // 文本2
                context.fillText(sumTxt2,w1-80,fy);

            }
        })
    },
    /**
     * 画表图（原生），如折线图，比例图等
     * @param tag int ;0//饼状图
     * @param ctrl boolean ;true//打开，false关闭
     * **/
    drawChartNative:function(tag, ctrl) {
        switch (tag)
        {
            case 0 :
            {
                /*
                 var json = {
                 id:,//(必选) 唯一标识符
                 left:,//(可选) 左间距,默认0
                 top:,//(可选) 上间距,默认0
                 width:,//(可选) 宽度,默认屏幕宽度
                 height:,//(可选) 高度,默认屏幕高度
                 bgColor:,//(可选) 背景颜色,默认透明(仅Android)
                 showUnit:,//(可选) 是否显示单位,默认false
                 unit:,//(可选) 单位
                 valueTextColor:,//(可选) 饼状图上值的文本颜色,默认#ffffff
                 valueTextSize:,//(可选) 饼状图上值的字体大小,默认13
                 desc:,//(可选) 描述
                 descTextColor:,//(可选) 描述及图例文本颜色,默认#000000
                 descTextSize:,//(可选) 描述及图例字体大小,默认12
                 showValue:,//(可选) 是否显示value,默认true
                 showLegend:,//(可选) 是否显示图例,默认false
                 legendPosition:,//(可选) 图例显示的位置,取值范围:bottom-饼状图下方;right-饼状图右侧,默认bottom
                 duration:,//(可选) 显示饼状图动画时间,单位ms,默认1000
                 isScrollWithWeb:,//(可选) 是否跟随网页滑动,默认false
                 showTitle:,//(可选) 是否显示title,默认true
                 showPercent:,//(可选) 是否用百分比代替value,默认true
                 showCenter:,//(可选) 是否显示中心圆,默认true
                 centerColor:,//(可选) 中心圆颜色,默认透明
                 centerTitle:,//(可选) 中心标题
                 centerSummary:,//(可选) 中心子标题
                 centerRadius:,//(可选) 中心圆半径百分比,默认40
                 centerTransRadius:,//(可选) 中心圆半透明部分半径,默认42
                 data:[//(必选) 数组
                 {
                 title:,//(必选) 色块名称
                 color:,//(必选) 色块颜色
                 value://(必选) 色块值
                 }
                 ]
                 };
                 */
                var json = {
                    id:2,
                    left:0,
                    top:500,
                    width:800,
                    height:800,
                    bgColor:"#cccccc",
                    showUnit:true,
                    unit:"cc",
                    showCenter:true,
                    centerColor:"#00000000",
                    centerTitle:"我是标题!",
                    centerSummary:"我是子标题",
                    centerRadius:55,
                    centerTransRadius:57,
                    valueTextColor:"#ffffff",
                    valueTextSize:15,
                    desc:"测试饼状图功能",
                    descTextColor:"#000000",
                    descTextSize:9,
                    showTitle:true,
                    showValue:true,
                    showPercent:false,
                    showLegend:true,
                    legendPosition:"bottom",
                    duration:800,
                    data:[
                        {
                            title:"title1",
                            color:"#c12552",
                            value:0.9
                        },
                        {
                            title:"title2",
                            color:"#ff6600",
                            value:0.5
                        },
                        {
                            title:"title3",
                            color:"#f5c700",
                            value:0.6
                        },
                        {
                            title:"title4",
                            color:"#6a961f",
                            value:0.4
                        },
                        {
                            title:"title5",
                            color:"#b36435",
                            value:0.8
                        }
                    ]
                };
                if(ctrl)
                {
                    //打开一个饼状图
                    uexChart.openPieChart(json);
                }
                else
                {
                    uexChart.closePieChart(json);
                }

                break;
            }
        }
    }
};

/**
 * 额外按钮操作（原生）
 * **/
var ButtonOperate = {
    /**
     * 配置信息
     * **/
    config:{
        button:null,//按钮对象
    },
    /**
     * 创建按钮
     * @param paramInfo json,//按钮配置信息
     * @param callbackFunc function,//按钮点击回调函数 callbackFunc（button）,//button为创建的按钮对象
     *
     * paramInfo = {
     * 字段名称               类型	 是否必选	说明
         x:,//	              Number	否	    x坐标
         y:,//	              Number	否    	y坐标
         width:,//	          Number	否        宽
         height:,//	          Number	否	      高
         data:{
         title:,//	          String	否	    按钮内容
         titleColor:,//	       String	否	    按钮内容颜色
         textSize:,//	       String	否	    按钮内容字号
         bgImage:,//	       String	否	    按钮背景图的路径,
         isAlwaysInFront:,//   boolean	否	    是否置顶（显示在屏幕最上层）
         	},//Object	是	按钮数据

       }
     * **/
    createButton:function (paramInfo,callbackFunc) {
        /**
         * 字段名称	类型	是否必选	说明
         x	Number	是	x坐标
         y	Number	是	y坐标
         width	Number	是	宽
         height	Number	是	高
         data	Object	是	按钮数据
         title	String	是	按钮内容
         titleColor	String	是	按钮内容颜色
         textSize	String	是	按钮内容字号
         bgImage	String	是	按钮背景图的路径,支持 wgt:// wgts:// res:// file:// 路径协议详见CONSTANT中PathTypes
         isAlwaysInFront	boolean	否	是否置顶（显示在屏幕最上层）
         * **/
        var param = {
            x:screen.width / 2,
            y:screen.height /2,
            width:200,
            height:90,
            data: {
                title:"button",
                titleColor:"#111111",
                // bgImage:"../../images/load.png",
                textSize:12,
                isAlwaysInFront:true
            }
        };

        param.x = paramInfo.x != undefined ? paramInfo.x : param.x;
        param.y = paramInfo.y != undefined ? paramInfo.y : param.y;
        param.width = paramInfo.width != undefined ? paramInfo.width : param.width;
        param.height = paramInfo.height != undefined ? paramInfo.height : param.height;
        if(paramInfo.data != undefined)
        {
            param.data.title = paramInfo.data.title != undefined ? paramInfo.data.title : param.data.title;
            param.data.titleColor = paramInfo.data.titleColor != undefined ? paramInfo.data.titleColor : param.data.titleColor;
            param.data.bgImage = paramInfo.data.bgImage != undefined ? paramInfo.data.bgImage : param.data.bgImage;
            param.data.textSize = paramInfo.data.textSize != undefined ? paramInfo.data.textSize : param.data.textSize;
            param.data.isAlwaysInFront = paramInfo.data.isAlwaysInFront != undefined ? paramInfo.data.isAlwaysInFront : param.data.isAlwaysInFront;
        }

        // alert(JSON.stringify(param));
        ButtonOperate.config.button = uexButton.create(param);
        // uexButton.open(1001,param.x,param.y,param.width,param.height,JSON.stringify(param.data));//创建按钮
        uexButton.onClick = function(button){
            if(callbackFunc != null && callbackFunc != undefined)
            {
                callbackFunc(button);
                ButtonOperate.closeButton();
            }
        }
    },
    /**
     * 移除按钮
     **/
    closeButton:function () {
        uexButton.close(ButtonOperate.config.button);
    }
};

/**
 * 菜单操作对象（原生）
 * **/
var ActionSheetOperate = {
    /**
     * 底部隐藏菜单
     * @param menuList function,//菜单数组名
     * @param callbackFunc function,//回调函数 callbackFunc(index),index是索引值
     * **/
    menuBottom:function (menuList,callbackFunc) {
        /**
         * 参数名称	参数类型	是否必选	说明
         x	Number	是	x坐标
         y	Number	是	y坐标(已失效,请传0)
         width	Number	是	宽度
         height	Number	是	高度(已失效,请传0)
         jsonData	String	是	按钮内容,形式见下:
         * uexActionSheet.open(x,y,width,height,jsonData)
         * **/

        /**字段名称	类型	是否必选	说明
         actionSheet_style	Object	是	菜单样式关键字
         frameBgColor	String	是	背景色
         frameBroundColor	String	是	边框颜色
         frameBgImg	String	是	背景图
         btnSelectBgImg	String	是	一般按钮,被选中的背景图
         btnUnSelectBgImg	String	是	一般按钮,未被选中的背景图
         cancelBtnSelectBgImg	String	是	取消按钮,被选中的背景图
         cancelBtnUnSelectBgImg	String	是	取消按钮,未被选中的背景图
         textSize	Number	是	文字字号
         textNColor	String	是	一般按钮,未被选中状态下的文字颜色
         textHColor	String	是	一般按钮,被选中状态下的文字颜色
         cancelTextNColor	String	是	取消按钮,未被选中状态下的文字颜色
         cancelTextHColor	String	是	取消按钮,被选中状态下的文字颜色
         actionSheetList	Array	是	菜单选项文字集合
         name	String	是	菜单项名称
         * **/
        var jsonData = {
            actionSheet_style:{
                frameBgColor:"#EAEAEA",//背景色
                frameBroundColor:"#cccccc",//边框颜色
                frameBgImg:"",//背景图
                btnSelectBgImg:"../../images/btn_bg.png",//一般按钮被选中的背景图
                btnUnSelectBgImg:"../../images/btn_bg.png",//一般按钮未被选中的背景图
                cancelBtnSelectBgImg:"../../images/btn_bg.png",//取消按钮 被选中的背景图
                cancelBtnUnSelectBgImg:"../../images/btn_bg.png",//取消按钮 未被选中的背景图
                textSize:44,//文字字号
                textNColor:"#666666",//一般按钮,未被选中状态下的文字颜色
                textHColor:"#666666",//一般按钮,被选中状态下的文字颜色
                cancelTextNColor:"#666666",//取消按钮,未被选中状态下的文字颜色
                cancelTextHColor:"#666666",//取消按钮,被选中状态下的文字颜色
                // actionSheetList:[
                //     {
                //         name:"新浪微博"//item名称
                //     },
                //     {
                //         name:"腾讯微博"//item名称
                //     },
                //     {
                //         name:"分享"//item名称
                //     },
                // ],
                actionSheetList:menuList //按钮数据数组
            }
        };


        /*
        onClickItem //点击item的监听方法
        	索引
    uexActionSheet.onClickItem = function (index) {
        callbackFunc(index);
    }
// alert(screen.height);
    uexActionSheet.open(0,0,screen.width,screen.height,jsonData);
*/

        /* var param1 = {
             statusColor:"#EA7C24",
             indicatorColor:"#ffffff",
             indicatorSelectColor:"#EA7C24",
             tab:{
                 textSize:10,
                 textNColor:"#ffffff",
                 textHColor:"#EA7C24",
                 centerImg:"res://plus2.png",
                 bgColor:"#32394A",
                 data:[
                     {
                         title:"拍照",
                         iconN:"res://tab1.png",
                         iconH:"res://tab1_1.png"
                     },
                     {
                         title:"选取照片",
                         iconN:"res://tab2.png",
                         iconH:"res://tab2_1.png"
                     },
                     {
                         title:"取消",
                         iconN:"res://tab3.png",
                         iconH:"res://tab3_1.png"
                     }
                 ]
             },
             popMenu:{
                 textSize:13,
                 textNColor:"#000000",
                 textHColor:"#dddddd",
                 bgColor:"#66ffffff",
                 bottomDistance:300,
                 data:[]
             }
         };
         var data1 = JSON.stringify(param1);
         uexTabBarWithPopMenu.onTabItemClick = function (json) {
             alert(JSON.stringify(json));
         };
         uexTabBarWithPopMenu.open(data1);*/

        /*  var font = window.screen.width * 0.084;
          var params = {
              "x": 0,
              "y": 0,
              "direction":3,
              "bgColor":'#FFC125',
              "dividerColor":'#FFC125',
              "textColor":'#FFFFFF',
              "textSize":font,
              "data":[
                  {
                      // "icon":'',
                      "text":'拍照'
                  },
                  {
                      // "icon":'res://addcontacts.png',
                      "text":'选择'
                  },
                  {
                      // "icon":'res://scanqrcode.png',
                      "text":'取消'
                  }
              ]
          }
          uexPopoverMenu.openPopoverMenu(JSON.stringify(params));*/
    },
    /**
     * 中央激活菜单
     * @param title string;//头部显示名
     * @param btnList array;//按钮显示菜单列表
     * @param callbackFunc function;//点击回调函数，回传数组列地址
     * **/
    actionSheetCenter:function (btnList, callbackFunc,title) {
        btnList.push("取消");

        var params = {
            title:title != undefined && title != null ? title : "文件",
            cancel:"取消",
            // buttons:"Opt1,Opt2,Opt3,Opt4,Opt5,Opt6"
            buttons:btnList.toString()
        };

        // alert(JSON.stringify(params));
        uexWindow.actionSheet(params,function(index){
            if(callbackFunc != undefined && callbackFunc != null && index < (btnList.length - 1))
            {
                callbackFunc(index);
            }
            // alert("点击了第"+(index+1)+"个按钮");

            // isCloseBrower = true;
            //
            // // document.getElementById("iconBack").src = "../../images/u192.png";
            // // var href = "https://e.honey-lovely.com/honey-lovely/jmkh/new2014/1215clgksuqiu%20(LMS)/res/index.html";
            // var href = data.retData.url;
            // var offsetHeight = document.getElementById("Header").offsetHeight;
            // if(getPlatform(2))
            // {
            //     offsetHeight = offsetHeight / 2;
            // }
            //
            // browerOperate.openPageBrower(href,offsetHeight);
            // browerOperate.getPageTitle(function (title) {
            //     modelComm.set({iconBack:"../../images/u192.png",title:title,iconBackImgWidth:'0.8em'});
            // });
        });
    }
};

/**
 * 字符串处理操作
 * **/
var StringOperate = {
    /**
     * 替换指定位置的字符串
     * @param str string,//需要处理的字符串
     * @param begin number;//替换字符的起始位置,不传就是字符串的第一个字符起
     * @param end number;//替换字符的结束位置,不传就是字符串的长度
     * @param char string;//替换字符
     * **/
    replace:function (str,begin,end,char) {
        str += "";
        begin = begin == undefined || begin == null ? 0 : begin;
        end = end == undefined || end == null ? str.length : end;
        char = char == undefined || char == null ? '*' : char + "";
        var fstStr = str.substring(0,begin);
        var scdStr = str.substring(begin,end);
        var lstStr = str.substring(end,str.length);
        // var matchExp = /\w/g;//'/g'表示全局；本正则字符串是把全局中的'w'替换掉
        var matchExp = /[\s\S]/g;//'/g'表示全局；本正则字符串是把全局中的'w'替换掉
        /* 最开始以为.可以匹配任意字符，后来发现有问题，匹配不了换行符\n
         查了下资料，用[\s\S]匹配可以
         解释：\s空白符，\S非空白符，所以[\s\S]是任意字符*/
        scdStr = scdStr.replace(matchExp,char);

        /*str="5=a,6=b,7=c";
        str=str.replace(/(\d+)=(\w)/g,"$2=$1");
        alert(str);//"a=5,b=6,c=7"*/

        return fstStr + scdStr + lstStr;
    },
    /**
     * 判断是否是数字
     * @apram data,//需要校验的数据
     * return ；//返回true是数字，否则不是
     * **/
    isNumber:function(data) {
        // var reg = new RegExp("^\\d+$");
        var reg = new RegExp("^\\d+(\\.\\d+)?$");
        if(reg.test(data))
        {
            // 返回true是数字，否则不是
            return true;
        }
        else
        {
            //不是数字
            return false;
        }
    },
    /**
     * 数字转化成汉子大写汉字
     * @prama money int,//数字
     * **/
    convertCurrency:function(money) {
        // 汉字的数字
        var cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        // 基本单位
        var cnIntRadice = ['', '拾', '佰', '仟'];
        // 对应整数部分扩展单位
        var cnIntUnits = ['', '万', '亿', '兆'];
        // 对应小数部分单位
        var cnDecUnits = ['角', '分', '毫', '厘'];
        // 整数金额时后面跟的字符
        var cnInteger = '整';
        // 整型完以后的单位
        var cnIntLast = '元';
        // 最大处理的数字
        var maxNum = 999999999999999.9999;
        // 金额整数部分
        var integerNum;
        // 金额小数部分
        var decimalNum;
        // 输出的中文金额字符串
        var chineseStr = '';
        // 分离金额后用的数组，预定义
        var parts;

        if (money === '') {
            return '';
        }

        money = parseFloat(money);

        if (money >= maxNum) {
            // 超出最大处理数字
            return '';
        }

        if (money === 0) {
            chineseStr = cnNums[0] + cnIntLast + cnInteger;
            return chineseStr;
        }
        // 转换为字符串
        money = money.toString();

        if (money.indexOf('.') === -1) {
            integerNum = money;
            decimalNum = '';
        }
        else
        {
            parts = money.split('.');
            integerNum = parts[0];
            decimalNum = parts[1].substr(0, 4);
        }
        // 获取整型部分转换
        if (parseInt(integerNum, 10) > 0)
        {
            var zeroCount = 0;
            var IntLen = integerNum.length;
            for (var i = 0; i < IntLen; i++)
            {
                var n = integerNum.substr(i, 1);
                var p = IntLen - i - 1;
                var q = p / 4;
                var m = p % 4;
                if (n === '0')
                {
                    zeroCount++;
                }
                else
                {
                    if (zeroCount > 0)
                    {
                        chineseStr += cnNums[0];
                    }
                    // 归零
                    zeroCount = 0;
                    chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
                }

                if (m === 0 && zeroCount < 4)
                {
                    chineseStr += cnIntUnits[q];
                }
            }

            chineseStr += cnIntLast
        }

        // 小数部分
        if (decimalNum !== '')
        {
            var decLen = decimalNum.length;
            for (var j = 0; j < decLen; j++)
            {
                var num = decimalNum.substr(j, 1);
                if (num !== '0')
                {
                    chineseStr += cnNums[Number(num)] + cnDecUnits[j];
                }
            }
        }

        if (chineseStr === '')
        {
            chineseStr += cnNums[0] + cnIntLast + cnInteger;
        }
        else if (decimalNum === '')
        {
            chineseStr += cnInteger;
        }

        return chineseStr
    }
};

/**
 * 六棱柱菜单操作(原生)
 * **/
var HexagonalOperate = {
    /**
     * 配置数据
     * **/
    config:{
        value:[],//value成员：{pic:"图片路径,只支持res://协议头",text:"文本内容"}
    },
    /**
     * 打开六棱柱菜单
     * @param value array,//同hexagonalOperate.config.value
     * @param callbackFunc function,//点击回调函数,回传value数组地址
     * @param paramJson json,//六棱柱菜单布局参数
     paramJson = {
            x:'x坐标',
            y:'y坐标',
            width:'宽度',
            height:'高度'
        }
     * **/
    open:function (value,callbackFunc,paramJson) {
        var param = {
            value:value == undefined || value == null ? HexagonalOperate.config.value : value
        };

        var jsonData=JSON.stringify(param);
        uexHexagonal.setPrismParam(jsonData);//设置六棱柱的数据

        //点击item的监听方法
        uexHexagonal.onItemClick = function(index){
            // LoadingOperate.toast("onItemClick" + index);
            uexHexagonal.close();
            if(callbackFunc != undefined && callbackFunc != null)
            {
                callbackFunc(index);
            }
        }

        /**参数名称	参数类型	是否必选	说明
         x	Number	是	x坐标
         y	Number	是	y坐标
         width	Number	是	宽度
         height	Number	是	高度
         * **/
        var pad = 400;
        var x = paramJson != undefined && paramJson.x != undefined ? paramJson.x : DeviceOperate.getOrientation() == 1 || DeviceOperate.config.orientation == 4 ? (screen.width - pad) / 2 : (screen.height - pad) / 2 ;
        var y = paramJson != undefined && paramJson.y != undefined ? paramJson.y : DeviceOperate.config.orientation == 1 || DeviceOperate.config.orientation == 4 ? screen.height * 0.1
            : screen.width * 0.01 ;
        var width = paramJson != undefined && paramJson.width != undefined ? paramJson.width : pad;
        var height = paramJson != undefined && paramJson.height != undefined ? paramJson.height : pad;
        uexHexagonal.open(x,y,width,height);//打开
    }
};

/**
 * 侧滑窗口操作(原生)
 * **/
var SlidingWindowOperate = {
    /**
     * 配置信息
     * **/
    config:{
        leftSliding:{
            width:300,//左滑窗口宽度
            url:null //左滑窗口html文件路径
        },
        rightSliding:{
            width:300,//右滑窗口宽度
            url:null //右滑窗口html文件路径
        },
        animationId:1,
        // bg:"res://service.png"
        // bg:"#000"
    },
    /**
     * 设置侧滑窗口
     * @param leftSlidingPage string,//左滑窗口html文件路径
     * @param rightSlidingPage string,//右滑窗口html文件路径
     * **/
    setSlidingWindow:function (leftSlidingPage,rightSlidingPage) {

        SlidingWindowOperate.config.leftSliding.url =
            leftSlidingPage == undefined || leftSlidingPage == null ?
                SlidingWindowOperate.config.leftSliding.url : leftSlidingPage;
        SlidingWindowOperate.config.rightSliding.url =
            rightSlidingPage == undefined || rightSlidingPage == null ?
                SlidingWindowOperate.config.rightSliding.url : rightSlidingPage;
        uexWindow.setSlidingWindow(SlidingWindowOperate.config);

        /**
         * 是否可用,0:不可用,1:可用
         * **/
        uexWindow.setSlidingWindowEnabled(1);
    },
    /**
     * 打开侧滑窗口
     * @param openSliding int,//0：打开左滑窗口，1：打开右滑窗口
     * **/
    openSlidingWindow:function (openSliding) {
        /**该字符串为JSON格式.
         * 如下mark: (String类型) 必选 左右侧窗口标识,0:左侧,1:右侧,
         * reload: 可选 是否重新加载,1:重新加载
         * **/
        var params  = {
            mark:openSliding == undefined || openSliding == null ? 0 : openSliding,
            reload:1
        };
        uexWindow.toggleSlidingWindow(params);
    },
    /**
     * 关闭侧滑
     * **/
    closeSlidingWindow:function () {
        /**是否可用,0:不可用,1:可用
         * **/
        uexWindow.setSlidingWindowEnabled(0);
    },
}

/**
 * 跨页面通道并且传送数据
 * **/
var ChannelAcrossOperate = {
    /**
     * 配置
     * **/
    config:{
        channelId:"channelId",//通道id
        getChannelDataFunc:null//得到通道数据回调函数
    },
    /**
     * 通道并获取数据
     * @param callbackFunc function;//通道获取数据回调函数
     * @param channelId string;//通道获取数据回调函数 频道唯一标识符,可以不传
     * **/
    channel:function (callbackFunc,channelId) {
        ChannelAcrossOperate.config.channelId =
            channelId == undefined || channelId == null
                ? ChannelAcrossOperate.config.channelId
                : channelId;
        ChannelAcrossOperate.config.getChannelDataFunc =
            callbackFunc == undefined || callbackFunc == null
                ? ChannelAcrossOperate.config.getChannelDataFunc
                : callbackFunc;

        /**
         * 回调
         * **/
        function onNotification(dataJson){
            if(ChannelAcrossOperate.config.getChannelDataFunc != undefined
                && ChannelAcrossOperate.config.getChannelDataFunc != null)
            {
                ChannelAcrossOperate.config.getChannelDataFunc(dataJson);
            }
        }

        uexWindow.onNotification = onNotification;
        uexWindow.subscribeChannelNotification(ChannelAcrossOperate.config.channelId, "onNotification");
    },
    /**
     * 调取通道并获取数据
     * @param callbackFunc function;//通道获取数据回调函数
     * @param channelId string;//通道获取数据回调函数 频道唯一标识符,可以不传
     * **/
    getChannel:function (callbackFunc,channelId) {
        window.uexOnload = function(type){

            if(DeviceOperate.config.onloadFunc != null)
            {
                DeviceOperate.config.onloadFunc();
            }

            ChannelAcrossOperate.channel(callbackFunc,channelId);
        }
    },
    /**
     * 发送数据到通道
     * **/
    sendChannel:function (data) {
        data = typeof(data) == 'object' || data.constructor == Array
            ? JSON.stringify(data)
            : data;

        /**
         * 向调取客户列表的页面发送选择客户
         * **/
        uexWindow.publishChannelNotificationForJson(ChannelAcrossOperate.config.channelId,data);
    }
};

/**
 * 加载操作；toast提示窗；加载条；异步加载js文件
 * **/
var LoadingOperate = {
    /**
     * toast窗口的弹出和关闭（提示窗口）
     * @param msg：提示的内容
     * @param data ,//提示显示时长 data = {

   duration:1000,//显示时长（单位：ms）

        position:5,位置显示在屏幕中的位置
         1: left_top 左上
         2: top 上中
         3: right_top 右上
         4: left 左中
         5: middle 中间
         6: right 右中
         7: bottom_left 下左
         8: bottom 下中
         9: right_bottom 右下

        type:0，是否有经度条
         0: 没有进度条
         1: 有进度条
     * }
     **/
    toast:function(msg,data) {
        var param = {
            msg:msg,
            duration:2000,
            position:5,
            type:0
        };

        if(data != null && data != undefined)
        {
            if(data.duration != null && data.duration != undefined)
            {
                param.duration = data.duration;
            }
            if(data.position != null && data.position != undefined)
            {
                param.position = data.position;
            }
            if(data.type != null && data.type != undefined)
            {
                param.type = data.type;
            }

        }
        /**
         * msg：提示的内容
         duration：toast窗口显示的时间，单位毫秒
         position：位置 5 为中间
         type：0 没有菊花圈，1 有菊花圈
         **/
        return appcan.window.openToast(param);
        // appcan.window.openToast(msg,length,5,0);
    },
    /**
     * 加载条 startBool 为true开始，false关闭
     * @param startBool bool; 为true开始，false关闭,默认为启动加载条
     * @param tag int;undefine：加载条，锁屏；1：全局对话框，不锁屏,可同时操作其他的;
     * @param msg string;undefine：全局对话框，不锁屏,可同时操作其他的,显示默认信息；否则显示自定义信息
     * **/
    loadingCircle:function(startBool,tag,msg) {
        setTimeout(function () {
            PlatformOperate.verifyPlatform2(function () {
                if(PlatformOperate.getPlatform(1) || PlatformOperate.getPlatform(2))
                {
                    if(startBool ){
                        if(tag == undefined)
                        {
                            uexLoadingView.openCircleLoading();

                        }
                        else if(tag == 1)
                        {
                            msg == undefined ? '正在加载,请稍候...' : msg;
                            uexWindow.createProgressDialog({
                                title:'',
                                msg:msg,
                                canCancel:0
                            });
                        }
                    }
                    else
                    {
                        if(tag == undefined)
                        {
                            uexLoadingView.close();
                        }
                        else if(tag == 1)
                        {
                            uexWindow.destroyProgressDialog();
                        }
                    }
                }
            },null);
        },0);

        /*var params = {
            "x":20,
            "y":20,
            "w":300,
            "h":40,
            "style":
                {
                    "styleId":0,
                    "pointNum":4,
                    "pointColor":["#ff4444", "#ffbb33", "#99cc00", "#33b5e5"]
                }
        };
        uexLoadingView.open(JSON.stringify(params));*/
    },
    /**
     * 异步加载js文件
     * @param url string //js文件路径
     * @param callBack string 回调函数；回传e,e为状态数据
     * **/
    loadedJsAsync:function(url, callBack) {
        /**
         * url为js的链接，callBack为url的js中的函数（该函数调用应该写到匿名函数中，
         * 如function(){console.log(div.getScrollOffset())}）
         * **/
        var script = document.createElement('script');
        script.type = 'text/javascript';
        /*if else 这几句话必须要写到这位置处，不能放最后，因为if中js加载中script.readyState存在好几种状态，
         只有状态改变‘readystatechange’事件才会触发，但现在浏览器加载速度很快，当解析到该事件时JS有可能已经加载完，
         所以事件根本不会触发，所以要写到前面*/
        if (script.readystate) { //兼容IE
            script.onreadystatechange = function(e) { //状态改变事件才触发
                if (script.readyState == 'loaded' || script.readyState == 'complete') {
                    callBack&&callBack(e);
                    script.onreadystatechange = null;
                }
            }
        } else {
            script.onload = function(e) {
                callBack&&callBack(e);
            }
        }
        script.src = url;
        document.body.appendChild(script);
        // return "jj";
    }
};

LocalStoreOperate.setIsRefresh();
window.onload = function () {
    setTimeout(function () {
        PlatformOperate.verifyPlatform(function () {
            /**
             * 设置video标签是否可以内嵌播放
             * @param bool boolean;//true:允许内嵌播放，false:禁止内嵌播放;默认设置true
             */
            uexWindow&&uexWindow.setInlineMediaPlaybackEnable(true);
        });
    },1000);
};

/**
 * 图片不存在显示默认图片
 * @param imgPath string;//图片路径
 * **/
/*function nofind(imgPath){
    var img = event.srcElement;
    img.src = imgPath == undefined ? "../../images/nimg.jpg" : imgPath;
    img.onerror = null; //控制不要一直跳动
}*/










