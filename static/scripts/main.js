//Changing the background colour when scrollTop
$(document).ready(function() {
  var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 10) {
      $("header").css('background-color', '#FBFBFB');
    } else {
      $("header").css('background-color', 'inherit');
    }
  });
});


//Form Code
const inputCheck = $(".inputCheck");
const langCheck = $(".langCheck");
const modeCheck = $(".modeCheck");

const textSearch = $(".textSearch");
const imgSearch = $(".imageSearch");

const optionHead1 = $(".optionHead1");
const optionHead2 = $(".optionHead2");
const optionHead3 = $(".optionHead3");


inputCheck.click(()=>{
    if(inputCheck.is(":checked")){
        textSearch.css('display', 'none');
        imgSearch.css('display', 'block');

        optionHead1.html('Image');
    }else{
        textSearch.css('display', 'block');
        imgSearch.css('display', 'none');

        optionHead1.html('Text');
    }
});

langCheck.click(()=>{
    if(langCheck.is(":checked")){
        optionHead2.html('Hindi');
    }else{
        optionHead2.html('English');
    }
});

modeCheck.click(()=>{
    if(modeCheck.is(":checked")){
        optionHead3.html('Legal');
    }else{
        optionHead3.html('Summary');
    }
});