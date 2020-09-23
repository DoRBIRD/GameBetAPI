import mongoose from "@shared/mongoose.service";

const Schema = mongoose.Schema;

const collectionName = "games"

const gameSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    type: String,
    icon: String,
    rules: String,
    genre: String,
    timelimit: Number
});
gameSchema.set("toJSON", {
    virtuals: true
});

class GameModel {
    Game = mongoose.model(collectionName, gameSchema);

    public findById(gameId: any) {
        return this.Game.findById(gameId).exec();
    }

    public findGenre(genre: string) {
        return this.Game.find({"genre": genre}).exec();
    }

    public create(gameData: any) {
        const game = new this.Game(gameData);
        if (!game._id)
            game._id = mongoose.Types.ObjectId();
        return game.save();
    }

    public removeById(gameId: any) {
        return this.Game.deleteOne({_id: gameId}).exec();
    }

    public patch(gameId: any, userData: any) {
        return this.Game.findOneAndUpdate({
            _id: gameId
        }, userData).exec();
    }

    public list(perPage: number, page: number) {
        return this.Game.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec()
    }

    public all() {
        return this.Game.find({}).exec();
    }
}

export default GameModel
