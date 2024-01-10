function navbarButton() {
    const navbarButton = document.createElement('ul');
    navbarButton.classList.add('navbar-button')

    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        navbarButton.appendChild(li);
    }

    return navbarButton;
}

function navbarClose() {
    const navbarClose = document.createElement('div');
    navbarClose.classList.add('navbar-close');
    navbarClose.innerHTML = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.29835 9.30149C9.64991 8.95036 10.1265 8.75314 10.6234 8.75314C11.1202 8.75314 11.5968 8.95036 11.9484 9.30149L19.9984 17.3515L28.0484 9.30149C28.2775 9.05468 28.569 8.87425 28.8922 8.77921C29.2153 8.68418 29.5581 8.67805 29.8844 8.76149C30.2107 8.84492 30.5084 9.01482 30.7463 9.25329C30.9841 9.49176 31.1533 9.78996 31.2358 10.1165C31.3194 10.4424 31.3136 10.7849 31.219 11.1078C31.1244 11.4307 30.9445 11.7221 30.6983 11.9515L22.6484 20.0015L30.6983 28.0515C30.9452 28.2807 31.1256 28.5722 31.2206 28.8953C31.3157 29.2184 31.3218 29.5612 31.2384 29.8875C31.1549 30.2138 30.985 30.5116 30.7466 30.7494C30.5081 30.9873 30.2099 31.1564 29.8834 31.239C29.5574 31.3225 29.215 31.3167 28.8921 31.2221C28.5692 31.1275 28.2777 30.9477 28.0484 30.7015L19.9984 22.6515L11.9484 30.7015C11.5927 31.0325 11.1226 31.2128 10.6368 31.2044C10.151 31.196 9.68736 30.9996 9.34335 30.6565C9.00024 30.3125 8.80385 29.8489 8.79546 29.3631C8.78707 28.8773 8.96733 28.4071 9.29835 28.0515L17.3484 20.0015L9.29835 11.9515C8.94722 11.5999 8.75 11.1234 8.75 10.6265C8.75 10.1296 8.94722 9.65305 9.29835 9.30149Z" fill="#9A8B8B"/></svg> '

    return navbarClose;
}

function navbar(){
    const navbar = document.createElement('ul');
    navbar.classList.add('navbar');

    let navbarLink = ['#home', '#menu', '#contact-container']
    let navbarName = ['Home', 'Menu', 'Contact']
    for(let i = 0; i < navbarLink.length; i++){
        const a = document.createElement('a');
        a.textContent = navbarName[i];
        a.setAttribute('href', navbarLink[i]);
        navbar.appendChild(a);
    }
    return navbar;
}

 export function nav() {
    const nav = document.createElement('nav');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML = '<svg width="50" height="50" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="250" cy="250" r="248.5" fill="#FFD700" stroke="#FFD700" stroke-width="3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M347.943 155.627C362.862 155.627 362.915 290.44 362.915 308.753C362.915 330.971 330.706 330.827 330.706 356.789C330.706 363.13 330.694 369.23 330.686 375.174C331.79 392.558 347.717 402.985 359.131 393.288C370.541 383.587 369.716 373.025 371.984 358.879C376.984 327.691 405.876 293.661 408.829 249.163C412.157 199.223 405.086 151.824 377.681 121.885C342.201 83.1235 311.589 103.298 254.26 87.2015C171.801 64.0509 76.442 118.204 99.6855 249.163C109.391 303.831 93.5493 354.425 132.828 382.063C170.77 408.747 181.995 372.042 182.116 364.591L182.43 345.602C182.43 340.364 180.319 337.691 167.651 327.585C121.74 290.943 144.726 153.918 193.973 153.918C243.216 153.914 266.202 290.943 220.287 327.585C207.619 337.691 205.512 340.364 205.512 345.611C205.613 351.838 205.617 351.909 205.814 364.291C206.016 376.673 209.505 403.774 229.243 406.603C230.895 406.839 237.757 408.211 239.437 408.38C245.69 408.38 248.603 409.533 254.26 411.116C263.559 413.724 269.578 411.774 280.972 416.983C292.37 422.197 308.156 406.358 308.152 392.203C308.144 378.053 308.091 369.319 308.091 356.789C308.091 330.827 275.883 330.971 275.883 308.753C275.883 290.44 275.932 155.627 290.851 155.627C292.572 155.627 295.307 158.392 295.307 163.766V246.993C295.283 258.969 295.682 268.117 303.232 268.117C310.787 268.117 310.183 251.789 310.183 246.681C310.183 245.325 313.607 165.877 313.688 164.623C314.111 158.072 315.211 153.918 319.397 153.918C323.579 153.914 325.32 158.072 325.739 164.623C325.819 165.877 328.615 245.325 328.615 246.681C328.615 251.789 328.011 268.117 335.561 268.117C343.116 268.117 343.511 258.969 343.487 246.993V163.766C343.487 158.392 346.222 155.627 347.943 155.627ZM72.6426 239.394C79.3792 239.918 82.2438 240.45 84.4397 232.163C86.6355 223.876 86.4582 208.704 79.2422 208.759C72.0343 208.818 61.865 214.644 64.3952 228.296C65.8618 236.215 65.9061 238.875 72.6426 239.394ZM85.6645 308.985C91.1883 307.702 91.6275 290.28 90.9909 281.795C90.3583 273.31 89.7701 244.093 76.2809 250.256C62.7957 256.419 63.8996 263.9 69.8586 276.248C73.3155 283.407 80.1407 310.277 85.6645 308.985ZM413.036 317.504C407.846 315.136 402.121 319.729 397.866 326.982C393.608 334.221 377.653 358.195 392.016 361.543C406.384 364.882 415.296 354.852 417.423 341.195C418.656 333.276 418.221 319.873 413.036 317.504Z" fill="white"/></svg>'

    const headerLeft = document.createElement('div')
    headerLeft.classList.add('header-left');

    headerLeft.appendChild(logo);
    headerLeft.appendChild(navbarButton())
    headerLeft.appendChild(navbarClose())

    nav.appendChild(headerLeft);
    nav.appendChild(navbar())

    return nav;
}


