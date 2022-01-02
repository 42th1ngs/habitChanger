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


/* Dropdown shows on hover for md and up, code from https://webdesign.tutsplus.com/tutorials/how-to-make-the-bootstrap-navbar-dropdown-work-on-hover--cms-33840 */
    
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
    function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
    },
    function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
    }
    );
} else {
    $dropdown.off("mouseenter mouseleave");
}
});
   