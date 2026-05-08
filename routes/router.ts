import express, { Request, Response }  from 'express';

const helloRouter = express.Router()

helloRouter.get('/privet', (req: Request, res: Response) => {
    return res.status(200).json({message: 'Привет'})
})

export default helloRouter