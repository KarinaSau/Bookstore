function dialogWithUser() {
    let userName = prompt("Вітаємо у READLY! Як ми можемо до вас звертатися?", "Гість");
    if (!userName || userName.trim() === "") {
        userName = "Гість";
    }

    let favoriteGenre = "";
    let attempts = 0;

    while (favoriteGenre.trim() === "" && attempts < 3) {
        favoriteGenre = prompt("Який жанр книг вам найближчий: романи, детективи чи мотивації?", "");
        if (favoriteGenre === null) {
            favoriteGenre = "";
        }
        attempts++;
    }

    if (favoriteGenre.trim() === "") {
        favoriteGenre = "книги";
    }

    let message = "";

    if (favoriteGenre.toLowerCase() === "детектив" || favoriteGenre.toLowerCase() === "детективи") {
        message = "Радимо звернути увагу на наші захопливі детективи.";
    } else if (favoriteGenre.toLowerCase() === "роман" || favoriteGenre.toLowerCase() === "романи") {
        message = "Для вас ми підготували добірку атмосферних романів.";
    } else if (favoriteGenre.toLowerCase() === "мотивація") {
        message = "Спробуйте наші мотиваційні книги для натхнення та розвитку.";
    } else {
        message = "Запрошуємо переглянути весь каталог і знайти книгу до душі.";
    }

   let recommendations = "";
   for (let i = 1; i <= 2; i++) {
    if (i === 1) {
        recommendations += "READLY бажає вам приємного читання. ";
    } else {
        recommendations += "Нехай наступна книга подарує вам натхнення.";
    }
   }

    alert(
        "Приємно познайомитися, " + userName + "!\n\n" +
        "Ваш вибір: " + favoriteGenre + ".\n" +
        message + "\n\n" +
        recommendations
    );
}

function showDeveloperInfo(surname, name, position = "Розробниця сторінки") {
    alert(
        "Інформація про розробника:\n\n" +
        "Прізвище: " + surname + "\n" +
        "Ім’я: " + name + "\n" +
        "Посада: " + position
    );
}

function compareStrings(str1, str2) {
    if (str1 > str2) {
        alert("За результатом порівняння більшим є рядок: " + str1);
    } else if (str2 > str1) {
        alert("За результатом порівняння більшим є рядок: " + str2);
    } else {
        alert("Обидва рядки однакові.");
    }
}

function changeBackgroundFor30Seconds() {
    const oldBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#bedbe7";

    setTimeout(function () {
        document.body.style.backgroundColor = oldBackground;
    }, 30000);
}

function redirectToAnotherPage() {
    location.href = "catalog.html";
}

function domOperations() {
    const startElement = document.getElementById("start");
    const navLinks = document.querySelectorAll("nav a");

    if (startElement) {
        startElement.innerHTML += ' <span style="color:green;">— раді вас бачити!</span>';
    }

    navLinks.forEach(function (link, index) {
    link.textContent = (index + 1) + ". " + link.textContent;
    });

    const headerTitle = document.querySelector("header h1");
    if (headerTitle && headerTitle.firstChild) {
    headerTitle.firstChild.data = headerTitle.firstChild.data + " ✨";
    }

    const nav = document.querySelector("nav");
    if (nav) {
        console.log("outerHTML навігації:");
        console.log(nav.outerHTML);
    }

    const footerText = document.querySelector("footer p");
    if (footerText) {
    footerText.textContent += " | Дякуємо, що завітали до READLY";
    footerText.style.textAlign = "center";
    footerText.style.margin = "20px 0";
    }

    const newBlock = document.createElement("p");
    const newText = document.createTextNode("Ми віримо, що кожна книга знаходить свого читача.");
    newBlock.append(newText);

    if (startElement) {
        startElement.after(newBlock);
    }
    const prependBlock = document.createElement("span");
    prependBlock.textContent = "READLY. ";
    if (startElement) {
    startElement.prepend(prependBlock);
    }
    const appendBlock = document.createElement("div");
    appendBlock.textContent = "Бажаємо вам приємних відкриттів у світі книг.";
    appendBlock.style.textAlign = "center";
    document.body.append(appendBlock);

    const oldNode = document.createElement("p");
    oldNode.textContent = "Тимчасовий інформаційний блок.";
    oldNode.style.textAlign = "center";
    appendBlock.before(oldNode);

    const newNode = document.createElement("p");
    newNode.textContent = "Сьогодні чудовий день, щоб обрати нову книгу.";
    newNode.style.textAlign = "center";
    oldNode.replaceWith(newNode);

    const removeNode = document.createElement("p");
    removeNode.textContent = "Це тимчасове повідомлення зникне за кілька секунд.";
    removeNode.style.textAlign = "center";
    newNode.after(removeNode);

    setTimeout(function () {
        removeNode.remove();
    }, 5000);

    const firstParagraph = document.querySelector("p");
    if (firstParagraph && firstParagraph.firstChild) {
        console.log("nodeValue/data першого текстового вузла:");
        console.log(firstParagraph.firstChild.nodeValue);
        console.log(firstParagraph.firstChild.data);
    }
}

