let products = [
  {
    title: "John",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
   {
    title: "ahmed",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
  {
    title: "khaled",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
  {
    title: "mohamed",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
  {
    title: "abdelsalam",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
  {
    title: "John",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
  {
    title: "John",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
  {
    title: "John",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
  {
    title: "John",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
  {
    title: "John",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
  {
    title: "John",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
  {
    title: "John",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
  {
    title: "John",
    desc: "Doe is very bad and very nice",
    Image: "/images/1.jpg",
    Image2: "/images/2.jpg",
    Image3: "/gam3a/images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
  },
];
function showDate(){
    let table = '';
    for(let i =0; i < products.length;i++){
        table += `
            <div>
                <img src="${products[i].Image3}" id="image" alt="Sample photo">
                <div class="text"onclick="wow(i)">
                  <h3>${products[i].title}</h3>
                  <p>${products[i].desc}</p>
                  <a  onclick="wow(${i})" href="wow.html">more</a>
                </div> 
           </div>
        `
    }           
    document.getElementById('id').innerHTML = table;

}
showDate()
function wow(i){
localStorage.branch   = JSON.stringify(products[i])
}
