

let groupObject = {};
let sideA = [];
let sideB = [];
let finalGroupList = [];
let shuffledGroups = [];
let groups = [];
let shuffledTeams = [];

let sideAGroupA = [];
let sideAGroupB = [];
let sideAGroupc = [];

let sideBGroupA = [];
let sideBGroupB = [];
let sideBGroupc = [];

let resultSideAGroupALevelOne = [];
let resultSideAGroupBLevelOne = [];
let resultSideAGroupCLevelOne = [];
let resultSideBGroupALevelOne = [];
let resultSideBGroupBLevelOne = [];
let resultSideBGroupCLevelOne = [];


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    loadTeams();
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}




function shuffle(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) { 
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function onLoad() {
    const teams = [
        {
          "teamId": 1610612737,
          "abbreviation": "ATL",
          "teamName": "Atlanta Hawks",
          "simpleName": "Hawks",
          "location": "Atlanta"
        },
        {
          "teamId": 1610612738,
          "abbreviation": "BOS",
          "teamName": "Boston Celtics",
          "simpleName": "Celtics",
          "location": "Boston"
        },
        {
          "teamId": 1610612751,
          "abbreviation": "BKN",
          "teamName": "Brooklyn Nets",
          "simpleName": "Nets",
          "location": "Brooklyn"
        },
        {
          "teamId": 1610612766,
          "abbreviation": "CHA",
          "teamName": "Charlotte Hornets",
          "simpleName": "Hornets",
          "location": "Charlotte"
        },
        {
          "teamId": 1610612741,
          "abbreviation": "CHI",
          "teamName": "Chicago Bulls",
          "simpleName": "Bulls",
          "location": "Chicago"
        },
        {
          "teamId": 1610612739,
          "abbreviation": "CLE",
          "teamName": "Cleveland Cavaliers",
          "simpleName": "Cavaliers",
          "location": "Cleveland"
        },
        {
          "teamId": 1610612742,
          "abbreviation": "DAL",
          "teamName": "Dallas Mavericks",
          "simpleName": "Mavericks",
          "location": "Dallas"
        },
        {
          "teamId": 1610612743,
          "abbreviation": "DEN",
          "teamName": "Denver Nuggets",
          "simpleName": "Nuggets",
          "location": "Denver"
        },
        {
          "teamId": 1610612765,
          "abbreviation": "DET",
          "teamName": "Detroit Pistons",
          "simpleName": "Pistons",
          "location": "Detroit"
        },
        {
          "teamId": 1610612744,
          "abbreviation": "GSW",
          "teamName": "Golden State Warriors",
          "simpleName": "Warriors",
          "location": "Golden State"
        },
        {
          "teamId": 1610612745,
          "abbreviation": "HOU",
          "teamName": "Houston Rockets",
          "simpleName": "Rockets",
          "location": "Houston"
        },
        {
          "teamId": 1610612754,
          "abbreviation": "IND",
          "teamName": "Indiana Pacers",
          "simpleName": "Pacers",
          "location": "Indiana"
        },
        {
          "teamId": 1610612746,
          "abbreviation": "LAC",
          "teamName": "Los Angeles Clippers",
          "simpleName": "Clippers",
          "location": "Los Angeles"
        },
        {
          "teamId": 1610612747,
          "abbreviation": "LAL",
          "teamName": "Los Angeles Lakers",
          "simpleName": "Lakers",
          "location": "Los Angeles"
        },
        {
          "teamId": 1610612763,
          "abbreviation": "MEM",
          "teamName": "Memphis Grizzlies",
          "simpleName": "Grizzlies",
          "location": "Memphis"
        },
        {
          "teamId": 1610612748,
          "abbreviation": "MIA",
          "teamName": "Miami Heat",
          "simpleName": "Heat",
          "location": "Miami"
        },
        {
          "teamId": 1610612749,
          "abbreviation": "MIL",
          "teamName": "Milwaukee Bucks",
          "simpleName": "Bucks",
          "location": "Milwaukee"
        },
        {
          "teamId": 1610612750,
          "abbreviation": "MIN",
          "teamName": "Minnesota Timberwolves",
          "simpleName": "Timberwolves",
          "location": "Minnesota"
        },
        {
          "teamId": 1610612740,
          "abbreviation": "NOP",
          "teamName": "New Orleans Pelicans",
          "simpleName": "Pelicans",
          "location": "New Orleans"
        },
        {
          "teamId": 1610612752,
          "abbreviation": "NYK",
          "teamName": "New York Knicks",
          "simpleName": "Knicks",
          "location": "New York"
        },
        {
          "teamId": 1610612760,
          "abbreviation": "OKC",
          "teamName": "Oklahoma City Thunder",
          "simpleName": "Thunder",
          "location": "Oklahoma City"
        },
        {
          "teamId": 1610612753,
          "abbreviation": "ORL",
          "teamName": "Orlando Magic",
          "simpleName": "Magic",
          "location": "Orlando"
        },
        {
          "teamId": 1610612755,
          "abbreviation": "PHI",
          "teamName": "Philadelphia 76ers",
          "simpleName": "76ers",
          "location": "Philadelphia"
        },
        {
          "teamId": 1610612756,
          "abbreviation": "PHX",
          "teamName": "Phoenix Suns",
          "simpleName": "Suns",
          "location": "Phoenix"
        },
        {
          "teamId": 1610612757,
          "abbreviation": "POR",
          "teamName": "Portland Trail Blazers",
          "simpleName": "Trail Blazers",
          "location": "Portland"
        },
        {
          "teamId": 1610612758,
          "abbreviation": "SAC",
          "teamName": "Sacramento Kings",
          "simpleName": "Kings",
          "location": "Sacramento"
        },
        {
          "teamId": 1610612759,
          "abbreviation": "SAS",
          "teamName": "San Antonio Spurs",
          "simpleName": "Spurs",
          "location": "San Antonio"
        },
        {
          "teamId": 1610612761,
          "abbreviation": "TOR",
          "teamName": "Toronto Raptors",
          "simpleName": "Raptors",
          "location": "Toronto"
        },
        {
          "teamId": 1610612762,
          "abbreviation": "UTA",
          "teamName": "Utah Jazz",
          "simpleName": "Jazz",
          "location": "Utah"
        },
        {
          "teamId": 1610612764,
          "abbreviation": "WAS",
          "teamName": "Washington Wizards",
          "simpleName": "Wizards",
          "location": "Washington"
        }
      ];
    shuffledTeams = shuffle(teams);
    groups = randChunkSplit(shuffledTeams, 5, 5);

    shuffledGroups = shuffle(groups);

    finalGroupList = assignGroupName(shuffledGroups);
    sideA = finalGroupList["side 0"];
    sideB = finalGroupList["side 1"];

    sideAGroupA = finalGroupList["side 0"][0];
    sideAGroupB = finalGroupList["side 0"][1];
    sideAGroupC = finalGroupList["side 0"][2];

    sideBGroupA = finalGroupList["side 1"][0];
    sideBGroupB = finalGroupList["side 1"][1];
    sideBGroupC = finalGroupList["side 1"][2];
}
  


document.getElementById("myButton").addEventListener('click', () => {
    loadTeams();
});

function loadTeams() {
  document.getElementById("sideAGroupA").innerText = null;
    document.getElementById("sideAGroupB").innerText = null;
    document.getElementById("sideAGroupC").innerText = null;
    document.getElementById("sideBGroupA").innerText = null;
    document.getElementById("sideBGroupB").innerText = null;
    document.getElementById("sideBGroupC").innerText = null;

    onLoad();
    for (let i = 0 ; i < sideAGroupA.length; i++) {
        document.getElementById("sideAGroupA").innerHTML += sideAGroupA[i].teamName + '<br>';
        document.getElementById("groupA").innerText = sideAGroupA[i].groupName;
    }

    for (let j = 0 ; j < sideAGroupB.length; j++) {
        document.getElementById("sideAGroupB").innerHTML += sideAGroupB[j].teamName + '<br>';
        document.getElementById("groupB").innerText = sideAGroupB[j].groupName;
    }

    for (let k = 0 ; k < sideAGroupC.length; k++) {
        document.getElementById("sideAGroupC").innerHTML += sideAGroupC[k].teamName + '<br>';
        document.getElementById("groupC").innerText = sideAGroupC[k].groupName;
    }
    for (let l = 0 ; l < sideBGroupA.length; l++) {
        document.getElementById("sideBGroupA").innerHTML += sideBGroupA[l].teamName + '<br>';
        document.getElementById("groupD").innerText = sideBGroupA[l].groupName;
    }

    for (let m = 0 ; m < sideBGroupB.length; m++) {
        document.getElementById("sideBGroupB").innerHTML += sideBGroupB[m].teamName + '<br>';
        document.getElementById("groupE").innerText = sideBGroupB[m].groupName;
    }

    for (let n = 0 ; n < sideBGroupC.length; n++) {
        document.getElementById("sideBGroupC").innerHTML += sideBGroupC[n].teamName + '<br>';
        document.getElementById("groupF").innerText = sideBGroupC[n].groupName;
    }
}


// console.log(finalGroupList);

function randChunkSplit(arr,min,max) {
    // uncomment this line if you don't want the original array to be affected
    // var arr = arr.slice();
    var arrs = [],size=1; 
    var min=min||1;
    var max=max||min||1;
    while (arr.length > 0) {
      size = Math.min(max,Math.floor((Math.random()*max)+min));
      arrs.push(arr.splice(0, size));
    }
    return arrs;
  }

function assignGroupName(groups) {
    let groupBy = {};
    let sides = [];
      if (groups) {
          groups.forEach((group, index) => {
            group.forEach((g) => {
                g.groupName = "group " + index;
            });
          });
      }

    sides = randChunkSplit(groups, 3, 3);

    sides.forEach((side, index) => {
        groupBy["side " + index] = side;
    });

    return groupBy;
}

const allOutLinedBtnPrimary = document.querySelectorAll(".btn-outline-primary");
const btnItems = [].slice.call(allOutLinedBtnPrimary);

btnItems.forEach((btn) => {
    btn.addEventListener('click', (el) => {
        if (el.currentTarget.id.toLowerCase().indexOf('groupa') > 0) {
            document.getElementById("sideAGroupA").innerText = null;
            const shuffledGroupASideA = shuffle(sideAGroupA);
            for (let i = 0 ; i < shuffledGroupASideA.length; i++) {
                document.getElementById("sideAGroupA").innerHTML += shuffledGroupASideA[i].teamName + '<br>';
                // document.getElementById("groupA").innerText = shuffledGroupASideA[i].groupName;
            }
        } else if (el.currentTarget.id.toLowerCase().indexOf('groupb') > 0) {
            document.getElementById("sideAGroupB").innerText = null;
            const shuffledGroupBSideA = shuffle(sideAGroupB);
            for (let i = 0 ; i < shuffledGroupBSideA.length; i++) {
                document.getElementById("sideAGroupB").innerHTML += shuffledGroupBSideA[i].teamName + '<br>';
                // document.getElementById("groupB").innerText = shuffledGroupBSideA[i].groupName;
            }
        } else if (el.currentTarget.id.toLowerCase().indexOf('groupc') > 0) {
            document.getElementById("sideAGroupC").innerText = null;
            const shuffledGroupCSideA = shuffle(sideAGroupC);
            for (let i = 0 ; i < shuffledGroupCSideA.length; i++) {
                document.getElementById("sideAGroupC").innerHTML += shuffledGroupCSideA[i].teamName + '<br>';
                // document.getElementById("groupC").innerText = shuffledGroupCSideA[i].groupName;
            }
        } else if (el.currentTarget.id.toLowerCase().indexOf('groupd') > 0) {
            document.getElementById("sideBGroupA").innerText = null;
            const shuffledGroupASideB = shuffle(sideAGroupC);
            for (let i = 0 ; i < shuffledGroupASideB.length; i++) {
                document.getElementById("sideBGroupA").innerHTML += shuffledGroupASideB[i].teamName + '<br>';
                // document.getElementById("groupD").innerText = shuffledGroupASideB[i].groupName;
            }
        } else if (el.currentTarget.id.toLowerCase().indexOf('groupe') > 0) {
            document.getElementById("sideBGroupB").innerText = null;
            const shuffledGroupBSideB = shuffle(sideAGroupC);
            for (let i = 0 ; i < shuffledGroupBSideB.length; i++) {
                document.getElementById("sideBGroupB").innerHTML += shuffledGroupBSideB[i].teamName + '<br>';
                // document.getElementById("groupE").innerText = shuffledGroupBSideB[i].groupName;
            }
        } else if (el.currentTarget.id.toLowerCase().indexOf('groupf') > 0) {
            document.getElementById("sideBGroupC").innerText = null;
            const shuffledGroupCSideB = shuffle(sideAGroupC);
            for (let i = 0 ; i < shuffledGroupCSideB.length; i++) {
                document.getElementById("sideBGroupC").innerHTML += shuffledGroupCSideB[i].teamName + '<br>';
                // document.getElementById("groupF").innerText = shuffledGroupCSideB[i].groupName;
            }
        }
    });
});

const allOutLinedBtnDark = document.querySelectorAll(".btn-outline-dark");
const playBtnItems = [].slice.call(allOutLinedBtnDark);

const winnerGroupA = "";
const winnerGroupB = "";
const winnerGroupC = "";

const winnerGroupD = "";
const winnerGroupE = "";
const winnerGroupF = "";


  
function assignRandomWinnerLevelOne(group) {
  const mapObject = ["winner", "runnersUp", "thirdPlace", "fourthPlace","fifthPlace"];
  const shuffleResult = shuffle(mapObject);
  group.map((a,i) => {
    a.result = shuffleResult[i];
  });
  return group;
}

playBtnItems.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.id.toLowerCase().indexOf('groupa') > 0) {
        alert("Group A matches is in progress....\n click ok to continue.");
        setTimeout(() => {
          resultSideAGroupALevelOne = assignRandomWinnerLevelOne(sideAGroupA);
          resultSideAGroupALevelOne.forEach((team) => {
            if(team.result) {
              switch(team.result) {
                case "winner":
                  document.getElementById('groupALevelOneWinner').innerHTML = team.simpleName;
                  document.getElementById('groupALevelOneWinner').innerHTML += ' <span class="badge badge-success"> W</span>';
                  break;
                case "runnersUp":
                    document.getElementById('groupALevelOneRunner').innerHTML = team.simpleName;
                    document.getElementById('groupALevelOneRunner').innerHTML += ' <span class="badge badge-success"> R</span>';
                    break;
                case "thirdPlace":
                    document.getElementById('groupALevelOneThird').innerHTML = team.simpleName;
                    document.getElementById('groupALevelOneThird').innerHTML += ' <span class="badge badge-danger"> 3</span>';
                    break;
                case "fourthPlace":
                    document.getElementById('groupALevelOneFourth').innerHTML = team.simpleName;
                    document.getElementById('groupALevelOneFourth').innerHTML += ' <span class="badge badge-danger"> 4</span>';
                    break;
                default:
                    document.getElementById('groupALevelOneFifth').innerHTML = team.simpleName;
                    document.getElementById('groupALevelOneFifth').innerHTML += ' <span class="badge badge-danger"> 5</span>';
                    break;
              }
            }
          });
          
        }, 5000)
      } else if (e.target.id.toLowerCase().indexOf('groupb') > 0) {
        alert("Group B matches is in progress....\n click ok to continue.");
        setTimeout(() => {
          resultSideAGroupBLevelOne = assignRandomWinnerLevelOne(sideAGroupB);
          resultSideAGroupBLevelOne.forEach((team) => {
            if(team.result) {
              switch(team.result) {
                case "winner":
                  document.getElementById('groupBLevelOneWinner').innerHTML = team.simpleName;
                  document.getElementById('groupBLevelOneWinner').innerHTML += ' <span class="badge badge-success"> W</span>';
                  break;
                case "runnersUp":
                    document.getElementById('groupBLevelOneRunner').innerHTML = team.simpleName;
                    document.getElementById('groupBLevelOneRunner').innerHTML += ' <span class="badge badge-success"> R</span>';
                    break;
                case "thirdPlace":
                    document.getElementById('groupBLevelOneThird').innerHTML = team.simpleName;
                    document.getElementById('groupBLevelOneThird').innerHTML += ' <span class="badge badge-danger"> 3</span>';
                    break;
                case "fourthPlace":
                    document.getElementById('groupBLevelOneFourth').innerHTML = team.simpleName;
                    document.getElementById('groupBLevelOneFourth').innerHTML += ' <span class="badge badge-danger"> 4</span>';
                    break;
                default:
                    document.getElementById('groupBLevelOneFifth').innerHTML = team.simpleName;
                    document.getElementById('groupBLevelOneFifth').innerHTML += ' <span class="badge badge-danger"> 5</span>';
                    break;
              }
            }
          });
        }, 5000);
      } else if (e.target.id.toLowerCase().indexOf('groupc') > 0) {
        alert("Group C matches is in progress....\n click ok to continue.");
        setTimeout(() => {
          resultSideAGroupCLevelOne = assignRandomWinnerLevelOne(sideAGroupC);
          resultSideAGroupCLevelOne.forEach((team) => {
            if(team.result) {
              switch(team.result) {
                case "winner":
                  document.getElementById('groupCLevelOneWinner').innerHTML = team.simpleName;
                  document.getElementById('groupCLevelOneWinner').innerHTML += ' <span class="badge badge-success"> W</span>';
                  break;
                case "runnersUp":
                    document.getElementById('groupCLevelOneRunner').innerHTML = team.simpleName;
                    document.getElementById('groupCLevelOneRunner').innerHTML += ' <span class="badge badge-success"> R</span>';
                    break;
                case "thirdPlace":
                    document.getElementById('groupCLevelOneThird').innerHTML = team.simpleName;
                    document.getElementById('groupCLevelOneThird').innerHTML += ' <span class="badge badge-danger"> 3</span>';
                    break;
                case "fourthPlace":
                    document.getElementById('groupCLevelOneFourth').innerHTML = team.simpleName;
                    document.getElementById('groupCLevelOneFourth').innerHTML += ' <span class="badge badge-danger"> 4</span>';
                    break;
                default:
                    document.getElementById('groupCLevelOneFifth').innerHTML = team.simpleName;
                    document.getElementById('groupCLevelOneFifth').innerHTML += ' <span class="badge badge-danger"> 5</span>';
                    break;
              }
            }
          });
        }, 5000);
      } else if (e.target.id.toLowerCase().indexOf('groupd') > 0) {
        alert("Group D matches is in progress....\n click ok to continue.");
        setTimeout(() => {
          resultSideBGroupALevelOne = assignRandomWinnerLevelOne(sideBGroupA);
          resultSideBGroupALevelOne.forEach((team) => {
            if(team.result) {
              switch(team.result) {
                case "winner":
                  document.getElementById('groupDLevelOneWinner').innerHTML = team.simpleName;
                  document.getElementById('groupDLevelOneWinner').innerHTML += ' <span class="badge badge-success"> W</span>';
                  break;
                case "runnersUp":
                    document.getElementById('groupDLevelOneRunner').innerHTML = team.simpleName;
                    document.getElementById('groupDLevelOneRunner').innerHTML += ' <span class="badge badge-success"> R</span>';
                    break;
                case "thirdPlace":
                    document.getElementById('groupDLevelOneThird').innerHTML = team.simpleName;
                    document.getElementById('groupDLevelOneThird').innerHTML += ' <span class="badge badge-danger"> 3</span>';
                    break;
                case "fourthPlace":
                    document.getElementById('groupDLevelOneFourth').innerHTML = team.simpleName;
                    document.getElementById('groupDLevelOneFourth').innerHTML += ' <span class="badge badge-danger"> 4</span>';
                    break;
                default:
                    document.getElementById('groupDLevelOneFifth').innerHTML = team.simpleName;
                    document.getElementById('groupDLevelOneFifth').innerHTML += ' <span class="badge badge-danger"> 5</span>';
                    break;
              }
            }
          });
        }, 5000);
      } else if (e.target.id.toLowerCase().indexOf('groupe') > 0) {
        alert("Group E matches is in progress....\n click ok to continue.");
        setTimeout(() => {
          resultSideBGroupBLevelOne = assignRandomWinnerLevelOne(sideBGroupB);
          resultSideBGroupBLevelOne.forEach((team) => {
            if(team.result) {
              switch(team.result) {
                case "winner":
                  document.getElementById('groupELevelOneWinner').innerHTML = team.simpleName;
                  document.getElementById('groupELevelOneWinner').innerHTML += ' <span class="badge badge-success"> W</span>';
                  break;
                case "runnersUp":
                    document.getElementById('groupELevelOneRunner').innerHTML = team.simpleName;
                    document.getElementById('groupELevelOneRunner').innerHTML += ' <span class="badge badge-success"> R</span>';
                    break;
                case "thirdPlace":
                    document.getElementById('groupELevelOneThird').innerHTML = team.simpleName;
                    document.getElementById('groupELevelOneThird').innerHTML += ' <span class="badge badge-danger"> 3</span>';
                    break;
                case "fourthPlace":
                    document.getElementById('groupELevelOneFourth').innerHTML = team.simpleName;
                    document.getElementById('groupELevelOneFourth').innerHTML += ' <span class="badge badge-danger"> 4</span>';
                    break;
                default:
                    document.getElementById('groupELevelOneFifth').innerHTML = team.simpleName;
                    document.getElementById('groupELevelOneFifth').innerHTML += ' <span class="badge badge-danger"> 5</span>';
                    break;
              }
            }
          });
        }, 5000);
      } else if (e.target.id.toLowerCase().indexOf('groupf') > 0) {
        alert("Group F matches is in progress....\n click ok to continue.");
        setTimeout(() => {
          resultSideBGroupCLevelOne = assignRandomWinnerLevelOne(sideBGroupC);
          resultSideBGroupCLevelOne.forEach((team) => {
            if(team.result) {
              switch(team.result) {
                case "winner":
                  document.getElementById('groupFLevelOneWinner').innerHTML = team.simpleName;
                  document.getElementById('groupFLevelOneWinner').innerHTML += ' <span class="badge badge-success"> W</span>';
                  break;
                case "runnersUp":
                    document.getElementById('groupFLevelOneRunner').innerHTML = team.simpleName;
                    document.getElementById('groupFLevelOneRunner').innerHTML += ' <span class="badge badge-success"> R</span>';
                    break;
                case "thirdPlace":
                    document.getElementById('groupFLevelOneThird').innerHTML = team.simpleName;
                    document.getElementById('groupFLevelOneThird').innerHTML += ' <span class="badge badge-danger"> 3</span>';
                    break;
                case "fourthPlace":
                    document.getElementById('groupFLevelOneFourth').innerHTML = team.simpleName;
                    document.getElementById('groupFLevelOneFourth').innerHTML += ' <span class="badge badge-danger"> 4</span>';
                    break;
                default:
                    document.getElementById('groupFLevelOneFifth').innerHTML = team.simpleName;
                    document.getElementById('groupFLevelOneFifth').innerHTML += ' <span class="badge badge-danger"> 5</span>';
                    break;
              }
            }
          });
        }, 5000);
      }
    });
});

