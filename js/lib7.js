const productlist = [
    {
        name: "T90",
        description: "T90 là một chiếc xe tăng chiến đấu chủ lực hiện đại nhất của Nga, được thiết kế để đối phó với các mối đe dọa trên chiến trường hiện đại.", 
        price: 5000000000,
        img:"../assets/images/t90.jpg",
    },
    {
        name: "M1 Abrams",
        description: "M1 Abrams là một chiếc xe tăng chiến đấu chủ lực được sử dụng bởi Quân đội Hoa Kỳ, nổi tiếng với khả năng bảo vệ và sức mạnh hỏa lực vượt trội.", 
        price: 6000000000,
        img:"../assets/images/m1.jpg",
    },
    {
        name: "Leopard 2",
        description: "Leopard 2 là một chiếc xe tăng chiến đấu chủ lực được sản xuất bởi Đức, được biết đến với khả năng cơ động và sức mạnh hỏa lực cao.", 
        price: 5500000000,
        img:"../assets/images/leopard2.jpg",
    }
];

function addProduct(product) {
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item");
    const myIMG = document.createElement("div");
    myIMG.setAttribute("class", "product-image");
    const myInfo = document.createElement("div");
    myInfo.setAttribute("class", "product-info");

    const productIMG = document.createElement("img");
    productIMG.setAttribute("src", product.img);
    productIMG.setAttribute("alt", product.name);
    myIMG.appendChild(productIMG);

    const productName = document.createElement("h3");
    productName.textContent = product.name;
    const productPrice = document.createElement("p");
    productPrice.textContent = product.price.toLocaleString() + " VNĐ";
    const productDescription = document.createElement("a");
    productDescription.textContent = product.description;

    myInfo.appendChild(productName);
    myInfo.appendChild(productDescription);
    myInfo.appendChild(productPrice);

    myDiv.appendChild(myIMG);
    myDiv.appendChild(myInfo);

    document.querySelector(".container").appendChild(myDiv);
}

function loadAllProducts() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    productlist.forEach(product => {
        addProduct(product);
    });
}