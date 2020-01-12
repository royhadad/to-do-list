//TODO BUG
//then convert entire app to using redux


class MyRedux {
    _values = {}; //pairs of key-value
    _listeners = {}; //pairs of key-callbacks

    //if doesn't exist, adds the key-value pair, if exists, updates the value
    //calls the callback function of all of the key's listeners
    update(key, value) {
        console.log(this._listeners['zibi'].length);
        this._values[key] = value;
        if (this._listeners[key]) {
            for (let callback of this._listeners[key]) {
                callback(value);
            }
        }
    }
    //user passes a key to listen to, and a callback function binded to the listening class
    //also calls the callback immediately with the value as the argument
    //if the key's value is not yet defind, the callback is called with undefind as the argument
    listen(key, callback) {
        if (!this._listeners[key]) {
            this._listeners[key] = [];
        }
        this._listeners[key].push(callback);
        callback(this._values[key]);
    }
    removeListener(key,theFunc){
        this._listeners[key].splice(this._listeners[key].indexOf(theFunc), 1);
    }
}
export default new MyRedux();