const allOutLinedBtnLight = document.querySelectorAll(".btn-outline-light");
const playLightBtnItems = [].slice.call(allOutLinedBtnLight);
let teamAfterLevelOneGroupA = [];
let teamAfterLevelOneGroupB = [];
let teamAfterLevelOneGroupC = [];
let teamAfterLevelOneGroupD = [];
let teamAfterLevelOneGroupE = [];
let teamAfterLevelOneGroupF = [];


let groupAwinner = "";
let groupBwinner = "";
let groupCwinner = "";
let groupDwinner = "";
let groupEwinner = "";
let groupFwinner = "";
let groupARunnersUp= "";
let groupBRunnersUp= "";
let groupCRunnersUp= "";
let groupDRunnersUp= "";
let groupERunnersUp= "";
let groupFRunnersUp= "";

let groupALevelTwoWinner = [];
let groupBLevelTwoWinner = [];
let groupCLevelTwoWinner = [];
let groupDLevelTwoWinner = [];
let groupELevelTwoWinner = [];
let groupFLevelTwoWinner = [];

let resultsSideAGroupALevelTwo = [];
let resultsSideAGroupBLevelTwo = [];
let resultsSideAGroupCLevelTwo = [];
let resultsSideBGroupALevelTwo = [];
let resultsSideBGroupBLevelTwo = [];
let resultsSideBGroupCLevelTwo = [];


