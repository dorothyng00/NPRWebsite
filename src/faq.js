function changeFaqTabEvent(evt, tabTitle) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("faq-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("faq-tabs");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabTitle).style.display = "block";
    evt.currentTarget.className += " active";
}

var speed = 200 
$('.accordion-dropdown dt.expanded + dd').slideDown(speed)

$('.accordion-dropdown dt').on('click', function(){
	var that = $(this)
	that.toggleClass('expanded').next('dd').slideToggle(speed)
})