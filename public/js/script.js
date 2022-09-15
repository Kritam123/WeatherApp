const submitbtn = document.getElementById('submitBtn');
const cityOut = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status') ;
const temp = document.getElementById('temp'); 
const icon = document.getElementById('icons');
const toplayer = document.getElementById('top_layer');
const datahide = document.querySelector('.middle_layer');
const getInfo = async(event)=>{
    event.preventDefault()
    let inputData = document.getElementById('cityName').value;
    if(inputData === ''){
        cityOut.innerText = "Plz write the name of Country"
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = ` http://api.weatherstack.com/current?access_key=2ebd377073cb2bca33024e9909db43d4&query=${inputData}`;
            const response = await fetch(url);
            const result = await response.json();
            const arrData = [result];
            // console.log(arrData)
            temp.innerHTML =`<span>${arrData[0].current.temperature}</span><sup>o</sup>C`
            // temp_status.innerText =arrData[0].current.weather_icons[0]
            icon.innerHTML = ` <img id="icons"  src="${arrData[0].current.weather_icons[0]}" alt="icon">`
            cityOut.innerText =`${arrData[0].location.country},${arrData[0].location.name}`
            datahide.classList.remove('data_hide');
            
        }catch{
            cityOut.innerText = "Plz write the correct name of Country"
             datahide.classList.add('data_hide');
        }


    }
}
submitbtn.addEventListener('click',getInfo);

const date = new Date();
const month = date.getMonth()
const time = date.getDate();
const day = date.getDay();

const WeekDay = Array(6);

WeekDay[0] = "Sunday"
WeekDay[1] = "Monday"
WeekDay[2] = "Tuesday"
WeekDay[3] = "Wednesday"
WeekDay[4] = "Thursday"
WeekDay[5] = "Friday"
WeekDay[6] = "Saturday"
const MonthDay = Array(11);

MonthDay[0] = "Jan"
MonthDay[1] = "Feb"
MonthDay[2] = "Mar"
MonthDay[3] = "Apr"
MonthDay[4] = "May"
MonthDay[5] = "Jun"
MonthDay[6] = "Jul"
MonthDay[7] = "Aug"
MonthDay[8] = "Sep"
MonthDay[9] = "Oct"
MonthDay[10] = "Nov"
MonthDay[11] = "Dec"

toplayer.innerHTML = `
            <p id="day">${WeekDay[day]}</p>
            <p id="today_date">${time} ${MonthDay[month]}</p>
`
