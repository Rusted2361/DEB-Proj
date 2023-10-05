const greetingsList = ["Hello world", "Bonjour", "Hello wolt","Hallo, wêreld!","أهلاً بالعالم (Ahlan bil ‘Alam)","Salam Dünya","Здравей, свят!"];

function changeGreeting() {
  const random_num = Math.floor(Math.random() * greetingsList.length);
  const random_greet = greetingsList[random_num];
  document.getElementById('greetingTxt').textContent = random_greet.toString();
}

function changeVisCount() {
    const random_num = Math.floor(Math.random() * 100);

    document.getElementById('visitorCountTxt').textContent = "visitor count: "+random_num.toString();
  }