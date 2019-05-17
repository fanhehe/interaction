const Interaction = require('../src/index');

(async () => {
    
const data = await Interaction
    .instance()
    .next("请输入账号:")
    .next("请输入密码:")
    .final(async (account, passowrd) => {
        console.log('account', account);
        console.log('password', passowrd);
        return 1;
    }).then(data => console.log(data));

const datas = await Interaction
    .instance()
    .next("请输入账号:")
    .next("请输入密码:")
    .final(async (account, passowrd) => {
        console.log('account2', account);
        console.log('password2', passowrd);
        return 2;
    }).then(data => console.log(data));
})();
 