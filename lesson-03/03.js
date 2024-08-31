// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
  let maxNum = (num1 > num2 && num1 > num3) ? num1 :
    (num3 > num1 && num3 > num2) ? num3 : num2;
    return maxNum;
}
