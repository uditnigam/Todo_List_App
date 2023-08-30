const createList = document.getElementById("createList");
const addListBtn = document.querySelector(".addBtnList");
const cancelListBtn = document.querySelector(".cancelBtnList");
const cancelItemBtn = document.querySelector(".cancelItemBtn");
const deleteBtn = document.querySelector(".deleteBtn");

let deleteState = false;


createList.addEventListener("click", (e) => {
    const addAList = document.querySelector(".addAList");
    const classList = addAList.classList
    classList.remove('hidden')
    e.stopImmediatePropagation();
})

deleteBtn.addEventListener("click", (e) => {
    deleteState = !deleteState;
    console.log("deleteState", deleteState)
    e.stopImmediatePropagation();
})

addListBtn.addEventListener("click", (e) => {
    let name = document.getElementById("name");
    let date = document.getElementById("date");
    const mainCont = document.querySelector(".main");
    const addAList = document.querySelector(".addAList");
    const addItemBtn = document.querySelector(".addItemBtn");

    if (date.value === "" || name.value === "") {
        alert("Please fill all the fields")
    }
    else {
        const classList = addAList.classList
        classList.add('hidden')

        const listContainer = document.createElement("div");
        listContainer.innerHTML = `
        <div class="listContainer">
                <div class="header">
                    <div class="itemHead">
                        <span>List Items</span>
                        <hr />
                    </div>
                    <div class="itemInfo">
                        <span>${date.value}</span>
                        <span>${name.value}</span>
                        <button class="button">+</button>
                    </div>
                </div>
                <div class="listItems">
                    
                </div>
                <div class="footer">
                    &copyGrocery List
                </div>
        </div>
        `;
        mainCont.appendChild(listContainer);
        const button = document.querySelector(".button");
        const listItemsCont = document.querySelector(".listItemsCont");
        const listItems = document.querySelector(".listItems");

        button.addEventListener("click", (e) => {
            const addItemModal = document.querySelector(".addItemModal");
            const classList = addItemModal.classList
            classList.remove('hidden')
            e.stopImmediatePropagation();
        })

        addItemBtn.addEventListener("click", (e) => {


            if (itemName.value === "" || itemPrice.value === "") {
                alert("Please fill all the fields")
            } else {



                const itemBox = document.createElement("div");
                itemBox.innerHTML = `
                        <div>
                             <ul id= "itemNames">

                             </ul>
                         </div>
                         <div>
                             <ul id= "itemPrices">

                             </ul>
                         </div>
                        <div>
                            <ul id="itemsDeleteBtn">
                   
                            </ul>
                         </div>
                         `;
                listItems.appendChild(itemBox);
                console.log("listItems: ", listItems)
                console.log("itemBox: ", itemBox)
                let liName = document.createElement("li");
                let liPrice = document.createElement("li");
                const itemName = document.getElementById("itemName");
                const itemPrice = document.getElementById("itemPrice");
                const textName = document.createTextNode(itemName.value);
                const textPrice = document.createTextNode(itemPrice.value);
                const listNames = document.getElementById("itemNames");
                const listPrices = document.getElementById("itemPrices");
                const itemsDeleteBtn = document.getElementById("itemsDeleteBtn");

                console.log("listNames: ", listNames)
                liName.appendChild(textName);
                listNames.appendChild(liName);

                liPrice.appendChild(textPrice);
                listPrices.appendChild(liPrice);

                let li = document.createElement("li");
                li.innerHTML = "<button id='itemBtnDelete'>-</button>";
                itemsDeleteBtn.appendChild(li);

                const addItemModal = document.querySelector(".addItemModal");
                const classList = addItemModal.classList
                classList.add('hidden')
                itemName.value = '';
                itemPrice.value = '';

                const itemBtnDelete = document.getElementById("itemBtnDelete");
                if (itemBtnDelete) {
                    itemBtnDelete.addEventListener("click", (e) => {
                        console.log("listItems: ", listItems)
                        console.log("itemBox: ", itemBox)
                        listItems.remove(itemBox);
                    });
                    e.stopImmediatePropagation();
                }
            }
            e.stopImmediatePropagation();
        })

        //CODE TO HIDE THE ADDLIST MODAL
        date.value = '';
        name.value = '';

        listContainer.addEventListener("click", (e) => {
            if (deleteState) {
                e.currentTarget === true;
                mainCont.removeChild(listContainer);
            }
            e.stopImmediatePropagation();
        })
    }
    e.stopImmediatePropagation();
})




cancelListBtn.addEventListener("click", (e) => {
    const addAList = document.querySelector(".addAList");
    const classList = addAList.classList
    classList.add('hidden');
    e.stopImmediatePropagation();
})

cancelItemBtn.addEventListener("click", (e) => {
    const addItemModal = document.querySelector(".addItemModal");
    const classList = addItemModal.classList
    classList.add('hidden');
    e.stopImmediatePropagation();
})





