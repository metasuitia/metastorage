import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { NewFilteredMessageDto } from './dtos';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class StorageService extends PrismaClient implements OnModuleInit {

    constructor() {
        super();
    }
    private readonly logger = new Logger('OrdersService');

    async onModuleInit() {
        await this.$connect();
        this.logger.log('Database connected');
      }

    ClassifyMessage( message: NewFilteredMessageDto){
        const {filteredMessage} = message as NewFilteredMessageDto
        const {whatsappMessage, to, name, agentType} = filteredMessage
        
      console.log(filteredMessage)
    }

}
