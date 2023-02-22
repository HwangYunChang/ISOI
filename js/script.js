$(document).ready(function(){

    $(".mainbg .items").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        fade:true
    })


    $(".best-list .items").slick({
        infinite:true,
        autoplay:true,
        autoplaySpeed: 6000,
        speed:500,
        arrows:false,
        dots:false,
        slidesToShow:4,
        slidesToScroll:1,
        responsive:[{
            breakpoint:768,
            settings:{
                slidesToShow:2,
                slidesToScroll:1
            }
        }]
    })
    $(".banner .items").slick({
        infinite:true,
        autoplaySpeed: 2000,
        autoplay:true,
        speed:500,
        arrows:false,
        dots:false,
        vertical: true,
        pauseOnHover:true,
        verticalSwiping: true,
        responsive:[{
            breakpoint:768,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        }]
    })

    // 탭 컨텐츠
    $(".tab-cnt .tab-content").hide();
    $(".tab-cnt ul.tabs>li:first").addClass("active").show();
    $(".tab-cnt .tab-content:first").show();
    $(".tab-cnt ul.tabs>li").click(function(e) {
        e.preventDefault();
    $(".tab-cnt ul.tabs>li").removeClass("active");
    $(this).addClass("active");
    $(".tab-cnt .tab-content").hide();
        
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).show();
    return false;
    });


    $('.tabs .tab-first').addClass('on')

    $('.tabs li a').click(function(){
        if($(this).hasClass('on')){
        $('.tabs li a').removeClass('on');
        } else {
        $('.tabs li a').removeClass('on');
        $(this).addClass('on');
        }
    });
    
    // 햄버거 버튼 슬라이드
    $(document).on('click', '.top_btn', function () {
        $('.headnav').slideToggle()
    })

    // 리뷰 팝업 실행
    $('.review_wrap1').click(function(){
        $('.review_item1').css('display','block')
    })
    $('.review_wrap2').click(function(){
        $('.review_item2').css('display','block')
    })
    $('.review_wrap3').click(function(){
        $('.review_item3').css('display','block')
    })
    $('.review_wrap4').click(function(){
        $('.review_item4').css('display','block')
    })
    $('.review_wrap5').click(function(){
        $('.review_item5').css('display','block')
    })
    $('.review_wrap6').click(function(){
        $('.review_item6').css('display','block')
    })
    $('.review_wrap7').click(function(){
        $('.review_item7').css('display','block')
    })
    $('.review_wrap8').click(function(){
        $('.review_item8').css('display','block')
    })
    $('.review_wrap9').click(function(){
        $('.review_item9').css('display','block')
    })


    $(document).on('click', '.review_item1 .btn', function () {
        $('.review_item1').css('display','none')
    })
    $(document).on('click', '.review_item2 .btn', function () {
        $('.review_item2').css('display','none')
    })
    $(document).on('click', '.review_item3 .btn', function () {
        $('.review_item3').css('display','none')
    })
    $(document).on('click', '.review_item4 .btn', function () {
        $('.review_item4').css('display','none')
    })
    $(document).on('click', '.review_item5 .btn', function () {
        $('.review_item5').css('display','none')
    })
    $(document).on('click', '.review_item6 .btn', function () {
        $('.review_item6').css('display','none')
    })
    $(document).on('click', '.review_item7 .btn', function () {
        $('.review_item7').css('display','none')
    })
    $(document).on('click', '.review_item8 .btn', function () {
        $('.review_item8').css('display','none')
    })
    $(document).on('click', '.review_item9 .btn', function () {
        $('.review_item9').css('display','none')
    })

    // 팝업 닫을때 배경 원복
    $(document).on('click', '.review_item .btn', function () {
        $('.shadow').css('display','none')
    })

    // 팝업 생성시 배경 어둡게
    $('.review-libox').click(function(){
        $('.shadow').css('display','block')
    })
    // 영역밖 팝업창 닫기
    $(document).mouseup(function (e){
        if($('.review_item').has(e.target).length === 0){
            $('.review_item').hide();
        }
    });
    $(document).mouseup(function (e){
        if($('.review_item').has(e.target).length === 0){
            $('.shadow').hide();
        }
    });


    /* ESC 키 누를시 팝업 닫기 */
    $(document).keydown(function(e){
        var code = e.keyCode || e.which;
        if (code == 27) { // 27은 ESC 키번호
            $('.review_item').hide();
        }
    });
    $(document).keydown(function(e){
        var code = e.keyCode || e.which;
        if (code == 27) { // 27은 ESC 키번호
            $('.shadow').hide();
        }
    });

    
    
});