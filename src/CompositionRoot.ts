import mongoose from 'mongoose'
import redis from 'redis'
import AuthRepository from './auth/data/repository/AuthRepository'
import BcryptPasswordService from './auth/data/services/BcryptPasswordService'
import JwtTokenService from './auth/data/services/JwtTokenService'
import RedisTokenStore from './auth/data/services/RedisTokenStore'
import AuthRouter from './auth/entrypoint/AuthRouter'
import TokenValidator from './auth/helpers/TokenValidator'
import GroceryItemRepositoryShopping from './kitchen/data/repository/GroceryItemRepository'
import { KitchenRepository } from './kitchen/data/repository/KitchenRepository'
import ShoppingListRepository from './kitchen/data/repository/ShoppingListRepository'
import KitchenRouter from './kitchen/entrypoint/kitchen/KitchenRouter'
import ShoppingListRouter from './kitchen/entrypoint/shoppingList/ShoppingListRouter'

export default class CompositionRoot {
    private static client: mongoose.Mongoose
    private static redisClient: redis.RedisClient

    public static configure() {
        this.client = new mongoose.Mongoose()
        this.redisClient = redis.createClient()

        const connectionStr = encodeURI(process.env.DEV_DB as string)
        this.client.connect(connectionStr, {
            // TODO add these things.
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }

    public static authRouter() {
        const repository = new AuthRepository(this.client)
        const tokenService = new JwtTokenService(process.env.PRIVATE_KEY as string)
        const passwordService = new BcryptPasswordService()
        const tokenStore = new RedisTokenStore(this.redisClient)
        const tokenValidator = new TokenValidator(tokenService, tokenStore)


        return AuthRouter.configure(
            repository,
            tokenService,
            tokenStore,
            passwordService,
            tokenValidator,
        )
    }

    public static kitchenRouter() {
        const repository = new KitchenRepository(this.client)
        const tokenService = new JwtTokenService(process.env.PRIVATE_KEY as string)
        const tokenStore = new RedisTokenStore(this.redisClient)
        const tokenValidator = new TokenValidator(tokenService, tokenStore)

        return KitchenRouter.configure(repository, tokenValidator)
    }


    public static shoppingListRouter() {
        const repository = new ShoppingListRepository(this.client)
        const groceryRepository = new GroceryItemRepositoryShopping(this.client)
        const tokenService = new JwtTokenService(process.env.PRIVATE_KEY as string)
        const tokenStore = new RedisTokenStore(this.redisClient)
        const tokenValidator = new TokenValidator(tokenService, tokenStore)

        return ShoppingListRouter.configure(repository, groceryRepository, tokenValidator)
    }


}