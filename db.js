const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect:'sqlite',
    storage:__dirname+'/message.db',
    host:'',
    username:'',
    password:'',
    database:''
})

const Mess = db.define('mess',{
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})

module.exports(
    db,Mess
)