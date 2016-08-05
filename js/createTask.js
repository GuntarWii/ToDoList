function $(e) {
    return document.querySelector(e);
}

function $$(e) {
    return document.querySelectorAll(e);
}

var startBtn = $("#home");

startBtn.addEventListener('click', getTaskValues, false);

var taskFavorite = $(".add-to-favorite");

taskFavorite.addEventListener('click', favorite, false);

var taskCategoryBtn = $$(".category-btn");

for (var i = 0; i < taskCategoryBtn.length; i++) {
    taskCategoryBtn[i].addEventListener('click', category, false);
}



var favoriteStatus
    , taskCategory
    , taskIdNumber = 0;
var TaskListArray = [

	   task = {
        Taskname: "Html Task"
        , Category: "work"
        , Favorite: "no"
        , TaskDate: undefined
        , TaskStatus: "task-done"
        , taskid: taskIdNumber
	 },

	   task = {
        Taskname: "Java srcipt"
        , Category: "work"
        , Favorite: "no"
        , TaskDate: undefined
        , TaskStatus: "task-not-done"
        , taskid: taskIdNumber
	 },

		task = {
        Taskname: "Css style part"
        , Category: "work"
        , Favorite: "no"
        , TaskDate: undefined
        , TaskStatus: "task-not-done"
        , taskid: taskIdNumber
	 },

        task = {
        Taskname: "small task to finish do to list"
        , Category: "work"
        , Favorite: "yes"
        , TaskDate: undefined
        , TaskStatus: "task-not-done"
        , taskid: taskIdNumber
	 }


];

//console.log(TaskListArray[0].Category)
function getTaskValues() {

    var taskName = $("#task-text").value
        , addToFavroite = $(".add-to-favorite")
        , taskDate = $(".add-date");


    //	console.log(addTaskName.value)

    taskIdNumber = TaskListArray.length

    var task = {
        Taskname: $("#task-text").value
        , Category: taskCategory
        , Favorite: favoriteStatus
        , TaskDate: undefined
        , TaskStatus: undefined
        , taskid: taskIdNumber
        
    }
    
    TaskListArray.push(task)
//    console.log(TaskListArray)
//    console.log(taskIdNumber)
    createTask()

}


function favorite() {

    if (this.checked == true) {
        favoriteStatus = "yes";
    } else {
        favoriteStatus = "no";
    }

}

function category() {
    switch (this.id) {
    case "work":
        taskCategory = "work"
        break;
    case "home":
        taskCategory = "home"
        break;
    case "network":
        taskCategory = "network"
        break;
    case "social":
        taskCategory = "social"
        break;
    }
}



var taskIndex = -1;

for (var i = 0; i < TaskListArray.length; i++) {
    createTask()

}

