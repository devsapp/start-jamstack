# 使用Serverless Devs 快速构建性能极致的jamstack站点


## 快速开始 - serverless desktop篇


### 安装 serverless desktop


访问 [www.serverless-devs.com](www.serverless-devs.com) 下载对应版本的客户端工具
​

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/13970/1628146131923-d77b73da-e59d-400b-9493-f002e10986a7.png#clientId=u4e9160e0-9f02-4&from=paste&height=587&id=ud17a9307&margin=%5Bobject%20Object%5D&name=image.png&originHeight=587&originWidth=1648&originalType=binary&ratio=1&size=363771&status=done&style=none&taskId=u5d460912-ab3f-4b0e-a5ac-6dc8dc5e533&width=1648)


### 进入serverless hub 选择 start-jamstack 模板
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/13970/1628146148645-67dfc06d-e6da-4c29-b3ef-688d45152e78.png#clientId=u4e9160e0-9f02-4&from=paste&height=1830&id=u34072f89&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1830&originWidth=2700&originalType=binary&ratio=1&size=933217&status=done&style=none&taskId=uad08a5cb-6b10-475d-95aa-fd4a6768e7d&width=2700)
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/13970/1628146204799-245e2ca1-4777-4f47-9109-9fb018fb0bc6.png#clientId=u4e9160e0-9f02-4&from=paste&height=1830&id=u3f18db21&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1830&originWidth=2700&originalType=binary&ratio=1&size=1442473&status=done&style=none&taskId=u03739346-613c-4e44-add1-b0efd27f583&width=2700)
### 填写预配置项-二级域名
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/13970/1628146603533-5dc0e8a3-7e10-43ae-8bb1-2a57a3f5971f.png#clientId=u4e9160e0-9f02-4&from=paste&height=1830&id=ue6a39f8b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1830&originWidth=2700&originalType=binary&ratio=1&size=852674&status=done&style=none&taskId=u0a685e8e-d418-44cf-8ea6-a69e9931b2d&width=2700)


### 执行部署操作
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/13970/1628146652301-c83a72dd-9ce7-4a34-8390-762a084ef9b6.png#clientId=u4e9160e0-9f02-4&from=paste&height=1830&id=u2f034b78&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1830&originWidth=2700&originalType=binary&ratio=1&size=1329888&status=done&style=none&taskId=u7fd0018b-ce67-4a4f-acd0-9b642d03acb&width=2700)
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/13970/1628146672177-9bf32131-9525-4702-85ea-f755aea53f85.png#clientId=u4e9160e0-9f02-4&from=paste&height=1830&id=u829001fe&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1830&originWidth=2700&originalType=binary&ratio=1&size=1618645&status=done&style=none&taskId=u69adf6a7-58e1-4966-838a-ed3fcf7dba6&width=2700)


注意：域名生效可能会有一些时间，如果结果提示没有问题，站点没有办法访问，可以再次部署一次
### 预览运维
成功后可以直接访问 域名查看效果，如果想继续进行代码的更改 可以打开源码修改。
后续可以在 工作空间 部分进行维护，包括站点性能测试，安装站点监控，压力测试等
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/13970/1628146809020-ca8cbfe9-2817-4cfb-b3b7-3be80a9a4407.png#clientId=u4e9160e0-9f02-4&from=paste&height=1830&id=ue0df5c61&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1830&originWidth=2700&originalType=binary&ratio=1&size=689045&status=done&style=none&taskId=u1b1cd0f5-81e5-40ab-b8ea-a251d0371d4&width=2700)
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/13970/1628146846535-3749eb8c-eaff-4d05-8904-4d44cff67de1.png#clientId=u4e9160e0-9f02-4&from=paste&height=2052&id=ua5b3097d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=2052&originWidth=3584&originalType=binary&ratio=1&size=1122021&status=done&style=none&taskId=udaccb8b4-7e42-4c94-bac3-7a9537614c5&width=3584)
## 快速开始 - serverless cli篇


### 安装 serverless devs cli (已安装请忽略)


```
npm i @serverless-devs/s -g
```


### 准备阿里云秘钥


详细的阿里云秘钥信息获取查看


```
s conifg add
```


### 开发部署


#### step1 初始化


```
s init start-jamstack
```


输入项目名，输入自定义二级域名 .resume.net.cn (resume.net.cn 是我们免费提供的一级域名，用户只需要填写自己的二级域名，注意保证唯一性)


#### 构建部署


进入 


```
s deploy
```


访问返回的 <自定义域名>.resume.net.cn 
