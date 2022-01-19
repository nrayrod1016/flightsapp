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
    .populate("tickets")
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
    console.log(req.body.departs)
    console.log(req.body.departs)
    const flight = new Flight(req.body)
    flight.save(function (err) {
        if (err) return res.redirect('/flights/new')

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