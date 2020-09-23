import mongoose from "mongoose";
import {mongoDBURI} from "@shared/constants";

let count = 0;

const options = {
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    // all other approaches are now deprecated by MongoDB:
    useNewUrlParser: true,
    useUnifiedTopology: true

};
const connectWithRetry = () => {
    // tslint:disable-next-line:no-console
    console.log("MongoDB connection with retry")
    mongoose.connect(mongoDBURI, options).then(() => {
        // tslint:disable-next-line:no-console
        console.log("MongoDB is connected")
        mongoose.connection.useDb("gamebet")
    }).catch(err => {
        // tslint:disable-next-line:no-console
        console.log("MongoDB connection unsuccessful, retry after 5 seconds. ", ++count);
        setTimeout(connectWithRetry, 5000)
    })

};

connectWithRetry();

export default mongoose