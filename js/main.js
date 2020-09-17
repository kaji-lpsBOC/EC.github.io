$(function(){

    $('.top-slider').slick({
        arrows:true,
        autoplay:true,
        dots:true,
        speed:1500, /*一単位あたり0.01秒*/
        easing:'swing',
        centerMode:true,
        centerPadding:'25%',/*width半分が中央スライダーで左右25%*/
        prevArrow:'<div class="slide-btn prev-btn"></div>',
        nextArrow:'<div class="slide-btn next-btn"></div>',
        responsive:[
            {
                breakpoint:768,
                settings:{
                    centerPadding:'0%',
                    slidesToshow:1,
                    slideToScroll:1,
                }
            }
        ]
    });
});

//ハンバーガーメニュー
$('.menu-trigger').on('click',function(){
    $(this).toggleClass('is-active');
    $('.header-links').toggleClass('is-active');
});

//サイズ選択
$('.item-size-list li').on('click',function(){
    const select_size = $(this).text();

    $(this).addClass('is-active');
    $(this).siblings('li').removeClass('is-active')
    $('.item-size-select span').text(select_size);
});

//レビュー
let review_num = 0;
$('.review li').on('click',function(){
    if(review_num === $('.review li').index(this) + 1){
        $('.review li').removeClass('is-active');
        review_num = 0;
    }else{
        review_num = $('.review li').index(this) + 1;
        $('.review li').removeClass('is-active');
        $(`.review li:lt('${review_num}')`).addClass('is-active');
    }
});

//アイテム詳細説明アコーディオン
$('[data-accordion="trigger"]').on('click',function(){
    $(this).toggleClass('is-active');
    $(this).next().slideToggle();
});


$(window).on("scroll",function(){
    
    //fadeIn
    $('[data-fadeIn').each(function(index,el){
        if( $(window).scrollTop() > ($(el).offset().top - $(window).height() / 2 ) ){
            $(el).addClass('is-over');
        }
    });
});

$(window).on("load",function(){

    //ローディング処理A
    setTimeout(function(){
        $('.loader').fadeOut();
    },600) //0.6秒後
});
