
//let main_server = "http://localhost:5500";
let main_server = "https://ahmedtalaat327.github.io/RouterInspector";


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
  //here we ;load all pages view from resources
  //C:\Users\ahmad\Desktop\myrouterinspector\pages\webconnectapp
  let responseText_p1_v1 =  loadPage(main_server+'/pages/webconnectapp/index.html');
  const doc_p1_v1 = new DOMParser().parseFromString(responseText_p1_v1, 'text/html');
  const elm_p1_v1 = doc_p1_v1.querySelector('.background-main');
 // page_nav.appendChild(elm_p1_v1);
 
 //here we ;load all pages view from resources
  //C:\Users\ahmad\Desktop\myrouterinspector\pages\webconnectapp
  let responseText_p2_v1 =  loadPage(main_server+'/pages/portofolio/index.html');
  const doc_p2_v1 = new DOMParser().parseFromString(responseText_p2_v1, 'text/html');
  const elm_p2_v1 = doc_p2_v1.querySelector('.background-main');
  //page_nav.appendChild(elm_p2_v1);
   
 

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
          resetMainParent();
          page_nav.appendChild(elm_p1_v1);
        }
        else if(link.href.toString().includes('#portfolio')){
          resetMainParent();
          page_nav.appendChild(elm_p2_v1);
        }
        else{
         resetMainParent();  
         
         
        }
      } else {
        link.classList.remove('active');
      }
    });
  })
});

function resetMainParent(){
    
  Array.from(page_nav.children).forEach(c => c.remove())
}


