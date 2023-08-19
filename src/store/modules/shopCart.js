function createId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export default {
    state: {
        items: [],
    },
    getters: {
        getItemCounts(state) {
            var totalCount = 0;
            state.items.map((c) => {
                totalCount += c.count;
            });
            return totalCount;
        },
        getTotalPrice(state) {
            var totalPrice = 0;
            state.items.map((c) => {
                var price = c.price * c.count;
                totalPrice += price;
            });
            return totalPrice;
        },
    },
    mutations: {
        addToShopCart(state, product) {
            const items = [...state.items];
            let oldItem = items.find((f) => f.productId == product.id);
            if (oldItem) {
                oldItem.count += 1;
                state.items = items;
            } else {
                const shopCart = {
                    id: createId(),
                    productId: product.id,
                    productTitle: product.title,
                    price: product.price,
                    count: 1,
                };
                state.items.push(shopCart);
            }
        },
        removeItem(state, id) {
            var shopCart = [...state.items];
            shopCart = shopCart.filter((f) => f.id !== id);
            state.items = shopCart;
        },
        changeCount(state, item) {
            const items = [...state.items];
            let oldItem = items.find((f) => f.id == item.id);
            if (!oldItem) {
                alert("NotFound");
                return;
            }
            oldItem.count = parseInt(item.newCount);
            state.items = items;
        },
    },
};