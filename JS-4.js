function test()
{
    let v=prompt("Enter A Number")
    let v1=prompt("Enter A Number")
    let v2=prompt("Enter A Number")
    
    let max=v;
    if(max<v1)  max=v1;
    if(max<v2) max=v2;
    // document.write("<body bgcolor='Green'>");
    let ans=document.querySelector("h1");
    ans.innerHTML=max;
}