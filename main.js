// Dark and light theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle('dark-theme');
    themeBtn.classList.toggle('sun');

    localStorage.setItem("saved-theme", getcurrentTheme());
    localStorage.setItem("saved-icon", getcurrentIcon());

});
const  getcurrentTheme = () => document.body.classList.contains('dark-theme') ? "dark" : "light";
const  getcurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moom";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");
if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}