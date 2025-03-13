const mongoose = require('mongoose');
// Creating a new schema for storing movie booking details.
const TicketSchema = new mongoose.Schema({
  movie: { type: String },
  slot: { type: String },
  seats: {
    A1: { type: Number },
    A2: { type: Number },
    A3: { type: Number },
    B1: { type: Number },
    B2: { type: Number },
    B3: { type: Number },
    C1: { type: Number },
    C2: { type: Number },
    C3: { type: Number }
  },
});
// Registering the schema with the Mongoose model.
const Ticket = mongoose.model('bookmovietickets', TicketSchema);
module.exports = Ticket;