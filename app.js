var express = require('express');
var app = express();

var Employee= require('./Employee.js');

 var employee1 = new  Employee({
   name: 'Satyam',
   username: 'satyam123',
   city: 'Noida',
   mobile: 9999999999,
   other: {
     designation:'Software Developer',
     email: 'abc@email.com'
   }
 });
//to add
 employee1.save(function (err, employ, num) {
   if (err){
     console.log('Erroer has been occured');
   }else{
     console.log('saved  '+ num + '  record');
     console.log('Details'+ employ);
   }
 });
 //to retrive
 Employee.find({}, function(err,data){
   if (err){
     return console.log('Erroer has been occured');
   }
   console.log(data);
 });
 //to update
 Employee.update({city:'Noida'},{city: 'Delhi'},function(err){
   if (err){
     console.log('Erroer has been occured');
   }
   console.log('update');
 });
 //to remove
 Employee.remove({name: 'Satyam'},function(err){
   if (err){
     console.log('Erroer has been occured');
   }
 });
