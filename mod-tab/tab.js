
document.querySelectorAll('.mod-tab .tab').forEach(function(node){
    var index
    node.addEventListener('click',function(){
        this.parentElement.querySelectorAll('.mod-tab .tab').forEach(function (tab, idx) {
            tab.classList.remove('active')
            if (tab === node) {
                index = idx
            }
        })
        this.classList.add('active')
        this.parentElement.nextElementSibling.querySelectorAll('.content .panel').forEach(function (panel) {
            panel.classList.remove('active')
        })
        this.parentElement.nextElementSibling.querySelectorAll('.content .panel')[index].classList.add('active')

    })
})
    


    

