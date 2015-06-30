(function(global) {


    var listView;
    if (!global.UAM) {
        global.UAM = {};
    }

    UAM.listView = function(content) {
        UAM.EventEmitter.call(this);
        
        this.ListTasks = [];
        
        this.updates = function(text, status, id) {
            currentTask = this.ListTasks[id];
            if (status) {
                currentTask.setAttribute('class', "act");
            } else {
                currentTask.setAttribute('class', "normal");
            }
        }

//        this.dodajZadanie = function(text, status, id) {
//            var node = document.createElement('div');
//            node.appendChild(document.createTextNode(id + ". " + text));
//            content.appendChild(node);
//            this.ListTasks[id] = node;
//            var clickOnTask = function() {
//                this.emit("ev_click", id);
//                // emituję
//            }
//            node.addEventListener('click', clickOnTask.bind(this));
//        }
        
        this.newTaskkToList = function(text, status, id) {
            var node = document.createElement('div');
            node.appendChild(document.createTextNode(id + ". " + text));
            content.appendChild(node);
            this.ListTasks[id] = node;
            
            var clickOnTask = function() {
                this.emit("ev_click", id);
                // emitowanie eventu klkniecia
            }
            node.addEventListener('click', clickOnTask.bind(this));
        }


    }

    UAM.utils.inherits(UAM.EventEmitter, UAM.listView);


}(window))