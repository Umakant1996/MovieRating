var firebaseConfig = {
    apiKey: "AIzaSyAofDlNSK1b7MkUdTQRDKRwQr7qzII9GQU",
    authDomain: "movierating-28987.firebaseapp.com",
    databaseURL: "https://movierating-28987-default-rtdb.firebaseio.com",
    projectId: "movierating-28987",
    storageBucket: "movierating-28987.appspot.com",
    messagingSenderId: "154911075444",
    appId: "1:154911075444:web:6220d8894e35905d677521",
    measurementId: "G-Y9LKEWM58X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  
  function addItem(inputId, ulClass, movieName) {

    var postID;
    var Rateing = 0;
    var movie = movieName;
    path = movie + "/comment/";

    var postListRef = firebase.database().ref(path);
    var newPostRef = postListRef.push();
    postID = newPostRef.key;
    var ul = document.getElementById(ulClass);
    var candidate = document.getElementById(inputId);
    let cross = document.createElement('div');
    cross.textContent = "X";
    var li = document.createElement("li");
    li.setAttribute('id', postID);
    var textValue = document.getElementById(inputId).value;
    li.appendChild(document.createTextNode(textValue));
    li.appendChild(cross);
    ul.appendChild(li);

    cross.addEventListener('click', (e) => {

       e.stopPropagation();


       let id = e.target.parentElement.getAttribute('id');
       var movie = movieName;
       path = movie + "/comment/" + id;
       alert(path);

       firebase.database().ref(path).remove();

       var key = document.getElementById(inputId).value;
       var ul = document.getElementById(ulClass);
       var candidate = document.getElementById(inputId);
       var item = document.getElementById(id);
       ul.removeChild(item);

    })
    var comment = document.getElementById(inputId).value;

    alert(postID);
    newPostRef.set({
       commentId: postID,
       comment: comment
       // rating:parseInt(Rateing)
       // ...
    });

    alert("Added Successfully");

 }



 function addComment(movie, comment) {
    var postListRef = firebase.database().ref(movie / "comment" / comment);
    var newPostRef = postListRef.push();
    newPostRef.set({

       comment: comment,
       rating: parseInt(Rateing)
       // ...
    });

    alert("Added Successfully");
 }

 function starAll(btn, ratIng) {
    var start, end;
    var sum = 0, totalRat = 0;
    var divideByValue = 0;
    var avg = 0;

    var s1s = btn.id;

    alert(ratIng);
    if (s1s >= 1 && s1s <= 5) {
       start = 1; end = 5;
       var Mov = "Dhoni";
       add(Mov, ratIng);

    } else if (s1s >= 6 && s1s <= 10) {
       start = 6; end = 10;
       var Mov = "Dangal";
       add(Mov, ratIng);

    } else if (s1s >= 11 && s1s <= 15) {
       start = 11; end = 15;
       var Mov = "Queen";
       add(Mov, ratIng);

    } else if (s1s >= 16 && s1s <= 20) {
       start = 16; end = 20;
       var Mov = "Tanu";
       add(Mov, ratIng);

    } else if (s1s >= 21 && s1s <= 25) {
       start = 21; end = 25;

       var Mov = "MeryKom";
       add(Mov, ratIng);

    } else if (s1s >= 26 && s1s <= 30) {
       start = 26; end = 30;

       var Mov = "BhaagMilka";
       add(Mov, ratIng);

    } else if (s1s >= 31 && s1s <= 35) {

       start = 31; end = 35;

       var Mov = "Urri";
       add(Mov, ratIng);
    }
    else if (s1s >= 36 && s1s <= 40) {
       start = 36; end = 40;
       var Mov = "Lagaan";
       add(Mov, ratIng);
    }
    else if (s1s >= 41 && s1s <= 45) {
       start = 41; end = 45;

       var Mov = "Manjhi";
       add(Mov, ratIng);

    }
    else if (s1s >= 46 && s1s <= 50) {
       start = 46; end = 50;

       var Mov = "Baby";
       add(Mov, ratIng);
    }

    var rating1 = 0;
    for (i = start; i <= end; i++) {

       document.getElementById(i).style.color = "#ccc";
    };

    for (i = start; i <= s1s; i++) {
       rating1++;

       document.getElementById(i).style.color = "#E1F65C";


    };


    firebase.database().ref("Dhoni/Rating").on('value', function (snap) {
       snap.forEach(function (childNodes) {
          var rat = childNodes.val().rating;
          divideByValue++;
          sum = sum + rat;

       });

       if (sum == 0 && divideByValue == 0) { }
       else {
          avg = parseFloat(sum / divideByValue);

          document.getElementById("100").innerHTML = avg;
       }
    });

    var sum1 = 0; rat1 = 0; divideByValue1 = 0; avg1 = 0;
    firebase.database().ref("Dangal/Rating").on('value', function (snap) {
       snap.forEach(function (childNodes) {
          var rat1 = childNodes.val().rating;
          divideByValue1++;
          sum1 = sum1 + rat1;

       });

       if (sum1 == 0 && divideByValue1 == 0) { }
       else {
          avg1 = parseFloat(sum1 / divideByValue1);

          document.getElementById("101").innerHTML = avg1;
       }
    });

    var sum2 = 0; rat2 = 0; divideByValue2 = 0; avg2 = 0;

    firebase.database().ref("Queen/Rating").on('value', function (snap) {
       snap.forEach(function (childNodes) {
          var rat2 = childNodes.val().rating;
          divideByValue2++;
          sum2 = sum2 + rat2;

       });

       if (sum2 == 0 && divideByValue2 == 0) { }
       else {
          avg2 = parseFloat(sum2 / divideByValue2);

          document.getElementById("102").innerHTML = avg2;
       }
    });

    var sum3 = 0; rat3 = 0; divideByValue3 = 0; avg3 = 0;

    firebase.database().ref("Tanu/Rating").on('value', function (snap) {
       snap.forEach(function (childNodes) {
          var rat3 = childNodes.val().rating;
          divideByValue3++;
          sum3 = sum3 + rat3;

       });

       if (sum3 == 0 && divideByValue3 == 0) { }
       else {
          avg3 = parseFloat(sum3 / divideByValue3);

          document.getElementById("103").innerHTML = avg3;
       }
    });

    var sum4 = 0; rat4 = 0; divideByValue4 = 0; avg4 = 0;

    firebase.database().ref("MeryKom/Rating").on('value', function (snap) {
       snap.forEach(function (childNodes) {
          var rat4 = childNodes.val().rating;
          divideByValue4++;
          sum4 = sum4 + rat4;

       });

       if (sum4 == 0 && divideByValue4 == 0) { }
       else {
          avg4 = parseFloat(sum4 / divideByValue4);

          document.getElementById("104").innerHTML = avg4;
       }
    });

    var sum5 = 0; rat5 = 0; divideByValue5 = 0; avg5 = 0;

    firebase.database().ref("BhaagMilka/Rating").on('value', function (snap) {
       snap.forEach(function (childNodes) {
          var rat5 = childNodes.val().rating;
          divideByValue5++;
          sum5 = sum5 + rat5;

       });

       if (sum5 == 0 && divideByValue5 == 0) { }
       else {
          avg5 = parseFloat(sum5 / divideByValue5);

          document.getElementById("105").innerHTML = avg5;
       }
    });

    var sum6 = 0; rat6 = 0; divideByValue6 = 0; avg6 = 0;

    firebase.database().ref("Urri/Rating").on('value', function (snap) {
       snap.forEach(function (childNodes) {
          var rat6 = childNodes.val().rating;
          divideByValue6++;
          sum6 = sum6 + rat6;

       });

       if (sum6 == 0 && divideByValue6 == 0) { }
       else {
          avg6 = parseFloat(sum6 / divideByValue6);

          document.getElementById("106").innerHTML = avg6;
       }
    });

    sum7 = 0; rat7 = 0; divideByValue7 = 0; avg7 = 0;

    firebase.database().ref("Lagaan/Rating").on('value', function (snap) {
       snap.forEach(function (childNodes) {
          var rat7 = childNodes.val().rating;
          divideByValue7++;
          sum7 = sum7 + rat7;

       });

       if (sum7 == 0 && divideByValue7 == 0) { }
       else {
          avg7 = parseFloat(sum7 / divideByValue7);

          document.getElementById("107").innerHTML = avg7;
       }
    });

    sum8 = 0; rat8 = 0; divideByValue8 = 0; avg8 = 0;

    firebase.database().ref("Manjhi/Rating").on('value', function (snap) {
       snap.forEach(function (childNodes) {
          var rat8 = childNodes.val().rating;
          divideByValue8++;
          sum8 = sum8 + rat8;

       });

       if (sum8 == 0 && divideByValue8 == 0) { }
       else {
          avg8 = parseFloat(sum8 / divideByValue8);

          document.getElementById("108").innerHTML = avg8;
       }
    });

    sum9 = 0; rat9 = 0; divideByValue9 = 0; avg9 = 0;

    firebase.database().ref("Baby/Rating").on('value', function (snap) {
       snap.forEach(function (childNodes) {
          var rat9 = childNodes.val().rating;
          divideByValue9++;
          sum9 = sum9 + rat9;

       });

       if (sum9 == 0 && divideByValue9 == 0) { }
       else {
          avg9 = parseFloat(sum9 / divideByValue9);

          document.getElementById("109").innerHTML = avg9;
       }
    });


 }


 function add(movie, Rateing) {
    alert(movie);
    var postListRef = firebase.database().ref(movie + "/Rating");
    var newPostRef = postListRef.push();
    newPostRef.set({

       rating: parseInt(Rateing)
       // ...
    });

    alert("Rate Added Successfully");
 }