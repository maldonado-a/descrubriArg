//\\***********\*\*\*\*\*\*\*\*\*\\\\\\\\\\\\\\Form//////////////*/*/*/*/*/*/*/*/*/***********//\\

//Varibles

let n_d_l = document.getElementById('n_d_l')
let t_d_h = document.getElementById('t_d_h')
let d_d_h = document.getElementById('d_d_h')

let button1 = document.getElementById('button1')

let form_post = document.getElementById('form_post')

function addElemento(n_d_l, t_d_h,
  d_d_h){
    let h1 = document.getElementById("h1");
    let hl = document.createElement("h1");
    hl.innerHTML = n_d_l;
    h1.appendChild(hl);

    let h3 = document.getElementById("h3");
    let ht = document.createElement("h3");
    ht.innerHTML = t_d_h;
    h3.appendChild(ht);

    let p = document.getElementById("p");
    let pd = document.createElement("p");
    pd.innerHTML = d_d_h;
    p.appendChild(pd);
  }
  
button1.addEventListener('click', () => {
  addElemento(n_d_l.value, t_d_h.value, d_d_h.value);
  form_post.style.display = 'none'; 
})

//\\***********\*\*\*\*\*\*\*\*\*\\\\\\\\\\\\\\Suvir imagen//////////////*/*/*/*/*/*/*/*/*/***********//\\

const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});