function assignMouseEvents() {
    const mouseButton = document.getElementById("mouseButton");
    const mouseMessage = document.getElementById("mouseMessage");
    const bgButton = document.getElementById("bgButton");

    if (!mouseButton || !mouseMessage) {
        return;
    }

    function mouseClickByProperty() {
        mouseMessage.textContent = "Кнопка відгукнулася на клік — сподіваємося, вам цікаво досліджувати READLY.";
    }

    function mouseEnterHandler() {
        mouseMessage.textContent = "Курсор уже тут — схоже, ви знайшли інтерактивну частину сторінки.";
    }

    function firstAdditionalHandler() {
        console.log("Перший додатковий обробник для click спрацював.");
    }

    function secondAdditionalHandler() {
        console.log("Другий додатковий обробник для click спрацював.");
    }

    mouseButton.onclick = mouseClickByProperty;

    mouseButton.addEventListener("mouseenter", mouseEnterHandler);
    mouseButton.addEventListener("click", firstAdditionalHandler);
    mouseButton.addEventListener("click", secondAdditionalHandler);

    const objectHandler = {
        handleEvent(event) {
            mouseMessage.textContent = "Об’єкт-обробник спрацював на елементі: " + event.currentTarget.tagName;
            event.currentTarget.classList.add("currentTargetBox");

            setTimeout(function () {
                event.currentTarget.classList.remove("currentTargetBox");
            }, 700);
        }
    };

    if (bgButton) {
        bgButton.addEventListener("dblclick", objectHandler);

        setTimeout(function () {
            bgButton.removeEventListener("dblclick", objectHandler);
            console.log("Об’єкт-обробник для dblclick видалено через removeEventListener.");
        }, 15000);
    }
}

function setupGenreListHighlight() {
    const genreList = document.getElementById("genreList");

    if (!genreList) {
        return;
    }

    genreList.onclick = function (event) {
        const target = event.target;

        if (target.tagName !== "LI") {
            return;
        }

        const items = genreList.querySelectorAll("li");
        items.forEach(function (item) {
            item.classList.remove("activeGenre");
        });

        target.classList.add("activeGenre");
    };
}

const menuActions = {
    showCatalogMessage() {
        const menuResult = document.getElementById("menuResult");
        if (menuResult) {
            menuResult.textContent = "У каталозі зібрані книги для різного настрою: від легких романів до захопливих історій з інтригою.";
        }
    },

    showWelcomeMessage() {
        const menuResult = document.getElementById("menuResult");
        if (menuResult) {
            menuResult.textContent = "READLY — це місце, де хочеться затриматися довше: обрати книгу, видихнути й провести час із задоволенням.";
        }
    },

    showCoffeeMessage() {
        const menuResult = document.getElementById("menuResult");
        if (menuResult) {
            menuResult.textContent = "Так, у нас є кава — саме для тих моментів, коли хочеться поєднати читання і трохи затишку.";
        }
    },
 showWorkHours() {
    const menuResult = document.getElementById("menuResult");
    if (menuResult) {
        menuResult.textContent = "Ми працюємо з понеділка по п’ятницю з 09:00 до 20:00, у суботу — з 10:00 до 18:00. Неділя — вихідний.";
    }
},

showPetsInfo() {
    const menuResult = document.getElementById("menuResult");
    if (menuResult) {
        menuResult.textContent = "Так, ми Pet-friendly! Будемо раді бачити вас із вихованими хвостиками. У нас завжди знайдеться мисочка з водою для вашого друга.";
    }
},

showDiscountInfo() {
    const menuResult = document.getElementById("menuResult");
    if (menuResult) {
        menuResult.textContent = "Так, для наших постійних гостей ми підготували приємні бонуси, сезонні пропозиції та спеціальні знижки на окремі добірки книг.";
    }
},

showCertificateInfo() {
    const menuResult = document.getElementById("menuResult");
    if (menuResult) {
        menuResult.textContent = "Так, у нас є подарункові сертифікати на будь-яку суму — це гарний варіант, якщо хочеться подарувати людині свободу вибору.";
    }
}
};

