var students=require('../data/student.json');

//HTTP callback functions

exports.getAll=function (req, res){
res.send(students);
};