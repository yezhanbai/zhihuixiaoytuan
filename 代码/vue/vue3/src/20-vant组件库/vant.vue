<!-- 
安装：npm i vant 

*一定要多看多查文档

以下只能写在main.js中，进行全局注册
import { createApp } from 'vue';
1. 引入你需要的组件
import { Button } from 'vant';
2. 引入组件样式
import 'vant/lib/index.css';
const app = createApp();
3. 注册你需要的组件
app.use(Button);


局部注册：
引入组件样式，这一步还是要写在main.js中
import 'vant/lib/index.css';

后面在各自组件中引用就可以了，比如：
import {Button as vanButton} from 'vant'

当vant组件库的样式和我期望的不一致且不能修改时，就强制获取它控制样式的属性，改值

-->