function createTask(TasknameId) {



    var
        colA = document.getElementById('col-a').offsetHeight
        , colB = document.getElementById('col-b').offsetHeight
        , taskBoks = document.createElement("div")
        , favorite = $(".favorite-task-block");


//    	taskIndex += 1


    if (TasknameId !== undefined) {

        taskIndex = TasknameId

    } else {
        taskIndex += 1
    }

//console.log(taskIndex)
//console.log(TaskListArray)

    taskBoks.className = "task";
    taskBoks.setAttribute("data-id-number", taskIndex)


    if (TaskListArray[taskIndex].Favorite == "yes") {
        taskBoks.innerHTML = '<section class="main-task offset-1 offset-10m">\
					<div class="col-1 checkbox">\
						<label class="status-replace-icons">\
	           <input type="checkbox" href="#" class="add-to-favorite task-status-box" >\
	                   <span class="fa fa-star-o fa-lg task-status"></span>\
                        </label>\
					</div>\
					<div class="col-md-10 purple big-task-content toggle-option"  data-toggle-number="3" toggle-option" id=" ' + taskIndex + '">\
						<p class="location-and-date"><a href="#"><span class="fa fa-map-marker fa-lg"></span></a> At Tesco | Next monday</p>\
						<a href="#" class="favourite"><span class="fa fa-star"></span></a>\
						<h1 class="task-value">' + TaskListArray[taskIndex].Taskname + '</h1>\
					</div>\
					<div class="col-md-1 ' + TaskListArray[taskIndex].Category + '"></div>\
				</section>'


        favorite.insertBefore(taskBoks, favorite.childNodes[0]);
    } else {
        var col = (colB < colA) ? "col-b" : "col-a";
        taskBoks.innerHTML = '\
		<div class="col-md-2 checkbox">\
			<label class="status-replace-icons">\
	<input type="checkbox" href="#" class="add-to-favorite task-status-box" >\
	<span class="fa fa-star-o fa-lg task-status"></span>\
</label>\
		</div>\
<div class="col-md-10 purple task-content-small toggle-option" id=" ' + taskIndex + '" data-toggle-number="3" data-id-number="' + taskIndex + '">\
<p class="location-and-date location-and-date-small" id="time-now">Tomorrow</p>\
	<div class="task-name">\
<span>' + TaskListArray[taskIndex].Taskname + '\
</span>\
	</div>\
</div>\
		<div class="col-xs-1 ' + TaskListArray[taskIndex].Category + '">\
		</div>';

        var todolist = document.getElementById(col);
        todolist.insertBefore(taskBoks, todolist.childNodes[0]);

        var col = (colB < colA) ? "col-b" : "col-a";
        var todolist = document.getElementById(col);
        todolist.insertBefore(taskBoks, todolist.childNodes[0]);
    }

    var allTask = $$(".task")


    if (TaskListArray[taskIndex].TaskStatus == "task-done") {
        taskBoks.className += " checked";

        var sss = $('.task-status-box');

        sss.setAttribute("checked", "checked");


    }
    
    
    TaskListArray[taskIndex].taskid = taskIndex
    
    tooggle()
    addEventListener()
    

}






function tooggle() {

	var toggle = $$(".toggle-option");
        
	for (var i = 0; i < toggle.length; i++) {

        
		toggle[i].addEventListener('click', togller, true);
		//		toggle[i].addEventListener('click', docClick, false);
	}

}

function togller(event) {
		var current = this.dataset.toggleNumber,
			options = $$(".option"),
			dopOption = $(".details"),
			dopOptTarget = event.target;

		//		console.log(this)
		for (var i = 0; i < options.length; i++) {
			var hiddenAtr = options[i].dataset.toggleNumber;
			
//			console.log(hiddenAtr)

			if (current == hiddenAtr) {

				options[i].classList.toggle("hidden");

				// Ja viņš nav vienāds ar piespiesto elementu un tam nav klases hidden
			} else if (options[i].className.indexOf("hidden") == -1) {

				if (dopOption.className.indexOf("hidden") == -1) {

					if (dopOptTarget.parentElement == $(".header-opt-btn")) {
						options[i].classList.toggle("hidden");
					}
					// ja taisa parbaude a target ja tiek klikšķināts arpus ditiles lauka tad toggle ja ne tad radit dop options				
				} else {
					options[i].classList.toggle("hidden");
				}
			}
		}


	}
	

tooggle()





function addEventListener() {

    var taskStatusBtn = $$(".task-status");

    
//        for (var i = 0; i < taskStatusBtn.length; i++) {
//        taskStatusBtn[i].removeEventListener('click', taskStatus, false);
//    }

    for (var i = 0; i < taskStatusBtn.length; i++) {
        taskStatusBtn[i].addEventListener('click', taskStatus, false);
    }

}


addEventListener()


