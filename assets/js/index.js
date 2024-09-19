function getData() {
    let container = document.querySelector(".product .container");
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            let data = res.data;
            data.forEach((item, index) => {
                let element= container.innerHTML += `
                    <div class="card">
                        <div class="image">
                            <i class="fa-regular fa-heart index${index}"></i>
                            <img src="${item.image}" alt="" class="index${index}">
                        </div>
                        <div class="txt">
                            <p><span class="index${index}">${item.title}</span></p>
                            <div class="rating">
                                <span class="rate">4.6</span>
                                <div class="icons">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star-half-stroke"></i>
                                </div>
                            </div>
                            <div class="price">
                                <i class="fa-solid fa-arrow-trend-down"></i>
                                <span> Son 30 Giriş En Düşük Fiyatı!</span>
                            </div>
                            <div class="tl">
                                <span class="index${index}">${item.price} TL</span>
                            </div>
                            <div class="cupon">
                                <div class="cupons item">
                                    <img src="https://cdn.dsmcdn.com/web/production/campaign-coupon-icon.svg" alt="">
                                    <span>Kupon Fırsatı</span>
                                </div>
                                <div class="promotions item">
                                    <img src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg" alt="">
                                    <span>Çok Al Az Öde</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Arama butonuna tıklama olayını burada tanımlayalım
                let searchBtn = document.querySelector(".search input");
                let btn = document.querySelector(".search i");
                let search = '';

                searchBtn.addEventListener("input", (e) => {
                    search = e.target.value.toLowerCase();
                    container.innerHTML = "";
                    data.forEach((item, index) => {
                        if (item.title.toLowerCase().includes(search)) {
                            container.innerHTML += element
                        }
                    });
                    addWishlist(); // Yeniden eklemeyi burada yapıyoruz
                });

                btn.addEventListener("click", () => {
                    console.log(search);
                    container.innerHTML = ""; // Arama butonuna tıklayınca temizleyelim
                    data.forEach((item, index) => {
                        if (item.title.toLowerCase().includes(search)) {
                            container.innerHTML += element
                        }
                    });
                    addWishlist()
                });
                addWishlist()
            });
        });
}
function addWishlist() {
    let heartIcons = document.querySelectorAll(".image i");
    heartIcons.forEach((item, index) => {
        item.addEventListener("click", () => {
            // console.log();
            let data={
                img: document.querySelector(`.image img.index${index}`).src, 
                title: document.querySelectorAll('.txt p span')[index].textContent, 
                price: document.querySelectorAll('.tl span')[index].textContent,
                "id": index
                }
                const postData=(url,data)=> axios.post(url,data)
                postData("https://66eba35c2b6cf2b89c5b2596.mockapi.io/shopping",data)
            });
        });
    }
        getData()
