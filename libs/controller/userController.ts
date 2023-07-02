import 'reflect-metadata'
import {
  JsonController,
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Res
} from 'routing-controllers'
import { Service } from 'typedi'
import { userService } from '../service/userService'

@Service()
@JsonController()
export class userController {
  constructor (private userService: userService) {}
  @Get('/users')
  async getAll (@Res() res: any) {
    const data = await this.userService.findAll()
    return ({
      code: 200,
      message: 'Get all user success',
      data: data
    })
  }

  @Get('/users/:id')
  getOne (@Param('id') id: number) {
    return this.userService.findOne(id)
  }

  @Post('/users')
  //user也可以用一个model文件指定其格式
  post (@Body() user: any) {
    return this.userService.save(user)
  }

  @Put('/users/:id')
  put (@Param('id') id: number, @Body() user: any) {
    return this.userService.update(id, user)
  }

  @Delete('/users/:id')
  remove (@Param('id') id: number) {
    return this.userService.remove(id)
  }
}
