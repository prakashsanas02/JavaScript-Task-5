const genCode = () => {
  let code = '';
  while (code.length < 1000) {
    code = code.concat(Math.floor(Math.random() * 2));
  }
  return code;
}

let check = Array.from(document.getElementsByClassName("check"))

function checkall() {
  if (check[2].checked) {
    check[0].checked = true
    check[1].checked = true
  }
}

function hack() {
  let side = Array.from(document.getElementsByClassName("side1"));
  let clear1 = setInterval(() => {
    side[0].innerHTML = genCode();
  }, 300)
  let clear2 = setInterval(() => {
    side[1].innerHTML = genCode();
  }, 250)
  let text = Array.from(document.getElementsByClassName("text"))
  let target = document.getElementById("target").value;

  // Async Await 

  const hackapi = async function() {
    // clear screen
    {
      for (let i = 1; i < text.length; i++) {
        text[i].innerHTML = " "
      }
    }
    // screen cleared

    let step1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[1].innerHTML = "Hijacking User..."
        resolve(1)
      }, 1000)
    })
    let step2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "User Located"
        resolve(1)
      }, 1000)
    })
    let step1a = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = `Username:${target} ; `
        resolve(1)
      }, 1000)
    })
    let step1b = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML += ` Password:XXXXXXX ;`
        resolve(1)
      }, 500)
    })
    let step1c = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML += ` Number:+91XXXXXXXXXX`
        resolve(1)
      }, 800)
    })
    let step3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[3].innerHTML = "Getting Device Info..."
        resolve(1)
      }, 1000)
    })
    if (check[0].checked) {
      let step5 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[4].innerHTML = "Facebook Hacked"
          resolve(1)
        }, 1000)
      })
    }
    if (check[1].checked) {
      let step5 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[4].innerHTML = "Instagram Hacked"
          resolve(1)
        }, 1000)
      })
    }
    let step5 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[4].innerHTML = "Resetting Passwords..."
        resolve(1)
      }, 1000)
    })
    let step6 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "Access Granted to Phone"
        resolve(1)
      }, 1000)
    })
    let step7 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "Logs Generated"
        resolve(1)
      }, 1000)
    })
    let step8 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[5].innerHTML = "Hacking Status: Pending..."
        resolve(1)
      }, 1000)
    })
    let step9 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[5].innerHTML = "Hacking Status: Hacked! Succesfully -_+"
        resolve(1)
        clearInterval(clear1)
        clearInterval(clear2)
        side.forEach((x) => {
          x.innerHTML = "Hacker Process"
        })
      }, 3000)
    })
  }
  hackapi()
}


