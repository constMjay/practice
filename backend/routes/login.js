const express = require('express')
const fbUser = require('../model/users');
const Joi = require('joi')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})
router.post('/submitUser', async (req, res) => {
    const { email, password } = req.body

    const User = new fbUser({
        email,
        password
    });

    /**
     * Form Validation
     */
    const { error } = validateUser(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    res.status(200).send({ message: "Success" })
    await User.save()
})
function validateUser(formInfo) {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })
    return schema.validate(formInfo)
}
module.exports = router