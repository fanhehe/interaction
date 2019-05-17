const readline = require('readline');

class Interaction {

    /**
     * 返回实例
     * @param {boolean} singleton 是否单例
     */
    static instance(singleton = false) {

        if (singleton) {
            return this._instance ? this._instance : this._instance = new Interaction();
        }

        return new Interaction(); 
    }

    /**
     * 执行每一个从标准输入读取的信息
     * @param {string} question 标准输入的问题 
     * @param {*} callback 每一个问题在被解答时，支持一个回调函数
     */
    next(question, callback = async () => {}) {

        const queue = this.queue;

        this.promise = this.promise.then(async () => {

            await new Promise(resolve => {

                const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                rl.question(`${question}\n`, async answer => {
                    queue.push(answer);
                    await callback(answer);
                    rl.close();
                    resolve();
                });
            });
        });

        return this;
    }

    /**
     * 最终的执行方法
     * @param {Function} callback 执行方法
     */
    async final(callback) {
        return this.promise.then(async data => {
            const result = await callback(...this.queue);
            this.queue = [];
            return result;
        });
    }

    /**
     * 构造函数
     */
    constructor() {
        this.queue = [];
        this.promise = Promise.resolve();
    }
};

module.exports = Interaction;