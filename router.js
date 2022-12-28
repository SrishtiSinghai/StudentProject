var studentcontroller=require('./controllers/studentcontroller');
module.exports=function(app){

   // map  product catalog handlers with  REST request types
    app.route('/students')
       .get(studentcontroller.getAll)
};