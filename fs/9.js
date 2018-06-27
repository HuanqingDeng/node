// // 遍历文件夹的文件
// const fs = require('fs');
// const path = require('path');
// const getFilesInDir = function (dir) {
//     let results = [path.resolve(dir)];
//     // console.log(results);
//     const files = fs.readdirSync(dir, 'utf8')
//     // console.log(files);
//     files.forEach(file => {
//         file = path.resolve(dir, file);
//         const stats = fs.statSync(file);
//         // console.log(file);
//         if (stats.isFile()) {
//             results.push(file);
//         } 
//         else if (stats.isDirectory()) {
//             results = results.concat(getFilesInDir(file))
//         }
//     });
//     return results;
// }
// const files = getFilesInDir('./txt');
// console.log(files);
const fs=require('fs');
const path=require('path');
const getDir=function(dir){
    let dirArr=[path.resolve(dir)];
    const files=fs.readdirSync(dir,'utf8');
    files.forEach(file=>{
        file=path.resolve(dir,file);
        const sta=fs.statSync(file);
        if(sta.isFile()){
            dirArr.push(file);
        }else if(sta.isDirectory()){
            dirArr=dirArr.concat(getDir(file))
        }
    })
    return dirArr;
    
}
const file=getDir('./txt');
console.log(file);
