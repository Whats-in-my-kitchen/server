import { NextFunction, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

// KITCHEN ROUTE VALIDATIONS
export const createKitchenValidationRules = () => {
    return [
        body('name', 'Name is required').notEmpty(),
    ]
}

export const joinKitchenValidation = () => {
    return [
        body('kitchenCode', 'Kitchen Code is required').notEmpty(),
    ]
}

export const removeUserValidation = () => {
    return [
        body('kitchenCode', 'Kitchen Code is required').notEmpty(),
        body('removeUserId', 'User Id is required').notEmpty(),
    ]
}


// SHOPPING LIST VALIDATIONS


export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors: any = []
    errors
        .array({ onlyFirstError: true })
        .map((err: { param: any; msg: any }) => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({ errors: extractedErrors })
}