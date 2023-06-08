import { Module } from '@nestjs/common';
import AuthModule from 'src/modules/auth/auth.module';
import InviteeController from 'src/modules/invitee/invitee.controller';
import InviteeService from 'src/modules/invitee/invitee.service';
import PrismaModule from 'src/modules/prisma/prisma.module';

@Module({
  controllers: [InviteeController],
  providers: [InviteeService],
  imports: [PrismaModule, AuthModule],
})
export default class InviteeModule {}
