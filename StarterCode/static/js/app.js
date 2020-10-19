// Fetch the JSON data, add dropdown options
function init() {
    d3.json("samples.json").then((data) => {
        console.log(data);
        var names = data.names;
        var selDataset = d3.select("#selDataset");
        names.forEach(name => {
            selDataset.append("option").text(name)
        });
    });
};

// Demographic info
function demographicinfo(name){
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        // filter where data.id is equal to selected option
        var filteredmetadata = metadata.filter(data => data.id == name)[0]

        // put chosen data into table
        // select table
        var samplebody = d3.select("#sample-metadata");
        // wipe old data
        samplebody.html("")
        // add new data
        Object.entries(filteredmetadata).forEach(([key, value]) => {
            samplebody.append("h5").text(`${key}: ${value}`);   
        });
    });
};

// index.html, select new Test Subject ID No.
function optionChanged(name){
    demographicinfo(name)
};

init();

    