import { Injectable } from '@nestjs/common';
import { NewFilteredMessageDto } from './dtos';

@Injectable()
export class StorageService {

    constructor() {}

    ClassifyMessage( message: NewFilteredMessageDto){
        const {filteredMessage} = message as NewFilteredMessageDto
        const {whatsappMessage, to, name, agentType} = filteredMessage
        
      
    }

}
