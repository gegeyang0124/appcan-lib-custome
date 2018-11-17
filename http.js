var Http = {
    /**
     * 配置信息
     * **/
    config:{
        urlFile:null,//文件上传接口
        uploader:null//文件上传对象
    },
    /**
     * 请求网路接口 Post
     * @param url string,//请求路径
     * @param requestData json,//请求参数
     * @param func function,//请求成功回调函数
     * @param funcErr function,//请求失败报错
     * @param dataType string,//接受后台数据的类型
     * @param isPrompt boolean,//是否提示加载条，undefined（不传）显示加载条，否则不显示
     * @param funcErrQuery function,//请求成功，后台查询报错回调函数
     * **/
    post:function(url,requestData, func, funcErr,isPrompt,funcErrQuery) {
        return Http.request(url,requestData, func, funcErr,"POST","json",isPrompt,funcErrQuery);
    },
    /**
     * 请求网路接口 Get
     * @param url string,//请求路径
     * @param requestData json,//请求参数
     * @param func function,//请求成功回调函数
     * @param funcErr function,//请求失败报错
     * @param dataType string,//接受后台数据的类型
     * @param isPrompt boolean,//是否提示加载条，undefined（不传）显示加载条，否则不显示
     * @param funcErrQuery function,//请求成功，后台查询报错回调函数
     * **/
    get:function(url,requestData, func, funcErr,isPrompt,funcErrQuery) {
        return Http.request(url,requestData, func, funcErr,"GET","json",isPrompt,funcErrQuery);
    },
    /**
     * 上传文件到服务器
     * @param fileSource array,//文件数据源
     * @param index number,//开始上传的数组地址
     * @param callbackFunc function,//文件上传完毕回调函数
     fileSource = [{id:'文件id',
  localPath:'文件本地路径，即需要上传的路径'，
  serviceData：'服务器回传数据
  },....]
     * **/
    upFileToService:function(fileSource,index,callbackFunc) {
        fileSource = fileSource == undefined ? fileSource : [];
        index = index == undefined ? index : 0;

        Http.uploadFile2(true, fileSource[index].localPath, function (data) {
            // alert(JSON.stringify(data));alert(data.serviceData);alert(data.serviceData.retData.fileUrl);
            Http.toast("第" + (index + 1) + "张图片，上传成功", {
                duration: 1000,
                position: 5,
                type: 0
            });
            fileSource[index].serviceData = data.serviceData;
            index++;
            if (index == fileSource.length && callbackFunc) {
                callbackFunc(fileSource);
            }
            else {
                setTimeout(function () {
                    Http.upFileToService(fileSource, index, callbackFunc);
                }, 1000);
            }
        });
    },


    /**
     * 加载条 startBool 为true开始，false关闭
     * @param startBool bool; 为true开始，false关闭,默认为启动加载条
     * @param tag int;undefine：加载条，锁屏；1：全局对话框，不锁屏,可同时操作其他的;
     * @param msg string;undefine：全局对话框，不锁屏,可同时操作其他的,显示默认信息；否则显示自定义信息
     * **/
    loading:function(startBool,tag,msg) {

        setTimeout(function () {
            if(!(window.navigator.userAgent.indexOf('Brewer') >= 0))
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
        },0);

        // var params = {
        //     "x":20,
        //     "y":20,
        //     "w":300,
        //     "h":40,
        //     "style":
        //         {
        //             "styleId":0,
        //             "pointNum":4,
        //             "pointColor":["#ff4444", "#ffbb33", "#99cc00", "#33b5e5"]
        //         }
        // };
        // uexLoadingView.open(JSON.stringify(params));

    },
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
        /** msg：提示的内容
         duration：toast窗口显示的时间，单位毫秒
         position：位置 5 为中间
         type：0 没有菊花圈，1 有菊花圈
         **/
        return appcan.window.openToast(param);
        // appcan.window.openToast(msg,length,5,0);

    },
    // /**文件上传 (原生)
