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

### [我的博客](http://blog.sina.com.cn/s/articlelist_6078695441_0_1.html)
