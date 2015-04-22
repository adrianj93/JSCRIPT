var store = new UAM.Store();

window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	

	var inputView = new UAM.InputView(document.querySelector('#inputview'));
	var listView = new UAM.ListView(document.querySelector('#listview'));
	var footerView = new UAM.FooterView(document.querySelector('#footerview'));
        
	new InputCtrl(inputView, store);
	new ListCtrl(listView, store);
	new FooterCtrl(footerView, store);

});


var myBtn = document.getElementById('btn');
var listv = document.getElementById('listview');

$('#listview').on('click', 'li', function() {
        if (store.state[this.id] === 0) {
            store.state[this.id] = 1;
            document.getElementById(this.id).style.backgroundColor = "#FFFF99";
        } else {
            store.state[this.id] = 0;
            document.getElementById(this.id).style.backgroundColor = "white";
        }
        updateActive();
    });


var updateList = function(id) {
    document.getElementById('listview').innerHTML += "<li id=\"" + id + "\">" + id + ". " + store.data[id-1] + "<paper-ripple fit></paper-ripple></li>";
}

var updateActive = function(id) {
        var count = 0;
        for(var i = 0; i < store.state.length; ++i){
        if(store.state[i] == 1)
            count++;
        document.getElementById('activeItems').innerHTML = count;
}
}

myBtn.addEventListener("click", function(){
        var text = document.getElementById('inputview').value;
        store.data.push(text);
        store.state.push(0);
        document.getElementById('totalItems').innerHTML = store.data.length;
        updateList(store.data.length);
    });