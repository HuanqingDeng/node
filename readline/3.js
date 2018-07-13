const readline=require('readline');

const completer=(line)=>{
    // console.log(line);
    const command='npm';
    const sbuCommands=['help','init','install']
    if(line.length<command.length){
        return [command.indexOf(line)===0?[command]:[],line]
    }
    let hints=sbuCommands.filter(sbuCommand=>{
        const lineTrippedCommand= line.replace(command,'').trim();
        return lineTrippedCommand && sbuCommand.indexOf(lineTrippedCommand)===0
    });
    if(hints.length===1){
        hints=hints.map(function(hit){
            return [command,hit].join(' ');
        })
    }
    return [hints.length?hints:sbuCommands,line]
}
// completer 补全
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    completer:completer
});
rl.prompt();