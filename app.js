let mongoose=require("mongoose")
const express=require("express")
let PersonModel=require("./models/person")
let db=require("./database")
const { ObjectId } = require("mongodb")

const app = express()
module.exports=app;
//create and save a record of a model

let Person=new PersonModel(
    {
        name:'Lina',
        age:'21',
        FavoriteFoods:['burger','pizza','salad']
    }
)
Person.save(function(err,data){
    if (err){
        console.error(err)
    }else{
        console.log(data)
    }
})

//create many records of a model
const arrayOfPeople=[
    {name:'yasmine', age:21 , FavoriteFoods:['burger','pizza']},
    {name:'rouaida',age:20,FavoriteFoods:['spaghetti','apple','salad']},
    {name:'syrine',age:22,FavoriteFoods:['makloub','apple','salad']}
]


PersonModel.create(arrayOfPeople,function(err,data){
    if(err){
        console.error(err)
    }else{
        console.log(data)
    }
})

//search database by a given name

PersonModel.find({name:'lina'},function(err,data){
  if(err){
        console.error(err)
    }else{
        console.log(data)
    }
})

//find a single matching document
PersonModel.findOne(({FavoriteFoods:'salad'}),function(err,data){

    if(err){
        console.error(er)
    }else{
        console.log(data)
    }
})

PersonModel.findById({_id:2},function(err,data){
     if(err){
        console.error(err)
    }else{
        console.log(data)
    }
})

const foodtoadd="hamburger"
PersonModel.findEditThenSave({_id:2},function(data,err){
    if (err){
        console.error(err)
    }else{
        data.FavoriteFoods.push(foodtoadd)
        data.save()
    }
})

//Perform New Updates on a Document Using

PersonModel.findOneAndUpdate({name:'yasmine'},{$set:  {age:30 }},{ new: true },function(err,data){
    if(err){
        console.error(err)
    }else{
        console.log(data)
    }
 })

//delete one document 

PersonModel.findByIdAndRemove({_Id:2},function(err,data){
     if(err){
        console.error(err)
    }else{
        console.log(data)
    }
})

PersonModel.remove({name:'Lina'},function(err,data){
     if(err){
        console.error(err)
    }else{
        console.log(data)
    }
})

PersonModel.find({FavoriteFoods:'salad'})
.sort({name:1})
.limit(2)
.select({age:0})
.exec().
then(docs => {
    console.log(docs)
  })
 .catch(err => {    
    console.error(err)
  })