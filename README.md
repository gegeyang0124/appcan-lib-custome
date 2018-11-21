# appcan-lib-custome
js库，运行于浏览器中，部分注释中写着“原生”的方法、函数
需要在appcan框架内才有效<br>
支持ajax网络请求（post和get等等）,文件上传、下载;

##### 注意：
以下方法可查看源文件，里面有方法(函数)的参数和返回数据的详细注解。

### Http（http.js） 网路请求，引入http.js
```html
<script src="http.js"></script>
<script>
Http.post();//请求网路接口 Post
Http.get();//请求网路接口 Get
Http.urlFile = "";//文件上传接口
Http.upFileToService();//上传文件到服务器
</script>
```

### PlatformOperate 平台验证操作，可获取在什么平台，主要是Android/ios/浏览器，引入tools.js
````html
<script src="tools.js"></script>
<script>
PlatformOperate.isPhone;//是否是手机
PlatformOperate.getPlatform();//获取当前平台
PlatformOperate.verifyPlatform2();//验证平台，并且提示信息
PlatformOperate.verifyPlatform();//验证平台，并且提示信息
</script>
````

### ScrollPositonOperate 获取滚动页面的滚动位置，或滚动到指定位置，浏览器滚动操作，引入tools.js
````html
<script src="tools.js"></script>
<script>
ScrollPositonOperate.posion;//记录滚动位置
ScrollPositonOperate.scrollTo();//滚动到指定位置
ScrollPositonOperate.getScrollPostion();//获取滚动位置
ScrollPositonOperate.onScroll();//滚动监听方法，不断调用
ScrollPositonOperate.getContTagHeight();//获取内容标签的高度
ScrollPositonOperate.scroll();//上下滚动，事件 appcan
</script>
````

### PageGuideOperate 页面跳转 传值和取值的函数集，引入tools.js
````html
<script src="tools.js"></script>
<script>
PageGuideOperate.openPageFullPath();//打开页面 全路径
PageGuideOperate.openPageData();//打开页面 并且传递数据
PageGuideOperate.closePage();//关闭页面
PageGuideOperate.closePageData();//关闭页面
PageGuideOperate.getHrefData();//通过本地跳转传参时，返回数据
PageGuideOperate.refreshBack();//返回上一页刷新
</script>
````

