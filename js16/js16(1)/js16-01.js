// 어레이의 평균을 구하라
let arr = [12,46,23,57,12,54,62]
console.log(arr)
let Plus =arr.reduce((a,c,i)=>{
    console.log(a,c,i)
    return a+c
},0)
let divide = Plus / arr.length
console.log(`더한 값 : ${Plus}`)
console.log(`평균 값 : ${divide}`)


const arr1 = [4,2,5,1,3,6] 
const arr_rt =ar.reduce((a,c,i,ar)=>{
    avg = a+c
    if(i==ar.length-1){return avg/ar.lenght}
    return avg
})
console.log(avg)