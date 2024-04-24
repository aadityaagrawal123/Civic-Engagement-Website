let reviews = [
    {
        "date": "11 August 2023",
        "title": "Improvement of the conditions of public parks",
        "name": "Rajeev Sharma",
        "idea": "The public parks of Ahmedabad are not having much facilities and some of them need care and repair, so the government should focus on them too."
    },
    {
        "date": "04 February 2024",
        "title": "More schools should be opened in the city",
        "name": "Shiv Prakash",
        "idea": "Since we all give priority to education, Ahmedabad should have more schools and that too with good quality and facilities. If the schools would give good quality education, the students will grow into responsible citizens."
    },
    {
        "date": "17 November 2023",
        "title": "Ahmedabad should have more pulic toilets",
        "name": "Arwind Yadav",
        "idea": "This is too a topic that should be thought about the government of Ahmedabad. More clean public toilets will help to give a better hygienic Ahmedabad!!!"
    },
    {
        "date": "24 March 2024",
        "title": "Govt should install water sprinkler on Traffic Signals during summers",
        "name": "Kaushal Kumar",
        "idea": "Isn't this an innvoative and fascinating idea people ? Cool water coming from the water sprinklers while waiting under red traffic light will also keep our mood refresh."
    },
    {
        "date": "29 December 2023",
        "title": "Ahmedabad should also become a Metro City fast",
        "name": "Mahesh Gupta",
        "idea": "Metro Trains are too important to be called a developed city... The government should finish the Metro Train Projects fast because people need Metro Trains in every part of the city."
    },
    {
        "date": "15 October 2023",
        "title": "Govt should advice the citizens to install Solar Panels on their roofs",
        "name": "Dipesh Prasad",
        "idea": "Generating electricity by ourselves in a sustainable & pollution-free manner will not only help in saving the electricity bills, but also from overuse of non-renewable resources!"
    }
]
var isMyIdea = false;
$(document).ready(function () {
    displayIdeas();
})

$(function () {
    $("#submit-btn").click(function () {
        submitIdea()
    })
} )

function submitIdea() {

    var name_input_value = $("#name_input").val();
    var title_input_value = $("#title_input").val();
    var idea_input_value = $("#review_input").val();
    
    if ((name_input_value == "" || name_input_value == null || name_input_value == " " ) ||
        (title_input_value == "" || title_input_value == null || title_input_value == " " ) ||
        (idea_input_value == "" || idea_input_value == null || idea_input_value == " " )
    ){
        alert("Please fill out all the fields");
    }
    else{
        // Getting the Date
        const d = new Date();
        const day = d.getDate();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[d.getMonth()];
        const year = d.getFullYear();

        const user_date = `${day} ${month} ${year}`
        const user_name = $("#name_input").val();
        const user_title = $("#title_input").val();
        const user_idea = $("#review_input").val();

        var review = {
            "date": user_date,
            "title": user_title,
            "name": user_name,
            "idea": user_idea
        };

        reviews.push(review);

        isMyIdea = true;

        $("#name_input").empty();
        $("#title_input").empty();
        $("#review_input").empty();
        
        displayIdeas();

        alert("Your idea submitted successfully!");

        $("#scroll_container").css("display","block"); 
        $("#review-container").css("margin-top",`${0.25}em`);       
        $("#user-idea-container").css("background",`#ADD8E6`); 

    }
}

function displayIdeas() {
    
    $("#name_input").empty();
    $("#title_input").empty();
    $("#review_input").empty();

    let copyArr = [...reviews];
    copyArr.splice((reviews.length-1), 1);

    // Displaying the review of the user
    const userIdea = reviews[reviews.length-1];
    if (isMyIdea){
        $(`#idea_given_by-1`).html(`-By ${userIdea.name} (You)`);
    }
    else{
        $(`#idea_given_by-1`).html(`-By ${userIdea.name}`);
    }
    $(`#idea_title-1`).html(userIdea.title);
    $(`#idea_date-1`).html(userIdea.date);
    $(`#idea_content-1`).html(userIdea.idea);

    // Getting some random reviews
    for (let i = 0; i < 5; i++) {
    var randNum =  Math.floor(Math.random()*(copyArr.length-1));
    const idea = copyArr[randNum];
    copyArr.splice(randNum, 1);

    $(`#idea_title-${i+2}`).html(idea.title)
    $(`#idea_given_by-${i+2}`).html(`-By ${idea.name}`)
    $(`#idea_date-${i+2}`).html(idea.date)
    $(`#idea_content-${i+2}`).html(idea.idea)
    }

}
