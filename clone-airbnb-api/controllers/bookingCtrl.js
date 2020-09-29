const {
    bookingExperience
} = require('./../bussinesLogic/bookingBL')

const booking = async (req, res) => {
    const {
        name, 
        email, 
        booking_date, 
        phone,
        experience_id
    } = req.body
    try {
        const response = await bookingExperience(name, email, booking_date, phone, experience_id)
        res.json(response)
    } catch (error) {
        res.status(error.status).send(error.msg)
    }
    
} 

module.exports = {
    booking
}