const navbar = document.getElementById('nav-bar');
navbar.innerHTML = `
<div class="nav-wrapper md:container md:mx-auto" style="background-color: transparent;">
  <nav class="navbar container-padding">
    <img v-if="!showMenu" @click="navigateHome()" src="/assets/logo-white.png" alt="Company Logo" style="cursor: pointer;">
    <div class="menu-toggle" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()">
      <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
      <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
      <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
    </div>
    <ul class="sm-font-size bodyFont nav no-search" :class="showMenu ? 'mobile-nav' : ''" style="line-height: 1.2;">
      <div v-if="showMenu" class="navbar container-padding">
        <img @click="navigateHome()" src="/assets/logo-black.png" alt="Company Logo" style="cursor: pointer;">
        <div class="menu-toggle" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()">
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
        </div>
      </div>
      <li class="nav-item"><a href="/">Home</a></li>
      <li class="nav-item"><a href="/property-management.html">Property Management</a></li>
      <li class="nav-item"><a href="/tenant-placement.html">Tenant Placement</a></li>
      <li class="nav-item"><a href="/tenant-rental-application.html">Tenant Rental Application</a></li>
      <li class="nav-item"><a href="/faq.html">FAQ</a></li>
      <li class="nav-item"><a href="/contact.html">Contact Us</a></li>
      <li class="nav-item"><a href="/properties.html">Properties</a></li>
    </ul>
  </nav>
  </div>
`;