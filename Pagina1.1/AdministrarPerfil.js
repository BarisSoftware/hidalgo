const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click" , () =>{
        sidebar.classList.toggle("close");
    })
    
    modeSwitch.addEventListener("click" , () =>{
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            modeText.innerText = "Light mode";
        }else{
            modeText.innerText = "Dark mode";
            
        }
    });

const image_input = document.querySelector("#image_input");
var upload_image = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        upload_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);
})