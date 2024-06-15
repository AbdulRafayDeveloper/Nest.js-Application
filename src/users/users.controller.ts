import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) { }

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Post("/add")
  async create(@Body() inputUser: User) {
    const response = await this.userService.create(inputUser);
    if (response.status) {
      return response;
    } else {
      return response;
    }
  }

  @Get("/update/:id")
  async getById(@Param("id") id: string) {
    return await this.userService.getById(id);
  }

  @Put("/update/:id")
  async update(@Param("id") id: string, @Body() inputUser: User) {
    return await this.userService.update(id, inputUser);
  }

  @Delete("/delete/:id")
  async delete(@Param("id") id: string) {
    return await this.userService.delete(id);
  }
}
