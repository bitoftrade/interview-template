import express, { Application, Request, Response } from 'express'

const app: Application = express()

const PORT = 3000

app.use('/', (req: Request, res: Response): void => {
	res.send('Hello world!')
})

app.listen(PORT, (): void => {
	console.log('App is running on port:', PORT)
})
