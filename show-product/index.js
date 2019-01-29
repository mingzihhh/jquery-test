var index = 3
function getData() {
    var results = []
    for(var i = 0 ; i<3 ; i++){
        var rand = Math.floor(Math.random()*100)
        var product = {
            img: 'https://picsum.photos/200/200/?image=' + (++index),
            name : '产品' + index,
            price: '￥' + rand
        }
        results.push(product)
    }
    return results
}
function getProdHtml(prod){
    var html = ''
    html += '<li>'
    html += '<div class="cover"> <a href ="#" class = "prod-btn delete">删除</a> </div>'
    html += '<img src="' +prod.img+ '" alt="">'
    html += '<p class="prod-name">' +prod.name+ '</p>'
    html += '<p class="prod-price">' + prod.price + '</p>'
    html += '</li>'
    return html
}
$('.prod-btn.add').on('click',function(){
    $('.prod-intro').removeClass('hover')
    var products = getData()
    $.each(products,function(idx,prod){
        var html = getProdHtml(prod)
        $('.prod-intro').append(html)
    })
})
$('.prod-btn.edit').on('click',function(){
    $('.prod-intro').toggleClass('hover')
})
$('.prod-intro').on('click','.prod-btn.delete',function(){
    $(this).parents('li').remove()
})