
// 2. Common Elements
function commonElements(arr1, arr2) {
        let currElement 
    
        // // ver 1 algorithmic 
        // for (let i = 0 ; i < arr1.length ; i++) {
        //     currElement = arr1[i]
        //     for (let x = 0 ; x < arr2.length ; x++) {
        //         if (currElement === arr2[x]) {
        //             console.log(currElement)
        //         }
        //     }
        // }
    
        //ver 2 with .includes
        for (let element of arr1) {
               if (arr2.includes(element)) {
                console.log(element)
            }
        
        }
    
    }
    commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
    