const fs=require('fs');
const writStream=fs.createWriteStream('./c.txt','utf8');
writStream
    .on('close',()=>{
        console.log('已经关闭了');
    })
writStream.write('me');
writStream.write('no');
writStream.end('')
