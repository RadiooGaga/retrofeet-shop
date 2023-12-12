const products = [
    {
    id: 1,
    img: './assets/etonic/Etonic-trans-slam-low-1980.jpeg',
    title: 'ETONIC TRANS SLAM LOW',
    brand: 'ETONIC',
    color: 'colored',
    paragraph: "blablabla",
    price: 65.00,
    stars: 3,
    reviews: 2,
    seller: 'zalando.es'
    }
    ,
    {
    id: 2,
    img: './assets/dunlop/dunlop-green-flash.jpeg',
    title: 'DUNLOP GREEN FLASH',
    brand: 'DUNLOP',
    color: 'colored',
    price: 29.75,
    stars: 4,
    reviews: 2,        
    seller: 'kolekole.com'
    }
    ,
    {
    id: 3,
    img: './assets/gola/gola-classic.jpeg',
    title: 'GOLA EQUIPE SUEDE',
    brand: 'GOLA',
    color: 'colored',
    price: 76.50,
    stars: 5,
    reviews: 4,        
    seller: 'kolekole.com'
    }
    ,
    {
    id: 4,
    img: './assets/reebok/reebok-the-aztek-80.jpeg',
    title: 'REEBOK THE AZTEC',
    brand: 'REEBOK',
    color: 'colored',
    price: 74.95,
    stars: 5,
    reviews: 3,        
    seller: 'zalando.es'
    }
    ,
    {
    id: 5,
    img: './assets/puma/puma-suede.jpeg',
    title: 'PUMA SUEDE CLASSIC',
    brand: 'PUMA',
    color: 'blackandwhite',
    price: 55.25,
    stars: 4,
    reviews: 5,        
    seller: 'zalando.es'
    }
    ,
    {
    id: 6,
    img: './assets/puma/puma-delphin-dark-jasper.jpeg',
    title: 'PUMA DELPHIN DARK JASPER',
    brand: 'PUMA',
    color: 'colored',
    price: 90.0,
    stars: 4,
    reviews: 3,        
    seller: 'jdsports.es'
    }
    ,
    {
    id: 7,
    img: './assets/converse/converse-star.jpeg',
    title: 'CONVERSE STAR PLAYER 76',
    brand: 'CONVERSE',
    color: 'blackandwhite',
    price: 63.00,
    stars: 4,
    reviews: 7,        
    seller: 'asos.com'
    }
    ,
    {
    id: 8,
    img: './assets/vans/vans-old-skool-black.jpeg',
    title: 'VANS OLD SKOOL',
    brand: 'VANS',
    color: 'blackandwhite',
    price: 80.00,
    stars: 4,
    reviews: 9,        
    seller: 'jdsports.es'
    }
    ,
    {
    id: 9,
    img: './assets/adidas/adidas-superstar.jpg',
    title: 'ADIDAS SUPERSTAR',
    brand: 'ADIDAS',
    color: 'blackandwhite',
    price: 80.00,
    stars: 5,
    reviews: 10,        
    seller: 'jdsports.es'
    }
    ,
    {
    id: 10,
    img: './assets/adidas/adidas-originals-superstar-80s.png',
    title: 'ADIDAS ORIGINALS SUPERSTAR 80s',
    brand: 'ADIDAS',
    color: 'blackandwhite',
    price: 130.00,
    stars: 4,
    reviews: 10,        
    seller: 'asos.com'
    }
    
    
]

const advertPics = [
    {
    img:'./assets/advertising/adidas-adv.jpeg',
    }
    ,
    {
    img:'./assets/advertising/bata-advertising.jpeg',
    }
    ,
    {
    img: './assets/advertising/clyde.jpeg',
    }
    ,
    {
    img:'./assets/advertising/converse-adv.jpeg',
    }
    ,
    {
    img:'./assets/advertising/converse-advertising-2.jpeg',
    }
    ,
    {
    img:'./assets/advertising/converse-advertising.jpeg',
    }
    ,
    {
    img:'./assets/advertising/etonic-advertising.jpeg',
    }
    ,
    {
    img:'./assets/advertising/pony-adv.jpeg',
    }
    ,
    {
    img:'./assets/advertising/reebok-road-racing.jpeg',
    }
    ,
    {
    img: './assets/advertising/vans-adv.jpeg',
    }  
]

