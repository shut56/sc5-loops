const numb = 5
let count = 1
let result = 1
/*
while(count <= numb) {
  result = result * count
  console.log(result)
  count += 1
}
/**/

/*
for (let i = 1; i <= numb; i += 1) {
  result = result * i
}
/**/

// console.log(result)

const arr = [15,21,36,47,50]

const multi = (a, cb, m = 1) => {
  let newArr = []
  /*
  for (let i = 0; i < a.length; i += 1) {
    newArr.push(cb(a[i], m))  
  }
  /**/
  return newArr
}

// console.log(
//   multi(arr, (x,y) => x + y, 10)
// )

const myFind = (a, elem) => {
  let result = null
  /*
  for (let i = 0; i < a.length; i += 1) {
    console.log(i, '->', a[i])
    if (elem === a[i]) {
      result = { value: a[i], index: i }
      break
    }
  }
// 
//   [1,2,3,4,5]
//    ^
//    i 
// 
  /**/
  return result
}

// console.log(myFind(arr, 4))

/*
Check if a string contains the letter “y”. 
Print “yes” if it does and “no” if it does not.

let str2 = "don’t know why";
// Example output: 
// “yes” 
*/

const checkLetter = 'y'
const ourString = 'don’t know why'

// console.log(ourString.split(''))
/*
for (let i = 0; i < ourString.length; i += 1) {
  console.log('i', i)
  console.log(`ourString[${i}]`, ourString[i])
  if (ourString[i] === checkLetter) {
    console.log('yes')
  }
}
/**/

// console.log(ourString[7])

/*
Using a for loop print all even numbers up to and including n. Don’t include 0.
let n = 22
Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
*/

const someN = 15

let digitArr = []
/*
for (let i = 2; i <= someN; i += 2) {
  digitArr.push(i)
}
/**/
//console.log(digitArr)

const users = [{
  "id": 1,
  "first_name": "Amii",
  "last_name": "Goldsmith",
  "gender": "Female"
}, {
  "id": 2,
  "first_name": "Vachel",
  "last_name": "McTeague",
  "gender": "Male"
}, {
  "id": 3,
  "first_name": "Jennilee",
  "last_name": "Plowman",
  "gender": "Female"
}, {
  "id": 4,
  "first_name": "Pearline",
  "last_name": "Pierce",
  "gender": "Male"
}, {
  "id": 5,
  "first_name": "June",
  "last_name": "Riccione",
  "gender": "Female"
}, {
  "id": 6,
  "first_name": "Verene",
  "last_name": "Dallaway",
  "gender": "Female"
}, {
  "id": 7,
  "first_name": "Dallas",
  "last_name": "Jovicevic",
  "gender": "Female"
}, {
  "id": 8,
  "first_name": "Carena",
  "last_name": "Gosnay",
  "gender": "Male"
}, {
  "id": 9,
  "first_name": "Paolina",
  "last_name": "Enstone",
  "gender": "Female"
}, {
  "id": 10,
  "first_name": "Tobye",
  "last_name": "Swendell",
  "gender": "Male"
}, {
  "id": 11,
  "first_name": "Cindy",
  "last_name": "Mabb",
  "gender": "Male"
}, {
  "id": 12,
  "first_name": "Fawne",
  "last_name": "Sleeford",
  "gender": "Male"
}, {
  "id": 13,
  "first_name": "Wade",
  "last_name": "Sarge",
  "gender": "Female"
}, {
  "id": 14,
  "first_name": "Justine",
  "last_name": "Sneller",
  "gender": "Female"
}, {
  "id": 15,
  "first_name": "Gerrard",
  "last_name": "Giovanni",
  "gender": "Female"
}, {
  "id": 16,
  "first_name": "Gay",
  "last_name": "McConigal",
  "gender": "Male"
}, {
  "id": 17,
  "first_name": "Kayla",
  "last_name": "Dasent",
  "gender": "Female"
}, {
  "id": 18,
  "first_name": "Mirella",
  "last_name": "Dayer",
  "gender": "Female"
}, {
  "id": 19,
  "first_name": "Olivero",
  "last_name": "Sprason",
  "gender": "Female"
}, {
  "id": 20,
  "first_name": "Fonzie",
  "last_name": "Janous",
  "gender": "Male"
}, {
  "id": 21,
  "first_name": "Malvina",
  "last_name": "Sonschein",
  "gender": "Female"
}, {
  "id": 22,
  "first_name": "Matthaeus",
  "last_name": "Kingsford",
  "gender": "Male"
}, {
  "id": 23,
  "first_name": "Avie",
  "last_name": "Brazenor",
  "gender": "Female"
}, {
  "id": 24,
  "first_name": "Livvy",
  "last_name": "Allix",
  "gender": "Female"
}, {
  "id": 25,
  "first_name": "Adrian",
  "last_name": "Hubeaux",
  "gender": "Female"
}, {
  "id": 26,
  "first_name": "Paxon",
  "last_name": "Reymers",
  "gender": "Female"
}, {
  "id": 27,
  "first_name": "Merrily",
  "last_name": "Hicken",
  "gender": "Female"
}, {
  "id": 28,
  "first_name": "Hilda",
  "last_name": "Maylard",
  "gender": "Male"
}, {
  "id": 29,
  "first_name": "Maddi",
  "last_name": "Moutray Read",
  "gender": "Female"
}, {
  "id": 30,
  "first_name": "Pebrook",
  "last_name": "Petlyura",
  "gender": "Male"
}]

