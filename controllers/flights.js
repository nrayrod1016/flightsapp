import { Flight } from '../models/flight.js'
import { Destination } from '../models/destination.js'

export { 
  index, 
  create, 
  show, 
  newFlight as new, 
  deleteFlight as delete, 


}

function index(req, res) { 
  Flight.find({}, function(error, flights) { 
    res.render('flights/index', { 
      title: 'Flights',
      flights: flights,
      time: req.time,
      date: req.date,
    })
  })
}


function create(req, res){ 

}

function show(req, res) { 

}

function newFlight(req, res) { 

}

function deleteFlight(req, res) {

}