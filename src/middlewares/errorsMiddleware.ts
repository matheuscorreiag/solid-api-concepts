import { NextFunction, Request, Response } from "express"


export function errorsMiddleware(err: Error, request: Request, response: Response, nextFunction: NextFunction) {
    if (err instanceof Error) {
        return response.status(400).send({
            status: 400,
            error: err.message
        })
    }

    return response.status(500).send({
        status: 500,
        error: 'Internal server error'
    })
}