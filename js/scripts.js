$(function() {
    $("#videobutton").click(function(){
        $("#videoModal").modal("show");
    })
})

$(function() {
    $("#loginbutton").click(function() {
        $("#loginModal").modal("show");
    })
})

$(function() {
    $("#registerSwitch").click(function() {
        $("#loginModal").modal("hide");
        $("#registerModal").modal("show");
    })
})

$(function() {
    $("#loginSwitch").click(function() {
        $("#registerModal").modal("hide");
        $("#loginModal").modal("show");
    })
})