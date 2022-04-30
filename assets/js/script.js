//Öffnet das OVERLAY
$("#click-me").on("click", function() {
	$("body").toggleClass("has-overlay")

	console.log("Hallo, ich wurde soeben geklickt.")
})

//Schließt das Overlay
$("#close-me").on("click", function() {
	$("body").toggleClass("has-overlay")

	console.log("Hallo, ich wurde soeben geklickt.")
})