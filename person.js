let mongoose=require("mongoose")

let Personshema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    FavoriteFoods:{
        type:[{type:String}],
        required:true
    }
})

module.exports=mongoose.model('Person',Personshema)