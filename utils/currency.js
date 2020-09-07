export const currencyFormatter = (money) => {
    if (money != undefined){
        return money.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).slice(0, -3)
    }else{
        console.error('Parameter is undefined or null, parameter val: ', money)
    }
}