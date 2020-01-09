export default class MyRedux {
    static _values = {}; //pairs of key-value
    static _listeners = {}; //pairs of key-callback

    //if does'nt exist, adds the key-value pair, if exists, updates the value
    //calls the callback function of all of the key's listeners
    static update(key, value) {
        MyRedux._values[key] = value;
        if (MyRedux._listeners[key]) {
            for (let callback of MyRedux._listeners[key]) {
                callback(value);
            }
        }
    }
    //user passes a key to listen to, and a callback function binded to the listening class
    //also calls the callback immediately with the value as the argument
    //if the key's value is not yet defind, the callback is called with undefind as the argument
    static listen(key, callback) {
        if (!MyRedux._listeners[key]) {
            MyRedux._listeners[key] = [];
        }
        MyRedux._listeners[key].push(callback);
        callback(MyRedux._values[key]);
    }
}