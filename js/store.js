UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
    this.list = [];
    
    //
    this.tasks_identificators = {};
    this.active = 0;
    
    //this.i = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

a = 0;

//
UAM.Store.prototype.add = function (text) {
    var newTask = new newTaskk(text);
    
    this.list.push(newTask);
    this.tasks_identificators[newTask.id] = newTask;
    this.emit("ev_newtask", newTask.text, newTask.status, this.list.length, newTask.id);
};

UAM.Store.prototype.updates = function (id) {
    this.tasks_identificators[id].status = !this.tasks_identificators[id].status;
    if (this.tasks_identificators[id].status) {
        this.active++;
    } else {
        this.active--;
    }
    //
    this.emit("ev_changed", this.tasks_identificators[id].text, this.tasks_identificators[id].status, this.active, this.tasks_identificators[id].id);

};

function newTaskk(text) {
    this.text = text;
    this.status = false;
    this.id = a;
    a++;
    
    return this;
}