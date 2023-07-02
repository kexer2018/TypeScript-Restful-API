import 'reflect-metadata'
import { createExpressServer, useContainer } from 'routing-controllers'
import { Container } from 'typedi'
import { userController } from './controller/userController'

useContainer(Container)

const PORT = 3000

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [userController] // we specify controllers we want to use
})

// run express application on port 3000
app.listen(PORT, () => console.log(`App is running on port ${PORT}`))
