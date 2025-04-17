/*
安装mongodb数据库，打开文件路径，通过bin文件，打开集成终端，输入.\mongod.exe --dbpath='D:\前端\项目\PC端\智慧校园系统后端\db'   启动数据库服务，等号后面是放置内容的路径
在 www文件中，引入连接数据库的文件配置，连接数据库
npm i mongoose     对象文档模型库，方便使用代码操作mongodb数据库
安装Robomongo，一款查看数据库的软件

流程：在node开发中，在routes文件夹下配置后端路由，前端一请求路由，就基于此路由匹配调用对应的controllers，基于controllers找到service服务，让service服务操作model模型，模型去操作数据库，在数据库操作流程
*/