const stylePics = [
    {
    img:'./assets/style/gazelle-blue-style.png',
    }
    ,
    {
    img:'./assets/style/diadora-b-elite-green.jpeg',
    }
    ,
    {
    img:'./assets/style/elite-gold.jpeg',
    }
    ,
    {
    img:'./assets/style/jamiroquai-collection.jpeg',
    }
    ,
    {
    img:'./assets/style/newbalace-street.png',
    }
    ,
    {
    img:'./assets/style/p8v5LkWE5MRiUDb2kk9v9A.jpeg',
    }
    ,
    {
    img:'./assets/style/puma-boris-1980.jpeg',
    }
    ,
    {
    img:'./assets/style/puma-delphin-dark-jaspers-street.jpeg',
    }
    ,
    {
    img:'./assets/style/women-s-retro-trainers.jpeg',
    }
    ,
    {
    img:'./assets/style/vans-old-skool-sneakers-yomzansi-14.jpeg',
    }
                                    
]


const byDefault = 'all';
let selectedSeller = 'all';
let selectedBrand = 'all';
let selectedColor = 'all';
let selectedPrice = 0;
let allProducts = 'all';


const deletePriceFilter = () => {
    document.getElementById("input-Price-Id").value = 0;
    selectedPrice = 0;
}


const filter = () => { 
    const filtered = new Set();
    
    for (const product of products) {

        if (selectedSeller === product.seller || selectedSeller === byDefault){
            if (selectedBrand === product.brand || selectedBrand === byDefault){
                if (selectedColor === product.color || selectedColor === byDefault){
                    if (selectedPrice >= product.price || selectedPrice === 0){
                        filtered.add(product);
                        
                    }
                }
            }
        } 
    }
    if (filtered.size === 0){
        const noProductsAvailable = document.createElement("p");
        const divProducts = document.querySelector(".productsContainer");
        noProductsAvailable.textContent = "No hay productos con tus criterios de búsqueda, profe";
        
        divProducts.innerHTML = "";
        divProducts.appendChild(noProductsAvailable);
        

    } else {
        printProducts(filtered);
    }
    
}

 
const getUniqueElements = (products,value) => {
    const uniqueElements = new Set();
    for (const product of products){
        uniqueElements.add(product[value])
    }
    return uniqueElements;
}



const selector = () => {
    const divFilters = document.querySelector("#filters");
    const selectBySeller= document.createElement("select");
    selectBySeller.setAttribute("id","sellSelector");
    let optionDefault = document.createElement("option");
        optionDefault.value = byDefault;
        optionDefault.textContent = "VENDEDOR";

        selectBySeller.appendChild(optionDefault);

    for (const seller of getUniqueElements(products,"seller")) {
        const option = document.createElement("option");

        option.value = seller;
        option.textContent = seller.toUpperCase();

        selectBySeller.appendChild(option);
    }
    divFilters.appendChild(selectBySeller);

    selectBySeller.addEventListener("change", (event) => {
        selectedSeller = event.target.value;
        deletePriceFilter();
        filter();
    });



    const selectByBrand= document.createElement("select");
    selectByBrand.setAttribute("id","brandSelector");
        optionDefault = document.createElement("option");
        optionDefault.value = byDefault;
        optionDefault.textContent = "MARCA";

        selectByBrand.appendChild(optionDefault);

    for (const brand of getUniqueElements(products,"brand")) {
        const option = document.createElement("option");

        option.value = brand;
        option.textContent = brand;

        
        selectByBrand.appendChild(option);
    }
    divFilters.appendChild(selectByBrand);

    selectByBrand.addEventListener("change", (event) => {
        selectedBrand = event.target.value;
        deletePriceFilter();
        filter();
    });


    const selectByColor= document.createElement("select");
    selectByColor.setAttribute("id","colorSelector");
    optionDefault = document.createElement("option");
    optionDefault.value = byDefault;
    optionDefault.textContent = "COLOR / B&N" ;

    selectByColor.appendChild(optionDefault);

    for (const color of getUniqueElements(products,"color")) {
        const option = document.createElement("option");

        option.value = color;
        option.textContent = color.toUpperCase();

        divFilters.appendChild(selectByColor);
        selectByColor.appendChild(option);
    }


    selectByColor.addEventListener("change", (event) => {
        selectedColor = event.target.value;
        deletePriceFilter();
        filter();
    });


   
   const searchByPrice = document.createElement("input");
        searchByPrice.setAttribute("id","input-Price-Id");
        searchByPrice.setAttribute("type","number");
        searchByPrice.textContent = "insertar precio";
       
        divFilters.appendChild(searchByPrice);



    const searchButton = document.createElement("button");
        searchButton.setAttribute("type", "input");
        searchButton.textContent = 'BUSCAR PRECIO';

        divFilters.appendChild(searchButton);

    searchButton.addEventListener("click",(event) => {
        const inputPrice = document.getElementById("input-Price-Id").value;
        selectedPrice = parseFloat(inputPrice);
        filter();
    });


    const resetButton = document.createElement("button");
        resetButton.setAttribute("type", "reset");
        resetButton.classList.add("borrarFiltros"); 
        resetButton.textContent = "BORRAR FILTROS";

        divFilters.appendChild(resetButton);
    

    resetButton.addEventListener("click", (event) => {
        selectedSeller = 'all';
        selectedBrand = 'all';
        selectedColor = 'all';
        deletePriceFilter();
        document.getElementById('sellSelector').selectedIndex = 0;
        document.getElementById('brandSelector').selectedIndex = 0;
        document.getElementById('colorSelector').selectedIndex = 0;
        filter();
    });
}



