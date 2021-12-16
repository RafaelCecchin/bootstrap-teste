const buttonClear = $(".btn-cls");
const searchBar = $(".search-bar");

searchBar.on("change keyup paste", function(){
    let countText = searchBar.val().length;

    if (countText)
        buttonClear.removeClass("d-none");
    else
        buttonClear.addClass("d-none");
})

buttonClear.on("click", function(){
    searchBar.val("");
    searchBar.focus();
    buttonClear.addClass("d-none");
});