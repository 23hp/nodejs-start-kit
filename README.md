# nodejs-start-kit

#### 项目介绍
自用nodeJs起步套件，能应付各类中小需求，亦可用于练习和实践。支持Docker部署。

项目入口文件: server/index.js

包含的库：
- `nodemon` 热更新，实时响应你的代码修改
- `babel` 支持各种ES678语法
- `express` 开启你的小型服务器
- `axios` 请求各种网络数据
- `moment` 提供对时间格式转换的支持
- `dotenv` 为.env配置文件提供支持


#### 安装教程

1. 安装nodeJS
2. 项目根目录下执行 `npm install` 安装依赖
3. 项目根目录下执行 `npm start` 运行

#### 部署说明
两种方案供选择：

- 使用Docker直接部署
    
    docker build -t my-proj .
    
    docker run -d -p 8000:8000 my-proj
    
    
    
- 手动部署

    npm run build
    
    npm run serve
