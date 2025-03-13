const db=require('../database.js');

const course = {
getAll(callback) {
    return db.query('SELECT * FROM asiakas', callback);
    }

,getById(id, callback) {
    return db.query('SELECT * FROM asiakas Where asiakas_id=?',[id], callback);
}
,add: function(asiakas, callback) {
    return db.query('Insert into asiakas values(?,?)',[asiakas.asiakas_id,asiakas.asiakas_nimi],callback);
}
};
module.exports=course;