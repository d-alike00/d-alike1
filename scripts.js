document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    let isDragging = false;

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            isDragging = true;
            e.dataTransfer.setData('text/plain', e.target.id);
        });

        draggable.addEventListener('dragend', () => {
            setTimeout(() => {
                isDragging = false;
            }, 100);  // Small delay to reset the flag
        });

        draggable.addEventListener('click', (e) => {
            if (isDragging) {
                e.preventDefault();
            } else {
                const link = e.target.closest('a');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });

    document.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    document.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        const dropX = e.clientX;
        const dropY = e.clientY;
        draggable.style.position = 'absolute';
        draggable.style.left = `${dropX - draggable.offsetWidth / 2}px`;
        draggable.style.top = `${dropY - draggable.offsetHeight / 2}px`;
    });
});
