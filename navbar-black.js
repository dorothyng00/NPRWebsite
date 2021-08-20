const navbar = document.getElementById('nav-bar');
navbar.innerHTML = `
<div class="nav-wrapper md:container md:mx-auto" style="background-color: transparent;">
  <nav class="navbar container-padding">
    <img @click="navigateHome()" src="assets/logo-black.png" alt="Company Logo" style="cursor: pointer; z-index: 100;">
    <div class="menu-toggle" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()" style="z-index: 100;">
      <span class="bar" style="background-color: #000;"></span>
      <span class="bar" style="background-color: #000;"></span>
      <span class="bar" style="background-color: #000;"></span>
    </div>
    <ul class="sm-font-size bodyFont nav no-search" :class="showMenu ? 'mobile-nav' : ''" style="line-height: 1.2;">
      <li class="nav-item-black"><a href="/NPRWebsite" :style="[currentTab == 'home' ? {'color':'var(--darkorange)'} : {'':''}]">Home</a></li>
      <li class="nav-item-black"><a href="/NPRWebsite/property-management" :style="[currentTab == 'property-management' ? {'color':'var(--darkorange)'} : {'':''}]">Property Management</a></li>
      <li class="nav-item-black"><a href="/NPRWebsite/tenant-placement" :style="[currentTab == 'tenant-placement' ? {'color':'var(--darkorange)'} : {'':''}]">Tenant Placement</a></li>
      <li class="nav-item-black"><a href="/NPRWebsite/tenant-rental-application" :style="[currentTab == 'tenant-rental-application' ? {'color':'var(--darkorange)'} : {'':''}]">Tenant Rental Application</a></li>
      <li class="nav-item-black"><a href="/NPRWebsite/faq" :style="[currentTab == 'faq' ? {'color':'var(--darkorange)'} : {'':''}]">FAQ</a></li>
      <li class="nav-item-black"><a href="/NPRWebsite/contact" :style="[currentTab == 'contact' ? {'color':'var(--darkorange)'} : {'':''}]">Contact Us</a></li>
      <li class="nav-item-black"><a href="/NPRWebsite/properties" :style="[currentTab == 'properties' ? {'color':'var(--darkorange)'} : {'':''}]">Properties</a></li>
    </ul>
  </nav>
  </div>
`;