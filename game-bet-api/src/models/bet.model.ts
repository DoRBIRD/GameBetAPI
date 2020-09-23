import mongoose from "@shared/mongoose.service";

const Schema = mongoose.Schema;

const collectionName = "bets"

const betSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    lobbyId: Schema.Types.ObjectId,
    amount: String,
    team: String
});
betSchema.set("toJSON", {
    virtuals: true
});

class BetModel {
    Bet = mongoose.model(collectionName, betSchema);

    public findById(betID: any) {
        return this.Bet.findById(betID).exec();
    }

    public findByUserId(userId: any) {
        return this.Bet.find({"userId": userId}).exec();
    }

    public findByLobbyId(lobbyId: any) {
        return this.Bet.find({"lobbyId": lobbyId}).exec();
    }

    public create(betData: any) {
        const bet = new this.Bet(betData);
        if (!bet._id)
            bet._id = mongoose.Types.ObjectId();
        return bet.save();
    }

    public removeById(betId: any) {
        return this.Bet.deleteOne({_id: betId}).exec();
    }

    public patch(betId: any, betData: any) {
        return this.Bet.findOneAndUpdate({
            _id: betId
        }, betData).exec();
    }

    public list(perPage: number, page: number) {
        return this.Bet.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec()
    }

    public all() {
        return this.Bet.find({}).exec();
    }
}

export default BetModel
