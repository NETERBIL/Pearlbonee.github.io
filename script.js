 // script.js
 function startWebsite() {
  var startPage = document.getElementById('start-page');
  var normalPage = document.getElementById('normal-page');
  var nameInput = document.getElementById('name-input');
  var passwordInput = document.getElementById('password-input');
  var userNameDisplay = document.getElementById('user-name-display');
  var passwordDisplay = document.getElementById('password-display');

  var username = nameInput.value;
  var password = passwordInput.value;

  if (username.trim() === '' || password.trim() === '') {
    alert('Please enter both username and password!');
    return;
  }

  if (username.toLowerCase() === 'sarwar' && password === '1234567890') {
    window.location.href = 'save-details.html'; // Redirect to "save-details.html" for admin.
    return;
  }

  userNameDisplay.textContent = '' + username;
  passwordDisplay.textContent = '' + password;

  startPage.style.display = 'none';
  normalPage.style.display = 'block';
}
// Get the password input and show password checkbox
const passwordInput = document.getElementById('password-input');
const showPasswordCheckbox = document.getElementById('show-password');

// Add a change event listener to the checkbox
showPasswordCheckbox.addEventListener('change', function () {
  // If the checkbox is checked, show the password; otherwise, hide it
  if (this.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

function handleItemClick(itemId) {
  var menuItems = document.querySelectorAll('.sidebar ul li');
  menuItems.forEach(function (item) {
    item.classList.remove('active');
  });

  var selectedItem = document.getElementById(itemId);
  selectedItem.classList.add('active');

  var sectionTitle = document.getElementById('section-title');
  var contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(function (section) {
    section.style.display = 'none';
  });

  switch (itemId) {
    
   
      case 'user':
        sectionTitle.textContent = 'USER';
        document.getElementById('user-section').style.display = 'block';
        document.getElementById('user-name').textContent = nameInput.value; // Set the user name
        break;
    case 'product':
      sectionTitle.textContent = 'PRODUCTS';
      document.getElementById('product-section').style.display = 'block';
      break;
     
      
        case 'order-cart':
          sectionTitle.textContent = 'Order Cart';
          document.getElementById('order-cart-section').style.display = 'block'; // Show the Order Cart section
          document.getElementById('order-cart-message').style.display = 'block'; // Show the message container
          // ... (handle any additional logic for Order Cart here)
          break;
      case 'contact':
        sectionTitle.textContent = 'CONTACT';
        document.getElementById('contact-section').style.display = 'block';
        break;
        
      }
  }










let submissionCount = 0; // Initialize a submission count variable

// ... Your existing code ...

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  submissionCount++; // Increment the submission count

  // Get other form data
  const formData = new FormData(this);
  const userName = formData.get('user-name');
  const familyName = formData.get('family-name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const address = formData.get('address');
  const note = formData.get('note');
  const imageFile = document.getElementById('image').files[0];

  // Create a new container div for each submission
  const submissionContainer = document.createElement('div');
  submissionContainer.classList.add('submission-container');

  // Display the submission count
  const submissionCountElement = document.createElement('strong');
  submissionCountElement.textContent = `داواکاری ${submissionCount}`;
  submissionContainer.appendChild(submissionCountElement);

  // Create a div to display the submission details
  const submissionDetails = document.createElement('div');
  submissionDetails.innerHTML = `
    <strong>ناوی بەکارهێنەر:</strong> ${userName ? userName : 'Your User Name'}<br>
    <strong>ناوی خێزان:</strong> ${familyName ? familyName : 'Your Family Name'}<br>
    <strong>ئیمەیڵ:</strong> ${email ? email : 'Your Email'}<br>
    <strong>ژمارەی تەلەفۆن:</strong> ${phone ? phone : 'Your Phone Number'}<br>
    <strong>ناونیشان:</strong> ${address ? address : 'Your Address'}<br>
    <strong>تێبینی:</strong> ${note ? note : 'Your Note'}<br>
    ${imageFile ? `<img src="${URL.createObjectURL(imageFile)}" alt="وێنەکەت">` : ''}
  `;

  // Append the submission details to the container
  submissionContainer.appendChild(submissionDetails);

  // Append the container to the confirmation message
  const orderCartSection = document.getElementById('order-cart-section');
  const orderCartMessage = document.getElementById('order-cart-message');
  orderCartSection.appendChild(submissionContainer);

  // Save the submission details to local storage
  saveSubmissionToLocalStorage({
    userName,
    familyName,
    email,
    phone,
    address,
    note,
    imageUrl: imageFile ? URL.createObjectURL(imageFile) : null,
  });

  // Display the confirmation message in the Order Cart section
  orderCartMessage.style.display = 'block';

  // Clear the form fields
  this.reset();
});

// Function to save submission details to local storage
function saveSubmissionToLocalStorage(submission) {
  const savedSubmissions = JSON.parse(localStorage.getItem('savedSubmissions')) || [];
  savedSubmissions.push(submission);
  localStorage.setItem('savedSubmissions', JSON.stringify(savedSubmissions));
}








 





// Add a click event listener to each submission container
const submissionContainers = document.querySelectorAll('.submission-container');

submissionContainers.forEach((container, index) => {
  const details = container.querySelector('.submission-details');
  const header = container.querySelector('strong');

  // Toggle the active class to show/hide details
  header.addEventListener('click', () => {
    container.classList.toggle('active');
    if (container.classList.contains('active')) {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  });
});











