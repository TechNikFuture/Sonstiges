const fs = require("fs");


var filePath = 'quellcode_aktuell.site'; 
if (fs.existsSync(filePath)) {
fs.rmdirSync(filePath, { recursive: true });

}
setTimeout(() => { 
  website_download()
}, 2000)

function website_download() {
const {exec} = require('child_process')
const websiteUrl = 'https://iserv-trg-oha.de/untis/stundenplan.php';

  var directoryPath = "quellcode_aktuell"
  exec(`node-site-downloader download -s ${websiteUrl} -d ${websiteUrl} -o ${directoryPath} -v --include-images`,(err,stdout,stderr) =>{
    if(err){
      console.log(err)
    }
  })
}


setTimeout(() => { 

fs.readFile('quellcode_aktuell.site\\index.html', 'utf8', (err, data) => {
   if(err){
       console.error(err)
       return
   }
    console.log(data)
    //data = data.replace(/(\r\n|\n|\r)/gm, "")
    data = data.replace(/\s+/g, ' ').trim()
    data = data.replaceAll('"', '');  

    quellcode = "var quellcode = '" + data + "'"
    fs.writeFile('quellcode_speicher.js', quellcode, (err) => {
      if (err) throw err;
    
    });
})

}, 5000)
