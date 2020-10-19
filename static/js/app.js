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

// charts
function charts(name){
    d3.json("samples.json").then((data) => {

        // variables
        var samples = data.samples.filter(data => data.id == name)[0]
        var sample_values = samples.sample_values
        var otu_ids = samples.otu_ids
        var otu_labels = samples.otu_labels

        // bar chart
        var barchart = d3.select("#bar");
        var trace1 = {
          x: sample_values,
          y: otu_ids,
          text: `${otu_labels}`,
          type: "bar",
          orientation: "h"
        };
        var data1 = [trace1];
        var layout1 = {
          title: "Bar Chart"
        };
        Plotly.newPlot("bar", data1, layout1);

        // bubble chart
        var bubblechart = d3.select("#bubble");
        var trace2 = {
            x: otu_ids,
            y: sample_values,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids
            },
            labels: otu_labels
        };
        var data2 = [trace2];
        var layout2 = {
            title: "Bubble Chart"
        };
        Plotly.newPlot("bubble", data2, layout2);
    });
};

// index.html, select new Test Subject ID No.
function optionChanged(name){
    demographicinfo(name)
    charts(name)
};

init();

    