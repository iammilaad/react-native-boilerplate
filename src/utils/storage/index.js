import { AsyncStorage } from "react-native";
import * as keys from "./constants";

export const Dolphin = "Dolphin";

export default class Storage {
    static main = null;
    storage;

    constructor(storage) {
        this.storage = storage;
    }

    static mainStorage() {
        if (this.main === null) {
            this.main = new Storage(Dolphin);
        }

        return this.main;
    }

    put = async (key, value) => {
        try {
            return await AsyncStorage.setItem(`${this.storage}:${key}`, value);
        } catch (error) {
            throw new Error("cant save the data");
        }
    };

    asyncPut = (key, value) => {
        try {
            return AsyncStorage.setItem(`${this.storage}:${key}`, value);
        } catch (error) {
            throw new Error("cant save the data");
        }
    };

    get = async (key, default_ = null) => {
        try {
            return await AsyncStorage.getItem(`${this.storage}:${key}`);
        } catch (error) {
            return default_;
        }
    };

    map = async (items, callback) => {
        const data = [];
        let respnose;
        for (let i = 0; items.length; i++) {
            respnose = await callback(items[i]);
            data.push(respnose);
        }

        return data;
    };

    all = async () => {
        return await this.map(Object.keys(keys), async key => {
            return await this.get(key);
        });
    };

    asyncGet = (key, default_ = null) => {
        try {
            return AsyncStorage.getItem(`${this.storage}:${key}`);
        } catch (error) {
            return default_;
        }
    };

    remove = async key => {
        try {
            await AsyncStorage.removeItem(`${this.storage}:${key}`);
        } catch (error) {
            throw new Error("cant remove the data");
        }
    };

    asyncRemove = key => {
        return AsyncStorage.removeItem(`${this.storage}:${key}`);
    };

    flush = () => {
        Object.keys(keys).forEach(key => this.asyncRemove(keys[key]));
    };
}
