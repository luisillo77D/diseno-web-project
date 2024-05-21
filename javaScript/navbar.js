function updateNavbar() {
    const navSignin = document.getElementById("nav-signin");
    const navLogout = document.getElementById("nav-logout");
  
    if (!navSignin || !navLogout) {
      console.error("Navbar elements not found");
      return;
    }
  
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
    if (isAuthenticated) {
      navSignin.style.display = "none";
      navLogout.style.display = "inline";
    } else {
      navSignin.style.display = "inline";
      navLogout.style.display = "none";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    updateNavbar();
  });
  