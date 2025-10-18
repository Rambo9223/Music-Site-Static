// array to hold our page & form info
let likes = [];
let bookingInfo = [];
let subcribers = [];
let userComments = [];

/* The page has functionality for the user to like items from the gallery
the clearLikes function is called when the user click the clear item button 
in the gallery page,
This function will remove the items from the liked list by clearing 
the local storage variable & local array likes*/
function clearLikes(){
    //confirm user wants to remove items 
    let check = confirm("Are you sure you want to clear liked items");
    if(check===true){// if true 
        localStorage.clear("userLikes");// clear local storage 
        localStorage.clear("hasRun");
        likes=[];
    }
    // run startup to clear checkboxes & reset labels
    startUp();
}

/* The Gallery page function is called on load of the body of the 
gallery page.*/
function galleryPage(){
    startUp();// startup runs in order to initalise session storage
    likedItems();// likeItems allows the user to like the page elements    
}

/*startUp is called on body load of the saved page or gallery page,
its job is to set the local storgae variable on the first run through
then in subsequent runs reload the stored values to the liked gallery 
items*/
function startUp(){
    // array of all like checkboxes
    let likeElements = document.getElementsByClassName("like");
    
    if(localStorage.getItem("hasRun") === null){// on first run
        // loop through array 
        for(let i =0;i<likeElements.length;i++){
            // initialise values
            likes[i] = false;
            likeElements[i].checked = false;
            likeElements[i].previousElementSibling.innerHTML = "Like";
        }
        // set local storage 
        localStorage.setItem("userLikes", JSON.stringify(likes));
        
        localStorage.setItem("hasRun",true);// on subsequent runthroughs we now use stored values
    }else{
        // stored likes array
        likes = JSON.parse(localStorage.getItem("userLikes"));
        for(let i =0;i<likeElements.length;i++){
            // recall saved values based on local storage array
            likeElements[i].checked = likes[i];
            let label = likeElements[i].previousElementSibling;
            likes[i]===true?label.innerHTML= "Liked":label.innerHTML="Like";
        }
}
}


/* The next 3 functions - bookingForm, subscribed & userFeedback
are all object constructors that we use to extract and layout the 
data inputted to the respective html forms */
function bookingForm(name,date,start,end,email,phoneNo,otherInfo){
    this.name = name;
    this.date = date;
    this.start = start;
    this.end = end;
    this.email = email;
    this.phoneNo = phoneNo;
    this.otherInfo = otherInfo;
}

function subscribed(name,age,email,newReleases,shows){
    this.name = name;
    this.age = age;
    this.email = email;
    this.newReleases = newReleases;
    this.shows = shows;
}

function userFeedback(name,feedback){
    this.name = name;
    this.feedback = feedback;
}


/* Submit booking is called when the user submits the booking form on the 
calendar-booking-page
it is a means for the user to contact me for any booking enquiries */
function submitBooking(){
    // when called we create a new object using the constructor 
    let newBooking = new bookingForm(
        // the parameters are now equal to the user inputs in each section of the form
        document.getElementById("booking-name").value,
        document.getElementById("booking-date").value,
        document.getElementById("start-time").value,
        document.getElementById("end-time").value,
        document.getElementById("booking-email").value,
        document.getElementById("booking-phone-number").value,
        document.getElementById("booking-info").value,
    );
    /* In order to process a booking we need a minimum of name, date & email
    the below if statement to ensure those values have been submitted in the form */
    if((newBooking.name.length >0 && newBooking.name)&&(newBooking.date)&&(newBooking.email.length>0 && newBooking.email)){// if true we alert to the user the booking is sucessful
        alert
    (`Thank you for submitting your booking!
Your enquiry has been recieved and someone will be in touch with you shortly.`);

    bookingInfo.push(newBooking);// push the new booking object to the bookingInfo array
    localStorage.setItem("booking",JSON.stringify(bookingInfo));// set the array to local storage
    console.log(bookingInfo);
    }else{// if the user has not inputted the minumum required info
        // we reject the booking and don't push the enquiry to the array
        alert
    (`Your booking enquiry has been rejected!
Please make sure you enter the required details marked(*)!`)
    }
    // finally we reset the booking form values
    document.getElementById("booking-form").reset("");
}
/* We utilise the same logic as above to retrieve the data submitted in the 
subscriber form and below in the feedback form */
function subscriber(){

    let subcriber = new subscribed(
        document.getElementById("subscribe-name").value,
        document.getElementById("subscribe-age").value,
        document.getElementById("subscribe-email").value,
        document.getElementById("subscribe-release").checked,
        document.getElementById("subscribe-show").checked,
    )
    // minimum data required is name & email 
    if((subcriber.name.length>0)&&(subcriber.name)&&(subcriber.email.length>0)&&(subcriber.email)){
    alert(`Thank you for subscribing!`)
    
    subcribers.push(subcriber);
    localStorage.setItem("subscribed",JSON.stringify(subcribers));
    console.log(subcribers);}
    else{
        alert("Please enter your name & email!")
    }
    document.getElementById("sub-form").reset("");
}

function feedback(){
    let newFB = new userFeedback(
        document.getElementById("feedback-name").value,
        document.getElementById("user-feedback").value,
    )
    if(newFB.name && newFB.feedback){
        alert("Thank you for your feedback");
        userComments.push(newFB);
        localStorage.setItem("comments",JSON.stringify(userComments));
        console.log(userComments);
    }
    document.getElementById("feedback-form").reset("");
}


/* The liked items function allows the user to like an item on the gallery 
page, when the gallery page is loaded we call this function to arm elements*/
function likedItems(){
    
    let likeElements = document.getElementsByClassName("like");
    // the html collection of checkbox type input elements
    
    // for each item in the collection we run the below loop
    for(let i = 0; i < likeElements.length; i++){

        //using index number at i we can target an individual html element in the collection
        let likeItem = document.getElementsByClassName("like")[i];

        // we arm each with an onclick event function
        likeItem.onclick = function(e){


            let likeLabel = likeItem.previousElementSibling ;// the html label preceeding the checkbox

            /* if unchecked*/
            if(likeItem.ariaChecked === null || likes[i] === false){
            likeItem.ariaChecked = true;//we change the checked property to true
            likeLabel.innerHTML = "Liked";//change the inner html to read liked
            likes[i] = true ;
            }else{// if checked
                // should the user uncheck the like box
                // we revert the box and label to it's initial values
                likeLabel.innerHTML = "Like" ; 
                likeItem.ariaChecked = false ; 
                likes[i] = false ;

            }
            // we set local stoage to reflect the changes made
            localStorage.setItem("userLikes", JSON.stringify(likes));
        }
    }
}


