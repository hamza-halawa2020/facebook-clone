// import{signUp} from "./signup.js";


// Apply custom Bootstrap validation styles and prevent form submissions with invalid fields
(function bootStrape ()  {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
          }

          form.classList.add('was-validated');
      }, false);
  });
})();


//sign-up
var formData = JSON.parse(localStorage.getItem('formData')) || [];

var mySignUp = document.getElementById('signUp');

mySignUp.addEventListener('click', signUp);

function signUp() {
  let emailOrPhoneValue = document.getElementById('emailOrPhone').value.toLowerCase();
  var exist = formData.some(data => data.emailOrPhone.toLowerCase() === emailOrPhoneValue);

  if (!exist) {
         
      formData.push({
          fName: document.getElementById('fName').value,
          lName: document.getElementById('lName').value,
          emailOrPhone: emailOrPhoneValue,
          pass: document.getElementById('pass').value,
          day: document.getElementById('day').value,
          month: document.getElementById('month').value,
          year: document.getElementById('year').value,
          female: document.getElementById('female').checked,
          male: document.getElementById('male').checked,
          custom: document.getElementById('custom').checked
      });
      localStorage.setItem('formData', JSON.stringify(formData));
  } else {
      console.log('User with this email/phone already exists.');
  }
}



//login
var firstLogIn = document.getElementById('firstLogIn');
var secondLogIn = document.getElementById('secondLogIn');
var logInBtn = document.getElementById('logInBtn');
var bigContainer = document.querySelector('.bigContainnnnnner');
var loginAndSignupContainer = document.querySelector('.loginAndSignupContiannnnnnnner');

var showBigContainer = localStorage.getItem('showBigContainer') === 'true';

if (showBigContainer) {
    bigContainer.style.display = 'block';
    loginAndSignupContainer.style.display = 'none';
} else {
    bigContainer.style.display = 'none';
    loginAndSignupContainer.style.display = 'block';
}

logInBtn.addEventListener('click', logIn);

function logIn(e) {
    e.preventDefault();
    
    let emailOrPhoneValue = firstLogIn.value.toLowerCase();
    let passValue = secondLogIn.value;

    if (emailOrPhoneValue === '' || passValue === '') {
        console.log('Input fields are empty.');

            var wongPAss22 = document.createElement("div");
            wongPAss22.textContent = 'Input fields are empty.';
            wongPAss22.style.color = "red";
            var hamza = document.getElementById("wrong1")
            wrong1.appendChild(wongPAss22)
            console.log('Wrong email/phone or password.');
    } else {
        let user = formData.find(data => data.emailOrPhone === emailOrPhoneValue && data.pass === passValue);

        if (!user) {
            var wongPAss = document.createElement("div");
            wongPAss.textContent = 'Wrong email/phone or password.';
            wongPAss.style.color = "red";
            wrong1.appendChild(wongPAss)
            console.log('Wrong email/phone or password.');
        } else {
            console.log('Welcome!');
            localStorage.setItem('showBigContainer', 'true');
            
            bigContainer.style.display = 'block';
            loginAndSignupContainer.style.display = 'none';
        }
    }
}



var fullNameFromLocalStorage = formData[0].fName + ' ' + formData[0].lName;



const logOut = document.getElementById("logOut");
function logOutMe (){
    window.localStorage.removeItem('showBigContainer');
}

document.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        addComment();
    }
});

function addComment(){
    var commentValue = document.getElementsByClassName("commentValue")[0].value;
    var comments = JSON.parse(localStorage.getItem("comments")) || [];

    comments.push(commentValue);

    localStorage.setItem("comments", JSON.stringify(comments));

    var commentDiv = document.createElement("div");

    commentDiv.innerHTML = `
    <div class="d-flex flex-row align-items-center">
    <img class="btn" src="python.png" width="50">
    <div class="border rounded p-2">
        <div style="cursor: pointer;">${fullNameFromLocalStorage}</div>
        <div>${commentValue}</div>
    </div>
    <div>
        <i class="fa-solid fa-ellipsis fa-xl p-2 btn"></i>
    </div>
</div>
<div class="d-flex flex-row align-items-center">
    <div class="ps-3">Like</div>
    <div class="ps-3">Reply</div>
    <div class="ps-3">Share</div>
    <div class="ps-3">12m</div>
</div>
    `;

    var commentsContainer = document.getElementById("commentsContainer");
    commentsContainer.appendChild(commentDiv);
    document.querySelector(".commentValue").value = '';

}




