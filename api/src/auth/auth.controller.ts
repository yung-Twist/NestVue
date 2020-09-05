import { Controller, Post, Body, Res } from '@nestjs/common';
import {AuthService} from './auth.service'
import {LoginDto} from './Dto/LoginDto'
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('login')
    async login(@Body() data : LoginDto,@Res() res){
        let result =  await this.authService.login(data);
        res.status(200).json({
            data:'cc',
            msg:result
        })
    }
}
