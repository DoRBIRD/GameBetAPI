import mongoose from "@shared/mongoose.service";

const Schema = mongoose.Schema;

const collectionName = "gameaccounttype"

const gameAccountTypeSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    icon: String
});
gameAccountTypeSchema.set("toJSON", {
    virtuals: true
});

class GameAccountTypeModel {
    GameAccountType = mongoose.model(collectionName, gameAccountTypeSchema);

    public findById(gameAccountTypeId: any) {
        return this.GameAccountType.findById(gameAccountTypeId).exec()
    }

    public create(gameAccountTypeData: any) {
        const gameAccountType = new this.GameAccountType(gameAccountTypeData);
        if (!gameAccountType._id)
            gameAccountType._id = mongoose.Types.ObjectId();
        return gameAccountType.save();
    }

    public removeById(gameAccountTypeId: any) {
        return this.GameAccountType.deleteOne({_id: gameAccountTypeId}).exec();
    }

    public patch(gameAccountTypeId: any, gameAccountTypeData: any) {
        return this.GameAccountType.findOneAndUpdate({_id: gameAccountTypeId}, gameAccountTypeData).exec();
    }

    public list(perPage: number, page: number) {
        return this.GameAccountType.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec()
    }

    public all() {
        return this.GameAccountType.find({}).exec()
    }
}

export default GameAccountTypeModel