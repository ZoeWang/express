var FI = {
    init: function() {
        this.loading();
    },
    loading: function() {
        var mySwiper = new Swiper('.swiper-container', {
        	autoplay:3000,
            direction: 'horizontal',
            loop: true,

            // 如果需要分页器
            pagination: '.swiper-pagination'
        })
    }
}

$(function(){
	FI.init();
})