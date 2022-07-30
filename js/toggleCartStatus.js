function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orederForm = document.querySelector('#order-form');
    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
        orederForm.classList.remove('none')

    } else {
        cartEmptyBadge.classList.remove('none');
        orederForm.classList.add('none')
    }


}