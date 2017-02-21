import React, {Component} from 'react';
// import Chart from 'chart.js';

export default class SkillCharts extends Component {
  constructor(props) {
    super(props);
  }

  languagesChart() {
    var ctx = document.getElementById("languages");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Javascript", "CSS/CSS3", "HTML5", "Ruby", "English"],
            datasets: [{
                label: 'Proficiency from 1 - Novice to 5 - Expert',
                data: [4, 4, 3, 1, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  }

  componentDidMount() {
    console.log(Chart)
    this.languagesChart();
  }

  render() {
    return (
      <div style={{marginLeft: '50px', flex: 1}}>
        <h2>Languages</h2>
        <canvas id='languages'></canvas>
      </div>
      )
  }
}