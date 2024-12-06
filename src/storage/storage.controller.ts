import { Controller } from '@nestjs/common';
import { StorageService } from './storage.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class StorageController {
  /******************************************************************
   Este controlador se encarga de recibir los mensajes o eventos 
  *******************************************************************/

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
