async function fetchData() {
    
    const result = await fetch('https://api.covid19tracker.ca/summary').then((response) => {
        return response.json();

    });
    document.getElementById("date").innerHTML=result.data[0]['latest_date']
    document.getElementById("country").innerHTML = "Canada"
    document.getElementById("confirmed").innerHTML = result.data[0]['total_cases']
    document.getElementById("deaths").innerHTML = result.data[0]['total_fatalities']
    

}
fetchData()