var app1 = new Vue({
    el: "#committeeSelection",
    
    data: function(){
        return {
            parameters: [
                    {
                        name: "A"
                    },
                    {
                        name: "B"
                    },
                    {
                        name: "C"
                    },
                    {
                        name: "D"
                    },
                    {
                        name: "E"
                    },
                    {
                        name: "F"
                    }, 
                    {
                        name: "G"
                    },
                    {
                        name: "H"
                    },
                    {
                        name: "I"
                    }
                ],
            committees: [
                    {
                        name: "LDOC",
                        img: "job.png",
                        parameters:  "A,E",
                        shown: true,
                    },
                    {
                        name: "Downtown Duke",
                        img: "job.png",
                        parameters:  "D,F",
                        shown: true
                    },  
                    {
                        name: "Special Events",
                        img: "job.png",
                        parameters:  "D,I",
                        shown: true
                    },
                    {
                        name: "Campus Concerts",
                        img: "job.png",
                        parameters:  "H,I",
                        shown: true
                    },
                    {
                        name: "Coffehouse",
                        img: "job.png",
                        parameters:  "A,F",
                        shown: true
                    },  
                    {
                        name: "DevOps",
                        img: "job.png",
                        parameters:  "D,F",
                        shown: true
                    },
                    {
                        name: "Duke Student Broadcasting",
                        img: "job.png",
                        parameters:  "B,A",
                        shown: true
                    },
                    {
                        name: "Financial Analysts",
                        img: "job.png",
                        parameters:  "G,H",
                        shown: true
                    },
                    {
                        name: "FIPs",
                        img: "job.png",
                        parameters:  "G,B",
                        shown: true
                    },
                    {
                        name: "Freewater Presentations",
                        img: "job.png",
                        parameters:  "H,F",
                        shown: true
                    },
                    {
                        name: "Freewater Productions",
                        img: "job.png",
                        parameters:  "A,F",
                        shown: true
                    },
                    {
                        name: "Speakers and Stage",
                        img: "job.png",
                        parameters:  "A,F",
                        shown: true
                    },
                    {
                        name: "Marketing",
                        img: "job.png",
                        parameters:  "D,F",
                        shown: true
                    },
                    {
                        name: "Jazz@",
                        img: "job.png",
                        parameters:  "H,B",
                        shown: true
                    },
                    {
                        name: "Vis Fs",
                        img: "job.png",
                        parameters:  "A,D",
                        shown: true
                    },
                    {
                        name: "WXDU",
                        img: "job.png",
                        parameters:  "H,B",
                        shown: true
                    },
                    {
                        name: "STR",
                        img: "job.png",
                        parameters:  "B,H",
                        shown: true
                    },
                    {
                        name: "DUU",
                        img: "job.png",
                        parameters:  "A,D,G,B,E,H,C,F,I",
                        shown: true
                    }
                ],
            }
        },
    
    methods: {
        select: function(){            
            var list = $(".chk:checked").map(
                function () {
                    return this.value;
                }
            );

            
            if (list.length < 1){
                for (var r=0; r<app1.committees.length;r++){
                    app1.committees[r].shown = true;
                }
            }  

            for (var r=0; r<app1.committees.length;r++){

                var paramList = app1.committees[r].parameters.split(",");
                
                if (list.length === 1){ 
                        if (paramList.includes(list[0])){
                            app1.committees[r].shown = true;
                        }
                        else{
                            app1.committees[r].shown = false;
                        }
                }
                
                if (list.length === 2){
                    console.log("list length 2 code running"); 
                        if (paramList.includes(list[0]) && paramList.includes(list[1])){
                            app1.committees[r].shown = true;
                        }
                        else{
                            app1.committees[r].shown = false;
                        }
                }                       
            }
        },
    }
});