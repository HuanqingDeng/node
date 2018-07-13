const readline=require('readline');
const fs = require('fs');
// process 进程 stdin输入/stdout输出
// const rl=readline.createInterface({
//     input: process.stdin,
//     output:process.stdout
// })

// rl.question('plaease input a world:',function(answer){
//     console.log('Your has entered:[%s]',answer.toUpperCase());
//     rl.close();
// });
/////////////
const rl = readline.createInterface({
    input: fs.createReadStream('./access.log')
});

rl.on('line', (line) => {
    const arr = line.split(' '); 
    console.log('访问时间：%s %s，访问地址：%s', arr[0], arr[1], arr[13]);
});