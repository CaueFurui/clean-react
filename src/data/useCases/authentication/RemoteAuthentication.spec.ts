import { mockAuthentication } from '@/domain/test/MockAuthentication'
import faker from 'faker'
import { HttpPostClientSpy } from '@/data/test/MockHttpClient'
import { RemoteAuthentication } from './RemoteAuthentication'
import { InvalidCredentialError } from '@/domain/errors/InvalidCredentialError'
import { HttpStatusCode } from '@/data/protocols/http/HttpResponse'
import { UnexpectedError } from '@/domain/errors/UnexpectedError'
import { AuthenticationParams } from '@/domain/useCases/authentication'
import { AccountModel } from '@/domain/models/accountModel'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { httpPostClientSpy, sut } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('should call HttpPostClient with correct body', async () => {
    const authParams = mockAuthentication()
    const { httpPostClientSpy, sut } = makeSut()
    await sut.auth(authParams)
    expect(httpPostClientSpy.body).toEqual(authParams)
  })

  test('should throw InvalidCredentialError if HttpPostClient returns 401', async () => {
    const { httpPostClientSpy, sut } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new InvalidCredentialError())
  })

  test('should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { httpPostClientSpy, sut } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { httpPostClientSpy, sut } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
