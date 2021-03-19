// Problem 1 starts

fetch('data1.json')
.then(function(response) {
    return response.json();
})
.then(function (obj){
    let dataArray = Object.entries(obj);
    const chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'problem1',
            type: 'column',

        },
        title: {
            text: 'Total runs scored by team'
        },
        xAxis:{
            type: 'category'
        },
        yAxis: {
            min: 0,
            title: {
              text: "total runs "
            }
          },  
        series: [{
            name: 'Runs',
            data: dataArray
        }]
    });
})
.catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});

//problem1 ends

// Problem 2 starts

fetch('data2.json')
.then(function(response) {
    return response.json();
})
.then(function (obj){
    let dataArray = Object.entries(obj);
    const chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'problem2',
            type: 'column',
    
        },
        title: {
            text: 'Top batsman for Royal Challengers Bangalore'
        },
        xAxis:{
            type: 'category'
        },
        yAxis: {
            min: 0,
            title: {
              text: "total runs"
            }
          },  
        series: [{
            name: 'Runs',
            data: dataArray
        }]
    });
})
.catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});
//problem2 ends

// Problem 3 starts

fetch('data3.json')
.then(function(response) {
    return response.json();
})
.then(function (obj){
    let dataArray = Object.entries(obj);
    const chart3 = new Highcharts.Chart({
        chart: {
            renderTo: 'problem3',
            type: 'column',
            },
        
        title: {
            text: 'Foreign umpire analysis'
        },
        xAxis:{
            type: 'category'

        },
        yAxis: {
            min: 0,
            title: {
              text: "umpire count"
            }
          },  
        series: [{
            name: 'No of Umpires from Cou',
            data: dataArray
        }]
    });
})
.catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});
// Problem 3 ends 


//problem4 starts
fetch('data4.json')
.then(function(response) {
    return response.json();
})
.then(function (obj){
    dataArray=[]
    for(i in obj){
        dataArray.push({name: i, data: obj[i]})
    }
    let season = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
    const chart4 = new Highcharts.chart('problem4', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Stacked/Grouped chart of matches played by team by season'
        },
        subtitle: {
          text: 'Number of games played by team by season'
        },
        xAxis: {
            categories:season,

          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'match played'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: dataArray
        
      });
})
.catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});
//problem4 ends

