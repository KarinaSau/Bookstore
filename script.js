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