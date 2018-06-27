const http=require('http');
const fs=require('fs');
const zlib=require('zlib');
const server=http.createServer((req,res)=>{
    // 浏览器能支持自动解压。ungzip
    // console.log(req.headers['accept-encoding']);
    if(req.headers['accept-encoding'].indexOf('gzip')!=-1){   //是否支持压缩     
        gzip=zlib.createGzip();
        res.writeHead(200,{//向请求的客户端发送响应头。
            'Content-Encoding':'gzip',//是否需要压缩
            'Content-Type':'text/plain;charset=utf-8'
        })
        fs.createReadStream('a.txt').pipe(gzip).pipe(res);
    }else{
        res.writeHead(200,{
            'Content-Type':'text/plain;charset=utf-8'
        });
        fs.createReadStream('a.txt').pipe(res)
    }
});
server.listen(2421);

/////////////解压
// const http = require('http');
// const fs = require('fs');
// const zlib = require('zlib');
// const server = http.createServer((req, res)=>{
//     // 判断浏览器是否支持ungzip
//     // console.log(req.headers['accept-encoding']);
//     if (req.headers['accept-encoding'].indexOf('gzip')!=-1){
//         gzip=zlib.createGunzip();
//         res.writeHead(200,{
//             'Content-Encoding':'gunzip',
//             'Content-Type': 'text/plain;charset=utf8'
//         });
//         fs.createReadStream('a.txt.gz').pipe(gzip).pipe(res)
//     }else{
//         res.writeHead(200, {
//             'Content-Type': 'text/plain;charset=utf8'
//         });
//         fs.createReadStream('a.txt.gz').pipe(res) 
//     }
// })
// server.listen(1235);
