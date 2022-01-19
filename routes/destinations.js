import { Router } from 'express'
 
const router = Router() 
import * as destinationsCtrl from '../controllers/destinations.js'

export { 
    router 
}

//  localhost:3000 destinations
router.post('/', destinationsCtrl.create)

//  localhost:3000/destinations/new
router.get('/new', destinationsCtrl.new)
