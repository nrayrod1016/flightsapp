import { Flight }  from '../models/flight.js' 
import { Destination }  from '../models/destination.js' 

export { 
    newFlight as new,
    index, 
    create,
    show,
    createTicket,
    deleteFlight as delete,
    addToDestinations
    }
  

function addToDestinations(req, res) { 
    Flight.findById(req.params.id, function(error, flight) {
        flight.destinations.push(req.body.destinationsId) 
        flight.save(function(err) { 
            res.redirect(`/flights/${flight._id}`)
        })
    })
}



function deleteFlight(req, res) { 
    Flight.findById(req.params.id, function(err, movie) { 
        res.redirect('/flights')
    })
}


function createTicket(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
        flight.tickets.push(req.body)
        flight.save()
        .then(result => res.redirect(`/flights/${flight._id}`))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}




function show(req, res) {
    Flight.findById(req.params.id)
    .populate("destinations").exec().then(flight => {
        Destination.find({_id: {$nin: flight.destinations}}, function (err, destinations) {
            res.render("flights/show", {
                title: "Flight Details",
                flight: flight,
                destinations: destinations,
            })
        })
    })
    .catch(err => console.log(err))
}




// function create(req, res) {
//     console.log(req.body)
//     req.body.departs = new Date(req.body.departs).toLocaleDateString()
//     console.log(req.body.departs)
  
//     const flight = new Flight(req.body)
//     flight.save(function (err) { 
//         if (err) return res.redirect('/flights/new')
//         res.redirect('/flights')
//     })
// }

function create(req, res) {
    console.log(req.body)
    //accept a flightNo between 10 and 9999
    //airline cant accept n/a
    console.log(req.body.departs)
    // date agrees with the typeof data we are looking for?
    // req.body.departs = new Date(req.body.departs).toLocaleDateString()
    //req.body.departs = new Date(req.body.departs)//.split(‘-’).splice(1,2, (parseInt(req.body.departs[0])+1).toString())
    console.log(req.body.departs)
    //looking for date to be returned as a string
    // Create a flight using mongoose
    const flight = new Flight(req.body)
    flight.save(function (err) {
        if (err) return res.redirect('/flights/new')
      // Redirect back to flights create page (/flights/new)
      res.redirect('/flights')
      //     })
    })
  }



// add flight 
function newFlight (req, res) { 
    res.render("flights/new", 
    { title: "New Flight"})
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