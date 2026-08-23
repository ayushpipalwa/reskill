const nav=document.querySelector(".nav");
const btn=document.querySelector(".menu-btn");
if(btn&&nav){btn.addEventListener("click",()=>nav.classList.toggle("open"));}
const page=document.body.dataset.page;
document.querySelectorAll(".nav a[data-page]").forEach(a=>{
  if(a.dataset.page===page)a.classList.add("active");
});
document.querySelectorAll("[data-filter]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll("[data-filter]").forEach(b=>b.classList.remove("on"));
    btn.classList.add("on");
    const f=btn.dataset.filter;
    document.querySelectorAll("[data-track]").forEach(card=>{
      card.classList.toggle("hidden",!(f==="all"||card.dataset.track===f));
    });
  });
});
const form=document.querySelector("#enquire");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const note=document.querySelector("#form-note");
    note.textContent="Thanks. A programme advisor will write back within one working day.";
    form.reset();
  });
}
