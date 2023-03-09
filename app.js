
 
let textArea = document.getElementById('textArea');
let charLimit = document.getElementById('charLimit');
let add = document.getElementById('sidebar__tweet');

charLimit.textContent = `${textArea.maxLength} / 200`; // CharLimit 

textArea.addEventListener('input', () => {
  let remainingChars = textArea.maxLength - textArea.value.length;
  charLimit.textContent = `${remainingChars} / 200`;
});

add.addEventListener('click', function(){
  textArea.focus();
});
set(); 

function set(){ 
    var feed = document.getElementById('post');
    var posted = document.getElementById('textArea');
    feed.innerHTML = ""; 
    posted.value = "";
    charLimit.textContent = `${textArea.maxLength} /200`; 

    if(localStorage.getItem('array_p') !== null ){ 
        var array_p = JSON.parse(localStorage.getItem('array_p')); 

    array_p.forEach((data,index) =>{ 
        var dateConverted = new Date(data.date); 
        feed.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="post" id="post">
          <div class="post__avatar">
          <img src="images/as.jpeg"/> <h3>
          Nereous Ynitsed Dacanay
          <span class="post__headerSpecial"
            ><span class="material-icons post__badge"> verified </span>@NYDacanay<br>
            ${dateConverted.toDateString()} ${dateConverted.getHours()% 12 }:${dateConverted.getMinutes()} ${dateConverted.getHours() >= 12 ? "PM": "AM"}</span>
            
            </h3>
          
          </div>
          <div class="post__body">
          <div class="post__header">
          
            <div class="post__headerText">
           
             
              
            </div>
            <div class="post_message">
                `+data.comment+`




            </div>
          </div>
          
          <div class="post__footer">
          <button class="open" value="`+index+`"><i class="material-icons">edit</i></button>
            <span class="material-icons"> repeat </span>
            <span class="material-icons"> favorite_border </span>
            <span class="material-icons"> publish </span>
          </div>
        </div>
      </div>
      </div>`);
    });
    }
}


function submit(){
  let array_p;
   var items = document.getElementById('textArea').value; 
   if(localStorage.getItem("array_p") == null ){ 
      array_p = [{
          comment: items, 
          date: new Date()
      }];
      localStorage.setItem("array_p",JSON.stringify(array_p)); 
    } else { 
      array_p = JSON.parse(localStorage.getItem("array_p")); 
      array_p.push({
        comment: items, 
        date: new Date()
      });
      localStorage.setItem("array_p",JSON.stringify(array_p));
    }
    set();
}



//Dark-mode
/*var darkModeToggle = document.getElementById("dark-mode");
    darkModeToggle.addEventListener("click", function() {
    var textArea = document.getElementById("textArea");
     
    
    var body = document.body;
    if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    
    
    textArea.style.backgroundColor = "#22262a"; 
    textArea.style.color = "white"; 
    
    
    
    
  } else {
    body.classList.remove("dark-mode");
    
    textArea.style.backgroundColor = "white"; 
    textArea.style.color = "#22262a"; 
    
  }
}); */
let themeToggler = document.getElementById('dark-mode');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('dark-mode');
  var textArea = document.getElementById("textArea");
  if (themeToggler.classList.contains('dark-mode')) {
    document.body.classList.add('dark-mode');
    textArea.style.backgroundColor = "#22262a"; 
    textArea.style.color = "white"; 

  } else {
    document.body.classList.remove('dark-mode');
    textArea.style.backgroundColor = "white"; 
    textArea.style.color = "#22262a"; 
  }
};




