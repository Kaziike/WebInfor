
    const donGia = document.getElementsByClassName("dg");
    const soLuong = document.getElementsByClassName("sl");
    const thanhTien = document.getElementsByClassName("tt");

    let tong = 0;

    for (let i = 0; i < donGia.length; i++) {
        let sl = parseInt(soLuong[i].innerHTML);
        let dg = parseInt(donGia[i].innerHTML);

        let tt = sl * dg;
        thanhTien[i].innerHTML = tt;

        tong += tt;
    }

    document.getElementById("tong").innerHTML = tong;