import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import UserFactory from 'Database/factories/UserFactory'

const admins: Partial<User>[] = [
  {
    name: 'Admin',
    email: 'admin@example.com',
  },
]

const clients: Partial<User>[] = [
  {
    name: 'Generic Client',
    email: 'client@example.com',
  },
]

export default class extends BaseSeeder {
  public async run() {
    await User.truncate()
    await UserFactory.apply('AdminRole').merge(admins).createMany(5)
    await UserFactory.merge(clients).createMany(100)
  }
}
