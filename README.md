# @interaction

## 说明

支持与命令行的交互，并最后执行一些方法。

> 适用于在做测试的时候，支持交互输入信息：如验证码代码的自测，需要人工输入验证码之类的。

## 要求
- NodeJs 7.6+

#### 示例

> 内容来自本模块的测试文件，运行npm run test 即可测试 

```javascript

	// 加载本模块
	const Interaction = require('interaction');
	
	const datas = await Interaction
		.instance()
		.next("请输入账号:")
		.next("请输入密码:")
		.final(async (account, passowrd) => {
			console.log('account2', account);
			console.log('password2', passowrd);
			return 2;
		}).then(data => console.log(data));
```

## Change Logs

- 1.0.0 init
