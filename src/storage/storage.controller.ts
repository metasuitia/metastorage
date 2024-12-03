import { Controller } from '@nestjs/common';
import { StorageService } from './storage.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class StorageController {

  //TODO: hay que cambiarle el nombre por algo como event controller
  constructor(private readonly storageService: StorageService) {}

  @EventPattern('whatsapp.message')
  create(@Payload() message: any) {
    console.log("mensaje en el storage");
    console.log(message);
    return "mensaje recivido de nats";
  }

}
