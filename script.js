document.addEventListener("DOMContentLoaded",function(){
    const options = document.querySelectorAll(".option");
    options.forEach(option=>{
        option.addEventListener("click" , function(){
            options.forEach(opt=> opt.classList.remove("active"));
            this.classList.add("active");
        });
    });
});