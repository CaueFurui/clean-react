import { Authentication, AuthenticationParams } from 'domain/useCases/authentication'
import { HttpPostClient } from '@/data/protocols/http/HttpPostClient'
import { HttpStatusCode } from '@/data/protocols/http/HttpResponse'
import { InvalidCredentialError } from '@/domain/errors/InvalidCredentialError'
import { UnexpectedError } from '@/domain/errors/UnexpectedError'
import { AccountModel } from '@/domain/models/accountModel'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialError()
      default: throw new UnexpectedError()
    }
  }
}
