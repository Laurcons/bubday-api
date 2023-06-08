import { Module, Scope, ValidationPipe } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import AuthGuard from 'src/modules/auth/auth.guard';
import AuthModule from 'src/modules/auth/auth.module';
import InviteeModule from 'src/modules/invitee/invitee.module';
import PrismaModule from 'src/modules/prisma/prisma.module';

@Module({
  imports: [AuthModule, InviteeModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    },
  ],
})
export class AppModule {}