function addPost() {
    var postText = document.getElementById("postText").value;
        var postContainer = document.getElementById("postsContainer");

        var posts = JSON.parse(localStorage.getItem("posts")) || [];

        var newPost = {
            text: postText,
            timestamp: new Date().toLocaleString() 
        };

        
        posts.push(newPost);

        localStorage.setItem("posts", JSON.stringify(posts));
        
        var postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = `
            
        
        <div class="d-flex flex-row">
                <div class="flex-fill">
                    <div class="d-flex flex-row">
                        <img src="python.png" width="35px">
                        <div>
                        <div class="h6">${fullNameFromLocalStorage}</div>
                        <span>${newPost.timestamp}</span>
                            <span>
                                <i class="fa-solid fa-earth-americas fa-2xs"></i>
                            </span>
                        </div>
                    </div>
                    <div class="m-2">
                    ${newPost.text}
                    </div class="hello">
                    <div class="d-flex flex-row">

                    </div>
                    <hr>
                    <div class="d-flex flex-row justify-content-around">
                        <div class="btn">
                            <i class="fa-regular fa-thumbs-up"></i>
                            Like</div>
                        <div class="btn">
                            <i class="fa-regular fa-message"></i>
                            Comment</div>
                        <div class="btn">
                            <i class="fa-solid fa-share"></i>
                            Share</div>
                    </div>
                    <div class="d-flex flex-row">
                        <img src="python.png" width="35">
                        <div class="border rounded d-flex flex-row flex-fill align-items-center">
                            <input 
                                class="commentValue border-0 btn rounded flex-fill"
                                type="text"
                                placeholder="write a comment...">
                            <i onclick="addComment()" class="fa-brands fa-github p-1"></i>
                            <i class="fa-regular fa-face-smile p-1"></i>
                            <i class="fa-solid fa-camera p-1"></i>
                            <i class="fa-solid fa-gift p-1"></i>
                            <i class="fa-solid fa-poo p-1"></i>
        
                        </div>
                    </div>
                    <div id="commentsContainer" class=" container border rounded mb-5"></div>
        
                </div>
                <div class="nav-item dropdown">
                    <a class="nav-link" data-bs-toggle="dropdown" href="#">
                        <i class="fa-solid fa-ellipsis fa-xl p-2"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <!-- Dropdown menu items here -->
                    </ul>
                </div>
                <div class="hellodddd btn btn-close p-2"></div>
            </div>

            `
        ;

        postContainer.appendChild(postDiv);
        document.getElementById("postText").value = '';
    }


fetch("./test.json")
    .then((res) => res.json())
    .then((data) => {
        const contianerChat = document.getElementById("contianerChat");

        data.forEach((items) => {
            const chatEntry = document.createElement("div");
            chatEntry.classList.add("chatEntry");
            
            const profilePicture = document.createElement("img");
            profilePicture.src = items.profilePicture;
            profilePicture.width = 40;
            chatEntry.appendChild(profilePicture);

            const fullName = document.createElement("h5");
            fullName.textContent = items.fullName;
            chatEntry.appendChild(fullName);

            contianerChat.appendChild(chatEntry);



    
            const allPostsInMainPage = document.querySelector(".allPostsInMainPage");
            const hello = document.querySelector(".hello");
            

            const imagePost = document.createElement("img");
            imagePost.src = items.image;
            imagePost.width = 250;

            const postaa = document.createElement("p");
            postaa.textContent = items.Post;
           

            allPostsInMainPage.innerHTML = `
            
            <div class="d-flex flex-row">
                <div class="flex-fill">
                    <div class="d-flex flex-row">
                        <img src="python.png" width="35px">
                        <div>
                            <div class="">paython furniture</div>
                            <span class="">Sponserd</span>
                            <span>
                                <i class="fa-solid fa-earth-americas fa-2xs"></i>
                            </span>
                        </div>
                    </div>
                    <div class="m-2">${postaa.textContent}
                    </div class="hello">
                    <img alt="" class="" src="json-images/post/3.jpg" width="100%">

                    <div class="d-flex flex-row">
                        <div class="flex-fill">
                            <i class="fa-solid fa-heart fa-sm"></i>
                            <i class="fa-solid fa-thumbs-up fa-sm"></i>
                            <i class="fa-solid fa-face-laugh-squint fa-sm"></i>
                            200k
                        </div>
                        <div class="me-3">2500k comments
                        </div>
                        <div>
                            60k shares</div>
                    </div>
                    <hr>
                    <div class="d-flex flex-row justify-content-around">
                        <div class="btn">
                            <i class="fa-regular fa-thumbs-up"></i>
                            Like</div>
                        <div class="btn">
                            <i class="fa-regular fa-message"></i>
                            Comment</div>
                        <div class="btn">
                            <i class="fa-solid fa-share"></i>
                            Share</div>
                    </div>
                    <div class="d-flex flex-row">
                        <img src="python.png" width="35">
                        <div class="border rounded d-flex flex-row flex-fill align-items-center">
                            <input
                                class="border-0 btn rounded flex-fill"
                                type="text"
                                placeholder="write a comment...">
                            <i class="fa-brands fa-github p-1"></i>
                            <i class="fa-regular fa-face-smile p-1"></i>
                            <i class="fa-solid fa-camera p-1"></i>
                            <i class="fa-solid fa-gift p-1"></i>
                            <i class="fa-solid fa-poo p-1"></i>
        
                        </div>
                    </div>
                    <p class="btn">View more comments</p>
                    <div class="d-flex flex-row align-items-center">
                        <img class="btn" src="python.png" width="50">
                        <div class="border rounded p-2">
                            <div style="cursor: pointer;">ahmed ali</div>
                            <div>how much</div>
                        </div>
                        <div>
                            <i class="fa-solid fa-ellipsis fa-xl p-2 btn"></i>
                        </div>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                        <div class="ps-3">Like</div>
                        <div class="ps-3">Reply</div>
                        <div class="ps-3">Share</div>
                        <div class="ps-3">12m</div>
                    </div>
        
                </div>
                <div class="nav-item dropdown">
                    <a class="nav-link" data-bs-toggle="dropdown" href="#">
                        <i class="fa-solid fa-ellipsis fa-xl p-2"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <!-- Dropdown menu items here -->
                    </ul>
                </div>
                <div class="btn btn-close p-2"></div>
            </div>

            `;
            


            
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });




let age = [20,25,30,35]

function calc(...x){
    let sum = 0;
    for(let i = 0; i < x.length; i++)
    sum += x[i]
}

calc(...age)