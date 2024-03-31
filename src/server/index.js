var path = require('path')
const express = require('express')
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js') 

const dotenv = require("dotenv");

const app = express();

// env file
dotenv.config();
app.use(cors());
port = 8080;

const Key = process.env.API_KEY

app.use(express.json());

app.use(express.static('dist'));

// console.log(__dirname);

app.get('/', (req, res) =>{
    // res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
    res.render("index.html")
})

app.post("/", async (req,res) => {
    const url = req.body.input;
    // console.log(input);
    const mockAPI = await mockAPIResponse(url,Key);
    
    const {code,msg,tijab} = mockAPI
    if(code == 100 || code == 212){
      return res.send({msg :msg,code:code})
    }
    return res.send({tijab: tijab,code: code})
    
    // console.log(mockAPI);

})

// designates what port the app will listen to for incoming requests
app.listen(8080, () => console.log(`server is listening on port ${port}`))

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse);
// })
