function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
    var question16 = document.quiz.question16.value;
    var question17 = document.quiz.question17.value;
    var question18 = document.quiz.question18.value;
    var question19 = document.quiz.question19.value;
    var question20 = document.quiz.question20.value;
    var question21 = document.quiz.question21.value;
    var question22 = document.quiz.question22.value;
    var question23 = document.quiz.question23.value;
    var question24 = document.quiz.question24.value;
    var question25 = document.quiz.question25.value;
    var question26 = document.quiz.question26.value;
    var question27 = document.quiz.question27.value;
    var question28 = document.quiz.question28.value;
    var question29 = document.quiz.question29.value;
    var question30 = document.quiz.question30.value;
    var question31 = document.quiz.question31.value;
    var question32 = document.quiz.question32.value;
    var question33 = document.quiz.question33.value;
    var question34 = document.quiz.question34.value;
    var question35 = document.quiz.question35.value;
    var question36 = document.quiz.question36.value;
    var question37 = document.quiz.question37.value;
    var question38 = document.quiz.question38.value;
    var question39 = document.quiz.question39.value;
    var question40 = document.quiz.question40.value;
    var question41 = document.quiz.question41.value;
    var question42 = document.quiz.question42.value;
    var question43 = document.quiz.question43.value;
    var question44 = document.quiz.question44.value;
    var question45 = document.quiz.question45.value;
    var question46 = document.quiz.question46.value;
    var question47 = document.quiz.question47.value;
    var question48 = document.quiz.question48.value;
    var question49 = document.quiz.question49.value;
    var question50 = document.quiz.question50.value;



    var correct = 0;
    
        if (question1 == "Montgomery") {
            correct++;
    }
    
        if (question2 == "Juneau") {
            correct++;
    }
    
        if (question3 == "Phoenix") {
            correct++;
    }

        if (question4 == "Little Rock") {
            correct++;
    }

        if (question5 == "Sacramento") {
            correct++;
    }

        if (question6 == "Denver") {
            correct++;
    }

        if (question7 == "Hartford") {
            correct++;
    }

        if (question8 == "Dover") {
            correct++;
    }

        if (question9 == "Tallahassee") {
            correct++;
    }

        if (question10 == "Atlanta") {
            correct++;
    }
    
        if (question11 == "Honolulu") {
            correct++;
    }

        if (question12 == "Boise") {
            correct++;
    }

        if (question13 == "Springfield") {
            correct++;
    }

        if (question14 == "Indianapolis") {
            correct++;
    }

        if (question15 == "Des Moines") {
            correct++;
    }

        if (question16 == "Topeka") {
            correct++;
    }

        if (question17 == "Frankfort") {
            correct++;
    }
    
        if (question18 == "Baton Rouge") {
            correct++;
    }

        if (question19 == "Augusta") {
            correct++;
    }

        if (question20 == "Annapolis") {
            correct++;
    }

        if (question21 == "Boston") {
            correct++;
    }

        if (question22 == "Lansing") {
            correct++;
    }

        if (question23 == "Saint Paul") {
            correct++;
    }

        if (question24 == "Jackson") {
            correct++;
    }

        if (question25 == "Jefferson City") {
            correct++;
    }

        if (question26 == "Helena") {
            correct++;
    }

        if (question27 == "Lincoln") {
            correct++;
    }

        if (question28 == "Carson City") {
            correct++;
    }

        if (question29 == "Concord") {
            correct++;
    }

        if (question30 == "Trenton") {
            correct++;
    }

        if (question31 == "Santa Fe") {
            correct++;
    }

        if (question32 == "Albany") {
            correct++;
    }

        if (question33 == "Raleigh") {
            correct++;
    }

        if (question34 == "Bismarck") {
            correct++;
    }

        if (question35 == "Columbus") {
            correct++;
    }

        if (question36 == "Oklahoma City") {
            correct++;
    }

        if (question37 == "Salem") {
            correct++;
    }

        if (question38 == "Harrisburg") {
            correct++;
    }

        if (question39 == "Providence") {
            correct++;
    }

        if (question40 == "Columbia") {
            correct++;
    }

        if (question41 == "Pierre") {
            correct++;
    }

        if (question42 == "Nashville") {
            correct++;
    }

        if (question43 == "Austin") {
            correct++;
    }

        if (question44 == "Salt Lake City") {
            correct++;
    }

        if (question45 == "Montpelier") {
            correct++;
    }

        if (question46 == "Richmond") {
            correct++;
    }

        if (question47 == "Olympia") {
            correct++;
    }

        if (question48 == "Charleston") {
            correct++;
    }

        if (question49 == "Madison") {
            correct++;
    }

        if (question50 == "Cheyenne") {
            correct++;
        }


        var messages = ["Perfect score :D", "Ayeee, let's go!!","Congrats, you're average.", "Not bad...", "Are you even trying?", "Come on now..", "You have the intelligence of an infant."];
        var pictures = ["img/perfectscore.gif","img/verygood.gif","img/average.gif", "img/meh.gif","img/obama.gif", "img/fail.gif", "img/baby.gif"];
    
        var range;
            if (correct <= 0) {
                range = 6;
            }

            if (correct >=1  && correct <=9 ) {
                range = 5;
            }
            
            if (correct >=10  && correct <=19 ) {
                range = 4;
            }            
            
            if (correct >=20  && correct <=29 ) {
                range = 3;
            }

            if (correct >=30  && correct <=39 ) {
                range = 2;
            }
    
            if (correct >= 40 && correct <= 49) {
                range = 1;
            }

            if (correct == 50) {
                range = 0;
            }
    
        document.getElementById("after_submit").style.visibility = "visible";
    
    
        document.getElementById("message").innerHTML = messages[range];
        document.getElementById("number_correct").innerHTML = "You got " + correct + "/50 correct.";
        document.getElementById("picture").src = pictures[range];
    
    }
    
