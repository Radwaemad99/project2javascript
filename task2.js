//* find largest word in string 
function findLargestWord (str) {
    const words = str.split (' ');
    let largestWord = words[0];
    for( let i = 1; i< words.length ; i++)
    {
        if ( words [i].length > largestWord.length)
        {
            largestWord = words [i];
        }
    }
    return largestWord ;
}
let inputWord = " this is a javascript string demo ";
let largestWord = findLargestWord( inputWord);
console.log( largestWord);

//* sort arrays numbers 
function sortArraysNumbers ()
{
    const numbers=[];
    for ( let i = 0; i < 5 ; i++)
    {
        const num = parseInt( prompt ( "Enter number  :" ));
        numbers.push(num);
    }
    //* sort by acc numbers
    numbers.sort((a,b) => a-b);
    //* sort by dec numbers 
    numbers.sort((a,b) => b-a);
    
    console.log(" original numbers :" , numbers);
    console.log (" numbers sorted in acc order : ", numbers );
    console.log(" numbers sorted in dec order :", numbers);

} 
sortArraysNumbers();



