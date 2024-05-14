require('dotenv').config()
const LIVE = {
    name : 'LIVE',
    MONGODB_URI : process.env.MONGODB_URI_LIVE,
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY_LIVE
}
const LOCAL ={
    name : 'LOCAL',
    MONGODB_URI : process.env.MONGODB_URI_LOCAL,
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY_LOCAL
}

let export_mode;
if(process.env.SERVER_MODE == 'LIVE'){
    export_mode = LIVE
}
if(process.env.SERVER_MODE == 'LOCAL'){
    export_mode = LOCAL
}
module.exports = export_mode