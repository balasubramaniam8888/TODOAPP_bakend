const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDo.controllers");


const router = Router()



router.get('/' , getToDo)
router.post('/save' , saveToDo)
router.post('/update' , updateToDo)
router.post('/delete' , deleteToDo)



module.exports =  router;