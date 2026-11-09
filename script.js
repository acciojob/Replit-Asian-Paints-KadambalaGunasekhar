//your JS code here. If required.
const gridItems = document.querySelectorAll("#grid-container div");

        gridItems.forEach(item => {
            item.classList.add("grid-item");
        });

        const blockInput = document.getElementById("block_id");
        const colorInput = document.getElementById("colour_id");

        const changeButton = document.getElementById("change_button");
        const resetButton = document.getElementById("Reset");

        changeButton.addEventListener("click", function () {

            const blockId = blockInput.value;
            const color = colorInput.value;

           
            gridItems.forEach(item => {
                item.style.backgroundColor = "transparent";
            });

            
            const selectedBlock = document.getElementById(blockId);

            
            if (selectedBlock && blockId >= 1 && blockId <= 9 && color !== "") {
                selectedBlock.style.backgroundColor = color;
            }
        });

        
        resetButton.addEventListener("click", function () {

            gridItems.forEach(item => {
                item.style.backgroundColor = "transparent";
            });

            blockInput.value = "";
            colorInput.value = "";
        });