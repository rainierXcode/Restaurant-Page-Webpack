import mainPic from '../images/bg/mainPic.svg'

function titleContainer(){
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container')

    const mainTitle = document.createElement('div');
    mainTitle.classList.add('main-title');
    mainTitle.classList.add('hidden');

    const restoName1 = document.createElement('div');
    const restoName2 = document.createElement('div');

    restoName1.textContent = 'Hacienda';
    restoName2.textContent = 'Secreta';
    restoName1.classList.add('resto-name')
    restoName2.classList.add('resto-name')

    const description1 = document.createElement('div');
    description1.classList.add('description1')
    
    const line1 = document.createElement('div');
    line1.classList.add('line');

    const foodRestaurantFamily = document.createElement('div')
    foodRestaurantFamily.textContent = 'Food • Restaurant • Family'

    const line2 = document.createElement('div');
    line2.classList.add('line');

    const description2 = document.createElement('div');
    description2.classList.add('description2')
    description2.textContent = 'Unveiling Authentic Flavors, Hacienda Style!'

    const viewMore = document.createElement('a');
    viewMore.setAttribute('id', 'viewMore')
    viewMore.classList.add('viewMoreAnim');
    viewMore.textContent = 'View More'

    
    description1.appendChild(line1)
    description1.appendChild(foodRestaurantFamily)
    description1.appendChild(line2)
    mainTitle.appendChild(restoName1)
    mainTitle.appendChild(restoName2)
    mainTitle.appendChild(description1)
    mainTitle.appendChild(description2)


    titleContainer.appendChild(mainTitle)
    titleContainer.appendChild(viewMore);
    return titleContainer;
}

function mainPicContainer(){
    const mainPicContainer = document.createElement('div');
    mainPicContainer.setAttribute('id', 'mainpic-container')

    const mainPIc = document.createElement('img')
    mainPIc.src = mainPic;
    mainPIc.setAttribute('id', 'mainPic')
    mainPIc.classList.add('hidden')

    const bigCircle = document.createElement('div')
    bigCircle.setAttribute('id', 'bigCircle');

    const smallCircle = document.createElement('div')
    smallCircle.setAttribute('id', 'smallCircle')

    mainPicContainer.appendChild(mainPIc);
    mainPicContainer.appendChild(bigCircle);
    mainPicContainer.appendChild(smallCircle)
    return mainPicContainer;

}

export function homeContainer(){
const homeContainer = document.createElement('div');
homeContainer.classList.add('home-container');
homeContainer.setAttribute('id', 'home')

const homeBg = document.createElement('div');
homeBg.setAttribute('id', 'home-bg');

const mainShape = document.createElement('div')
mainShape.setAttribute('id', 'mainShape')
mainShape.classList.add('mainShapenot');

homeContainer.appendChild(homeBg);
homeContainer.appendChild(titleContainer());
homeContainer.appendChild(mainPicContainer())
homeContainer.appendChild(mainShape);

return homeContainer;
}


