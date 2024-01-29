const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];

const ContainerCats = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");
const products = document.querySelector(".products");
const searchInput = document.querySelector(".search");

const Addproduct = (Mal) => {
  products.innerHTML = Mal.map((item) => {
    return `
  <div class="product">
            <img src=${item.img} alt=${item.name}>
            <span class="name">${item.name}</span>
            <span class="priceText">$${item.price}</span>
          </div>
  `;
  }).join("");
};

Addproduct(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLocaleLowerCase();

  if (value) {
    Addproduct(
      data.filter((item) => {
        return item.name.toLocaleLowerCase().indexOf(value) !== -1;
      })
    );
  } else {
    Addproduct(data);
  }
});

const setCategories = () => {
  const Allcats = data.map((item) => item.cat);
  const Categories = [
    "All",
    ...Allcats.filter((cats, i) => Allcats.indexOf(cats) === i),
  ];
  ContainerCats.innerHTML = Categories.map((item) => {
    return `
    <span class="cat">${item}</span>

    `;
  }).join("");

  ContainerCats.addEventListener("click", (e) => {
    if(e.target.classList.contains("cat")){
      const Selected = e.target.textContent;
    Selected === "All"
      ? Addproduct(data)
      : Addproduct(data.filter((item) => item.cat === Selected));
    }
  });
};


const setPrice = (e)=>{
  const Prices = data.map((item)=> item.price)
  const maxPrice = Math.max(...Prices)
  const minPrice = Math.min(...Prices)
  priceRange.min = minPrice
  priceRange.max = maxPrice
  priceRange.value = maxPrice
  priceValue.textContent ="$"+ maxPrice

  priceRange.addEventListener("input",(e)=>{
    priceValue.textContent = "$"+ e.target.value
    Addproduct(data.filter((item)=> item.price <=e.target.value))
  })

}

setPrice()


setCategories();
