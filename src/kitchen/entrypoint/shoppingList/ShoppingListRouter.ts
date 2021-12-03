import * as express from 'express'
import TokenValidator from '../../../auth/helpers/TokenValidator'
import { validate } from '../../../auth/helpers/Validators'
import IGroceryItemRepository from '../../domain/core/GroceryItem/IGroceryItemRepository'
import IShoppingListRepository from '../../domain/Shopping/IShoppingListRepository'
import { createShoppingListValidationRules } from '../../helpers.ts/Validators'
import ShoppingListController from './ShoppingListController'

export default class ShoppingListRouter {
    public static configure(
        repository: IShoppingListRepository,
        groceryRepository: IGroceryItemRepository,
        tokenValidator: TokenValidator
    ): express.Router {
        const router = express.Router()
        let controller = new ShoppingListController(repository, groceryRepository)

        router.get(
            '/status',
            (req, res, next) => tokenValidator.validate(req, res, next),
            (req, res) => controller.status(req, res)
        )
        router.post(
            '/',
            createShoppingListValidationRules(),
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.createShoppingList(req, res)
        )
        router.get(
            '/:id',
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.getShoppingList(req, res)
        )
        router.get(
            '/',
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.getAllShoppingList(req, res)
        )
        router.patch(
            '/:id',
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.updateShoppingList(req, res)
        )
        router.delete(
            '/:id',
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.deleteShoppingList(req, res)
        )

        // CRUD GROCERY ITEM TO SHOPPING LIST ROUTES
        router.post(
            '/:id/groceryItem',
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.addGroceryItem(req, res)
        )
        router.delete(
            '/:id/groceryItem',
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.deleteGroceryItem(req, res)
        )
        router.patch(
            '/:id/groceryItem',
            validate,
            (req: express.Request, res: express.Response, next: express.NextFunction) => tokenValidator.validate(req, res, next),
            (req: express.Request, res: express.Response) => controller.updateGroceryItem(req, res)
        )
        return router
    }
}
