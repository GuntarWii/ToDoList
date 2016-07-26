//
//
//function addEventListener() {
//
//    var taskStatusBtn = $$(".task-status");
//
//    
////        for (var i = 0; i < taskStatusBtn.length; i++) {
////        taskStatusBtn[i].removeEventListener('click', taskStatus, false);
////    }
//
//    for (var i = 0; i < taskStatusBtn.length; i++) {
//        taskStatusBtn[i].addEventListener('click', taskStatus, false);
//    }
//
//}
//
//
//addEventListener()
//
//
//function taskStatus() {
//
//    var target = this;
//    var taskStatus = $("status-btn");
//    var test = $(".main-body");
//    var allTasks = $$(".task")
//
//
//    while (target.parentNode) {
//        if (target.hasAttribute("data-id-number")) {
//            var currentAtr = target.getAttribute("data-id-number");
//
//            break;
//        }
//
//        
//        else if(target.hasAttribute("data-side-bar")){
//              var currentAtr = target.getAttribute("data-id-number");
//               
//               
//               break;
//        }
//        
//        
//                target = target.parentNode;
//    }
//    
////    console.log(target)
//
//    target.classList.toggle("checked")
//    
//
//    if (TaskListArray[currentAtr].TaskStatus == "task-not-done") {
//        TaskListArray[currentAtr].TaskStatus = "task-done"
//
//    } else if (TaskListArray[currentAtr].TaskStatus = "task-done") {
//        TaskListArray[currentAtr].TaskStatus = "task-not-done"
//    }
//
//    console.log(TaskListArray[currentAtr].TaskStatus)
//
//    //    console.log(TaskListArray[currentAtr])
//    //    console.log(allTasks[1])
//
////    console.log(target.childNodes[0].className )
//
//    var colb = $(".col-b")
//        , cola = $(".col-a"),
//        favcol = $(".favorite-task-block");
//    
//    if (target.childNodes[0].className == "main-task offset-1 offset-10m") {
////        
//        var col = favcol
//        
//        
//    }else{
//        
//    if (colb.offsetHeight < cola.offsetHeight) {
//        var col = colb
//        
//    }else{
//         var col = cola
//    }
//        
//        
//    }
//    
//    
//    
//    
//    
//
//    if (target.classList.contains("checked")) {
//
//        col.appendChild(target)
//
//    } else if (!target.classList.contains("checked")) {
//        col.insertBefore(target, col.firstChild)
//
//    }
//
//}


