async create(client) { 
    validators.client(client);
  
    const clientRecord = await ClientModel.create(client);  
    delete clientRecord.password;  
    
    const partyRecord = await PartyService.create(clientRecord);
  
    return { client: clientRecord, party: partyRecord };  
}