
// init Github
const github=new Github;

//init ui
const ui=new UI;

// search input
const searchUser= document.querySelector("#searchUser");

// search input event lsitener

searchUser.addEventListener("keyup",(e)=>{
    // get input text
    const userText=e.target.value;

    if(userText !==""){
        // make http call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message==="Not Found"){
                // show alert

            }else{
                // show profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)

            }
        })
    }else{
        // clear profile
        ui.clearProfile();
    }
})