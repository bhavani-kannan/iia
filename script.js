const data = {

supply: [
{
title:"Demand Forecasting",
desc:"Predict demand using historical sales, seasonality and external signals."
},
{
title:"Inventory Optimization",
desc:"Optimize safety stock and reorder levels to reduce working capital."
},
{
title:"Logistics Optimization",
desc:"Improve transport planning and routing decisions."
}
],

finance:[
{
title:"Working Capital Optimization",
desc:"Identify opportunities to free up cash across inventory, payables and receivables."
},
{
title:"Revenue Forecasting",
desc:"Predict revenue using pipeline, seasonality and historical signals."
},
{
title:"Cost Intelligence",
desc:"Identify key cost drivers across business units and operations."
}
],

manufacturing:[
{
title:"Predictive Maintenance",
desc:"Predict equipment failures before they happen."
},
{
title:"Yield Optimization",
desc:"Identify process parameters impacting production yield."
},
{
title:"Production Scheduling",
desc:"Optimize production scheduling based on demand and constraints."
}
],

commercial:[
{
title:"Sales Forecasting",
desc:"Predict sales performance across markets and segments."
},
{
title:"Customer Segmentation",
desc:"Identify high value customer groups for targeting."
},
{
title:"Pricing Optimization",
desc:"Optimize pricing strategies for margin improvement."
}
],

operations:[
{
title:"Asset Monitoring",
desc:"Track asset health and performance trends."
},
{
title:"Energy Optimization",
desc:"Identify energy consumption reduction opportunities."
},
{
title:"Operational Bottleneck Detection",
desc:"Detect workflow bottlenecks impacting throughput."
}
]

};

const pods = document.querySelectorAll(".pod");
const container = document.getElementById("usecase-container");
const title = document.getElementById("pod-title");

pods.forEach(pod => {

pod.addEventListener("click", () => {

const key = pod.dataset.pod;

title.innerText = pod.innerText + " Pod";

container.innerHTML="";

data[key].forEach(item => {

const div=document.createElement("div");

div.classList.add("usecase");

div.innerHTML=`

<h4>${item.title}</h4>
<p>${item.desc}</p>
`;container.appendChild(div);

gsap.from(div,{
y:30,
opacity:0,
duration:0.6
});

});

});

});

gsap.from(".hero h1",{
y:-40,
opacity:0,
duration:1
});

gsap.from(".hero p",{
y:40,
opacity:0,
duration:1,
delay:0.3
});

gsap.from(".pod",{
scrollTrigger:{
trigger:".pods",
start:"top 80%"
},
y:50,
opacity:0,
stagger:0.15,
duration:0.8
});
