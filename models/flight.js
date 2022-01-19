import mongoose from 'mongoose'


export { 
    Flight 
}

const Schema = mongoose.Schema


const ticketSchema = new Schema ({
    seat: { 
        type: String, 
        match: /[A-F][1-9]\d?/
    },
    price: { 
        type: Number, 
        min: 0
    }
}, { 
    timestamps: true
})


const flightSchema = new Schema ({ 
    airline: { 
     type: String,
     enum: ['American', 'Southwest', 'United'] 
    },  
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] 
    } ,
    flightNo: { 
        type: Number,
        min: 10, max: 9999
    } , 
    departs: {
        type: Date,
    }, 
    tickets: [ticketSchema],
    destinations: [{
        type: Schema.Types.ObjectId, 
        ref: "Destination"
    }],
}, { 
    timestamps: true
})


const Flight = mongoose.model('Flight', flightSchema)
