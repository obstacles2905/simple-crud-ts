import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getMainPage(): string {
    return "Hello World!";
  }
}
