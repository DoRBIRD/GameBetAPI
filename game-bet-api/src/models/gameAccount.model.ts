import mongoose from "@shared/mongoose.service";

const Schema = mongoose.Schema;

const collectionName = "gameaccounts"

const gameAccountSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    gameAccountTypeId: Schema.Types.ObjectId,
    userIdentifier: String
});
gameAccountSchema.set("toJSON", {
    virtuals: true
});

class GameAccountModel {
    GameAccount = mongoose.model(collectionName, gameAccountSchema);

    public findById(gameAccountId: any) {
        return this.GameAccount.findById(gameAccountId).exec()
    }

    public findByUserId(userId: any) {
        return this.GameAccount.find({"userId": userId}).exec()
    }

    public create(gameAccountData: any) {
        const gameAccount = new this.GameAccount(gameAccountData);
        if (!gameAccount._id)
            gameAccount._id = mongoose.Types.ObjectId();
        return gameAccount.save();
    }

    public removeById(gameAccountId: any) {
        return this.GameAccount.deleteOne({_id: gameAccountId}).exec();
    }

    public patch(gameAccountId: any, gameAccountData: any) {
        return this.GameAccount.findOneAndUpdate({_id: gameAccountId}, gameAccountData).exec();
    }

    public list(perPage: number, page: number) {
        return this.GameAccount.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec()
    }

    public all() {
        return this.GameAccount.find({}).exec()
    }
}

export default GameAccountModel