const fs=require('fs');
const zlib=require('zlib');

const gzip=zlib.createGzip();
// readFile读文件/createReadStream读和写
const inFile=fs.createReadStream('./a.txt');
const outFile=fs.createWriteStream('./a.txt.gz');
inFile.pipe(gzip).pipe(outFile);