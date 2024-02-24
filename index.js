function generater() {
    let otp = Math.floor(1000+Math.random() * 999);

    let ans=document.querySelector('.otp')

    ans.innerText = otp;
}