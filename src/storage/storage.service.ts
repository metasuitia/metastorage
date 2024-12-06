import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { NewFilteredMessageDto } from './dtos';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class StorageService extends PrismaClient implements OnModuleInit {
    /********************************************************************
     Este servicio se encargara de filtrar los mensajes y clasificarlos
     segun el tipo de requerimiento. por ejemplo si le piden mensajes de un usuario o 
     imagenes de un usuario o todos los mensajes del bot o todos los mensajes de un cliente
     asi ya este atendido o no. y delegara guardar en la base de datos al handler para que 
     sea el el unico que lo haga y este servicio se encarge solamente de logica de devolucion
     de mensajes.
    **********************************************************************/
    constructor() {
        super();
    }
    private readonly logger = new Logger('StorageService');

    async onModuleInit() {
        await this.$connect();
        this.logger.log('StorageService is ready');
      }
    //TODO: devolver los mensajes de la base de datos
    ClassifyMessage( message: NewFilteredMessageDto){

      //TODO: clasificar el mensaje 
      //segun el mensaje que resiva guardarlo en su respectiva tabla

        const {filteredMessage} = message 
        const {whatsappMessage, to, name, agentType} = filteredMessage
        
      console.log(filteredMessage)
    }

}
