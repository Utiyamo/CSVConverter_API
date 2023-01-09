const fs = require('fs');
const path = require('path');

const converter = () => {
    const filePath = path.join(__dirname, '38-20230105-000000001.csv');
    fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
        if(!err){
            let stringLine = [];
            
            stringLine = data.split('\r\n');
            stringLine.pop();
            let jsonFile = [];
            for(let y = 0; y < stringLine.length; y++){
                let columns = stringLine[y].split(';');

                let jsonArg = new Object();           
                for(let i = 0; i < columns.length; i++){
                    jsonArg[`name${i+1}`] = columns[i];
                }     
                let objectJson = JSON.stringify(jsonArg);

                jsonFile.push(objectJson);
            }
            const fileResult = path.join(__dirname, 'jsonFile.json');
            fs.writeFileSync(fileResult, JSON.stringify(jsonFile));
        }   
        else{
            console.log(err);
        }
    })
}
converter();