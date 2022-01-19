import { Flight } from '../models/flight.js'
import { Destination } from '../models/destination.js'

export { 
  index, 
  create, 
  // show, 
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
  console.log(req.body)
  const flight = new Flight(req.body)
  flight.save(err => { 
    if(err) { 
      return res.redirect('/flights/new')
        res.redirect('/flights')
    }
  })
}

// function show(req, res) { 
//   Flight.findById(req.params.id)
//   .then(flight => { 
//     res.render("flights/show", { 
//       flight: flight, 
//     })
//   })
//   .catch(err => console.log(err))
// }

function newFlight(req, res) { 
  res.render("flights/new", 
  { title: "New Flight"})
}

function deleteFlight(req, res) {

}