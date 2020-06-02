const {Router} = require('express')
const routes = Router();
const {celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.post('/session', SessionController.create);


routes.post('/ongs', celebrate({
    //Sempre que a chave for uma var, deve colocar colchetes
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    }) 
}), OngController.store);

routes.get('/ongs',OngController.index);

routes.post('/incidents',IncidentController.create);

routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}),IncidentController.index);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),

    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()

}),IncidentController.delete);

routes.get('/profile/',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}),ProfileController.index);


module.exports = routes;