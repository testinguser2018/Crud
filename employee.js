var mongoose =require ('mongoose');

mongoose.connect("mongodb://localhost/test");

var db = mongoose.connection;
db.once('open', function (){
  console.log('connected to the database');
});
db.on('error', console.error.bind(console,'connection error'));

var Schema = mongoose.Schema;

var empSchema =new Schema ({
  name: String,
  username: {type: String, required:true, unique:true},
  city:String,
  mobile:Number,
  other:{
    designation:String,
    email:{type:String, required:true}
  }
});

var Employee= mongoose.model('employee',empSchema);
module.exports = Employee;
