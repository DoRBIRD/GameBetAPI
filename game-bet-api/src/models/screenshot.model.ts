import mongoose from "@shared/mongoose.service";

const Schema = mongoose.Schema;

const collectionName = "screenshots"

const screenshotSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    lobbyId: Schema.Types.ObjectId,
    source: String
});
screenshotSchema.set("toJSON", {
    virtuals: true
});

class ScreenshotModel {
    Screenshot = mongoose.model(collectionName, screenshotSchema);

    public findById(screenshotId: any) {
        return this.Screenshot.findById(screenshotId).exec();
    }

    public findByUserId(userId: any) {
        return this.Screenshot.find({"userId":userId}).exec();
    }

    public findByLobbyId(lobbyId: any) {
        return this.Screenshot.find({"lobbyId":lobbyId}).exec();
    }

    public create(screenshotData: any) {
        const screenshot = new this.Screenshot(screenshotData);
        if (!screenshot._id)
            screenshot._id = mongoose.Types.ObjectId();
        return screenshot.save();
    }

    public removeById(screenshotId: any) {
        return this.Screenshot.deleteOne({_id: screenshotId}).exec();
    }

    public patch(screenshotId: any, screenshotData: any) {
        return this.Screenshot.findOneAndUpdate({
            _id: screenshotId
        }, screenshotData).exec();
    }

    public list(perPage: number, page: number) {
        return this.Screenshot.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec()
    }

    public all() {
        return this.Screenshot.find({}).exec();
    }
}

export default ScreenshotModel
