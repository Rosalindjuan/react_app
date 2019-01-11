This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




## 组件向外传递数据
父传子 -> prop
子传父 -> prop 函数


## redux
基本原则：
  > 1.单项数据流 

  > 2.唯一数据源 
  
  > 3.保持状态只读，数据改变只能通过纯函数完成


- store.getState() 能够获取store上的存储的所有状态
- store.subscribe() 监听变化
- store.subscribe() 监听取消
- store.dispatch() 改变store里面的状态，派发action


### context
一个树形组件上所有组件都能访问一个共同的对象


### connect()
- 接收两个参数： mapStateToProps 和 mapDispatchToProps
- 执行结果是个函数，所以需要有括号


### react-redux
- dispatch,getState,.subscribe


## 文档目录 src下

├── actions                            // 包含所有action构造函数
├── components                         // 包含所有傻瓜组件
├── containers                         // 包含所有的容器组件
├── reducer                            // 包含所有Redux的reducer
├── utils                              // 公共工具方法类
├── views                              // 学习用的一些例子
├── index.js                           // 项目核心文件



## 高阶组件
1.重用代码
2.修改现有组件的行为

分类： 代理方式的高阶组件、继承方式的高阶组件

继承方式的高阶组件：使用被包裹组件的方式


“以函数为子组件”的模式可以让代码更为灵活 但是很难做性能优化：
每次渲染都要调用函数，无法利用shouldComponentUpdate进行避免渲染浪费


## redux-thunk中间件
解决异步操作
