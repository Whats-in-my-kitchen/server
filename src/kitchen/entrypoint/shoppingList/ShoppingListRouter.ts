import * as express from 'express'
import TokenValidator from '../../../auth/helpers/TokenValidator'
import IShoppingListRepository from '../../domain/Shopping/IShoppingListRepository'
import ShoppingListController from './ShoppingListController'

export default class ShoppingListRouter {
    public static configure(
        repository: IShoppingListRepository,
        tokenValidator: TokenValidator
    ): express.Router {
        const router = express.Router()
        let controller = new ShoppingListController(repository)

        router.get(
            '/status',
            (req, res, next) => tokenValidator.validate(req, res, next),
            (req, res) => controller.status(req, res)
        )
        // router.post(
        //     '/',
        //     createKitchenValidationRules(),
        //     validate,
        //     (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
        //     (req: express.Request, res: express.Response) => controller.createKitchen(req, res)
        // )
        return router
    }
}
