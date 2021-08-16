const { response } = require('express');
const model = require('../models/guestbook');

module.exports = {
    readAllMessages: async function(req, res, next) {
        try {
            const results = await model.findAllMessages();
            console.log(results);
            res
                .status(200)                
                .send({
                    result: 'success',
                    data: results,
                    message: null
                });
        } catch(err){
          next(err);
        }       
    },
    createTask: async function(req, res, next) {
        try {
            const cardNo = req.params['cardNo'];
            const task = req.body;

            // await model.insertTask(...) 성공했다 치고~

            task.no = Date.now();
            res
                .status(200)
                .send({
                    result: 'success',
                    data: task,
                    message: null
                });
        } catch(err) {
            next(err);
        }
    }  
}