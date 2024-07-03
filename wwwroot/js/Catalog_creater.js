

async function creater(){
    var div_pruducts = document.createElement("dir")
    
        var lst;
        try{
            lst = await fetch("http://localhost:8080/products")
                .then(resp => resp.json());
            console.log("API sucses");
            div_pruducts.setAttribute("class", )

        }catch{
            console.log("API error");
        }
    }
creater();