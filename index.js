
const userInput = document.getElementById("date");
const result = document.getElementById("result");
userInput.max = new Date().toISOString().split('T')[0];

function calculateAge() {
    let startTime = new Date(userInput.value);
    let endTime = new Date();
    const start = moment(startTime).format("YYYY-MM-DD");
    const end = moment(endTime).format("YYYY-MM-DD");
    const dtDiff = moment.preciseDiff(start, end);
    const data = dtDiff.split(' ');
     console.log(data);
    result.innerHTML = `You are 
    <span> ${data[0]}</span> 
    ${data[1]} 
    <span> ${data[2]? data[2] : ''}</span>
    ${data[3]? data[3] : ''} 
    <span> ${data[4]? data[4] : ''}</span> 
    ${data[5]? data[5] : ''} old`;
}

