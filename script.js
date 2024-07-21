document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
    const blocks = [
        { type: 'key', pos: [0, 0], size: 'horizontal' },
        { type: 'red', pos: [0, 3], size: 'vertical' },
        { type: 'green', pos: [1, 1], size: 'horizontal' },
        { type: 'green', pos: [1, 3], size: 'horizontal' },
        { type: 'red', pos: [2, 0], size: 'vertical' },
        { type: 'red', pos: [2, 2], size: 'vertical' },
        { type: 'green', pos: [3, 0], size: 'horizontal' },
        { type: 'red', pos: [4, 2], size: 'vertical' }
    ];

    function createBlock(block) {
        const div = document.createElement('div');
        div.classList.add('block', block.type);
        div.classList.add(block.size);
        div.style.gridColumnStart = block.pos[1] + 1;
        div.style.gridRowStart = block.pos[0] + 1;
        grid.appendChild(div);
    }

    blocks.forEach(createBlock);

    // Add game logic here (drag and drop functionality)
});
