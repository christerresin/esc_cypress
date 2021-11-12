const challengesList = document.querySelector('.challenges-list');

// Use case!
const renderRatingStars = function (num) {
    let challengeRatingStar = document.createElement('li');
    challengeRatingStar.classList.add('challenge-rating-star on');

}

const renderChallenges = function (arr) {

    

    if (arr === undefined || arr.length < 1) {
        let noChallenges = document.createElement('h3');
        // create new className in CSS and change code to add created className
        noChallenges.classList.add('challenge-title');
        noChallenges.innerHTML = "No matching challenges";

        challengesList.appendChild(noChallenges);

    } else {

        arr.map(obj => {
            // Create elements for challenge card
            let challengesItem = document.createElement('li');
            challengesItem.classList.add('challenges-item');

            let challengesPicture = new Image();
            challengesPicture.classList.add('challenge-picture');
            challengesPicture.src=obj.image;

            let challengeTitle = document.createElement('h3');
            challengeTitle.classList.add('challenge-title');
            challengeTitle.innerHTML = obj.title;

            let challengeMeta = document.createElement('div');
            challengeMeta.classList.add('challenge-meta');

            let challengeRating = document.createElement('ul');
            challengeRating.classList.add('challenge-rating');

            // Create elements for rating stars
            for (let i = 0; i < 5; i++) {
                let challengeRatingStar = document.createElement('li');
                challengeRatingStar.classList.add('challenge-rating-star');
                challengeRatingStar.classList.add('on');
                challengeRating.appendChild(challengeRatingStar);
            }

            let challengeSize = document.createElement('small');
            challengeSize.classList.add('challenge-size');
            challengeSize.innerHTML = `${obj.minParticipants}-${obj.maxParticipants} participants`;

            let challengeDescription = document.createElement('p');
            challengeDescription.classList.add('challenge-description');
            challengeDescription.innerHTML = obj.description

            let challengeCta = document.createElement('a');
            challengeCta.classList.add('challenge-cta');
            challengeCta.innerHTML = "Book the room";

            // Render/append on site
            challengesList.appendChild(challengesItem);
            challengesItem.appendChild(challengesPicture);
            challengesItem.appendChild(challengeTitle);
            challengesItem.appendChild(challengeMeta)
            challengeMeta.appendChild(challengeRating);
            challengeMeta.appendChild(challengeSize);
            challengesItem.appendChild(challengeDescription);
            challengesItem.appendChild(challengeCta);
                        
        });
    };
};


let filters = {
    byOnline: false,
    byOnsite: false,
    byLabel: false,
    byRating: false,
    byChar: false
}

let filterArray = function (array) {

    let filteredArray = array
    
    if (filters.byOnline) {
        filteredArray = filteredArray.filter(obj => {
            return obj.type === 'online'
        })
    }

     else if (filters.byLabel) {
        filteredArray = filteredArray.filter(obj => {
            for(let i = 0; i < labels.length; i++) {
                return obj.labels.includes(tags[i])

            }
        })
    }

    console.log(filteredArray)
    return filteredArray
}


let apiUrl = 'https://lernia-sjj-assignments.vercel.app/api/challenges'

let challengesData = async function () {
    const response = await fetch(apiUrl);
    const data = await response.json();

    renderChallenges(filterArray(data.challenges))
}

challengesData()