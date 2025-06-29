(function initialize(){
    const dashboardProjectsItems = document.querySelector("#dashboardProjectsItems");
    for (let i = 0 ; i<=5 ; i++){
        let dashboardProjectsItem = document.createElement("div"); //container
        //title
        let dashboardProjectsItemTitle = document.createElement("p");
        dashboardProjectsItemTitle.textContent = "Project Title";
        dashboardProjectsItemTitle.classList = "dashboardProjectsItemTitle"
        dashboardProjectsItem.appendChild(dashboardProjectsItemTitle); // title
        //content
        let dashboardProjectsItemContent =  document.createElement("p");
        dashboardProjectsItemContent.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum placeat sint ipsum, animi quibusdam quia quam cupiditate reprehenderit ipsam voluptates officiis quaerat? Veritatis, nihil consequatur! Nemo, odit at! Autem, consequuntur?";
        dashboardProjectsItemContent.classList = "dashboardProjectsItemContent";
        dashboardProjectsItem.appendChild(dashboardProjectsItemContent); // lorem
        //option container
        let dashboardProjectsItemOptions = document.createElement("div"); // container for buttons
        dashboardProjectsItemOptions.classList = "dashboardProjectsItemOptions";
        //option 1
        let dashboardProjectsItemOption1Button = document.createElement("a"); // a element
        let dashboardProjectsItemOption1Img =  document.createElement("img");
        dashboardProjectsItemOption1Img.src = "./svg/like-right-svgrepo-com.svg"
        dashboardProjectsItemOption1Button.appendChild(dashboardProjectsItemOption1Img);
        dashboardProjectsItemOptions.appendChild(dashboardProjectsItemOption1Button);

        //option 2
        let dashboardProjectsItemOption2Button = document.createElement("a"); // a element
        let dashboardProjectsItemOption2Img =  document.createElement("img");
        dashboardProjectsItemOption2Img.src = "./svg/eye-svgrepo-com.svg"
        dashboardProjectsItemOption2Button.appendChild(dashboardProjectsItemOption2Img);  
        dashboardProjectsItemOptions.appendChild(dashboardProjectsItemOption2Button);
        //option 3
        let dashboardProjectsItemOption3Button = document.createElement("a"); // a element
        let dashboardProjectsItemOption3Img =  document.createElement("img");
        dashboardProjectsItemOption3Img.src = "./svg/share-nodes-svgrepo-com.svg"
        dashboardProjectsItemOption3Button.appendChild(dashboardProjectsItemOption3Img);
        dashboardProjectsItemOptions.appendChild(dashboardProjectsItemOption3Button);
        //append
        dashboardProjectsItem.appendChild(dashboardProjectsItemOptions);

        dashboardProjectsItems.appendChild(dashboardProjectsItem);
    }


})();