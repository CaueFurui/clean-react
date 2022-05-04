import faker from 'faker'
import { AuthenticationParams } from '@/domain/useCases/authentication'
import { AccountModel } from '../models/accountModel'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
