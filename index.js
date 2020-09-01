//create a class to modal MCQ which takes in question, choice, answer and category as its parameter
class MCQ {
    constructor(question, choice, answer, category) {
        this.question = question;
        this.choice = choice;
        this.answer = answer;
        this.category = category;
        this.userAnswer = "";
    }
    //write a method to display question and choices format
    getQuestion() {
        console.log(this.question + "\n" + this.choice[0] + "\n" + this.choice[1] + "\n" + this.choice[2] + "\n" + this.choice[3]);
    }
}
class Quiz {
    constructor() {
        //create a class to modal Quiz which stores the MCQ from the category selected by the user in catQn array
        this.catQn = [];
        //create a class to modal Quiz which stores the MCQ in questionPool array
        this.questionPool = [];
        //create a variable quiz score and initialize it to zero
        this.score = 0;
        //chemistry qns
        this.questionPool.push(new MCQ("How do you collect carbon dioxide?", ["(1) Upward delivery.", "(2) Downward delivery.", "(3) Displacement of water.", "(4) Sublimation."], 1, 1));
        this.questionPool.push(new MCQ("What's the difference between evaporation and boiling?", ["(1) Boiling produces bubble, unlike evaporation.", "(2) Boiling occurs at a certian temperature known as boiling point, while evaporation occurs anytime.", "(3) Boiling occurs slowly while evaporation is rapid.", "(4) Boiling takes place only on liquid surface, but evaporation takes place throughout the liquid."], 1, 1));
        this.questionPool.push(new MCQ("What's the stage called from turning from a gas to a liquid?", ["(1) Condensation.", "(2) Boiling.", "(3) Melting.", "(4) Evaporation."], 0, 1));
        this.questionPool.push(new MCQ("What's the use of the polyester terylene?", ["(1) Sleeping bag.", "(2) Parachute.", "(3) Conveyor belt.", "(4) Fishing lines."], 2, 1));
        this.questionPool.push(new MCQ("What does an atomic structure consist of?", ["(1) Protons.", "(2) Electrons.", "(3) Neutrons.", "(4) All of the above."], 3, 1));
        //computing qns
        this.questionPool.push(new MCQ("What does RAM stand for?", ["(1) Readable Only Memory", "(2) Radio Access Media", "(3) Random Access Memory", "(4) None of the above"], 0, 2));
        this.questionPool.push(new MCQ("What are the factors affecting speed of program execution?", ["(1) Design of the instruction set.", "(2) Speed of electronic circuits in the processor.", "(3) Access times to the cache and main memory.", "(4) All of the above."], 3, 2));
        this.questionPool.push(new MCQ("What are the base units of the Octal and Hexadecimal system?", ["(1) Base 8 and Base 16 respectively.", "(2) Base 9 and Base 10 respectively.", "(3) Base 16 and Base 8 respectively.", "(4) Base 10 and Base 9 respectively."], 0, 2));
        this.questionPool.push(new MCQ("Why is data transferred in short bursts?", ["(1) Allows the sending computer to process data sent.", "(2) To prevent the computer from receiving data from other computers and perform other processing tasks.", "(3) To prevent other computers from transferring data between the short pauses.", "(4) If an error occurs during transmission, only the chunk of data involved in the error have to be sent again"], 3, 2));
        this.questionPool.push(new MCQ("What are the layers of the network commmunication process?", ["(1) User application > Network protocol > Network software > Network inteface", "(2) User application > Network software > Network protocol > Network interface", "(3) Network protocol > Network software > User application > Network inteface", "(4) None of the above."], 1, 2));
        //geography qns
        this.questionPool.push(new MCQ("Which of the following latitudes passes through India?", ["(1) Equator.", "(2) Tropic of Capricorn.", "(3) Arctic circle.", "(4) Tropic of Cancer."], 3, 3));
        this.questionPool.push(new MCQ("Which instrument is used to measure earthquakes?", ["(1) Richter scale.", "(2) Thermometre.", "(3) Hydrometer.", "(4) Barometer."], 0, 3));
        this.questionPool.push(new MCQ("Which instrument is used to measure precipitation level?", ["(1) Wind vanes.", "(2) Rain gauge.", "(3) Anemometer.", "(4) Compass."], 1, 3));
        this.questionPool.push(new MCQ("What is a positive outcome from the Green Revolution?", ["(1) Increased crop yield.", "(2) Enhanced food security.", "(3) Increased abundance in cheaper sources of calories eg. rice.", "(4) Expansion of organic agriculture."], 3, 3));
        this.questionPool.push(new MCQ("What is the cause of hunger worldwide in 2015?", ["(1) Political instabilty.", "(2) Overpopulation.", "(3) Crop failure.", "(4) Natural disasters."], 0, 3));
        //physics qns
        this.questionPool.push(new MCQ("What are electromagnets used in?", ["(1) Television sets.", "(2) Door stoppers.", "(3) Circuit breakers.", "(4) Radio sets."], 2, 4));
        this.questionPool.push(new MCQ("What is the term used to denote current flowing in one direction?", ["(1) Direct current.", "(2) Alternating current.", "(3) Electric current.", "(4) Single current."], 0, 4));
        this.questionPool.push(new MCQ("What is the precision of a vernier caliper?", ["(1) 0.1mm", "(2) 0.1cm", "(3) 0.001cm", "(4) 0.01mm"], 0, 4));
        this.questionPool.push(new MCQ("What are the components of an electric current?", ["(1) Battery.", "(2) Conductor.", "(3) Resistor.", "(4) All of the above."], 3, 4));
        this.questionPool.push(new MCQ("What is the formula to derive gravitational potential energy?", ["(1) mgh", "(2) ma", "(3) (v-u)/t", "(4) fd"], 0, 4));
    }
    //write a method to return the array position of the qn
    getQuestionAt(index) {
        return this.questionPool[index];
    }
}
var input = require("readline-sync");
//declare and create a new Quiz object called quiz
var quiz = new Quiz();
//main program
do {
    console.log("-= Welcome to Quiz Application =-")
    console.log();
    var name = input.question("Please enter your name: ");
    console.log();
    console.log("Hi " + name + ", please choose the quiz category you would like to attempt: \n(1) Chemistry\n(2) Computing\n(3) Geography\n(4) Physics");
    var category = input.questionInt(">> ");
    console.log();
    if (category == 1) {
        console.log("[Chemistry] category is chosen.");
        console.log();
        for (var i = 0; i < 5; i++) {
            quiz.catQn.push(quiz.questionPool[i]);
        }
    } else if (category == 2) {
        console.log("[Computing] category is chosen.");
        console.log();
        for (var i = 5; i < 10; i++) {
            quiz.catQn.push(quiz.questionPool[i]);
        }
    } else if (category == 3) {
        console.log("[Geography] category is chosen.");
        console.log();
        for (var i = 10; i < 15; i++) {
            quiz.catQn.push(quiz.questionPool[i]);
        }

    } else if (category == 4) {
        console.log("[Physics] category is chosen.");
        console.log();
        for (var i = 15; i < 20; i++) {
            quiz.catQn.push(quiz.questionPool[i]);
        }
    } else {
        console.log("Please enter a category numbered between 1 to 4 !");
        console.log();
    }
} while (category < 1 || category > 4);
for (var i = 0; i < 5; i++) {
    console.log("Question " + (i + 1) + ": ");
    quiz.catQn[i].getQuestion();
    option = input.questionInt("Your answer: ");
    console.log();
    do {
        if (option > 4 || option < 1) {
            console.log("Error! Please enter an option numbered between 1 to 4 only !");
            var option = input.questionInt("Your answer: ");
            console.log();
        }
    } while (option > 4 || option < 1)
    quiz.catQn[i].userAnswer = option;
}
//write a method to print out the summary screen
function answerSummary() {
    console.log("Here are your answers:\n");
    for (var i = 0; i < 5; i++) {
        console.log("Question-" + (i + 1) + ": " + quiz.catQn[i].question);
        console.log("Your Answer: " + quiz.catQn[i].choice[quiz.catQn[i].userAnswer - 1] + "\n");
    }
}
do {
    answerSummary(category);
    console.log("Enter 0 to submit or [1 to 5] to change your answer.");
    do {
        var edit = input.question(">> ");
        if (edit > 5 || edit < 0) {
            console.log("Please enter an option numbered between 0 to 5 only !");
        }
    } while (edit > 5 || edit < 0);
    if (edit == 0) {
        break;
    }
    else {
        quiz.catQn[edit - 1].getQuestion();
        option = input.questionInt(">> ");
        do {
            if (option > 4 || option < 1) {
                console.log("Error! Please enter from an option numbered between 1 to 4 only !");
                option = input.questionInt(">> ");
            }
        } while (option > 4 || option < 1)
        quiz.catQn[edit - 1].userAnswer = option;
    }
} while (edit != 0)
//write a method that counts and display the quiz score
console.log("\nHere are your results: ");
for (var i = 0; i < 5; i++) {
    if (quiz.catQn[i].answer == quiz.catQn[i].userAnswer - 1) {
        quiz.score++;
    }
}
console.log("Your final score is " + quiz.score + "/5 !");
console.log();
//extra feature: answer sheet
if (quiz.score < 5) {
    console.log("Here's your chance to learn from your mistakes !\nDo you wish to view the answer sheet?\nEnter '1' for 'Yes' and '2' for 'No'");
    var learn = input.questionInt(">> ");
    console.log();
    if (learn == 1) {
        console.log("Here's the Answer Sheet for this category:");
        for (let i = 0; i < 5; i++) {
            console.log("Question-" + (i + 1) + ": " + quiz.catQn[i].question + "\n" + "Correct Answer: " + quiz.catQn[i].choice[quiz.catQn[i].answer]);
            console.log();
        }
        console.log("Thank you for your time in taking this quiz! Hope you learnt from your mistakes, " + name + "!");
    }
    else if (learn == 2) {
        console.log("Thank you for your time in taking this quiz! Hope you learnt something new, " + name + "!");
    }
} else {
    console.log("Good job on that distinction! Thank you for your time in taking this quiz, " + name + "!");
}
console.log("\nThe most important attitude that can be found is the desire to go on learning. ~ John Dewey");