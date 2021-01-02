
const MongoClient = require("mongodb").MongoClient;

// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient("mongodb+srv://AppUser:<XbB1620>@cluster0.7srov.mongodb.net/<dbname>?retryWrites=true&w=majority");
mongoClient.connect(function(err, client){

    if(err){
        return console.log(err);
    }
    // взаимодействие с базой данных
    client.close();
});
