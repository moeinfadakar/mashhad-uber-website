function notify(){
let notify = new Notification("سفر جدید", {
body : "راننده بدو که مسافر داری عشقم",
icon: "icon.png"
});


setTimeout(function(){notify.close()}, 10000);
}


function shownotification(){
if("notification" in window){
if(Notification.permission  === "granted"){
notify();



}
else if(Notification.permission === "denied"){}
}
else{
    alert("انوتیفیکشن در مرورگر شما پشتیبانی نمیشود")
}
}
