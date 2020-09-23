import mongoose from "@shared/mongoose.service";

const Schema = mongoose.Schema;

const collectionName = "user"

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: String,
    username: String,
    password: String,
    icon: String,
    trusted: Boolean,
    coins: Number
});
userSchema.set("toJSON", {
    virtuals: true
});

class UserModel {
    User = mongoose.model(collectionName, userSchema);

    public findById(userId: any) {
        return this.User.findById(userId).exec();
    }

    public create(userData: any) {
        const user = new this.User(userData);
        if (!user._id)
            user._id = mongoose.Types.ObjectId();
        return user.save();
    }

    public removeById(userId: any) {
        return this.User.deleteOne({_id: userId}).exec();
    }

    public patch(userId: any, userData: any) {
        return this.User.findOneAndUpdate({
            _id: userId
        }, userData).exec();
    }

    public list(perPage: number, page: number) {
        return this.User.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec()
    }

    public all() {
        return this.User.find({}).exec();
    }
}

export default UserModel
