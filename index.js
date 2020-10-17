// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

saturdayFun();

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork();

function wrapAdjective(why="*") {
    return function(what="special") {
      return `You are ${why}${what}${why}!`
    }
  }

  const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }

  let actionApplyer = function(int, array) {
    let num = int
  
    for (let i = 0; i < array.length; i++ ){
      num = array[i](num)
    }
  
    return num
  }
