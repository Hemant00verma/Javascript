// Write a MENU DRIVEN program which enter two integer and perform any one of the giveen arthemethical calculatin, depending one of the user choice from menu.
// 			1. ADDITION
// 			2. SUBSTRACTION
// 			3. MULTIPLICATION
// 			4. DIVISION



let choice=5;
var a=2,b=4,c=0;


switch (choice)
{
    case 1: 
    
        c=a+b;
        console.log(c);
        break ;

    
    case 2:
        
        c=a-b;
        console.log(c);
        break ;
     case 3:
        
        c=a*b;
        console.log(c);
        break ;

    case 4:
        
        c=a/b;
        console.log(c);
        break ;

    default :
        
        
        console.log("choise wrong num");
        

    

}