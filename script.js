const dateInput = document.querySelector("#input");
const form = document.querySelector("#form");
const month = [31];


form.addEventListener("submit", function (e) {
  e.preventDefault();


  myVar = setTimeout(gif, 5800)

  document.getElementById('output').innerHTML = "<img src = https://i.gifer.com/3RFR.gif>"

  function gif() {

    function reverseStr(str) {
      var reversedStr = str.split('').reverse().join('')
      return reversedStr;
    }


    function isPalindrome(str) { //reverseStr(str) called here
      var reverse = reverseStr(str)
      return str === reverse;
    }



    function convertDateTOStr(date) {
      var dateStr = {
        day: '',
        month: '',
        year: ''
      };

      if (date.day < 10) {
        dateStr.day = '0' + date.day
      } else {
        dateStr.day = date.day.toString();
      }

      if (date.month < 10) {
        dateStr.month = '0' + date.month;
      } else {
        dateStr.month = date.month.toString()
      }

      dateStr.year = date.year.toString()
      return dateStr;
    }


    function getAllDateFormats(date) {
      var dateStr = convertDateTOStr(date)

      var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
      var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
      var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
      var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
      var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
      var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
      return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
    }


    function checkPalindromeForAllFormats(date) {
      var listOfPalindrome = getAllDateFormats(date)
      var flag = false;
      for (var i = 0; i < listOfPalindrome.length; i++) {
        if (isPalindrome(listOfPalindrome[i])) {
          flag = true;
          break;
        }
      }
      return flag;
    }


    function isLeapYear(year) {
      if (year % 400 === 0) {
        return true;
      }
      if (year % 100 === 0) {
        return false;
      }
      if (year % 4 === 0) {
        return true;
      }
      return false;
    }


    function getNextDate(date) {
      var day = date.day + 1;
      var month = date.month;
      var year = date.year;

      var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

      if (month === 2) {
        if (isLeapYear(year)) {
          if (day > 29) {
            day = 1;
            month++;
          }
        } else {
          if (day > 28) {
            day = 1;
            month++;
          }
        }
      } else {
        if (day > daysInMonth[month - 1]) {
          day = 1;
          month++
        }
      }
      if (month > 12) {
        month = 1;
        year++;
      }

      return {
        day: day,
        month: month,
        year: year
      }
    }


    function getNextPalindromeDate(date) {
      var ctr = 0;
      var nextDate = getNextDate(date);
      while (1) {
        ctr++;
        var isPalindrome = checkPalindromeForAllFormats(nextDate);
        if (isPalindrome) {
          break;
        }
        nextDate = getNextDate(nextDate);
      }
      return [ctr, nextDate]
    }
   

    const dateInput = document.querySelector('#input')
   


    var inputStr = dateInput.value;

    if (inputStr !== '') {
      var listOfDate = inputStr.split('-');
      var date = {
        day: Number(listOfDate[2]),
        month: Number(listOfDate[1]),
        year: Number(listOfDate[0])
      };
      var isPalindromeDate = checkPalindromeForAllFormats(date)

      if (isPalindromeDate) {
        document.getElementById('output').innerText = "Awesome ! Your  birthday is a Palindrome 🤓!!"
      } else {
        var [ctr, nextDate] = getNextPalindromeDate(date);
        document.getElementById('output').innerText = `Ohh No your birthday is not a Palindrome. The next Palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr} days! 😔`;
      }
    }

  }
});

const scroll = document.querySelector("#scroll");
scroll.addEventListener("click", function () {
  let scrolls = document.getElementById("#main");
  main.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
});