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