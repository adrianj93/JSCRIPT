UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
    this.state = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {
    var myelement = new element(data);
    arr.push(myelement);
};
UAM.Store.prototype.update = function (id, data) {};

UAM.Store.get = function() { return this.data.length };