let submit = document.getElementById('show');

async function getNamazTimes() {
    const res = await axios.get('https://api.aladhan.com/v1/calendar?latitude=40.409264&longitude=49.867092&method=2&month=4&year=2017');
    let lorem = res.data.data;
    let dataa = `04-04-2017`;
    for (const item of lorem) {
      let jsonDate = item.date.gregorian.date;
      if (dataa === `${jsonDate}`) {
        console.log('okey');
        break;
      }
      console.log(jsonDate);
    }
  }


  show.onclick = () => {
  getNamazTimes();
  };


