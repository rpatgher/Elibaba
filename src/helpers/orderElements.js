const orderElements = (elements, orderKey) => {
    const categoryGroup = {};
    
    elements.forEach(product => {
        product.categories.forEach(category => {
            if (category.category === orderKey) {
                category.subcategories.forEach(subcategory => {
                    if (!categoryGroup[subcategory]) {
                        categoryGroup[subcategory] = [];
                    }
                    categoryGroup[subcategory].push(product);
                });
            }
        });
    });
    const result = Object.keys(categoryGroup).map(key => ({
        category: key,
        products: categoryGroup[key]
    }));
    return result;
};


export default orderElements;

