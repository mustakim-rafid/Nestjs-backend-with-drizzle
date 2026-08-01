import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHi(name: string): string {
    if(name.length > 10){
      return `Hi ${name}. You nick name is too long.`
    } else if (name.length > 3 && name.length <= 10) {
      return `Hi ${name}. You nick name is perfect.`
    } else {
      return `Hi ${name}. You nick name is too short.`
    } 
  }
}
