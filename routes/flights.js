import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

export {
  router
}


//  all flights 
router.get('/', flightsCtrl.index)

//  GET /flights/new
router.get('/new', flightsCtrl.new)

//  GET flights/new
router.get('/:id', flightsCtrl.show)

//  POST flights/new
router.post('/', flightsCtrl.create)

//  POST /flights/new
router.post('/:id/tickets', flightsCtrl.createTicket)

//  DELETE /flights/new
router.delete('/:id', flightsCtrl.delete)

//  GET /:id/destinations
router.post('/:id/destinations', flightsCtrl.addToDestinations)