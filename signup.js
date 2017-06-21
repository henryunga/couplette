	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyD8rUvWOtA4Zfr0LjKe-ICppOrwILQ-l6w",
	    authDomain: "couplette-test.firebaseapp.com",
	    databaseURL: "https://couplette-test.firebaseio.com",
	    projectId: "couplette-test",
	    storageBucket: "couplette-test.appspot.com",
	    messagingSenderId: "686070390184"
	  };
	  firebase.initializeApp(config);
		dataRef = firebase.database();

	var firstName1 = $("#partner1-first").val().trim();
	var firstName2 = $("#partner2-first").val().trim();
	var lastName1 = $("#partner1-last").val().trim();
	var lastName2 = $("#partner2-last").val().trim();
	var email = $("#email-address").val().trim();
	var password = $("#pass").val().trim();
	var confirmPassword = $("#confirmpass").val().trim();
	var city = $("#city-input").val().trim();
	var state = $("#state-input").val().trim();
	var arts = $("#artBox").val().trim();
	var dining = $("#diningBox").val().trim();
	var films = $("#filmBox").val().trim();
	var music = $("#musicBox").val().trim();
	var gaming = $("#gamingBox").val().trim();
	var outdoor = $("#outdoorBox").val().trim();
	var travel = $("#travelBox").val().trim();
	var other = $("#otherBox").val().trim();
	var age = $("#age-input").text();
	var description = $("#comment-input").text();
	var coupleUsername = $("#couple-username").text();

	$("#btnSubmit").on("click", function(event) {
        event.preventDefault();
        // Code in the logic for storing and retrieving the most recent user.
        var firstName1 = $("#partner1-first").val().trim();
        var firstName2 = $("#partner2-first").val().trim();
        var lastName1 = $("#partner1-last").val().trim();
        var lastName2 = $("#partner2-last").val().trim();
        var email = $("#email-address").val().trim();
        var password = $("#pass").val().trim();
        var confirmPassword = $("#confirmpass").val().trim();
        var city = $("#city-input").val().trim();
				var state = $("#state-input").val().trim();
        var arts = $("#artBox").val().trim();
        var dining = $("#diningBox").val().trim();
        var films = $("#filmBox").val().trim();
        var music = $("#musicBox").val().trim();
        var gaming = $("#gamingBox").val().trim();
        var outdoor = $("#outdoorBox").val().trim();
        var travel = $("#travelBox").val().trim();
        var other = $("#otherBox").val().trim();
        // var age = $("#age-input").val().trim();
        var description = $("#comment-input").text();
        // var coupleUsername = $("#couple-username").val().trim();
        // Code for the push
				firebase.auth().createUserWithEmailAndPassword(email, password);
				setTimeout(function(){
				firebase.auth().signInWithEmailAndPassword(email, password);
				}, 2000);
			});

			// Add login event
			// btnSubmit.addEventListener('click', e => {
			// 	//Get email and password
			// 	const email = email.value;
			// 	const pass = password.value;
			// 	const auth = firebase.auth();
			// 	//Sign in
			// 	const promise = auth.createUserWithEmailAndPassword(email, password);
			// 	promise.catch(e => console.log(e.message));
			// 	firebase.auth().signInWithEmailAndPassword(email, password);
			// });

				// firebase.auth().createUserWithEmailAndPassword(email, password).then(function(results){
				// 	var uid = user.uid;
				// });
				//

				firebase.auth().onAuthStateChanged(user => {
					if(user) {
						console.log(user.uid);

						dataRef.ref("Users/" + user.uid).set({
		            firstName1: $("#partner1-first").val().trim(),
		            firstName2: $("#partner2-first").val().trim(),
		            lastName1: $("#partner1-last").val().trim(),
		            lastName2: $("#partner2-last").val().trim(),
		            email: $("#email-address").val().trim(),
		            password: $("#pass").val().trim(),
		            confirmPassword: $("#confirmpass").val().trim(),
		            city: $("#city-input").val().trim(),
								state: $("#state-input").val().trim(),
		            description: $("#comment-input").text(),
		            Interests: {
		                Arts: $("#artBox").val().trim(),
		                Dining: $("#diningBox").val().trim(),
		                Films: $("#filmBox").val().trim(),
		                Music: $("#musicBox").val().trim(),
		                Gaming: $("#gamingBox").val().trim(),
		                Outdoors: $("#outdoorBox").val().trim(),
		                Travel: $("#travelBox").val().trim(),
		                other: $("#otherBox").val().trim(),
		            },
		            // age: age,
		            // coupleUsername: coupleUsername,
		            // description: description,
		            dateAdded: firebase.database.ServerValue.TIMESTAMP
		        	})
						// User is signed in.
					}
				});



	//createUserWithEmailAndPassword
	//Login-2 (using what I already have)
	//listener return UI
	//Push to user info to db
	//database.ref('users/' + uid).set('info-object');