(function(global) {

    var footerView;

    if (!global.UAM) {
        global.UAM = {};
    }

    UAM.footerView = function(content) {
        UAM.EventEmitter.call(this);
        this.content = content;

        this.numberTasks = function(count) {
            this.content.querySelector('#numberOfTasks').textContent = count;
        };

        this.numerActiveupd = function(count) {
            this.content.querySelector('#numberOfActive').textContent = count;
        };
    }

    UAM.utils.inherits(UAM.EventEmitter, UAM.footerView);

}(window))