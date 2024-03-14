 {
                "questionType":"TYPE-A",
                "question":"",
                "multipleAns":false,
                "resource":"",
                "correctAnswers":"",
                "options":[]
            }


            function a(){
                let resource = getResource(subTopicIndex)
        let targetResource=resourceData[resource]
        setData(targetResource, 
                ()=>{
                    setFlow(courseResource.flow)
            }
        )
           
        let flow=courseResource.flow;
        moduleSize=courseResource[flow[extras.courseItemIndex]].length
        console.log("module size: "+ extras.moduleSize)
        courseSize=flow.length
        item="overView"
        setExtras(
            {...extras, "moduleSize":moduleSize, "courseSize":courseSize},
            ()=>{
                updateCurrentItem("overView")
                handleItemUpdate("overView")
                decideCurrentResource()
                setNavPage(prevNavPage=>prevNavPage+1)
            }    
        )
            }