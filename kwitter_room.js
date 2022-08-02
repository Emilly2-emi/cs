const firebaseConfig = {
    apiKey: "AIzaSyBVuyxGhytX03fanGrlJTS3PP4yi77PShQ",
    authDomain: "conversa-d9357.firebaseapp.com",
    databaseURL: "https://conversa-d9357-default-rtdb.firebaseio.com",
    projectId: "conversa-d9357",
    storageBucket: "conversa-d9357.appspot.com",
    messagingSenderId: "236421472077",
    appId: "1:236421472077:web:34bc3503de1170140fa104",
    measurementId: "G-V23DKGYY3R"
  };
  
  
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Seja bem-vindo " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }