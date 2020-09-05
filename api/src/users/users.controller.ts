import { Controller, Get, Query, Response} from '@nestjs/common';
import { UsersService } from './users.service'
@Controller('users')
export class UsersController {
    @Get()
    userIndex(){
        return 'users'
    }
}
