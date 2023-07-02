import { Service } from 'typedi'
import { PrismaClient } from '@prisma/client'

@Service()
export class userService {
  private prisma = new PrismaClient()

  async findAll () {
    const result = await this.prisma.user.findMany()
    return result
  }

  async findOne (id: number) {
    const result = await this.prisma.user.findUnique({
      where: {
        id: id
      }
    })
    return result
  }

  async save (user: any) {
    const result = await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        sex: user.sex
      }
    })
    return result
  }

  async update (id: number, user: any) {
    const result = await this.prisma.user.update({
      where: { id: id },
      data: {
        email: user.email,
        name: user.name,
        sex: user.sex
      }
    })
    return result
  }

  async remove (id: number) {
    const result = await this.prisma.user.delete({
      where: {
        id: id
      }
    })
    return result
  }
}