### LocalStoreOperate 本地存储操作，引入tools.js
````html
<script src="tools.js"></script>
<script>
LocalStoreOperate.setData();//保存数据
LocalStoreOperate.getData();//获取数据，若是子字符串则返回子字符串，若是json数据则返回json对象
LocalStoreOperate.setIsRefresh();//设置返回是否刷新
LocalStoreOperate.getIsRefresh();//获取是否刷新
LocalStoreOperate.setIsForceRefresh();//设置是否强制刷新
LocalStoreOperate.getIsForceRefresh();//获取是否强制刷新
LocalStoreOperate.getRefreshData();//获取刷新回传数据
</script>
 ````
 
 ### DeviceOperate 设备操作，引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 DeviceOperate.config;//配置信息
 DeviceOperate.orientationChange();//屏幕变化监听事件
 DeviceOperate.orientationCge();//初始化横竖屏切换回调函数
 DeviceOperate.setOrientation();//设置屏幕方向
 DeviceOperate.getOrientation();//获取当前屏幕方向
 DeviceOperate.getInternetInfo();//是否链接网络(internet)
 DeviceOperate.reloadCurrentWindow();//当前窗口重载
 DeviceOperate.reStart();//app重启或页面重载
 </script>
  ````
  
 ### BrowerOperate 浏览器组件操作，引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 BrowerOperate.config;//浏览器配置数据
 BrowerOperate.openPageBrower();//打开外部网页
 BrowerOperate.closePageBrower();//关闭外部网页
 BrowerOperate.getPageTitle();//获取标题
 </script>
  ````
  
 ### DialogOperate 对话框操作对象，引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 DialogOperate.alr();//对话框
 DialogOperate.alr2();//对话框
 DialogOperate.alrBtn2();//对话框 2个按钮
 DialogOperate.alrBtn22();//对话框,2个按钮
 DialogOperate.alrBtn();//对话框 多个按钮
  ````
  
 ### ShowHideEleOperate 显示影藏元素，引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 ShowHideEleOperate.eleIdArr;//元素id数组
 ShowHideEleOperate.showId;//显示id
 ShowHideEleOperate.showIdArr;//显示id数组
 ShowHideEleOperate.showHideEleCtrl();//显示影藏元素
 ShowHideEleOperate.showEle();//需要显示的元素
  ````
  
 ### PopoverOperate 浮动窗口操作，引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 PopoverOperate.openPopoverFullPath();//打开一个浮动框
 PopoverOperate.openPopoverDataFullPath();//打开一个浮动框 并且传递数据
  ````

 ### ImgOperate 图片操作，引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 ImgOperate.pickImg();//选择图片 （原生）
 ImgOperate.openBrowserImg();//打开图片浏览器
 ImgOperate.saveToPhotoAlbum();//保存图片到图库 不支持网络图片
 ImgOperate.saveToSysPhotoAlbum();//保存图片到图库 不支持网络图片
 ImgOperate.takePicture();//拍照，（原生）
 ````
 
 ### SwipeOperate 上下左右滑动监控,上拉加载更多，下拉刷新等，引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 SwipeOperate.config;//配置信息
 SwipeOperate.upOrDownRefresh();//下拉刷新,上拉加载 (原生)
 SwipeOperate.swipeLeftAndRight();//向左滑动监听方法
 SwipeOperate.swipeLefRigUpDwn();// 左右上下滑动监听事件(原生)
 SwipeOperate.closeSpringingView();//关闭弹动
 SwipeOperate.startSringingView();//开启弹动
 SwipeOperate.closeSpringingViewInNoData();//没有数据时，关闭弹动
 SwipeOperate.hiddenSpringingView();//隐藏弹动效果
 SwipeOperate.setIsSupportSlideCallback();//设置网页是否支持滑动的相关监听方法
  ````
  
 ### SwipeOperateJS 上下左右滑动监控(JS)，引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 SwipeOperateJS.swipeLefRigUpDwn();//左右上下滑动监听事件(JS)
 SwipeOperateJS.swipeUp();//上滑动监听事件(JS)
 SwipeOperateJS.upOrDownrefreshJS();//下拉刷新,上拉加载
  ````
  
 ### TimerOperate 时间选择 时间/日期格式转化 使用时先引入moment.js，引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 TimerOperate.timeFormatConvert();//时间格式转化
 TimerOperate.daysNumberofMonth();//获取传入时间当月的天数（公历）
 TimerOperate.daysNumberofDate();//获取传入时间的年初到传入时间已经过了多少天（公历）
 TimerOperate.weekConert();//星期几的数字转化为汉字
 TimerOperate.getTimeByRank();//获取本周周一和周日的时间戳 对象；或，获取本月的月初的时间戳和月底的时间戳 对象
 TimerOperate.dateSel();//选择日期
  ````
  
 ### DownloaderMgr 下载管理器，下载操作！，引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 DownloaderMgr.config;//配置信息
 DownloaderMgr.downloadFile();//下载文文件
 DownloaderMgr.cancelDownload();//取消下载
 DownloaderMgr.closeDownloader();//关闭下载对象
  ````
  
 ### MediaMgrOperate 操作视频 （原生），引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 MediaMgrOperate.config;//多媒体操作对象配置
 MediaMgrOperate.recordVideo();//录制视频
 MediaMgrOperate.playVideo();//播放视频
 MediaMgrOperate.closeVideo();//关闭播放器
 MediaMgrOperate.pickVideo();//选择视频
 MediaMgrOperate.takeAuto();//录音，（原生）
 MediaMgrOperate.playAuto();//播放或关闭录音，（原生）
 MediaMgrOperate.scaner();//扫描二维码和条形码,
  ````
  
 ### FileMgrOperate 文件操作 （原生）,打开文件（office类的等文件），解压文件，删除文件或文件夹，引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 FileMgrOperate.openDocument();//打开文档
 FileMgrOperate.selectFiles();//打开文件浏览器（原生）
 FileMgrOperate.searchFiles();//搜索指定文件夹下的文件 （原生）
 FileMgrOperate.readerDocument();//文档阅读Document阅读器,是用来阅读Office文件的,包括PPT幻灯片,Excel表格,.doc或.docx文档,以及txt,pdf格式文件的. （原生）
 FileMgrOperate.unzip();//解压文件（原生）
 FileMgrOperate.getFileSizeByPath();//uexFileMgr.getFileSizeByPath(params,cb) //获取文件大小
 FileMgrOperate.deleteFileByPath();//deleteFileByPath(path) //根据路径删除文件
 FileMgrOperate.deletefolderByPath();//deleteFolderByPath(path) //根据路径删除文件夹及子文件
 FileMgrOperate.isFileExistByPath();//文件是否存在
 FileMgrOperate.readFileData();//读取文件文件数据流
````

 ### LocationOperate 地理定位操作 （原生/Js），引入tools.js
 ````html
 <script src="tools.js"></script>
 <script>
 LocationOperate.locationData;//上一次定位数据
 LocationOperate.getLocation();//得到定位
 LocationOperate.getLocationHide();//得到定位 不显示提示信息
 LocationOperate.closeLocation();//关闭定位
 LocationOperate.getGeoAddress();//获取逆地址（地理地址）
 LocationOperate.isStartLocationService();//是否开启位置服务
 LocationOperate.getLocationJS();//地理定位 （JS）
````

### [我的博客](http://blog.sina.com.cn/s/articlelist_6078695441_0_1.html)
