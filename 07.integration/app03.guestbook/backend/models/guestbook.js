const fs = require('fs');
const util = require('util');
const path = require('path');
const dbconn = require('./dbconn');


module.exports = {
    findAllMessages: async function() {
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        try {
            return await query(
                "select no, name, message, reg_date as regDate from guestbook order by no desc",
                []
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insertTask: async function() {
    }
}