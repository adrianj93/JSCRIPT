

window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded
    var store = new UAM.Store();
    
	var inputView = new UAM.inputView(document.querySelector('#inputView'));
	var listView = new UAM.listView(document.querySelector('#listView'));
	var footerView = new UAM.footerView(document.querySelector('#footerView'));
        
	var InputCtrl = new UAM.InputCtrl(inputView, store);
	var ListCtrl = new UAM.ListCtrl(listView, store);
	var FooterCtrl = new UAM.FooterCtrl(footerView, store);

});


//w widoku tylko DOM np. addEventListener
// bez jquery

//trzeba powiadomic kontroler do czego sluzy eventemiter

// w view pobieramy wart. z inputa i wysyłamy na kontroler do czego sluzy event emiter this.emit("new elekment", input value
// inputview.on("new element", function()
// on działa jak eventlistener


//var myBtn = document.getElementById('btn');
//var listv = document.getElementById('listview');
//
//$('#listview').on('click', 'li', function() {
//        if (store.state[this.id] === 0 || store.state[this.id] === null) {
//            store.state[this.id] = 1;
//            document.getElementById(this.id).style.backgroundColor = "#FFFF99";
//        } else {
//            store.state[this.id] = 0;
//            document.getElementById(this.id).style.backgroundColor = "white";
//        }
//        updateActive();
//    });
//
//myBtn.addEventListener("click", function(){
//        var text = document.getElementById('inputview').value;
//        store.data.push(text);
//        store.state.push(0);
//        document.getElementById('totalItems').innerHTML = store.data.length;
//        updateList(store.data.length);
//    });
//
//
//var updateList = function(id) {
//    document.getElementById('listview').innerHTML += "<li id=\"" + id + "\">" + id + ". " + store.data[id-1] + "<paper-ripple fit></paper-ripple></li>";
//}
//
//var updateActive = function(id) {
//        var count = 0;
//        for(var i = 0; i < store.state.length; ++i) {
//            if(store.state[i] == 1 )
//                count++;
//            document.getElementById('activeItems').innerHTML = count;
//        }
//}
