import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client, TokenPayload } from 'google-auth-library';

@Injectable()
export class GoogleAuthService {
  private client: OAuth2Client;
  private readonly googleClientId: string;
  private readonly SELLBIE_DOMAIN: string = '@sellbie.com.br';

  constructor(private readonly configService: ConfigService) {
    this.googleClientId = this.configService.getOrThrow('GOOGLE_CLIENT_ID');
    this.client = new OAuth2Client(this.googleClientId);
  }

  async validateToken(token: string) {
    try {
      const ticket = await this.client.verifyIdToken({
        idToken: token,
        audience: this.googleClientId,
      });

      const payload: TokenPayload = ticket.getPayload();

      if (!payload) {
        throw new UnauthorizedException('Invalid Google token');
      }

      const email = payload.email;
      if (!email || !email.endsWith(this.SELLBIE_DOMAIN)) {
        throw new UnauthorizedException('Email domain is not authorized');
      }

      return {
        id: payload.sub,
        email,
        name: payload.name,
        avatarUrl: payload.picture,
      };
    } catch {
      throw new UnauthorizedException('Invalid Google token');
    }
  }
}
