
    
var datacat = $$(".cat-filtr");

    for(var i = 0; i < datacat.length; i++){
        datacat[i].addEventListener('click', categryFiltr, false);
    }



function categryFiltr(){
	 var categoryFilterClass = this.getAttribute("data-category-filter")
  
	$(".col-a").innerHTML = ""
	$(".col-b").innerHTML = ""
    $(".favorite-task-block").innerHTML = ""
	
			for (var i = 0; i < TaskListArray.length; i++) {


			if (TaskListArray[i].Category == categoryFilterClass) {
				
//				console.log(TaskListArray[i].taskid)
				var TasknameId = TaskListArray[i].taskid;
				
							createTask(TasknameId)
////							createTask(Taskname,Category)
//							console.log(Taskname,Category)
			}else if(categoryFilterClass == "all"){
            
                    for(var i = 0; i < TaskListArray.length; i++){
                        
                        createTask(i)
                    }
            }
				
				
		}
    
    
//    tooggle()
//    addEventListener()


}