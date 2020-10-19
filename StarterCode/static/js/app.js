// Fetch the JSON data, add dropdown options
function init() {
    d3.json("samples.json").then((data) => {
        console.log(data);
        var names = data.names;
        var selDataset = d3.select("#selDataset");
        names.forEach(name=>{
            selDataset.append("option").text(name)
        });
    });
};

// Demographic info
function demographicinfo(name){
    d3.json("samples.json").then((data) => {
            
    

    })  

};

// index.html, select new Test Subject ID No.
function optionChanged(name){
    demographicinfo(name)
};

init();

    