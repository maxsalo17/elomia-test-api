const router = require('express').Router();


const messageController = require('./controllers/messageController')

router.route('/send').post(messageController.add);

router.route('/:user/messages').get(messageController.getUserMessages);

router.route('/:user/messages/new').get(messageController.getNewUserMessages);


router.get('/', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Welcome to Elomia API'
    });
});

module.exports = router;