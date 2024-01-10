function setInformation() {
    return [
        { label: 'ADDRESS', value: '123 Fake Street, Province, Philippines' },
        { label: 'PHONE NUMBER', value: '09123456789' },
        { label: 'EMAIL ADDRESS', value: 'contact@gmail.com' }
    ];
}

function schedule(){
    return[
        {day: 'Monday', sched: '7am - 9pm'},
        {day: 'Tuesday', sched: '7am - 9pm'},
        {day: 'Wednesday', sched: '7am - 9pm'},
        {day: 'Thursday', sched: '7am - 9pm'},
        {day: 'Friday', sched: '7am - 10pm'},
        {day: 'Saturday', sched: '7am - 10pm'},
        {day: 'Sunday', sched: '7am - 10pm'},
    ]
}

function informationContainer(){
    const information = document.createElement('ul')
    information.classList.add('information');

    let informationList = setInformation();
    informationList.forEach(info => {
        const li = document.createElement('li');

        const infoName = document.createElement('div');
        infoName.classList.add('info-name');
        infoName.textContent = info.label + ":";

        const infoDetails = document.createElement('div');
        infoDetails.classList.add('info-details')
        infoDetails.textContent = info.value;

        li.appendChild(infoName);
        li.appendChild(infoDetails);

        information.appendChild(li);
    });

    const li = document.createElement('li');

    const infoName = document.createElement('div');
    infoName.classList.add('info-name');
    infoName.textContent = "FOLLOW US:";

    const infoSocialMedia = document.createElement('div');
    infoSocialMedia.classList.add('info-socialmedia')
    
    const infoSocialMediaBg1 = document.createElement('div')
    infoSocialMediaBg1.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 14.5H15.5L16.5 10.5H13V8.5C13 7.47 13 6.5 15 6.5H16.5V3.14C16.174 3.097 14.943 3 13.643 3C10.928 3 9 4.657 9 7.7V10.5H6V14.5H9V23H13V14.5Z" fill="black"/></svg>'

    const infoSocialMediaBg2 = document.createElement('div')
    infoSocialMediaBg2.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 9C11.2054 9 10.4423 9.31607 9.87968 9.87868C9.31707 10.4413 9.001 11.2044 9.001 12C9.001 12.7956 9.31707 13.5587 9.87968 14.1213C10.4423 14.6839 11.2054 15 12.001 15C12.7966 15 13.5597 14.6839 14.1223 14.1213C14.6849 13.5587 15.001 12.7956 15.001 12C15.001 11.2044 14.6849 10.4413 14.1223 9.87868C13.5597 9.31607 12.7966 9 12.001 9ZM12.001 7C13.3271 7 14.5989 7.52678 15.5365 8.46447C16.4742 9.40215 17.001 10.6739 17.001 12C17.001 13.3261 16.4742 14.5979 15.5365 15.5355C14.5989 16.4732 13.3271 17 12.001 17C10.6749 17 9.40315 16.4732 8.46547 15.5355C7.52778 14.5979 7.001 13.3261 7.001 12C7.001 10.6739 7.52778 9.40215 8.46547 8.46447C9.40315 7.52678 10.6749 7 12.001 7ZM18.501 6.75C18.501 7.08152 18.3693 7.39946 18.1349 7.63388C17.9005 7.8683 17.5825 8 17.251 8C16.9195 8 16.6015 7.8683 16.3671 7.63388C16.1327 7.39946 16.001 7.08152 16.001 6.75C16.001 6.41848 16.1327 6.10054 16.3671 5.86612C16.6015 5.6317 16.9195 5.5 17.251 5.5C17.5825 5.5 17.9005 5.6317 18.1349 5.86612C18.3693 6.10054 18.501 6.41848 18.501 6.75ZM12.001 4C9.527 4 9.123 4.007 7.972 4.058C7.188 4.095 6.662 4.2 6.174 4.39C5.76562 4.53994 5.39641 4.78026 5.094 5.093C4.78101 5.3954 4.54035 5.76458 4.39 6.173C4.2 6.663 4.095 7.188 4.059 7.971C4.007 9.075 4 9.461 4 12C4 14.475 4.007 14.878 4.058 16.029C4.095 16.812 4.2 17.339 4.389 17.826C4.559 18.261 4.759 18.574 5.091 18.906C5.428 19.242 5.741 19.443 6.171 19.609C6.665 19.8 7.191 19.906 7.971 19.942C9.075 19.994 9.461 20 12 20C14.475 20 14.878 19.993 16.029 19.942C16.811 19.905 17.337 19.8 17.826 19.611C18.234 19.4603 18.6031 19.2201 18.906 18.908C19.243 18.572 19.444 18.259 19.61 17.828C19.8 17.336 19.906 16.81 19.942 16.028C19.994 14.925 20 14.538 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.799 6.661 19.61 6.173C19.4593 5.76502 19.219 5.39598 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.926 4.006 14.54 4 12 4M12 2C14.717 2 15.056 2.01 16.123 2.06C17.187 2.11 17.913 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2246 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.877 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16943 19.8222 2.77596 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.012 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.813 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.087 2.277 6.812 2.11 7.877 2.06C8.945 2.013 9.284 2 12.001 2" fill="black"/></svg>'

    const infoSocialMediaBg3 = document.createElement('div')
    infoSocialMediaBg3.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5963 5.82C16.9127 5.03962 16.536 4.03743 16.5363 3H13.4462V15.4C13.4224 16.071 13.1391 16.7066 12.656 17.1729C12.1729 17.6393 11.5277 17.8999 10.8562 17.9C9.43625 17.9 8.25625 16.74 8.25625 15.3C8.25625 13.58 9.91625 12.29 11.6263 12.82V9.66C8.17625 9.2 5.15625 11.88 5.15625 15.3C5.15625 18.63 7.91625 21 10.8463 21C13.9863 21 16.5363 18.45 16.5363 15.3V9.01C17.7892 9.90985 19.2936 10.3926 20.8363 10.39V7.3C20.8363 7.3 18.9563 7.39 17.5963 5.82Z" fill="black"/></svg>  '

    const infoSocialMediaBg4 = document.createElement('div')
    infoSocialMediaBg4.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 8.5C18.667 5.5 16.333 4 13 4C8 4 5 6.5 5 13C5 19.5 8.5 22 13 22C17.5 22 20 19 20 17C20 15 19 12 13 12C10.5 12 10 13.25 10 14.5C10 16 11 17 12.5 17C15 17 16 15.5 16 12C16 8.5 14 8 13 8C12 8 11.167 8.333 10.5 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'

    infoSocialMediaBg1.classList.add('info-socialmedia-bg')
    infoSocialMediaBg2.classList.add('info-socialmedia-bg')
    infoSocialMediaBg3.classList.add('info-socialmedia-bg')
    infoSocialMediaBg4.classList.add('info-socialmedia-bg')

    infoSocialMedia.appendChild(infoSocialMediaBg1);
    infoSocialMedia.appendChild(infoSocialMediaBg2);
    infoSocialMedia.appendChild(infoSocialMediaBg3);
    infoSocialMedia.appendChild(infoSocialMediaBg4);

    li.appendChild(infoName);
    li.appendChild(infoSocialMedia);

    information.appendChild(li);

    return information;
}