function getUsers(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].gender !== 'Female') {
      continue
    }
    console.log(`${arr[i].first_name} ${arr[i].last_name}`)
    if (arr[i].first_name === 'Gerrard') {
      break
    }
  }
}

// getUsers(users)

function task_1(arr, num) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === num) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// console.log(task_1([5,1,4,7,3,2,9,8], 16))

const tree = {    
  nmb: 2,    
  children: [{    
      nmb: 4,    
      children: [{    
        nmb: 2,    
        children: [{    
          nmb: 1,    
        }]    
      }]    
    },    
    {    
      nmb: 3,    
      children: [{    
        nmb: 6,    
        children: [{    
          nmb: 5,    
        }]    
      }]    
    }   
  ]    
}    

function recursion1(param, sum = 0) {
  if (typeof param.nmb === 'number' && param.nmb % 2 === 0) {
    sum = sum + param.nmb
  }

  console.log('SUM: ', sum)

  if (typeof param.children !== 'undefined') {
    param.children.forEach((obj) => {
      // console.log('SUM before recursion: ', sum)
      sum = sum + recursion1(obj)
      // console.log('SUM after recursion: ', sum)
    })
  }

  return sum
}
// recursion1(tree) -> recursion1({ nmb: 4, children: []}) -> recursion1({ nmb: 9 })
// console.log(recursion1(tree))

const pathTree = {  
  path: 'root',  
  children: [{  
      path: 'level_1',  
      children: [{  
        path: 'level_2',  
        children: [{  
          path: 'level_3'  
        }]  
      }]  
    },  
    {  
      path: 'level_2b',  
      children: [{  
        path: 'level_3b',  
        children: [{  
          path: 'level_5b'  
        },  
        {  
          path: 'level_5c'  
        }]  
      },
      {  
        path: 'level_2b',  
        children: [{  
          path: 'level_3b',  
          children: [{  
            path: 'level_5b'  
          },  
          {  
            path: 'level_5c'  
          }]  
        }]  
      }]  
    }  
  ]  
}  

function recursion2(obj, prevPath) {
  if (typeof prevPath === 'undefined') {
    prevPath = obj.path
  } else {
    prevPath = `${prevPath}/${obj.path}`
  }

  if (typeof obj.children !== 'undefined') {
    return obj.children.map((rec) => recursion2(rec, prevPath)).flat()
  }

  return prevPath
}

console.log(recursion2(pathTree))
