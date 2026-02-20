import { Controller, Get, Query } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  // GET /profiles

  @Get()
  findAll(@Query('age') age: number) {
    return [{ age }];
  }

  // GET /profiles/:id
  // POST /profiles
  // PUT /profiles/:id
  // DELETE /profiles/:id
}
