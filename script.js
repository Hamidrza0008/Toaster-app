let toastBox = document.getElementById('toastBox');
let successMsg = `<i class="fa-solid fa-circle-check"></i>Successfully Submited`;
let erroMsg = `<i class="fa-solid fa-circle-xmark"></i>Please Fix The Error !!!`;
let invalidsMsg = `<i class="fa-solid fa-circle-exclamation"></i>Invalid Input !!!`;

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes(`Error`)){
        toast.classList.add("error");
    }
    if(msg.includes(`Invalid`)){
        toast.classList.add("invalid");
    }

    setTimeout(()=>{
        toast.remove();
    },5000);
}