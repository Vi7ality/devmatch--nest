import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  // GET /profiles
  /* Challenge:
    1. Grab the query parameter 'location' and return an array with one profile object with its only property/value being the location
  */
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }

  // GET /profiles/:id

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  // POST /profiles
  // PUT /profiles/:id
  // DELETE /profiles/:id
}
