import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import UserFactory from 'Database/factories/UserFactory'

const admins: Partial<User>[] = [
  {
    name: 'Admin',
    email: 'admin@example.com',
  },
]

export default class extends BaseSeeder {
  public async run() {
    await User.truncate()
    await UserFactory.apply('AdminRole').merge(admins).createMany(5)
    await UserFactory.createMany(100)
  }
}
