const express =require("express")
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", async(req, res) =>{
    try{
        res.send("User")
    }catch(error){
        console.log(error)
        res.status(500)
    }
})
const port = process.env.PORT || 10000;

app.listen(port, function () {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});