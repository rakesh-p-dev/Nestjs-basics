import { Controller, Get, Post, Query, Param, Body, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getusers(@Query('name') name: string) {
    const users = [
      { id: 1, name: 'rakesh' },
      { id: 2, name: 'sueresh' },
    ];

    if (name) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    return users;
  }

  @Get('allUsers')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getuserById(@Param('id') id: number) {
    return { id, name: 'rakesh' };
  }

  @Post('create')
  createUser(@Body() createuserDto: CreateUserDto) {
    return { data: createuserDto, message: 'User created successfully' };
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return { id, data: updateUserDto, message: 'User updated successfully' };
  }
}
