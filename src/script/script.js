const titleModal = document.querySelector('#modalTitle');
const contentModal = document.querySelector('#divEmbedModal');

document.querySelectorAll('.openModalButton').forEach((button) => {
    button.addEventListener('click', () => {
        titleModal.innerHTML = button.getAttribute('data-title');
        let embed = document.createElement('embed');
        embed.src = button.getAttribute('data-src')+ "" +
            "";
        embed.width = "100%";
        embed.height = "800";
        embed.type = "application/pdf";
        contentModal.innerHTML = '';
        contentModal.appendChild(embed);
    });
});