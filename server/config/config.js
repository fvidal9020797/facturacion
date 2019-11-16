//  ===================
//  SEED AUTENTICACION
//  ===================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//  ===================
//  VENCIMIENTO DEL TOKEN
//  ===================
process.env.CADUCIDAD_TOKEN = 2628000000;

//  ===================
//  PUERTO QUE CORRE EL SERVIDOR EN PRODUCCION O DESARROLLO
//  ===================
process.env.PORT = process.env.PORT || 3000;

//  ===================
//  ENTORNO DE DESARROLLO
//  ===================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/profile';
} else {
    urlDB = 'mongodb://fvidal:Iogear3com.@cluster0-shard-00-00-wlkmk.mongodb.net:27017,cluster0-shard-00-01-wlkmk.mongodb.net:27017,cluster0-shard-00-02-wlkmk.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin';
}

process.env.URL_DB = urlDB;