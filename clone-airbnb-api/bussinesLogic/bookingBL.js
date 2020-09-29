const BookingModel = require('./../models/bookingModel')

const bookingExperience = async (name, email, booking_date, phone, experience_id) => {
    const bookingData = {
        name,
        email, 
        booking_date, 
        phone, 
        experience_id
    }
    try {
        await BookingModel(bookingData).save()
        return {msg: `Apreciado(a) ${name} realizò la reserva ${experience_id} , para la fecha ${booking_date}. Todos los detalles an sido enviados al correo ${email}.`}
    } catch (error) {
        throw { status: 500, msg: error }
    }
   }

module.exports = {
    bookingExperience
}