var current= 1 ;
var vidArr=['1','2','3','4','5'] ;
var score=[0,0,0,0,0];
// this is chart script
let labels1 = ['Q1','Q2','Q3','Q4','Q5'];

colors1 = ['#49A9EA'];

let myChart = document.getElementById('myChart').getContext('2d');
let chart1 = new Chart(myChart,{
    type: 'radar',
    data: {
        labels: labels1,
        datasets: [{
            data: score,
            backgroundColor: "rgba(0,200,132,0.2)",
            borderColor: "rgb(0,200,132)",
            pointBorderColor:"#fff",
            pointBackgroundColor:"rgba(179,181,198,1)",

        }]
    },
    options:{
        


        legend:{
            display: false,
        },

    },
});
 
function grade(num)
{
    score[current-1]=num;
    chartUpdate()

}

function chartUpdate()
{
    chart1.data.datasets[0].data = score;
    chart1.update();
};


// this video script
function slidervid(take,i)
     {
       document.getElementById("slider").src = take;
       current=i;
     }
function next()
     {
         if(current<vidArr.length)
         {
                current=current+1;
         }
         else{
                window.location.assign("result.html");
            }

                document.getElementById("slider").src ="./media/vid"+vidArr[current-1]+".mp4";
     }
function prev()
    {
       if(current>1)
       {
              current=current-1;
       }
       else{
              alert("no more previous");
           }

       document.getElementById("slider").src ="./media/vid"+vidArr[current-1]+".mp4";
     }



function sub()
{
    if(score[current-1] == 0 )
    {
        alert('please give grade');
    }
    else
    {
        if(current<vidArr.length)
         {
                current=current+1;
         }
         else{
                window.location.assign("result.html");
            }
                document.getElementById("clear").value = "";
                document.getElementById("slider").src ="./media/vid"+vidArr[current-1]+".mp4";
    }
}

