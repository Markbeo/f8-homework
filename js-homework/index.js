/*
**

                                let i
                                   │
                                   │
                                   ├────► i < 2 (not prime number)
                                   │
                                   │
                                   ▼
                                if i === 2 ──────► (prime number)
                                   │
                                   │
                                   │
                                   │
                                   │
               ┌───────────────────┘
               │
               │
               │
               │
               │
               │
               │
               │
               ▼
       if│i % (2───► i**0.5) ===0 (prime number)
         │
         │
         │
         │
         │
         └───────► if i % (2────► i**0.5) !00 (not prime number)

 */
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }

    for (let i = 2; i <= n ** 0.5; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

//Bài tập 2

/*
*


                              let n
                                │
                                │
                                ├───► n >= 0 ( not square  number)
                                ▼
                            i = n ** 0.5

                                │
                                │
                                │
                                │
  if i % 1 === 0 (n is square)  │       else ( not square number)
                 ◄──────────────┴─────────────────►


* */

function isSquare(n) {
    if (n < 0) {
        return false;
    } else if {
        let a = n ** 0.5;
        if (a % 1 !== 0) {
            return false;
        }
        return true
    }
}

//Bài 3: In chuỗi ngược lại với chuỗi ban đầu
/*
*



           let reversed = ``;
                  │
                  │
                  │
                  │
                  │
                  ▼
            let i
                  │
                  │
                  │                                                      ▼
                  │
                  │
                  ▼

       Khoi tao i = 1
                  │
                  │
                  │
                  │
                  ▼
     i < do dai mang reversed
                  │
                  │
                  │
                  │
                  ▼

       giam gia tri i 1 don vi moi lan lap──────► gan i vao mang reversed──────►  moi lan log ra gia tri i cao hon lai noi chuoi vao reversed cho

                                                                                  den het cac phan tu trong mang




* */


function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}