const printProducts = (products) => {
    const divProducts = document.querySelector(".productsContainer");
    divProducts.innerHTML = "";

    for (const product of products){    
        const sectionProducts = document.querySelector("#products");
        const divProduct = document.createElement("div");
        const divImg = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h3");
        const price = document.createElement("p");
        const openButton = document.createElement("button");
    
    
        sectionProducts.appendChild(divProducts);
        divProducts.appendChild(divProduct);
        divProduct.className = ("eachProduct");
        divProduct.appendChild(divImg);
        divImg.appendChild(img);
        divImg.classList.add("imgContainer");
        img.src = product.img;
        divProduct.appendChild(openButton);
        openButton.setAttribute("id", product.id);
        openButton.textContent = "ver detalles";
        title.textContent = product.title;
        price.textContent = `${product.price} €`;
        divProduct.appendChild(title);
        divProduct.appendChild(price);

        openButton.addEventListener("click", (event) => {
        
            let clickedCardId = parseInt(event.target.id);
            const productsArray = [...products];
            const result = productsArray.filter((product) => product.id === clickedCardId)[0];
            console.log(result);
        
        })
    }
    
};

printProducts(products);
selector();






const printCard = (e) => {
    const divProducts = document.querySelector(".productsContainer");
    //divProducts.innerHTML = "";
    
    
    const modalProduct = document.createElement("div");   
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const paragraph = document.createElement("p");
    const price = document.createElement("p");
    const closeButton = document.createElement("button");
    console.log(modalProduct)
        
    modalProduct.setAttribute("id", "seeDetails");
    img.src = product.img;
    modalProduct.appendChild(img);
    modalProduct.appendChild(title);
    title.textContent = product.title;
    modalProduct.appendChild(paragraph);
    paragraph.textContent = product.paragraph;
    modalProduct.appendChild(price);
    price.textContent = `${product.price} €`;
    modalProduct.appendChild(closeButton);
    closeButton.setAttribute("id","closeButton");
    closeButton.textContent = "X";

    divProducts.appendChild(modalProduct);

    
    closeButton.addEventListener("click", (event) => {
        
    })
    
}
printProducts(products);






const printGallery = (advertPics, stylePics) => {
  
    
    for (const advertPic of advertPics){
        const sectionAdvertising = document.querySelector("#advertising");
        const divAdvertising = document.querySelector(".advertising-gallery");
      
        const img = document.createElement("img");
        img.classList.add("galleryPic");


        sectionAdvertising.appendChild(divAdvertising);
        divAdvertising.appendChild(img);
      
        img.src = advertPic.img;
    }   
     
    for (const stylePic of stylePics){ 
        const sectionStyle = document.querySelector("#style");
        const divStyle = document.querySelector(".style-gallery");

        const img = document.createElement("img");
        img.classList.add("stylePic");

        sectionStyle.appendChild(divStyle);
        divStyle.appendChild(img);

        img.src = stylePic.img;
        

    }
    
};
printGallery (advertPics, stylePics);



   











   



 
