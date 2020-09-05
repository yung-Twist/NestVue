import { Injectable } from '@nestjs/common';
import {LoginDto} from './Dto/LoginDto'
@Injectable()
export class AuthService {
    login(data : LoginDto){
        return '登录成功'
    }
}