function bookInputContainer(){
    const form = document.createElement('form');
    form.action = '#home';
    form.classList.add('book-box');

    const div1 = document.createElement('div');

    const firstName = document.createElement('input');
    firstName.placeholder = 'First Name'

    const secondName = document.createElement('input');
    secondName.placeholder = 'Last Name'

    div1.appendChild(firstName)
    div1.appendChild(secondName);

    const div2 = document.createElement('div')
    const email = document.createElement('input')
    email.placeholder = 'Email Address'
    email.type = 'email'
    div2.appendChild(email)

    const div3 = document.createElement('div');
    const date = document.createElement('input');
    date.type = 'datetime-local'
    div3.appendChild(date)

    const bookButtonContainer = document.createElement('div')
    const button = document.createElement('button')
    button.textContent = 'BOOK A TABLE'
    bookButtonContainer.appendChild(button)

    form.appendChild(div1)
    form.appendChild(div2)
    form.appendChild(div3)
    form.appendChild(bookButtonContainer)
    
    return form;
}

function scheduleContainer(){
    const sched = document.createElement('div')
    sched.setAttribute('id', 'sched')

    const scheduleHours = document.createElement('div')
    scheduleHours.textContent = 'Schedule Hours'

    const schedDate = document.createElement('ul');
    schedDate.classList.add('sched-date')

    let schedList = schedule();
    schedList.forEach(list =>{
        const li = document.createElement('li')
        li.textContent = list.day + ' ' + list.sched;
        schedDate.appendChild(li);
    })

    sched.appendChild(scheduleHours);
    sched.appendChild(schedDate)

    return sched;
}

export function contactContainer(){
    const contactContainer  = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-container')

    const contactBg = document.createElement('div');
    contactBg.setAttribute('id', 'contact-bg');

    const contactText = document.createElement('div');
    contactText.classList.add('contact-text')
    contactText.classList.add('hidden');
    contactText.textContent = 'Contact Us'

    const contactWhole = document.createElement("div")
    contactWhole.classList.add('contact-whole');

    const contactLeft = document.createElement('div')
    contactLeft.classList.add('contact-left')
    contactLeft.classList.add('fadeOut');

    const contactRight = document.createElement('div')
    contactRight.classList.add('contact-right')
    contactRight.classList.add('fadeOut');
    

    contactLeft.appendChild(informationContainer())
    contactLeft.appendChild(bookInputContainer())
    contactRight.appendChild(scheduleContainer());
    contactWhole.appendChild(contactLeft);
    contactWhole.appendChild(contactRight)
    contactContainer.appendChild(contactBg)
    contactContainer.appendChild(contactText)
    contactContainer.appendChild(contactWhole)

    return contactContainer;
}



