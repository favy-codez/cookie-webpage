const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

// set timeout is a method that allows the execution of code at a specific time
// settimeout(function,delay(time in m/s))
setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

// so we want the x button to be functional 
modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

// we want to trigger a fxn whenever a mouse enters an element
declineBtn.addEventListener('mouseenter', function(){
    // se we to access the classlist of modalchoice btns and toggle the css class we designed 
    // we now have the call the name of the div holding the buttons access the classlist add .toggle and the name of the styled css elements we want to toogle
    modalChoiceBtns.classList.toggle('modal-btns-reverse')
})

// so e stands for event which causes the eventlistener to trigger. in this case it is listening to the submit button
consentForm.addEventListener('submit', function(e){
    // e stands for event while preventDefault is a method that prevents default in this case we dont want our browser to refresh any
    // time we hit the submit button
    e.preventDefault()
    
    // so we want anytime the user is done filling the form. we want the data to return the in an object. we use -FormData(formElement) 
    //  the new is a constructor fxn
    
    const consentFormData = new FormData(consentForm)
    // we also have formData.get() is a method to see what our object holds. and (name properties)
    const fullName = consentFormData.get('fullName')
    
    // so we want anytime we hit the submit form we want this to display on the browser so we taget modal-text and set the inner-html to this
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    // so we want after the user must have seen the above text we want them to see this next after 1.5secs so we target the id
    // and set the innertext to it
    // const uploadText = document.getElementById('upload-text') and we change inner.html to inner text
    //     uploadText.innerHTML = `Making the sale...`
    // }, 1500) so this can be compressed to 2 lines of code =>
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)
    
    // so after the user have seen the above we want to display this
    setTimeout(function(){
        // so we are trying to insert the users fullname
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
    // we want to display it 1.5s after the previous text so we add 1.5 + 1/5 = 3secs
    // so we want when the user is done filling their data we want to enable the x button
    modalCloseBtn.disabled = false
    }, 3000)
  
}) 
