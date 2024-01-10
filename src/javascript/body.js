
import {nav} from './nav.js'; 
import {homeContainer} from './home.js'; 
import { menuContainer} from './menu.js'
import {contactContainer} from './contact.js'



function additionalContainer(){
    const additionalContainer  = document.createElement('div')
    additionalContainer.classList.add('additional-container');

    const div = document.createElement('div')
    div.textContent = '"Where Every Dish Holds a Secret Story"'
    additionalContainer.appendChild(div);

    return additionalContainer
}

function footer(){
    const footer = document.createElement('footer');

    const credit = document.createElement('div')
    credit.classList.add('credit')
    
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')

    p1.textContent = 'Credit:'
    
    const a1 = document.createElement('a');
    a1.href = 'https://www.istockphoto.com/'
    a1.textContent = 'iStock';

    p2.appendChild(document.createTextNode('Images sourced from '));
    p2.appendChild(a1);
    p2.appendChild(document.createTextNode(' and Google'));


    const a2 = document.createElement('a');
    a2.href = 'https://iconify.design/'
    a2.textContent = 'Iconify';

    p3.appendChild(document.createTextNode('Icons from '));
    p3.appendChild(a2);


    const a3 = document.createElement('a');
    a3.href = 'https://github.com/rainierXcode'
    a3.textContent = 'rainierxcode';

    p4.appendChild(document.createTextNode('Developed by '));
    p4.appendChild(a3);

    credit.appendChild(p1);
    credit.appendChild(p2);
    credit.appendChild(p3)
    credit.appendChild(p4)

    footer.appendChild(credit);

    return footer;
}

export function body() {
     document.body.appendChild(nav());
     document.body.appendChild(homeContainer());
     document.body.appendChild(additionalContainer())
     document.body.appendChild(menuContainer());
     document.body.appendChild(contactContainer());
     document.body.appendChild(footer())
}
