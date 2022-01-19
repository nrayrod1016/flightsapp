import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()


export {
  router
}


router.get('/', flightsCtrl.index)
router.post('/new', flightsCtrl.new)
// router.get('/:id', flightsCtrl.show)
router.post('/', flightsCtrl.create)