//*calculate circle area

function calculateCircleArea(){
    let raduis = prompt ("Enter the value of the circle's raduis :");
    if ( raduis)
    {
        let area = Math.PI*Math.pow(raduis,2);
        alert (" Total area of the circle is " +area.toFixed(10));


    }
}
calculateCircleArea();

//* calculate cosine

function calculateCosine ()
{
    let angle = prompt (" Enter an angle in degree to calclate cosine :");
    if ( angle)
    {
        const angleRadians = angle* (Math.PI/180);
        let cosine = Math.cos(angleRadians);
        alert ("cos"+angle+ "is " +cosine.toFixed(4));
    }
}
calculateCosine();

//* calculate square root

function calculateSquareRoot()
{
    let number = prompt(" Enter the value to calculate square root :");
    if(number)
    {
        let squareRoot=Math.sqrt(number);
        alert("square root of " +number+ " is" +squareRoot);
      
    }
}
calculateSquareRoot();