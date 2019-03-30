const env = require('dotenv').config();

const app_id = process.env.APP_ID;
const app_key = process.env.APP_KEY;


let oxforddic= require('./index');
let oxforddictionaries = new oxforddic(app_id, app_key);

console.log(app_id);

oxforddictionaries.entries('ace')
.then((data)=>{
  console.log(data);
})
