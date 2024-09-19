const getData = (url) => {
    axios.get(url)
        .then((res) => {
            const data = res.data;
            let container = document.querySelector(".container");
            container.innerHTML = '';

            data.forEach((item) => {
                container.innerHTML += `
                    <div class="card" data-id="${item.id}">
                        <div class="image">
                            <i class="fa-solid fa-x" data-id="${item.id}"></i>
                            <img src="${item.img}" alt="">
                        </div>
                        <div class="txt">
                            <p><span>${item.title}</span></p>
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
                                <span>${item.price} TL</span>
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
            });
            removeItem();
        })
};

function removeItem() {
    let removeIcons = document.querySelectorAll(".image .fa-x");
    removeIcons.forEach((icon) => {
        icon.addEventListener("click", (event) => {
            const id = event.currentTarget.getAttribute('data-id');
            axios.delete(`https://66eba35c2b6cf2b89c5b2596.mockapi.io/shopping/${id}`)
                .then(() => {
                    getData("https://66eba35c2b6cf2b89c5b2596.mockapi.io/shopping");

                })
                .catch(error => console.error('Error deleting item:', error));
        });
    });
}

getData("https://66eba35c2b6cf2b89c5b2596.mockapi.io/shopping");
