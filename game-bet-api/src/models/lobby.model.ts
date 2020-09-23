import mongoose from "@shared/mongoose.service";

const Schema = mongoose.Schema;

const collectionName = "lobbies"

const LobbySchema = new Schema({
    _id: Schema.Types.ObjectId,
    ownerId: Schema.Types.ObjectId,
    gameId: Schema.Types.ObjectId,
    winnerTeam: String,
    createdAt: Schema.Types.Date,
    startTime: Schema.Types.Date,
    endTime: Schema.Types.Date,
    teams: {
        TeamRed: [{playerId: Schema.Types.ObjectId}],
        TeamBlue: [{playerId: Schema.Types.ObjectId}]
    }
})

LobbySchema.set("toJSON", {
    virtuals: true
});

class LobbyModel {
    Lobby = mongoose.model(collectionName, LobbySchema);

    public findById(lobbyId: any) {
        return this.Lobby.findById(lobbyId).exec();
    }

    public findByUserId(userId: any) {
        return this.Lobby.find({"ownerId": userId}).exec()
    }

    public findByGameId(gameId: any) {
        return this.Lobby.find({"gameId": gameId}).exec()
    }

    public create(lobbyData: any) {
        const lobby = new this.Lobby(lobbyData);
        if (!lobby._id)
            lobby._id = mongoose.Types.ObjectId();
        return lobby.save();
    }

    public removeById(lobbyId: any) {
        return this.Lobby.deleteOne({_id: lobbyId}).exec();
    }

    public patch(lobbyId: any, lobbyData: any) {
        return this.Lobby.findOneAndUpdate({
            _id: lobbyId
        }, lobbyData).exec();
    }

    public list(perPage: number, page: number) {
        return this.Lobby.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec()
    }

    public all() {
        return this.Lobby.find({}).exec();
    }
}

export default LobbyModel
