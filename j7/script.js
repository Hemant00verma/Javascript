// Question - Write a program which enter marks in three subject of a students and calculate its average, independing on the average
// 	check and print the division according to following rule.
	
// 	Average                      Division
// 	60+                           First
// 	45 - <60                      Second
// 	33 - <45                      third
// 	<33                           Fail

let math,hindi,english,avg;
math=45;
hindi=50;
english=89;
avg= (math+hindi+english)/3;
if(avg>=60)
{
    console.log("first division")
}
else if (avg>=45||avg<=60)
{
    console.log("second division")
}
else if (avg>=33||avg<=45)
    {
        console.log("third division")
    }else 
        {
            console.log(" fail")
        }