//  * @param id number// 上传对象的唯一标识，
//  * @param filePath string// 文件路径，
//  * @param upOrClose bollean  //  true创建上传对象，false关闭上传对象
//  *  @param func function  //  成功回调函数
//  *  @param funcStaus function  //  上传状态的监听方法
//  *
//  * **/
// function uploadFile(upOrClose,id,filePath,funcStaus,func) {
//
//     if(upOrClose && getPlatform(3)){
//         httpRequest(urlSets.urlFileToken,{},function (data) {
//             // alert(JSON.stringify(data));
//             // alert(JSON.stringify({token:data.retData.token}));
//             // var headJson = '{"Data-type":"json"}';
//             uexUploaderMgr.createUploader(id, urlSets.urlFile);// + "?token=" + accountInfo().token + "&Filedata="
//             // uexUploaderMgr.createUploader(id, "http://120.76.26.60:8188/xcb/api/personalInfo/personalInformationUpload");
//             uexUploaderMgr.setHeaders(id, JSON.stringify({token:data.retData.token}));
//             uexUploaderMgr.uploadFile(id, filePath, "Filedata", 3);
//             // uexUploaderMgr.cbCreateUploader = func(id, dataType, data);
//             uexUploaderMgr.cbCreateUploader = function (opId, dataType, data) {
//
//                 /** opId	Number	是	操作ID,在此函数中不起作用,可忽略
//                  dataType	Number	是	参数类型详见CONTANT中Callback dataType 数据类型
//                  data	Number	是	返回uex.cSuccess或uex.cFailed,详见CONTANT中CallbackInt类型数据
//                  **/
//                 func(opId, dataType, data);
//
//             };
//             // uexUploaderMgr.onStatus = funcStaus(id, fileSize, percent, serverPath, status);
//
//             if(funcStaus != null && funcStaus != undefined)
//             {
//                 /**opId	Number	是	上传对象唯一标识符
//                  fileSize	Number	是	文件大小
//                  percent	Number	是	上传文件的百分比
//                  serverPath	String	是	服务器上的路径
//                  status	Number	是	上传的状态,详见CONSTANT中UpLoadStatus**/
//                 uexUploaderMgr.onStatus = function (opId, fileSize, percent, serverPath, status) {
//                     funcStaus({opId:opId, fileSize:fileSize, percent:percent, serviceData:JSON.parse(serverPath), status:status});
//                 };
//             }
//         });
//
//     }
//     else if(!upOrClose && getPlatform(3))
//     {
//         uexUploaderMgr.closeUploader(id);
//     }
//     else
//     {
//         alr2("需要安装app才能上传文件！");
//     }
// }
    /**
     * 文件上传 (原生)
     * @param id number// 上传对象的唯一标识，
     * @param filePath string// 文件路径，
     * @param upOrClose bollean  //  true创建上传对象，false关闭上传对象
     *  @param func function  //  成功回调函数 ,android有效
     *  @param funcStaus function  //  上传状态的监听方法
     *
     * **/
    uploadFile:function(upOrClose,id,filePath,funcStaus,func) {

        if(!(window.navigator.userAgent.indexOf('Brewer') >= 0))
        {
            if(upOrClose){
                if(window.navigator.userAgent.indexOf('OS') >= 0)
                {
                    /**字段名称	类型	是否必选	说明
                     url	String	是	要上传的服务器地址
                     type	Number	否	uploader类型, 0: 一般上传对象 1: 全局上传对象 2: 后台上传对象.此参数不传时默认为0.
                     type:
                     全局上传对象在当前网页关闭时不会停止上传
                     后台上传对象是全局上传对象,且当应用处于后台时,仍然可以进行上传
                     返回值:

                     上传对象实例 创建失败时返回null
                     * **/
                    var param = {
                        url:Http.config.urlFile,
                        type:0
                    };

                    Http.config.uploader = uexUploaderMgr.create(param);
                    var headJson = {
                        // "token":data.retData.token
                    };
                    var ret = uexUploaderMgr.setHeaders(Http.config.uploader, JSON.stringify(headJson));
                    uexUploaderMgr.uploadFile(Http.config.uploader, filePath,
                        "Filedata", 0, 640,
                        function(packageSize, percent, responseString, status){
                            if(funcStaus){
                                funcStaus({
                                    // opId:opId,
                                    fileSize:packageSize,
                                    percent:percent,
                                    serviceData:responseString,
                                    status:status
                                });
                            }
                        });
                }
                else
                {
                    uexUploaderMgr.createUploader(id, Http.config.urlFile);// + "?token=" + accountInfo().token + "&Filedata="
                    // uexUploaderMgr.createUploader(id, "http://120.76.26.60:8188/xcb/api/personalInfo/personalInformationUpload");
                    // uexUploaderMgr.setHeaders(id, JSON.stringify({token:data.retData.token}));
                    uexUploaderMgr.uploadFile(id, filePath, "Filedata", 0);
                    // uexUploaderMgr.cbCreateUploader = func(id, dataType, data);
                    uexUploaderMgr.cbCreateUploader = function (opId, dataType, data) {

                        /** opId	Number	是	操作ID,在此函数中不起作用,可忽略
                         dataType	Number	是	参数类型详见CONTANT中Callback dataType 数据类型
                         data	Number	是	返回uex.cSuccess或uex.cFailed,详见CONTANT中CallbackInt类型数据
                         **/
                        if(func){
                            func(opId, dataType, data);
                        }
                    };
                    // uexUploaderMgr.onStatus = funcStaus(id, fileSize, percent, serverPath, status);

                    if(funcStaus != null && funcStaus != undefined)
                    {
                        /**opId	Number	是	上传对象唯一标识符
                         fileSize	Number	是	文件大小
                         percent	Number	是	上传文件的百分比
                         serverPath	String	是	服务器上的路径
                         status	Number	是	上传的状态,详见CONSTANT中UpLoadStatus**/
                        uexUploaderMgr.onStatus = function (opId, fileSize, percent, serverPath, status) {
                            funcStaus({
                                opId:opId,
                                fileSize:fileSize,
                                percent:percent,
                                serviceData:serverPath,
                                status:status
                            });
                        };
                    }
                }
            }
            else
            {
                // uexUploaderMgr.closeUploader(id);
                uexUploaderMgr.closeUploader(uploader)
            }
        }
        else
        {
            Http.toast("需要安装app才能上传文件！");
        }
    },
    /**
     * 文件上传 (原生)
     * @param filePath string// 文件路径，
     * @param upOrClose bollean  //  true创建上传对象，false关闭上传对象
     *
     *  @param func function  //  成功回调函数 func(data);data为0成功，否则失败

     *  @param funcStaus function  //  上传状态的监听方法,可以不传入

     * **/
    uploadFile2:function(upOrClose,filePath,funcStaus,func) {
        // loading(true);
        Http.uploadFile(upOrClose,1,filePath,function (dataObj) {

            Http.toast("上传进度" + dataObj.percent + "%",{duration:0,
                position:5,
                type:1});

            switch (dataObj.status) {
                case 0:
                    break;
                case 1:
                    // loading(false);
                    Http.uploadFile(false,1);
                    /*dataObj.serviceData["retData"] = {
                        fileUrl:dataObj.serviceData.data.url
                    };*/
                    if(funcStaus){
                        funcStaus(dataObj);
                    }

                    break;
                case 2:
                    Http.toast("文件上传失败");
                    break;
            }

        },func);
    },
    /**
     * 网络请求或本地请求
     * @param url string,//请求路径
     * @param requestData json,//请求参数
     * @param func function,//请求成功回调函数
     * @param funcErr function,//请求失败报错
     * @param type string,//请求类型post或get
     * @param dataType string,//接受后台数据的类型
     * @param isPrompt boolean,//是否提示加载条，undefined（不传）显示加载条，否则不显示
     * @param funcErrQuery function,//请求成功，后台查询报错回调函数
     * **/
    request:function (url,requestData, func, funcErr,type,dataType,isPrompt,funcErrQuery) {
        // alert(isPrompt);
        if(isPrompt == undefined)
        {
            Http.loading(true);
        }

        // var http = appcan.request.ajax({
        // var http = appcan.ajax({
        var http = $.ajax({
            url: url,
            type: type,
            data: requestData,
            dataType: dataType,
            timeout : 30000, //超时时间设置，单位毫秒
            // contentType: "application/x-www-form-urlencoded",
            contentType: "application/json",
            complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
                if(status=='timeout'){//超时,status还有success,error等值的情况
                    toastInfo("请求超时,请检查网路");
                    if(isPrompt == undefined)
                    {
                        Http.loading(false);
                    }
                    http.abort();
                }
            },
            beforeSend:function (http) {
                // http.setRequestHeader("token", accountInfo().token);

            },
            success: function(data) {

                console.log("-----------------------------------------httpRequest " + url + " success start-------------------------------------");
                console.info("requestData:",requestData);
                console.log(data);
                console.log("-----------------------------------------httpRequest " + url + " success end-------------------------------------");
                if(isPrompt == undefined)
                {
                    Http.loading(false);
                }

                func(data);
            },
            error: function(e, err,errorThrown, msg) {
                if(isPrompt == undefined)
                {
                    Http.loading(false);
                }
                // alert("e");
                console.log("-----------------------------------------httpRequest " + url + " error-------------------------------------");
                console.info("requestData:",requestData);
                console.info("e:",e);
                console.info("status:" ,e.responseStatusCode);
                console.info("readyState:", e.readyState);
                console.info("err:",err);
                console.info("errorThrown:",errorThrown);
                console.info("msg:",msg);

                if(err != 'timeout')
                {
                    Http.toast("请求失败,请检查网路或联系管理员");
                }

                // setTimeout(function () {
                //     openPageData2("infoShopText2",{
                //         content:msg == null || msg == 'null' ? err : msg,
                //         title0:'错误页'
                //     });
                // },0);

                console.log("-----------------------------------------httpRequest " + url + " error end-------------------------------------");


                if(funcErr != null && funcErr != undefined)
                {
                    funcErr(e, err);
                }
            }
        });

        return http;
    },
    /**
     * 提交表单
     * @param func function;//回调函数
     * **/
    postForm:function(func) {
        // $("form").on('submit', function() {
        // appcan.request.postForm($("form"), function(data){
        $.postForm($("form"), function(data){
            if(typeof data == 'string'){
                data = JSON.parse(data);
            }
            console.log("postForm:  " + JSON.stringify(data));

            if(data.state == 0){
                func(data);
            }
            else
            {
                Http.toast("后台报错：" + data.msg);
            }

            // //数据正常提交到服务器，也正常返回，但模拟器上，无法进入此函数
            // var data = eval("(" + str + ")");
            // if (data.code == true) {
            //     //登录成功后，把session_id保存,用于与服务器交互时使用
            //     // var storage = window.localStorage;
            //     if (storage) {
            //         // storage.setItem('session_id', data.session_id);
            //     }
            //
            //     var rem = $("#remember_me").attr("checked");
            //     if (rem == true) {
            //         // storage.setItem("uid", $("#uid").val());
            //     }
            //     appcan.window.open("desk", 'desk.html', 5);
            // } else {
            //     appcan.window.openToast(data.msg, '2000');
            // }
        },function(err){
            console.log(err);
            // alert("err");
            //数据正常提交到服务器，也正常返回，但模拟器上，进入此处，不知为何？
        });
    },
    /**
     * 请求本地或网络文件
     * **/
    getFile:function(url,func, funcErr) {

        // var http = appcan.request.ajax({
        // var http = appcan.ajax({
        var http = $.ajax({
            url: url,
            type: "get",
            data: "",
            dataType: "json",
            timeout : 10000, //超时时间设置，单位毫秒
            // contentType: "application/x-www-form-urlencoded",
            // contentType: "application/json",
            complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
                if(status=='timeout'){//超时,status还有success,error等值的情况
                    http.abort();
                    Http.toast("请求超时");
                }
            },
            success: function(data) {
                console.log("-----------------------------------------httpRequest " + url + " success-------------------------------------");
                console.log(data);
                console.log("-----------------------------------------httpRequest " + url + " success end-------------------------------------");
                if(func != null && func != undefined)
                {
                    func(data);
                }
            },
            error: function(e, err,errorThrown, msg) {
                // alert(JSON.stringify(msg));

                // alert("e");
                console.log("-----------------------------------------httpRequest " + url + " error-------------------------------------");
                console.log("e:");
                console.log(e);
                console.log("status:" + e.responseStatusCode);
                console.log("readyState:" + e.readyState);
                console.log("err:");
                console.log(err);
                console.log("errorThrown:");
                console.log(errorThrown);
                console.log("msg:");
                console.log(msg);

                console.log("-----------------------------------------httpRequest " + url + " error end-------------------------------------");


                if(funcErr != null && funcErr != undefined)
                {
                    funcErr(e, err);
                }
            }

        });
    }
};

