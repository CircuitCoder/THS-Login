# THS-Login
清华附中登录用

## HowTo

1. npm install
2. 复制 credentials.example.js -> credentials.js
3. 修改 credentials.js 内容，保证 export 一个与实例格式相同的对象
4. 修改 looper.js 内容，修改循环时长
5. 运行 looper.js 或者 npm start

## API
导入 login.js 会返回一个函数，只需要一个参数，即一个对象，包含两个属性 user 和 pass

## Ports
- Python: [gyc990326/THS-AutoLogin](https://github.com/gyc990326/THS-AutoLogin)
