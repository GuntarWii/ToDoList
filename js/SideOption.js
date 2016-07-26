document.body.addEventListener('click', function () {
	var target = event.target;
	var task = $(".task-content-small");

	while (target.parentNode) {
		if (target.hasAttribute("data-id-number")) {
			var currentAtr = target.getAttribute("data-id-number");
		
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
                sideOption(currentAtr)
                
			}
                    
                }
        

});
//
//function testing(){
//    document.body.addEventListener('click', function () {
//	var target = event.target;
//	var task = $(".task-content-small");
//
//	while (target.parentNode) {
//		if (target.hasAttribute("data-id-number")) {
//			var currentAtr = target.getAttribute("data-id-number");
//		
//			break;
//		}
//		
//		target = target.parentNode;
//
//		}
//
//	var currentAtr;
//	
////	console.log(currentAtr)
//	
//		for (var i = 0; i < TaskListArray.length; i++) {
//
//
//			if (TaskListArray[i].taskid == currentAtr) {
////				console.log("this")
////				console.log(TaskListArray[currentAtr].Taskname + "ssss")
////				var sidOptTaskName = $(".side-opt-task-name");
////				sidOptTaskName.innerHTML = TaskListArray[currentAtr].Taskname
////				console.log(TaskListArray[i].taskid)
//				sideOption(currentAtr)
//				
//			}
//			
//		}
//    
//
//});
//}
//
//    testing()

//function sideOption(currentAtr){
//	var sidOptTaskName = $(".side-opt-task-name");
//    var Details = $(".details");
//    
//        var SaidOption = $(".task-details");
//    
////    console.log("testing")
//    SaidOption.innerHTML = ''
//    
//    
//    
//        var Details = $(".task-details");
//    
//    
//    
//    
//
////    var element = document.createElement("div");
////    console.log(TaskListArray[currentAtr].Category)
//    
//    switch(TaskListArray[currentAtr].Category) {
//    case "work":
//        var cat = " workDop"
//        break;
//
//    case "home":
//        var cat = " homeDop"
//        break;
//    case "network":
//        var cat = " networkDop"
//        break;
//    case "social":
//        var cat = " socialDop"
//        break;
//
//    default:
//        var cat = "workDop"
//}
//
//    
//    SaidOption.innerHTML = '\
//                        <div class="task-details-block task-details-border">\
//                            <div class="col-1 checkbox-empty-fix">\
//                                <label class="status-replace-icons said-dop-option">\
//                                    <input  type="checkbox" href="#" class="add-to-favorite taskdop-status-box"> \
//                                    <span class="fa fa-star-o fa-lg task-status"></span>\
//                                    </label>\
//                            </div>\
//                            <div class="col-11 taks task-content-details-big">\
//                                <h2 class="side-opt-task-name" contenteditable="true">'+ TaskListArray[currentAtr].Taskname +'</h2>\
//                                <button href="#" class="favourite-2"><span class="fa fa-star-o"></span></button>\
//                            </div>\
//                        </div>\
//                        <div class="task-details-block task-details-border set-up-data toggle-option" data-toggle-number="5">\
//                            <div class="task-details-block" id="clandar">\
//                                <div class="col-1 checkbox-empty">\
//                                    <span class="centered fa fa-calendar fa-lg"></span>\
//                                </div>\
//                                <div class="col-11 taks task-content-details">\
//                                    <p> Set a due date</p>\
//                                </div>\
//                            </div>\
//                        </div>\
//                        <div class="task-details-block task-details-border">\
//                            <div class="task-details-block">\
//                                <div class="col-1 checkbox-empty">\
//                                    <span class=" fa fa-clock-o fa-lg"></span>\
//                                </div>\
//                                <div class="col-11 taks task-content-details">\
//                                    <p>Set a reminder</p>\
//                                </div>\
//                            </div>\
//                        </div>\
//                        <div class="task-details-block task-details-border">\
//                            <div class="task-details-block change">\
//                                <div class="col-1 '+ cat +' checkbox-empty">\
//                                    <span class="fa fa-circle fa-lg"></span>\
//                                </div>\
//                                <div class="col-11 taks task-content-details">\
//                                    <p>'+ TaskListArray[currentAtr].Category +'</p>\
//                                </div>\
//                            </div>\
//                        </div>\
//                        <div class="task-details-block ">\
//                            <div class="task-details-block">\
//                                <div class="col-1 checkbox-empty">\
//                                    <span class=" fa fa-edit fa-lg"></span>\
//                                </div>\
//                                <div class="col-11 taks task-content-details">\
//                                    <p>Add note</p>\
//                                </div>\
//                            </div>\
//                        </div>\
//                        <div class="paperclip">\
//                            <a href="#"><span class="fa fa-paperclip fa-lg"></span></a>\
//                        </div>\
//                    '
//    
////   Details.appendChild(element);
//                    
//                    
//    if (TaskListArray[currentAtr].TaskStatus == "task-done") {
//        
//        var sideTest = $('.taskdop-status-box');
//        
//
//        
//        sideTest.checked=true;
//        
//       
//    }
//    
//    
//    
//    
//
//
////    
//////    console.log(allTasks)
////	sidOptTaskName.innerHTML = TaskListArray[currentAtr].Taskname
//     
//addEventListener()
//}

