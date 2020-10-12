// Fetch the JSON data, add dropdown options
function init() {
    d3.json("samples.json").then((data) => {
        console.log(data);
        var names = data.names;
        var datasetdropdown = d3.select("#selDataset");
        names.forEach(name=>{
            datasetdropdown.append("option").text(name)
        });
    });
};
init();