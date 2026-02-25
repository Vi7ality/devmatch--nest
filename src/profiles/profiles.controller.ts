import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}
  // GET /profiles
  /* Challenge:
    1. Grab the query parameter 'location' and return an array with one profile object with its only property/value being the location
  */
  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  // GET /profiles/:id

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findByID(id);
  }
  // POST /profiles

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.createProfile(createProfileDto);
  }
  // PUT /profiles/:id

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.updateProfile(id, updateProfileDto);
  }
  // DELETE /profiles/:id

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {}
}
