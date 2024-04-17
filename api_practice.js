// async function getPokemonData(){
//     const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     const data = await result.json()

//     console.log(data)
// }

// console.log(getPokemonData())

// const dittoPromise = new Promise((resolve, reject) => {
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             reject('Failed to fetch. Status', response.status)
//         }
//     })
//     .then(data => resolve(data))
//     .catch(error => reject(error))
// })

// dittoPromise.then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// })

// const pikachuPromise = new Promise((resolve, reject) => {
//     fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(response => {
//         if (response.ok){
//             return response.json()
//         } else {
//             reject('Could not fetch data. Status:', response.status)
//         }
//     })
//     .then (data => resolve(data))
//     .catch(error => reject(error))
// })

// pikachuPromise.then((response) =>{
//     console.log(response.name)
// }).then(() =>{
//     console.log('I choose you!')
// })
// .catch((error) => {
//     throw(error)
// })

async function getEeveeData(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/eevee')
    const data = await response.json()

    console.log(data)
}

getEeveeData()