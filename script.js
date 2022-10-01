
/*document.querySelector('.theme-swapper-button').addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');
});

document.querySelector('.switcher-button').onclick =() =>{
    document.querySelector('.color-switcher').classList.toggle('active');
};

let themeButtons=document.querySelectorAll('.theme-buttons');
themeButtons.forEach(color =>{
    color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColor);
    });
})


let themeSwitcherButton= document.querySelector('.theme-switcher-button');

themeSwitcherButton.onclick=()=>{
    themeSwitcherButton.classList.toggle('active');

    if(themeSwitcherButton.classList.contains('active')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}

document.querySelectorAll('.theme-colors .color').forEach(color =>{
    color.onclick = () =>{
        let background=color.style.background;
        document.querySelector(':root').style.setProperty('--main-color', background);
    }
});

let theme=document.querySelector('.theme-container');

document.querySelector('#theme-open').onclick = () =>{
    theme.classList.add('active');
    document.body.style.paddingRight='350px';
}

document.querySelector('#theme-close').onclick = () =>{
    theme.classList.remove('active');
    document.body.style.paddingRight='0px';
}*/



/*const buttons=document.querySelectorAll(".navigation-button");
const slides=document.querySelectorAll(".video-slide");

let sliderNav=function(manual){
    buttons.forEach((button)=>{
        button.classList.remove("active");
    });

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    buttons[manual].classList.add("active");
    slides[manual].classList.add("active");
}

buttons.forEach((button, i)=>{
    button.addEventListener("click", () =>{
        sliderNav(i);
    });
});*/


const imgBg=document.querySelector('.imgBg');
const slides=imgBg.getElementsByTagName('img');
let i=0;

document.getElementById("myLi1").addEventListener("click", PrevSlide);
document.getElementById("myLi2").addEventListener("click", nextSlide);


function PrevSlide(){
    console.log('asd');
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

function nextSlide(){
    console.log('asd');
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}


function autoSlide(){
    setInterval(() =>{
        nextSlide();
    }, 10000);
}

autoSlide();
PrevSlide();
nextSlide();

const time=document.getElementById('time');
const greeting=document.getElementById('greeting');
const name=document.getElementById('name');
const focus=document.getElementById('focus');

const showAmPm=true;

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${addZero(hour)}<span>:</spa>${addZero(min)}<span>:</span>${addZero(sec
    
    )} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

function addZero(n){
    return (parseInt(n,10) <10 ? '0' : '')+ n;
}


function setBackgroundGreeting(){
    let today=new Date(),
        hour=today.getHours();

    if(hour<12){
       // document.body.style.backgroundImage="url('items_used/cartoon-sunrise.jpg')";
       greeting.textContent='Good Morning';
       // document.getElementById('time').style.color=
    }
    else if(hour<18){
        // document.body.style.backgroundImage="url('items_used/red-afternoon.jpg')";
        greeting.textContent='Good Afternoon';

    }
    else{
        // document.body.style.backgroundImage="url('items_used/camping.jpg')";
        greeting.textContent='Good Evening';
    }

}

function getName(){
    if(localStorage.getItem('name')===null){
        name.textContent='[Enter Name]';
    }
    else{
        name.textContent=localStorage.getItem('name')
    }
}

function setName(e){
    if(e.type==='keypress'){
        if(e.which===13 || e.keyCode===13){
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }
    }
    else {
        localStorage.setItem('name',e.target.innerText);
    }
}


function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent='[Your Answer]';
    }
    else{
        focus.textContent=localStorage.getItem('focus')
    }
}

function setFocus(e){
    if(e.type==='keypress'){
        if(e.which===13 || e.keyCode===13){
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }
    }
    else {
        localStorage.setItem('focus',e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur',setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur',setFocus);

     showTime();
     setBackgroundGreeting();
     getName();
     getFocus();


     let result=document.getElementById("result");
     let searchButton=document.getElementById("search-city-button");
     let cityReference=document.getElementById("city");

      let getWeather=()=> {
          let cityValue = cityReference.value;
          //if input field is empty
          if (cityValue.length === 0) {
              result.innerHTML = `<h3 class="message">Please enter a city name </h3>`;
          }
          //if input field isn't empty
          else {
              let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
              //to clear the input field
              cityReference.value="";
              fetch(url)
                  .then((resp) => resp.json())
                  // if the city name is valid
                  .then((data) => {
                      console.log(data);
                      console.log(data.weather[0].icon);
                      console.log(data.weather[0].main);
                      console.log(data.weather[0].description);
                      console.log(data.name);
                      console.log(data.main.temp_min);
                      console.log(data.main.temp_max);
                      result.innerHTML =
                          `<h2>${data.name}</h2>
                            <h4 class="weather">${data.weather[0].main}
                            </h4>
                             <h4 class="description"> ${data.weather[0].description}
                              </h4>
                          <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                            <h1>${data.main.temp} &#176;</h1>
                            <div class="temperature-container">
                            
                               <div>
                                  <h4 class="title">min</h4>
                                  <h4 class="temperature">${data.main.temp_min}&#176;
                                  </h4>
                               </div>
                               
                               <div>
                                   <h4 class="title">max</h4>
                                   <h4 class="temperature">${data.main.temp_max}&#176;
                                   </h4>
                               </div>
                            </div>
                          `;
                  })
                  //if the city name isn't valid
                  .catch(() => {
                      result.innerHTML = `<h3 class="message">City not found </h3>`;
                  });

          }
      };
      searchButton.addEventListener("click", getWeather);
      window.addEventListener("load", getWeather);


const quoteText=document.getElementById('quote-text'),
    quoteTags=document.getElementById('quote-tags'),
    quoteAuthor=document.getElementById('quote-author'),
    quoteButton=document.getElementById('click4new');

function randomQuote(){
    fetch('http://api.quotable.io/random')
        .then(response =>response.json())
        .then(data => {
            quoteText.textContent=data.content;
            quoteTags.textContent=data.tags;
            quoteAuthor.textContent =`- ${data.author}`;
        });
}

randomQuote();

quoteButton.addEventListener('click', ()=>{
    randomQuote();
});

