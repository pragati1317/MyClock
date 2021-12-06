setInterval(()=>
{
       d=new Date();
       hTime=d.getHours();
       mTime=d.getMinutes();
       sTime=d.getSeconds();
       hrotation =30*hTime + mTime/2;
       mrotation =6*mTime;
       srotation=6*sTime;
       
       hour.style.transform=`rotate(${hrotation}deg)`;
       second.style.transform=`rotate(${srotation}deg)`;
       minute.style.transform=`rotate(${mrotation}deg)`;
 
 },1000);//in 1000 milliseconds 
//   let count=0;     
// myFunction(Value)
// {
//     var a=prompt();
//     if(a==Value)
//     {
//         count++;
//     }
// }
//  getElementById("1").addEventListener("click",myFunction(hTime));
//  getElementById("2").addEventListener("click",myFunction(mTime));
//  getElementById("3").addEventListener("click",myFunction(sTime));

//  if(count==2)
//  {
//      alert("Your Time "+"hTime:"+"mTime");
//  }