

let btn = document.querySelector(".btn")


function age() {


  


    let date = new Date()

let day = Number( document.getElementById("day").value )

let month = Number( document.getElementById("month").value )

let year = Number( document.getElementById("year").value )

let content = document.querySelector(".content")




let get_Day = date.getDate()  

let get_Month = date.getMonth() + 1

let get_Year =  date.getFullYear()


let birthDay = get_Day - day

let birthMonth = get_Month - month 

let birthYear = get_Year - year



let getAllMonthName = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

let birthMonthName = getAllMonthName[ month - 1 ]



if (day <= 0 || month <= 0 || year <= 0 ) {

    content.innerHTML = "<p class='  alert alert-danger'>Please enter valid data. </p>"

    setTimeout(() => {  content.innerHTML = "" } , 3000);

    return
    
}

if (isNaN(day) || isNaN(month) || isNaN(year)) {
    content.innerHTML = "<p class='  alert alert-danger'>please enter  valid data </p>"

    setTimeout(() => { content.innerHTML = "" }, 3000);

    return
}



let birthDate = new Date( year , month  , 0 ).getDate()

console.log("birthDate" , birthDate);





if ( day > birthDate ) {
    content.innerHTML = "<p class='alert alert-danger'>Invalid day for selected month.</p>";
    setTimeout(() => { content.innerHTML = ""; }, 3000);
    return;

}




if ( day > get_Day ) {
    month --

    let daysInPrevMonth  = new Date( get_Year , get_Month , 0 ).getDate()

    birthDay = get_Day + daysInPrevMonth - day
}



if ( month > get_Month ) {

    birthYear --

    birthMonth = 12 + get_Month - month

 
}


if (year > get_Year) {
    content.innerHTML = "<p class='alert alert-danger'>Please enter a date that is not in the future</p>"
    setTimeout( ()=>{
        content.innerHTML = ""
    } , 3000 )

    

    return
}








content.innerHTML = `<p class='text-primary'> Your age is ${ birthYear } years, ${ birthMonth } months(${ birthMonthName }), and ${ birthDay } days </p>`



console.log(new Date( get_Year , get_Month + 1 , 0 ).getDate());

console.log(date , new Date(year , month -1 ,0 ) );

let inputDate = new Date(year , month -1 ,0 )


if (  date > inputDate ) {

    document.getElementById ("year").value = ""
     document.getElementById ("month").value = ""
      document.getElementById ("day").value = ""


    return

}


    }


      document.querySelector("form").addEventListener("submit" , (e)=>{
        e.preventDefault()
        age()
    })
    

// btn.addEventListener("click" , age )







