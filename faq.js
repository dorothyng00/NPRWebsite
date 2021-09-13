var speed = 200 
$('.accordion-dropdown dt.expanded + dd').slideDown(speed)

$('.accordion-dropdown dt').on('click', function(){
	var that = $(this)
	that.toggleClass('expanded').next('dd').slideToggle(speed)
})

var speed = 200 
$('.rental-accordion-dropdown dt.expanded + dd').slideDown(speed)

$('.rental-accordion-dropdown dt').on('click', function(){
	var that = $(this)
	that.toggleClass('expanded2').next('dd').slideToggle(speed)
})