const actionMenu = document.getElementById("actionMenu");

if (actionMenu) {
    actionMenu.addEventListener("click", function (event) {
        const actionElement = event.target.closest("[data-action]");
        if (!actionElement) return;

        const action = actionElement.dataset.action;
        if (action && typeof menuActions[action] === "function") {
            menuActions[action]();
        }
    });
}

function setupHoverEffects() {
    const hoverArea = document.getElementById("hoverArea");
    const hoverInfo = document.getElementById("hoverInfo");

    if (!hoverArea || !hoverInfo) {
        return;
    }

    hoverArea.addEventListener("mouseover", function (event) {
        const target = event.target;

        if (!target.classList.contains("hoverItem")) {
            return;
        }

        target.classList.add("hoveredItem");

        let fromElement = "зовні блоку";
        if (event.relatedTarget && event.relatedTarget.classList && event.relatedTarget.classList.contains("hoverItem")) {
            fromElement = event.relatedTarget.textContent;
        }

        hoverInfo.textContent =
            "Курсор наведено на: " + target.textContent +
            ". Попередній елемент: " + fromElement + ".";
    });

    hoverArea.addEventListener("mouseout", function (event) {
        const target = event.target;

        if (!target.classList.contains("hoverItem")) {
            return;
        }

        target.classList.remove("hoveredItem");

        let toElement = "за межі блоку";
        if (event.relatedTarget && event.relatedTarget.classList && event.relatedTarget.classList.contains("hoverItem")) {
            toElement = event.relatedTarget.textContent;
        }

        hoverInfo.textContent =
            "Курсор вийшов з: " + target.textContent +
            ". Перехід до: " + toElement + ".";
    });
}

function setupDragAndDrop() {
    const dragItem = document.getElementById("dragItem");
    const dragContainer = document.getElementById("dragContainer");

    if (!dragItem || !dragContainer) {
        return;
    }

    let isDragging = false;
    let shiftX = 0;
    let shiftY = 0;

    dragItem.addEventListener("mousedown", function (event) {
        isDragging = true;

        const itemRect = dragItem.getBoundingClientRect();

        shiftX = event.clientX - itemRect.left;
        shiftY = event.clientY - itemRect.top;

        dragItem.style.cursor = "grabbing";
        dragItem.style.zIndex = "1000";
    });

    document.addEventListener("mousemove", function (event) {
        if (!isDragging) {
            return;
        }

        const containerRect = dragContainer.getBoundingClientRect();

        let newLeft = event.clientX - containerRect.left - shiftX;
        let newTop = event.clientY - containerRect.top - shiftY;

        const maxLeft = dragContainer.clientWidth - dragItem.offsetWidth;
        const maxTop = dragContainer.clientHeight - dragItem.offsetHeight;

        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;
        if (newLeft > maxLeft) newLeft = maxLeft;
        if (newTop > maxTop) newTop = maxTop;

        dragItem.style.left = newLeft + "px";
        dragItem.style.top = newTop + "px";
    });

    document.addEventListener("mouseup", function () {
        if (isDragging) {
            isDragging = false;
            dragItem.style.cursor = "grab";
        }
    });

    dragItem.ondragstart = function () {
        return false;
    };
}