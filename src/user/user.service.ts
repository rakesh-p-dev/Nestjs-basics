import { Injectable, NotFoundException } from '@nestjs/common';
import { UserLogger } from './user.logger';

@Injectable()
export class UserService {
  constructor(private readonly userLogger: UserLogger) {}
  getAllUsers() {
    const users = [{ id: 1, name: 'rakesh' }];

    if (!users.length) {
      this.userLogger.log('No users found');
      return new NotFoundException('No users found');
    }
    return users;
  }
}
