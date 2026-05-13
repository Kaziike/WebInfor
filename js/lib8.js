const productList = [
    {
        id: "01",
        name: "T90",
        price: "5,000,000,000 VND",
        description: "T90 là một chiếc xe tăng chiến đấu chủ lực hiện đại nhất của Nga, được thiết kế để đối phó với các mối đe dọa trên chiến trường hiện đại.",
        img: "../assets/images/t90.jpg",
        productLink: "page8.html"
    },
    {
        id: "02",
        name: "M1 Abrams",
        price: "6,000,000,000 VND",
        description: "M1 Abrams là một chiếc xe tăng chiến đấu chủ lực được sử dụng bởi Quân đội Hoa Kỳ, nổi tiếng với khả năng bảo vệ và sức mạnh hỏa lực vượt trội.",
        img: "../assets/images/m1.jpg",
        productLink: "page8.html"
    },
    {
        id: "03",
        name: "Leopard 2",
        price: "5,500,000,000 VND",
        description: "Leopard 2 là một chiếc xe tăng chiến đấu chủ lực được sản xuất bởi Đức, được biết đến với khả năng cơ động và sức mạnh hỏa lực cao.",
        img: "../assets/images/leopard2.jpg",
        productLink: "page8.html"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // URLSearchParams from sketch
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        // Show detail view
        document.getElementById('list-view').style.display = 'none';
        document.getElementById('detail-view').style.display = 'flex';
        
        // Array.find() from sketch
        const product = productList.find(p => p.id === id);
        
        if (product) {
            // Update DOM properties from sketch (id="p-image" src, p-description innerHTML, etc.)
            document.getElementById("p-image").src = product.img;
            document.getElementById("p-name").textContent = product.name;
            document.getElementById("p-price").textContent = product.price;
            document.getElementById("p-description").innerHTML = product.description;
        } else {
            document.getElementById("detail-view").innerHTML = "<p>Sản phẩm không tồn tại.</p>";
        }
    } else {
        // Show list view to generate the "Xem chi tiết" links
        document.getElementById('detail-view').style.display = 'none';
        const listView = document.getElementById('list-view');
        listView.style.display = 'flex';
        listView.style.flexWrap = 'wrap';
        listView.style.gap = '20px';
        
        productList.forEach(product => {
            const card = document.createElement("div");
            card.style.border = "1px solid #ccc";
            card.style.padding = "10px";
            card.style.width = "200px";
            card.style.textAlign = "center";
            card.style.borderRadius = "8px";
            
            const img = document.createElement("img");
            img.src = product.img;
            img.style.width = "100%";
            img.style.height = "150px";
            img.style.objectFit = "cover";
            
            const name = document.createElement("h3");
            name.textContent = product.name;
            
            const link = document.createElement("a");
            link.textContent = "Xem chi tiết";
            // setAttribute from sketch: setAttribute("href", productLink + "?id=" + id)
            link.setAttribute("href", product.productLink + "?id=" + product.id);
            link.style.display = "inline-block";
            link.style.marginTop = "10px";
            link.style.padding = "8px 15px";
            link.style.background = "#007BFF";
            link.style.color = "white";
            link.style.textDecoration = "none";
            link.style.borderRadius = "4px";
            
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(link);
            
            listView.appendChild(card);
        });
    }
});