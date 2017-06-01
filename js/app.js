// $(document).ready(function(){
//    alert("cargó jQuery");
// });

$(() => {
    $("a").on('click', (e) => {
        e.preventDefault();
        $('.brand-popup').toggle();
    });
    $(".brand-popup .popup-close").on('click', (e) => {
        e.preventDefault();
        $('.brand-popup').hide();
    })
});