#!/usr/bin/env node


var rps = require('./App');
(async () => {
var data = await rps(process.argv[2],process.argv[3],process.argv[4])
console.log('\n Name : '+data.name+' \n Id : '+data.id+  '\n Full Name : ' + data.fullname + '\n Owner : ' + data.owner
+ '\n Description : ' + (data.description || 'Description Not Found') + '\n URL : '+data.ur + '\n Fork : ' + (data.fork || 'Not A Fork') + '\n Created : '+ data.created+'\n Last Updated : '+data.lastupdated + '\n Last Push : '+data.pushed 
+ '\n Main Lang : ' + (data.mainlang || 'Nothing') + '\n Licence : ' + (data.license || 'No Licence') + '\n Issues : '+data.issues+'\n Size : ' + data.size + '\n Branch : '+data.branch
)
})();