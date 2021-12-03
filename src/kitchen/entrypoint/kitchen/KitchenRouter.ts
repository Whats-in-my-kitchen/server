import * as express from 'express'
import TokenValidator from '../../../auth/helpers/TokenValidator'

import IKitchenRepository from '../../domain/Kitchen/IKitchenRepository'
import { createKitchenValidationRules, joinKitchenValidation, removeUserValidation, validate } from '../../helpers.ts/Validators'
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
        router.post(
            '/',
            createKitchenValidationRules(),
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.createKitchen(req, res)
        )
        router.get(
            '/:id',
            createKitchenValidationRules(),
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.findOne(req, res)
        )
        router.post(
            '/join',
            joinKitchenValidation(),
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.joinKitchen(req, res)
        )

        router.delete(
            '/users',
            removeUserValidation(),
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.removeUserFromKitchen(req, res)
        )

        return router
    }
}
