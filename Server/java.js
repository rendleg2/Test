fetch('https://student.share.johnlearnings.com/Rosmini/Year_11/') // replace with the website you want to scrape
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(data, 'text/html');
        let elements = doc.getElementsByClassName('fb-n');
        let div = document.getElementById('scroll'); // replace with your div's id
        for(let i = 0; i < elements.length; i++) {
            if(elements[i].tagName.toLowerCase() === 'a') {
                div.appendChild(elements[i]);
            }
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
