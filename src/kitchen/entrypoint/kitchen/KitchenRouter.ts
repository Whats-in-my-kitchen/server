import * as express from 'express'
import TokenValidator from '../../../auth/helpers/TokenValidator'
import IKitchenRepository from '../../domain/Kitchen/IKitchenRepository'
import KitchenController from './KitchenController'

export default class KitchenRouter {
    public static configure(
        repository: IKitchenRepository,
        tokenValidator: TokenValidator
    ): express.Router {
        const router = express.Router()
        let controller = new KitchenController(repository)

        router.get(
            '/status',
            (req, res, next) => tokenValidator.validate(req, res, next),
            (req, res) => controller.status(req, res)
        )
        router.get(
            '/',
            (req, res, next) => tokenValidator.validate(req, res, next),
            (req, res) => controller.createKitchen(req, res)
        )


        return router
    }
}