function taskStatus() {

    var target = this;
    var taskStatus = $("status-btn");
    var test = $(".main-body");
    var allTasks = $$(".task")


    while (target.parentNode) {
        if (target.hasAttribute("data-id-number")) {
            var currentAtr = target.getAttribute("data-id-number");
                console.log(target.classList)
            break;
        }

        
        else if(target.hasAttribute("data-side-bar")){
//              var currentAtr = target.getAttribute("data-id-number");
               
               
               break;
        }
        
        
                target = target.parentNode;
    }
    

    target.classList.toggle("checked")
    

    if (TaskListArray[currentAtr].TaskStatus == "task-not-done") {
        TaskListArray[currentAtr].TaskStatus = "task-done"

    } else if (TaskListArray[currentAtr].TaskStatus = "task-done") {
        TaskListArray[currentAtr].TaskStatus = "task-not-done"
    }

    console.log(TaskListArray[currentAtr].TaskStatus)

    //    console.log(TaskListArray[currentAtr])
    //    console.log(allTasks[1])

//    console.log(target.childNodes[0].className )

    var colb = $(".col-b")
        , cola = $(".col-a"),
        favcol = $(".favorite-task-block");
    
    if (target.childNodes[0].className == "main-task offset-1 offset-10m") {
//        
        var col = favcol
        
        
    }else{
        
    if (colb.offsetHeight < cola.offsetHeight) {
        var col = colb
        
    }else{
         var col = cola
    }
        
        
    }
    
    
    
    
    

    if (target.classList.contains("checked")) {

        col.appendChild(target)

    } else if (!target.classList.contains("checked")) {
        col.insertBefore(target, col.firstChild)

    }
    

}


 document.body.addEventListener('click', function () {
    
    
	var target = event.target;
	var task = $(".task-content-small");
    
    

	while (target.parentNode) {
		if (target.hasAttribute("data-id-number")) {
			var currentAtr = target.getAttribute("data-id-number");
            var currentDiv = target;
        
		
			break;
		}
		
		target = target.parentNode;

		}

 
        
	var currentAtr;
	
//console.log(currentAtr +' Atribut')
//console.log(TaskListArray.taskid +' Task id')
	
//		if(currentAtr == undefined){
//            for (var i = 0; i < TaskListArray.length; i++) {
//
//
//			if (TaskListArray[i].taskid == currentAtr) {
////				console.log("this")
////				console.log(TaskListArray[currentAtr].Taskname + "ssss")
////				var sidOptTaskName = $(".side-opt-task-name");
////				sidOptTaskName.innerHTML = TaskListArray[currentAtr].Taskname
////				console.log(TaskListArray[i].taskid)
//				sideOption(currentAtr)
//					console.log("currentAtr")
//			}
//            
//			
//		}
//        }
    
    
                for (var i = 0; i < TaskListArray.length; i++) {


			if (TaskListArray[i].taskid == currentAtr) {
//				console.log("this")
//				console.log(TaskListArray[currentAtr].Taskname + "ssss")
//				var sidOptTaskName = $(".side-opt-task-name");
//				sidOptTaskName.innerHTML = TaskListArray[currentAtr].Taskname
//				console.log(TaskListArray[i].taskid)
                sideOption(currentAtr,currentDiv)
                
			}
                    
                }


});



