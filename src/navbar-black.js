const navbar = document.getElementById('nav-bar');
navbar.innerHTML = `
<div class="nav-wrapper md:container md:mx-auto" style="background-color: transparent;">
  <nav class="navbar container-padding">
    <img @click="navigateHome()" src="/assets/logo-black.png" alt="Company Logo" style="cursor: pointer; z-index: 100;">
    <div class="menu-toggle" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()" style="z-index: 100;">
      <span class="bar" style="background-color: #000;"></span>
      <span class="bar" style="background-color: #000;"></span>
      <span class="bar" style="background-color: #000;"></span>
    </div>
    <ul class="sm-font-size bodyFont nav no-search" :class="showMenu ? 'mobile-nav' : ''" style="line-height: 1.2;">
      <li class="nav-item-black"><a href="/src/">Home</a></li>
      <li class="nav-item-black"><a href="/src/property-management.html">Property Management</a></li>
      <li class="nav-item-black"><a href="/src/tenant-placement.html">Tenant Placement</a></li>
      <li class="nav-item-black"><a href="/src/tenant-rental-application.html">Tenant Rental Application</a></li>
      <li class="nav-item-black"><a href="/src/faq.html">FAQ</a></li>
      <li class="nav-item-black"><a href="/src/contact.html">Contact Us</a></li>
      <li class="nav-item-black"><a href="/src/properties.html">Properties</a></li>
    </ul>
  </nav>
  </div>
`;