import fs from "fs"
import ndjson from "ndjson"
// const Ndjson = require("../../assets/Quickdraw/")
let drawing = []
fs.createReadStream('../../assets/QUICK_DRAW/Apple.ndjson')
  .pipe(ndjson.parse())
  .on('data', function(obj) {
      console.log(obj)
      drawing.push(obj)
   
  })