function sideOption(currentAtr,currentDiv){
    
    
	var sidOptTaskName = $(".side-opt-task-name");
    var Details = $(".details");
    var currentAtr;
    var SaidOption = $(".task-details");
    
//    console.log("testing")
    SaidOption.innerHTML = ''
    
    
    
        var Details = $(".task-details");
    
    
    Details.dataset.dataIdNumber === currentAtr
    

//    var element = document.createElement("div");
//    console.log(TaskListArray[currentAtr].Category)
    
    switch(TaskListArray[currentAtr].Category) {
    case "work":
        var cat = " workDop"
        break;

    case "home":
        var cat = " homeDop"
        break;
    case "network":
        var cat = " networkDop"
        break;
    case "social":
        var cat = " socialDop"
        break;

    default:
        var cat = "workDop"
}

    
    SaidOption.innerHTML = '\
                        <div class="task-details-block task-details-border">\
                            <div class="col-1 checkbox-empty-fix">\
                                <label class="status-replace-icons said-dop-option">\
                                    <input  type="checkbox" href="#" class="add-to-favorite taskdop-status-box"> \
                                    <span class="fa fa-star-o fa-lg task-status"></span>\
                                    </label>\
                            </div>\
                            <div class="col-11 taks task-content-details-big">\
                                <h2 onkeyup="myFunction()" class="side-opt-task-name" contenteditable="true" data-side-number='+ currentAtr +'>'+ TaskListArray[currentAtr].Taskname +'</h2>\
                                <button href="#" class="favourite-2"><span class="fa fa-star-o"></span></button>\
                            </div>\
                        </div>\
                        <div class="task-details-block task-details-border set-up-data toggle-option" data-toggle-number="5">\
                            <div class="task-details-block" id="clandar">\
                                <div class="col-1 checkbox-empty">\
                                    <span class="centered fa fa-calendar fa-lg"></span>\
                                </div>\
                                <div class="col-11 taks task-content-details">\
                                    <p> Set a due date</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="task-details-block task-details-border">\
                            <div class="task-details-block">\
                                <div class="col-1 checkbox-empty">\
                                    <span class=" fa fa-clock-o fa-lg"></span>\
                                </div>\
                                <div class="col-11 taks task-content-details">\
                                    <p>Set a reminder</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="task-details-block task-details-border">\
                            <div class="task-details-block change">\
                                <div class="col-1 '+ cat +' checkbox-empty">\
                                    <span class="fa fa-circle fa-lg"></span>\
                                </div>\
                                <div class="col-11 taks task-content-details">\
                                    <p>'+ TaskListArray[currentAtr].Category +'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="task-details-block ">\
                            <div class="task-details-block">\
                                <div class="col-1 checkbox-empty">\
                                    <span class=" fa fa-edit fa-lg"></span>\
                                </div>\
                                <div class="col-11 taks task-content-details">\
                                    <p>Add note</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="paperclip">\
                            <a href="#"><span class="fa fa-paperclip fa-lg"></span></a>\
                        </div>\
                    '
    
//   Details.appendChild(element);
                    
                    
                    
    if (TaskListArray[currentAtr].TaskStatus == "task-done") {
        
        var sideTest = $('.taskdop-status-box');
        

        
        sideTest.checked=true;
        
       
    }
    
    
//    console.log(currentDiv.childNodes)
    
//    var currentDiv;
//    myFunction(currentDiv)
//    
//    var taskName = $$(".task-name");
//    
//    console.log(taskName[currentAtr])
//    
//    for(var i = 0; i < currentDiv.childNodes.length; i++){
//        
//            console.log(currentDiv.childNodes[i].innerHTML)
//    }
    
    
//  myFunction(currentAtr)

//    
////    console.log(allTasks)
//	sidOptTaskName.innerHTML = TaskListArray[currentAtr].Taskname
    
//    var taksNanme = $(".side-opt-task-name").innerHTML;
//    TaskListArray[currentAtr].Taskname = taksNanme
//    console.log(taksNanme)
//    
//    console.log(TaskListArray[currentAtr].Taskname)
    
//    myFunction()
    //        
//    TaskListArray[currentAtr].Taskname = taksNanme

     
addEventListener()

}


function myFunction(currentAtr){
        var taksNanme = $(".side-opt-task-name").innerHTML;
        var test = $(".side-opt-task-name").getAttribute("data-side-number");
        console.log(test)
        
        TaskListArray[test].Taskname = taksNanme;
    
    	$(".col-a").innerHTML = ""
	$(".col-b").innerHTML = ""
    $(".favorite-task-block").innerHTML = ""
    
                        for(var i = 0; i < TaskListArray.length; i++){
                        
                        createTask(i)
                    }

}

















	

