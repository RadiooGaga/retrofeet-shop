const printCard = (product) => {


    const divProducts = document.querySelector(".productsContainer");
    divProducts.innerHTML = "";

    const modalProduct = document.createElement("div");   
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const productDetails = document.createElement("div");
    const title = document.createElement("h3");
    const paragraph = document.createElement("p");
    const price = document.createElement("p");
    const closeButton = document.createElement("button");
    console.log(modalProduct)
        
    modalProduct.setAttribute("id", "seeDetails");
    modalProduct.appendChild(divImg);
    divImg.appendChild(img);
    divImg.className = ("divImgCard");
    modalProduct.appendChild(productDetails);
    productDetails.className = ("productDetails");
    
    img.src = product.img;
    productDetails.appendChild(title);
    title.textContent = product.title;
    productDetails.appendChild(paragraph);
    paragraph.textContent = product.paragraph;
    productDetails.appendChild(price);
    price.textContent = `${product.price} €`;
    modalProduct.appendChild(closeButton);
    closeButton.setAttribute("id","closeButton");
    closeButton.textContent = "X";


    closeButton.addEventListener("click", () => {
        modalProduct.style.display = "none"; 
        
        
    })
    divProducts.appendChild(modalProduct);
   
}

printCard(product);
printProducts(products);