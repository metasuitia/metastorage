import { Controller } from '@nestjs/common';
import { StorageService } from './storage.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { NewFilteredMessageDto } from './dtos';
import { stringify } from 'querystring';
import { filter } from 'rxjs';

@Controller()
export class StorageController {

  //TODO: hay que cambiarle el nombre por algo como event controller
  constructor(
    private readonly storageService: StorageService
  ) {}

  @EventPattern('whatsapp.eventMessage')
  create(@Payload() message: any
  ) {
    
   this.storageService.ClassifyMessage(message);

    return "mensaje recivido de nats";
  }

  @MessagePattern('whatsapp.sendMessage')
  createMessage(@Payload() message: any) {
    console.log("mensaje entregado solo al storage");
    console.log(message);
    return "mensaje recivido de nats";
  }

}
