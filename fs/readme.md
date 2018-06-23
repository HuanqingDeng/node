性能优化

http screatServer (req, res)=>{calback}
web 一切皆资源

web server 资源(html,css, json,img) creatReadStream(读)
将相应的资源传输到client proxy

优化的空间？

传输的体积能够减小，gzip压缩
服务器端可以进行文件的操作 ：读写 权限 压缩 解压

客户端
res.writeHead(200,{
            'Content-Type':'text/plain;charset=utf8'
        })
带有压缩的字段，unzip

减少传输的体积，优点：快，省带宽

