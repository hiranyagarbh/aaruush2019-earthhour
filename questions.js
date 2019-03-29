var quizObj = [
                    { 
                        "question": "Which household appliance uses the most energy?",
                        "choice": ["Refrigerator", "Dishwasher", "Washing machine"],
                        "correct": ["Refrigerator"]
                   },
                   { 
                        "question": "What country has the greatest number of coal powered generators?",
                        "choice": ["Canada", "U.S.A.", "China"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["China"]
                   },
                    { 
                        "question": "“Phantom carriers” is a term used for electronic devices that:",
                        "choice": ["Move from room to room", "Continue to consume electricity even when switched off", "Are energy efficient"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["Continue to consume electricity even when switched off"]
                   },
                    { 
                        "question": "What percentage do heating costs rise by for every degree above 20°C that you set your household thermostat in the winter?",
                        "choice": ["2%", "4%", "5%"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["5%"]
                   },
                    { 
                        "question": "Your residential water heater uses _________ of your home’s energy and produces approximately two tonnes of carbon dioxide annually.",
                        "choice": ["5%", "10%", "15%"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["15%"]
                   },
                    { 
                        "question": "Recycling 1,000 kg of aluminium saves enough energy to heat a/an ____ for 10 years.",
                        "choice": ["Typical home", "Elementary school", "Restaurant"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["Typical home"]
                   },
                    { 
                        "question": "What household appliance uses the second most amount of energy ?",
                        "choice": ["Hair dryer", "Microwave", "Computer"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["Hair dryer"]
                   },
                    { 
                        "question": "What is the most energy efficient cycle to wash and rinse your clothes on?",
                        "choice": ["Cold-cold", "Warm-warm", "Warm-cold"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["Cold-cold"]
                   },
                    { 
                        "question": "The average Canadian home is illuminated by ___ light bulbs:",
                        "choice": ["31", "41", "51"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["41"]
                   },//10
                    {
                        "question": "Which energy source produces the greatest amount of atmospheric carbon dioxide?",
                        "choice": ["Nuclear", "Oil", "Coal"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["Coal"]
                   },//11
                    { 
                        "question": "What type of sector uses the greatest amount of electricity?",
                        "choice": ["Commercial", "Residential", "Residential"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["Commercial"]
                   },//12
                    { 
                        "question": "An elephant's trunk can hold ____ gallons of water.",
                        "choice": ["1.5", "2", "2.5"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["2.5"]
                   },//13
                    { 
                        "question": "It takes glass ____ years to decompose, which means it can be recycled an infinite amount of times.",
                        "choice": ["1 million", "Five thousand", "10 million"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["1 million"]
                   },
                    { 
                        "question": "___% of the Earth is covered in water.",
                        "choice": ["71", "63", "69"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["71"]
                   },
                    { 
                        "question": "How can you tell the age of a tree?",
                        "choice": ["The number of leaves", "The annual rings", "The bark furrows"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["The annual rings"]
                   },
                    { 
                        "question": "Paper products make up approximately __% of our trash.",
                        "choice": ["60", "40", "20"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["40"]
                   },
                    { 
                        "question": "A male moose is called a 'bull' and a female moose is called a '___'.",
                        "choice": ["Cow", "Yak", "Ox"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["Cow"]
                   },
                    { 
                        "question": "The world's highest waterfall is ____.",
                        "choice": ["Victoria Falls in Zimbabwe", "Niagara Falls in Canada", "Angel Falls in Venezuela"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["Angel Falls in Venezuela"]
                   },
                    { 
                        "question": "Which of the following animal migrates from Canada to Mexico and back?",
                        "choice": ["Monarch butterfly", "Humpback whale", "Bears"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["Monarch butterfly"]
                   },
                    { 
                        "question": "Which of the following animals are extinct?",
                        "choice": ["Manatee", "Emu", "Rhinoceros"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["Emu"]
                   },
                    { 
                        "question": "The World Water Day is on ____.",
                        "choice": ["November 16", "March 22", "December 12"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["March 22"]
                   },
                    { 
                        "question": "If the entire Arctic sheet is melted, the sea level would rise by ____.",
                        "choice": ["67 m", "42 m", "21 m"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["67 m"]
                   },
                    { 
                        "question": "Which of the following issues are examples of human rights?",
                        "choice": ["Slavery", "Refugees", "All of the above"],  //quizObj[2].choice[0],quizObj[2].choice[1]
                        "correct": ["All of the above"]
                   },

                ];

                  var track = [];

                    var maxQues = 5;
                    var rand = Math.floor(Math.random() * maxQues);

                    var str='<h4></h4>';

                    for(var i=0;i<maxQues;i++){

                        var rand = Math.floor(Math.random() * maxQues);
                        str+='<label>'+(i+1)+'.  '+quizObj[rand].question+'</label><br/>';
                       str+=
                        '<input id="a1" type="radio" name="radio' + i + '" />'+'&nbsp;'+quizObj[rand].choice[0]+
                        '<input id="a2" type="radio" name="radio' + i + '" />'+'&nbsp;'+quizObj[rand].choice[1]+
                        '<input id="a3" type="radio" name="radio' + i + '"/>'+'&nbsp;'+quizObj[rand].choice[2]+'<br />';
                    track[i]=rand;
                    }
                    // str += '<input value="Submit" type="button" onclick="scoreMe()"><br><br>';
                    // str += 'Score: <input id="score" type="text" size="8" ><br><br><br>';
                    document.getElementById('quesRes').innerHTML = str;
/*
                  function scoreMe(){
                    var sum=0;
                    for(var j=0;j<maxQues;j++){
                      for(var k=0;k<3;k++){
                        if(quizObj[track[j]].choice[k].checked===quizObj[track[j]].correct[0]){
                          console.log('Works'+j);
                          sum++;
                        }
                      }
                    }
                    document.getElementById('score').value = ((sum/maxQues)*100)+'%';
                  }
*/