const close_popup_btn = document.querySelector("#close_popup_button");
const popup_new = document.querySelector(".new-mods-popup");
const new_mods = document.querySelector("#new_btn");

close_popup_btn.addEventListener('click', () => {
    popup_new.style = `display:none; transition: 300ms ease;`;
});

new_mods.addEventListener('click', () => {
    popup_new.style = `display:block; transition: 300ms ease;`;
});