function assignRandomWinnerLevelTwo(group) {
  const mapObject = ["winner", "looser"];
  const shuffleResult = shuffle(mapObject);
  group.map((a,i) => {
    a.result = shuffleResult[i];
  });
  return group;
}


playLightBtnItems.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.id.toLowerCase().indexOf("groupa") > 0) {
      if(!!resultSideAGroupALevelOne && resultSideAGroupALevelOne.length) {
        resultSideAGroupALevelOne.forEach((team) => {
          if(team.result === "winner") {
            groupAwinner = team.teamName;
            teamAfterLevelOneGroupA.push(team);
          } else if (team.result === "runnersUp") {
            teamAfterLevelOneGroupA.push(team);
            groupARunnersUp = team.teamName;
          }
        });
        confirm("Level two match " + groupAwinner + " VS " + groupARunnersUp + "in progress...\n Click ok to continue");
        setTimeout(() => {
          resultsSideAGroupALevelTwo = assignRandomWinnerLevelTwo(teamAfterLevelOneGroupA);
        resultsSideAGroupALevelTwo.forEach((team) => {
          if (team.result === "winner") {
            groupALevelTwoWinner = team;
            document.getElementById("groupALevelTwoWinner").innerText = groupALevelTwoWinner.simpleName;
          }
        });
        }, 5000);
      }
    } else if(e.target.id.toLowerCase().indexOf("groupb") > 0) {
      
      if(!!resultSideAGroupBLevelOne && resultSideAGroupBLevelOne.length) {
        resultSideAGroupBLevelOne.forEach((team) => {
          if(team.result === "winner") {
            groupBwinner = team.teamName;
            teamAfterLevelOneGroupB.push(team);
          } else if (team.result === "runnersUp") {
            teamAfterLevelOneGroupB.push(team);
            groupBRunnersUp = team.teamName;
          }
        });
        confirm("Level two match " + groupBwinner + " VS " + groupBRunnersUp + "in progress...\n Click ok to continue");
        setTimeout(() => {
          resultsSideAGroupBLevelTwo = assignRandomWinnerLevelTwo(teamAfterLevelOneGroupB);
        resultsSideAGroupBLevelTwo.forEach((team) => {
          if (team.result === "winner") {
            groupBLevelTwoWinner = team;
            document.getElementById("groupBLevelTwoWinner").innerText = groupBLevelTwoWinner.simpleName;
          }
        });
        }, 5000);
      }
    } else if(e.target.id.toLowerCase().indexOf("groupc") > 0) {
      
      if(!!resultSideAGroupCLevelOne && resultSideAGroupCLevelOne.length) {
        resultSideAGroupCLevelOne.forEach((team) => {
          if(team.result === "winner") {
            groupCwinner = team.teamName;
            teamAfterLevelOneGroupC.push(team);
          } else if (team.result === "runnersUp") {
            teamAfterLevelOneGroupC.push(team);
            groupCRunnersUp = team.teamName;
          }
        });
        confirm("Level two match " + groupCwinner + " VS " + groupCRunnersUp + "in progress...\n Click ok to continue");
        setTimeout(() => {
          resultsSideAGroupCLevelTwo = assignRandomWinnerLevelTwo(teamAfterLevelOneGroupC);
        resultsSideAGroupCLevelTwo.forEach((team) => {
          if (team.result === "winner") {
            groupCLevelTwoWinner = team;
            document.getElementById("groupCLevelTwoWinner").innerText = groupCLevelTwoWinner.simpleName;
          }
        });
        }, 5000);
      }
    }  else if(e.target.id.toLowerCase().indexOf("groupd") > 0) {
      
      if(!!resultSideBGroupALevelOne && resultSideBGroupALevelOne.length) {
        resultSideBGroupALevelOne.forEach((team) => {
          if(team.result === "winner") {
            groupDwinner = team.teamName;
            teamAfterLevelOneGroupD.push(team);
          } else if (team.result === "runnersUp") {
            teamAfterLevelOneGroupD.push(team);
            groupDRunnersUp = team.teamName;
          }
        });
        confirm("Level two match " + groupDwinner + " VS " + groupDRunnersUp + "in progress...\n Click ok to continue");
        setTimeout(() => {
          resultsSideBGroupALevelTwo = assignRandomWinnerLevelTwo(teamAfterLevelOneGroupD);
        resultsSideBGroupALevelTwo.forEach((team) => {
          if (team.result === "winner") {
            groupDLevelTwoWinner = team;
            document.getElementById("groupDLevelTwoWinner").innerText = groupDLevelTwoWinner.simpleName;
          }
        });
        }, 5000);
      }
    } else if(e.target.id.toLowerCase().indexOf("groupe") > 0) {
      
      if(!!resultSideBGroupBLevelOne && resultSideBGroupBLevelOne.length) {
        resultSideBGroupBLevelOne.forEach((team) => {
          if(team.result === "winner") {
            groupEwinner = team.teamName;
            teamAfterLevelOneGroupE.push(team);
          } else if (team.result === "runnersUp") {
            teamAfterLevelOneGroupE.push(team);
            groupERunnersUp = team.teamName;
          }
        });
        confirm("Level two match " + groupEwinner + " VS " + groupERunnersUp + "in progress...\n Click ok to continue");
        setTimeout(() => {
          resultsSideBGroupBLevelTwo = assignRandomWinnerLevelTwo(teamAfterLevelOneGroupE);
        resultsSideBGroupBLevelTwo.forEach((team) => {
          if (team.result === "winner") {
            groupELevelTwoWinner = team;
            document.getElementById("groupELevelTwoWinner").innerText = groupELevelTwoWinner.simpleName;
          }
        });
        }, 5000);
      }
    }  else if(e.target.id.toLowerCase().indexOf("groupf") > 0) {
      
      if(!!resultSideBGroupCLevelOne && resultSideBGroupCLevelOne.length) {
        resultSideBGroupCLevelOne.forEach((team) => {
          if(team.result === "winner") {
            groupFwinner = team.teamName;
            teamAfterLevelOneGroupF.push(team);
          } else if (team.result === "runnersUp") {
            teamAfterLevelOneGroupF.push(team);
            groupFRunnersUp = team.teamName;
          }
        });
        confirm("Level two match " + groupFwinner + " VS " + groupFRunnersUp + "in progress...\n Click ok to continue");
        setTimeout(() => {
          resultsSideBGroupCLevelTwo = assignRandomWinnerLevelTwo(teamAfterLevelOneGroupF);
        resultsSideBGroupCLevelTwo.forEach((team) => {
          if (team.result === "winner") {
            groupFLevelTwoWinner = team;
            document.getElementById("groupFLevelTwoWinner").innerText = groupFLevelTwoWinner.simpleName;
          }
        });
        }, 5000);
      }
    } 
  });
})

let timout = setInterval(checkForCompletionOfGroupLevelMatches,1000);

function checkForCompletionOfGroupLevelMatches() {
  console.log("bluh");
  if (resultsSideAGroupALevelTwo.length && resultsSideAGroupBLevelTwo.length && resultsSideAGroupCLevelTwo.length && resultsSideBGroupALevelTwo.length && resultsSideBGroupBLevelTwo.length && resultsSideBGroupCLevelTwo.length) {
    console.log("finished all the group matches");
    confirm("You have finished all the group level matches please click on the bottom 'final and semi final matches' to proceed to league final stage.");
    stopTimeInterval();
  }
}

function stopTimeInterval() {
  clearInterval(timout);
}

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', (e) => {
  const h6Elements = document.querySelectorAll("h6");
  h6Elements.forEach((el) => {
    el.innerText = null;
  });
  const winnerElements = document.querySelectorAll('.list-group-item-success');
  winnerElements.forEach((el) => {
    el.innerText = null;
  });
resultSideAGroupALevelOne = [];
resultSideAGroupBLevelOne = [];
resultSideAGroupCLevelOne = [];
resultSideBGroupALevelOne = [];
resultSideBGroupBLevelOne = [];
resultSideBGroupCLevelOne = [];
});




  