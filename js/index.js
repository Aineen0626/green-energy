// Save your contents in JS object
let contents = {
    c1: {
        title: 'Energy Access for Economic Development',
        bodyText: 'Broadening our understanding of “energy access”. Beyond mere household connections, energy access should encompass livelihoods, productivity, and economic development. UNDP’s Africa Minigrids Programme exemplifies this philosophy. The programme not only focuses on household electrification but also on strategically enhancing the work of entrepreneurs and companies, and key economic sectors such as education, health, and commerce. By committing to providing clean energy for an additional 500 million people by 2025, UNDP aims to empower livelihoods and stimulate economic growth.',
        url: 'https://cdn.pixabay.com/photo/2024/02/24/10/48/solar-panels-8593759_1280.png'
    },
    c2: {
        title: 'Prioritizing Clean and Renewable Energy Access',
        bodyText: 'Ensuring that new energy access – especially to reach the last mile – is clean, and whenever possible, renewable. Energy access can directly contribute to a just energy transition. All of the Nationally Determined Contributions supported through UNDP’s Climate Promise include energy-related targets or policies. In the context of Africa, the region’s carbon emissions, which are less than three percent of global energy-related emissions, presents an opportunity to embark on a new paradigm of development, one that prioritizes energy access and unlocks the continent’s renewable energy potential, while safeguarding the climate. This approach not only mitigates environmental impact but also promotes sustainable development.',
        url: 'https://cdn.pixabay.com/photo/2022/11/16/09/26/wind-7595553_1280.png'
    },
    c3: {
        title: 'Empowering a Diverse Generation of Leaders for Future',
        bodyText: 'Bringing different actors into the solution space. This means supporting the next generation of leaders and innovators to ensure that they are equipped with the skills to address the complex challenges. We also need to be gender responsive and ensure that women are part of the process at every level. Experiences supported by UNDP in Peru and Yemen have shown the development benefits of engaging women as agents of change through their training as clean energy technicians. Projects in Malawi, Nepal and India have shown that energy access can be a game-changer for women.',
        url: 'https://cdn.pixabay.com/photo/2022/08/26/17/27/environment-7412967_1280.jpg'
    }
};


// event target object

let controls = document.querySelector('.controls');
let btns = controls.children;

// make the access to the HTML conatiner that holds a 
let dc = document.getElementById('dynamic-content');


function detectButton(ev) {
    let currentButton = ev.target;

    for (let btn of btns) {
        // IF ID-ATTRIBUTE EXISTS in the currently accessed button
        if (btn.hasAttribute('class')) {
            // remove it
            btn.removeAttribute('class');
        }
    }
    // add the attribute id="active" to the currently clicked element
    currentButton.setAttribute('class' , 'active-button');

       dc.innerHTML = `
            <h2>${contents[currentButton.id].title}</h2> 
            <p>${contents[currentButton.id].bodyText}</p>
            <img src="${contents[currentButton.id].url}" alt="${contents[currentButton.id].title}">
            `;
}

document.addEventListener('DOMContentLoaded', (event) => {
    dc.innerHTML = `
            <h2>${contents.c1.title}</h2> 
            <p>${contents.c1.bodyText}</p>
            <img src="${contents.c1.url}" alt="${contents.c1.title}">
            `;
}); 


// registering all buttons for click event - detect button listens
btns[0].addEventListener('click' , detectButton);
btns[1].addEventListener('click' , detectButton);
btns[2].addEventListener('click' , detectButton);