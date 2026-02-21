const colorBoxs = document.querySelectorAll(".color-box");
const body = document.querySelector("body");

colorBoxs.forEach(function(box) {
    console.log(box);
    box.addEventListener("click", function(e) {
        switch (e.target.id) {
            case "red":
                body.style.backgroundColor = "#FF6B6B";
                break;
            
            case "green":
                body.style.backgroundColor = "#6BCB77";
                break;
            
            case "blue":
                body.style.backgroundColor = "#4D96FF";
                break;

            case "pink":
                body.style.backgroundColor = "#FF4DA6";
                break;

            case "purple":
                body.style.backgroundColor = "#845EC2";
                break;

            case "orange":
                body.style.backgroundColor = "#FF9671";
                break;
        }
    })
})