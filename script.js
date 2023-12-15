

const expand_btn = document.querySelector(".expand-btn");
const img = expand_btn.querySelector("img");

//get page nav
const page_nav = document.querySelector(".area_page");


  function loadPage(href)
  {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", href, false);
      xmlhttp.send();
      return xmlhttp.responseText;
  }
  //C:\Users\ahmad\Desktop\myrouterinspector\pages\webconnectapp
  let responseText =  loadPage('https://ahmedtalaat327.github.io/RouterInspector/pages/webconnectapp/index.html');
  const doc = new DOMParser().parseFromString(responseText, 'text/html');
  const elm = doc.querySelector('.background-main');
   
 
 
   
 

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener('click', function() {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
        ///here load pages
        console.log(link.href);
        if(link.href.toString().includes('#home')){
          page_nav.appendChild(elm);
        }
        else{
          page_nav.childNodes.forEach(element => {
            if(elm.className==element.className){
            page_nav.removeChild(elm);
            
             }
            else return;
          });
         
        }
      } else {
        link.classList.remove('active');
      }
    });
  })
});


