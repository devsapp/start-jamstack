# 基于antd-pro 的 Jamsatck站点 
## 前置条件
配置好阿里云的秘钥信息
## 快速开始

填写好自定义二级域名（一级域名为固定 resume.net.cn）,执行指令
```
s deploy
```
访问返回的 <自定义域名>.resume.net.cn </br>
需要登录的话可以按照提示输入账号密码 user/ant.design 




## 目录结构说明

-- config  // 配置文件，包含站点的静态文档配置以及站点应用的重定向配置
-- frontend // 前端工程，使用antd pro 构建， 适配了一下后端的api 接口
-- api  // 后端工程，采用函数写法，直接部署到 fc 上，包含5个接口，mock 数据


## 配置说明
### 配置基本信息包含 vars 下面的三个变量
domain: <xxx>  // 域名信息,必填
frontendSouceCode: frontend  // 前端工程代码 ，必填
myapiSourceCode: myapi // api 代码 ， 必填

### 三个服务
api 管理发布api
website 管理发布静态站点
markdownContent 管理发布静态markdown文档

三个服务可以进行全量部署，会自动解析相关的依赖，比如 website依赖 api 的结果输出，如果你做单独部署的话，可以保存api 返回的域名直接替换 proxyUrl

其他的服务都可以独立部署