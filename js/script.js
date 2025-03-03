window.addEventListener('load', () => {
    const userLoggedIn = localStorage.getItem('userLoggedIn');
    console.log('User logged in:', userLoggedIn); // Check the value of userLoggedIn

    const appointmentsNavItem = document.getElementById('appointments-nav-item');
    const patientNavItem = document.getElementById('patient-nav-item');
    const doctorNavItem = document.getElementById('doctor-nav-item');
    const loginNavItem = document.getElementById('login-nav-item');
    const logoutNavItem = document.getElementById('logout-nav-item');

    if (userLoggedIn) {
        // Show Appointments and Logout links, hide Login link
        appointmentsNavItem.style.display = 'inline';
        patientNavItem.style.display = 'inline';
        doctorNavItem.style.display = 'none';
        loginNavItem.style.display = 'none';
        logoutNavItem.style.display = 'inline';

    } else {
        // Hide Appointments and Logout links, show Login link
        appointmentsNavItem.style.display = 'none';
        patientNavItem.style.display = 'none';
        doctorNavItem.style.display = 'inline';
        loginNavItem.style.display = 'inline';
        logoutNavItem.style.display = 'none';
    }
});


// Event listener for logout
document.getElementById("logout-link").addEventListener("click", function(event) {
    event.preventDefault();
    
    // Remove user login status from localStorage
    localStorage.removeItem("userLoggedIn");

    // Hide logout link and show login link
    document.getElementById("login-nav-item").style.display = 'inline';
    document.getElementById("logout-nav-item").style.display = 'none';
    document.getElementById("appointments-nav-item").style.display = 'none'; // Hide Appointments link

    alert("Logout successful!");
    window.location.href = "index.html"; // Redirect to home page after logout
});
