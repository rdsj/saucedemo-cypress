export const elements = {
   addCart: (produto) => `[data-test="add-to-cart-${produto.replace(' ', '-').toLowerCase()}"]`,
   removeCart: (produto) => `[data-test="remove-${produto.replace(' ', '-').toLowerCase()}"]`,
   showCart: '[data-test="shopping-cart-link"]',
   clickCart: '[data-test="shopping-cart-link"]'  
}   

