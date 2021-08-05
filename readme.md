# 使用Serverlessdevs 快速构建性能极致的jamstack站点

## 快速开始 - serverless desktop篇
### 安装 serverless desktop 
访问 www.serverless-devs.com 下载对应版本的客户端工具

### 进入serverless hub 选择 start-jamstack 模板



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

输入项目名<porjectName>，输入自定义二级域名 <customerdoman>.resume.net.cn (resume.net.cn 是我们免费提供的一级域名，用户只需要填写自己的二级域名，注意保证唯一性)

#### 构建部署
进入 <projectName> 
```
s deploy
```
访问返回的 <自定义域名>.resume.net.cn </br>





