class ClientRepository {

    constructor(){
        this.model = ClientModel
    }

    async create(client){
        return this.model.create(client)
    }

    async checkClient(email){
        clientCheck = await this.model.findOne({
            paranoid: false,
            where: {
                email,
                deleted_at: {
                    [Op.ne]: null
                }
            },
            include: [PartyModel]
        })
    }


}