function reversenum(){
    let num=123,rem=0,rev=0;
    while(num>0){
        rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10)
    }
            console.log(rev)
    }
    
    
    reversenum();

  //assignments
    
    //wap sum of the num
    
    function sumofnum(){
        let n=123,sum=0,rem=0;
        while(n>0){
    rem=n%10;
    sum=sum+rem;
    n=Math.floor(n/10)
        }
        console.log(sum)
    }
    sumofnum();
    
    //palimdrom of a number
    //ex: 12321 when reverse it should be same 12321
    
    function palimdrom(){
        let num1=1234321,rem=0,palim=0;
        while(num1>0){
          rem=num1%10;
          num1=Math.floor(num1/10)
          palim=palim*10+rem
        }
        console.log(palim)
    }
    palimdrom();
    
    //find the maximum and the minimum salary of the arrey
    function maxsalary(){
        let salary=[1000,2000,6000,10000,3000]
        {
            salary.sort(function(a,b){return a-b});
        }
        console.log(salary[4])
    }
    maxsalary();
    
    //minimum salary
     function minsalary(){
        let salary=[1000,2000,6000,10000,3000]
        {
            salary.sort(function(a,b){return a-b });
        }
        console.log(salary[0])
     }
     minsalary();
