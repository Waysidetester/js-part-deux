const printDom = (stringToPrint, divID) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += stringToPrint;
};

// const fancyObject = {

// };

// fancyObject.color = 'red';
// fancyObject['number'] = 10;

// // fancyObject = {
// //     color: 'red';
// //     number: 10;
// // }

let candidate = {
    congDistrict: 5,
    platform: [
        {
            category: 'taxes',
            stance: 'No'
        }, 
        {
            category: 'jobs',
            stance: 'Yes'
    }, 
        {
            category:'infrastructure',
            stance:'Needed'
    }, 
        {
            category: 'healthCare',
            stance: 'Expensive'
    }, 
        {
            category: 'crime',
            stance: 'For'
    }
    ],
    donationURL: '#',
    events: [
        {
            event:'meetup', 
        date: 'date here' 
        time: 'time here'
    },
        {
            event: 'date night', 
        date: 'date here', 
        time: 'time here'
    },
        {
            event: 'speech', 
        date: 'date here',
        time: 'time here'
    }, 
        {
            event: 'signing', 
        date: 'date here', 
        time: 'time here'
    }
],
    volunteers: [{name: 'info here', address: 'info here', email: 'info here', phoneNum: 'info here', availability: 'info here', activity: 'info here'}],
    bio: 'Biography Here',
    gallery: [{catagory: 'headshots', imgLink: 'link', descr: 'description here'}, 
             {catagory: 'family', imgLink: 'link', descr: 'description here'}, 
             {catagory: 'constituents', imgLink: 'link', descr: 'description here'}],
    regiURL: '#'
};