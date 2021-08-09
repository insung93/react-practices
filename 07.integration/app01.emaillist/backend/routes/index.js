const errorRouter = require('./error');
const authorized = require('./authorized');

const applicationRouter = {
    setup: async function(application) {
        
        const site = await models.Site.findOne();
 
        application
        .all('*', function (req, res, next) {
            res.locals.req = req;
            res.locals.res = res;
            next();
        })

        //.use('/api', require('./main'))
        .use(errorRouter.error404)
        .use(errorRouter.error500)
        
    }
};

module.exports = { applicationRouter };