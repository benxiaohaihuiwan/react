// js 入口文件

import ReactDom from "react-dom/client";

const App = <div>
  <h1>这是一个react项目!!</h1>
</div>

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(App)