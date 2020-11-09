$('document').ready(()=>{
    

    
    var getData = localStorage.getItem("readData");
    console.log(getData);
    var parsedData = JSON.parse(getData);
    console.log(parsedData.data);
    localStorage.removeItem("readData");
    $("newwindow").append(getData);
    let para = document.createElement('div');
    let titleHeading = document.createElement('h1');
    let contentDiv = document.createElement('p');
    let breakLine = document.createElement('br');
    let authorHeading = document.createElement('h4');
    let image = document.createElement('img');
    titleHeading.innerText = parsedData.title;
    authorHeading.innerText = "Written By : " + parsedData.author;
    contentDiv.innerHTML = parsedData.Content;
    let postedTime = document.createElement('p');
    postedTime.innerText="Posted on :" + parsedData.timestamp;
    let verticalSpace = document.createElement('hr');
    // image.className="rounded mx-auto d-block";
    image.src = parsedData.imageurl;
    para.append(titleHeading);
    para.append(breakLine);
    para.append(authorHeading);
    para.append(postedTime);
    para.append(verticalSpace);
    para.append(breakLine);
    para.append(image);
    para.append(contentDiv);
    para.append(breakLine);
    $("#newwindow").append(para);
    

})