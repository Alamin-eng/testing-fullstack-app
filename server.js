const express =require("express")
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", async(req, res) =>{
    try{
        res.send("Userss")
    }catch(error){
        console.log(error)
        res.status(500)
    }
})
let PORT = 3001
app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}. Ready to accept requests!`);
});