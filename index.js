function verb(word) {
  let endOfWord = word.toLowerCase().slice(0, -3); // слово без хвостика
  let tail = word.toLowerCase().substr(-3); // хвостик слова
  let beforeTail = word.toLowerCase().substr(-4).slice(0, -3); // буква перед хвостиком(для коротких слов)
  let beforeTailLetter = word.toLowerCase().substr(-5).slice(0, -4); // буква перед буквой перед хвостиком(для длинных слов)
  let beforeTailDoubleLetter = word.toLowerCase().substr(-5).slice(0, -3); // две буквы перед хвостиком (для проверки наподобие корня слова => искл. однокоренные слова)

  let iAm = "";
  let we = "";
  let she = "";

  if (
    tail === "ать" ||
    tail === "ить" ||
    tail === "ыть" ||
    tail === "еть" ||
    tail === "оть" ||
    tail === "ять" ||
    tail === "уть"
  ) {
    // Буква перед окончанием "Б"
    if (beforeTail === "б") {
      if (
        tail === "ить" &&
        beforeTailLetter !== "у" &&
        beforeTailLetter !== "ю"
      ) {
        iAm = endOfWord + "ью";
        we = endOfWord + "ьём";
        she = endOfWord + "ьёт";
      } else if (
        beforeTailLetter === "а" ||
        beforeTailLetter === "о" ||
        beforeTailLetter === ""
      ) {
        iAm = endOfWord + "уду";
        we = endOfWord + "удем";
        she = endOfWord + "удет";
      } else {
        iAm = endOfWord + "лю";
        we = endOfWord.slice(0, -1) + "бим";
        she = endOfWord.slice(0, -1) + "бит";
      }

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }

    // Буква перед окончанием "В"
    else if (beforeTail === "в") {
      if (word === "звать") {
        iAm = endOfWord.slice(0, -1) + "ову";
        we = endOfWord.slice(0, -1) + "овем";
        she = endOfWord.slice(0, -1) + "овет";
      } else if (word === "ловить") {
        iAm = endOfWord.slice(0, -1) + "влю";
        we = endOfWord.slice(0, -1) + "вим";
        she = endOfWord.slice(0, -1) + "вит";
      } else if (beforeTailLetter === "") {
        iAm = endOfWord + "ою";
        we = endOfWord + "оем";
        she = endOfWord + "оет";
      } else {
        iAm = endOfWord + "у";
        we = endOfWord + "ем";
        she = endOfWord + "ет";
      }

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }

    // Буква перед окончанием "Д" ИЛИ "З"
    else if (beforeTail === "д" || beforeTail === "з") {
      if (word === "владеть") {
        iAm = endOfWord + "ею";
        we = endOfWord + "еем";
        she = endOfWord + "еет";
      } else if (beforeTailDoubleLetter == "рз") {
        iAm = endOfWord + "аю";
        we = endOfWord + "аем";
        she = endOfWord + "ает";
      } else if (beforeTailLetter === "") {
        iAm = endOfWord + "ую";
        we = endOfWord + "уем";
        she = endOfWord + "ует";
      } else {
        iAm = endOfWord.slice(0, -1) + "жу";
        we = endOfWord + "им";
        she = endOfWord + "ит";
      }

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }
    // Буква перед окончанием "Ж"
    else if (beforeTail === "ж") {
      // ИСКЛЮЧЕНИЯ

      if (word === "рожать") {
        iAm = endOfWord.slice(0, -1) + "жу";
        we = endOfWord.slice(0, -1) + "дим";
        she = endOfWord.slice(0, -1) + "дит";
      } else if (word === "держать" || word === "визжать") {
        iAm = endOfWord.slice(0, -1) + "жу";
        we = endOfWord.slice(0, -1) + "жим";
        she = endOfWord.slice(0, -1) + "жит";
      } else if ((word = "бежать")) {
        iAm = endOfWord.slice(0, -1) + "гу";
        we = endOfWord.slice(0, -1) + "жим";
        she = endOfWord.slice(0, -1) + "жит";
      }
      // ОСТАЛЬНЫЕ СЛУЧАИ
      else {
        iAm = endOfWord.slice(0, -1) + "жму";
        we = endOfWord.slice(0, -1) + "жмём";
        she = endOfWord.slice(0, -1) + "жмёт";
      }

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }
    // Буква перед окончанием "К"
    else if (beforeTail === "к") {
      iAm = endOfWord.slice(0, -1) + "чу";
      we = endOfWord.slice(0, -1) + "чем";
      she = endOfWord.slice(0, -1) + "чет";

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }

    // Буква перед окончанием "М"
    else if (beforeTail === "м") {
      if (beforeTailLetter === "и" || beforeTailLetter === "у") {
        iAm = endOfWord + "ею";
        we = endOfWord + "еем";
        she = endOfWord + "еет";
      } else if (word !== "мыть") {
        iAm = endOfWord + "аю";
        we = endOfWord + "аем";
        she = endOfWord + "ает";
      } else {
        iAm = endOfWord + "ою";
        we = endOfWord + "оем";
        she = endOfWord + "оет";
      }

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }

    // Буква перед окончанием "Н"
    else if (beforeTail === "н") {
      if (word === "гнать") {
        iAm = endOfWord.slice(0, -1) + "оню";
        we = endOfWord.slice(0, -1) + "оним";
        she = endOfWord.slice(0, -1) + "онит";
      } else if (word === "поднять") {
        iAm = endOfWord + "иму";
        we = endOfWord + "имем";
        she = endOfWord + "имет";
      } else if (tail === "уть") {
        iAm = endOfWord + "у";
        we = endOfWord + "ем";
        she = endOfWord + "ет";
      } else {
        iAm = endOfWord + "ою";
        we = endOfWord + "оем";
        she = endOfWord + "оет";
      }

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }

    // Буква перед окончанием "П"
    else if (beforeTail === "п") {
      if (beforeTailLetter === "а") {
        iAm = endOfWord + "аю";
        we = endOfWord + "аем";
        she = endOfWord + "ает";
      } else if (beforeTailLetter === "" && tail === "еть") {
        iAm = endOfWord + "ою";
        we = endOfWord + "оём";
        she = endOfWord + "оёт";
      } else if (beforeTailLetter === "" && tail === "ить") {
        iAm = endOfWord + "ью";
        we = endOfWord + "ьём";
        she = endOfWord + "ьёт";
      } else {
        iAm = endOfWord + "лю";
        we = endOfWord + "им";
        she = endOfWord + "ит";
      }
      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }
    // Буква перед окончанием "Р"
    else if (beforeTail === "р") {
      if (
        word === "смотреть" ||
        beforeTailDoubleLetter === "ор" ||
        beforeTailDoubleLetter === "ар" ||
        beforeTailDoubleLetter === "ур"
      ) {
        iAm = endOfWord + "ю";
        we = endOfWord + "им";
        she = endOfWord + "ит";
      }

      // ДЛЯ ОКАНЧИВАЮЩИХСЯ НА -ОТЬ
      else if (tail === "оть") {
        iAm = endOfWord + "юсь";
        we = endOfWord + "емся";
        she = endOfWord + "ется";
      }

      // ДЛЯ ОКАНЧИВАЮЩИХСЯ НА -ЯТЬ
      else if (tail === "ять") {
        iAm = endOfWord + "яю";
        we = endOfWord + "яем";
        she = endOfWord + "яет";
      }

      // ДЛЯ ОКАНЧИВАЮЩИХСЯ НА -ЕТЬ
      else if (tail === "еть") {
        iAm = endOfWord.slice(0, -2) + "ру";
        we = endOfWord.slice(0, -2) + "рем";
        she = endOfWord.slice(0, -2) + "рет";
      }

      // ДЛЯ ОКАНЧИВАЮЩИХСЯ НА -ЫТЬ
      else if (tail === "ыть") {
        iAm = endOfWord + "ою";
        we = endOfWord + "оем";
        she = endOfWord + "оет";
      }

      //ДЛЯ ОСТАЛЬНЫХ
      else {
        iAm = endOfWord + "ею";
        we = endOfWord + "еем";
        she = endOfWord + "еет";
      }

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }

    // Буква перед окончанием "С"
    else if (beforeTail === "с") {
      iAm = endOfWord.slice(0, -1) + "шу";
      we = endOfWord + "им";
      she = endOfWord + "ит";

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }

    // Буква перед окончанием "Т"
    else if (beforeTail === "т" && word !== "пытать") {
      //ИСКЛЮЧЕНИЯ

      if (word === "растить") {
        iAm = endOfWord.slice(0, -1) + "ту";
      } else if (word === "защитить") {
        iAm = endOfWord.slice(0, -1) + "щу";
      } else if (beforeTailDoubleLetter === "ст") {
        iAm = endOfWord.slice(0, -2) + "щу";
      } else if (word === "чистить" || word === "гостить") {
        iAm = endOfWord.slice(0, -2) + "щу";
      } else {
        iAm = endOfWord.slice(0, -1) + "чу";
      }

      //ИСКЛЮЧЕНИЯ
      if (word === "роптать") {
        iAm = endOfWord.slice(0, -1) + "щу";
        we = endOfWord.slice(0, -1) + "щем";
        she = endOfWord.slice(0, -1) + "щет";

        // ДЛЯ -ЫТЬ
      } else if (tail === "ыть") {
        iAm = endOfWord + "ыл";
        we = endOfWord + "ыли";
        she = endOfWord + "ыла";
      } else if (word === "потеть") {
        iAm = endOfWord + "ею";
        we = endOfWord + "еем";
        she = endOfWord + "еет";
      } else if (
        beforeTailDoubleLetter === "ет" ||
        beforeTailDoubleLetter === "чт" ||
        beforeTailDoubleLetter === "от"
      ) {
        iAm = endOfWord + "аю";
        we = endOfWord + "аем";
        she = endOfWord + "ает";
      }
      // ОСТАЛЬНЫЕ СЛУЧАИ
      else {
        we = endOfWord.slice(0, -1) + "тим";
        she = endOfWord.slice(0, -1) + "тит";
      }

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }

    // Буква перед окончанием "Ч" ИЛИ "Л"
    else if (beforeTail === "ч" || beforeTail === "л") {
      // Буква перед окончанием "Ч"
      if (beforeTail === "ч" && beforeTailLetter !== "а") {
        iAm = endOfWord + "у";
        we = endOfWord + "им";
        she = endOfWord + "ит";
      } else if (beforeTailLetter === "а") {
        iAm = endOfWord + "ну";
        we = endOfWord + "нём";
        she = endOfWord + "нёт";
      }
      // Буква перед окончанием "Л"
      else if (beforeTail === "л") {
        if (word === "болеть") {
          iAm = endOfWord + "ею";
          we = endOfWord + "еем";
          she = endOfWord + "еет";
        } else if (tail === "ять") {
          iAm = endOfWord + "яю";
          we = endOfWord + "яем";
          she = endOfWord + "яет";
        } else if (tail === "ить" && beforeTailLetter === "") {
          iAm = endOfWord + "ью";
          we = endOfWord + "ьем";
          she = endOfWord + "ьет";
        } else {
          iAm = endOfWord + "ю";
          we = endOfWord + "им";
          she = endOfWord + "ит";
        }
      }

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }

    // Буква перед окончанием "Ш"
    else if (beforeTail === "ш") {
      if (word === "вешать") {
        iAm = endOfWord + "аю";
        we = endOfWord + "аем";
        she = endOfWord + "ает";
      } else {
        iAm = endOfWord.slice(0, -1) + "шу";
        we = endOfWord.slice(0, -1) + "шим";
        she = endOfWord.slice(0, -1) + "шит";
      }

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }

    // Буква перед окончанием "Щ"
    else if (beforeTail === "щ") {
      iAm = endOfWord + "у";
      we = endOfWord + "им";
      she = endOfWord + "ит";

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }

    // ОСТАЛЬНЫЕ СЛУЧАИ
    else {
      iAm = endOfWord + "аю";
      we = endOfWord + "аем";
      she = endOfWord + "ает";

      console.log("Я =>", iAm, "Мы =>", we, "Она =>", she);
    }
  }
}

verb("заработать");
