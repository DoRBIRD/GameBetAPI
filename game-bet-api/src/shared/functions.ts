import logger from "./Logger";
import crypto from "crypto";
import {BASE64, SHA512} from "@shared/constants";

export const pErr = (err: Error) => {
    if (err) {
        logger.error(err);
    }
};

export const getRandomInt = () => {
    return Math.floor(Math.random() * 1_000_000_000_000);
};

export const hashPassword = (password: string) => {
    const salt = crypto.randomBytes(16).toString(BASE64);
    const hash = crypto.createHmac(SHA512, salt)
        .update(password)
        .digest(BASE64);
    return salt + "$" + hash;
}
