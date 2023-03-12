var express = require('express');
var router = express.Router();
let Fish = require("../models/Catch")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/fish', function(req, res, next) {
  res.send('Something fishy here');
});

router.post("/addFish", function(req, res, next){
  Fish.create({
    fish: req.body.fish,
    weigth: req.body.weigth,
    length: req.body.length,
    municipality: req.body.municipality,
    lake: req.body.lake,
    time: req.body.time
    //img: req.file.buffer, add image
        
  })
  res.send("fishy")
})

router.get("/getFishes/:id", function(req,res,next){
  Fish.find({fish: req.params.id},(err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.json(data)
    }
  })

})


module.exports = router;
