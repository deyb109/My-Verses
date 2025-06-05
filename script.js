// Theme switch based on time
function applyThemeByTime() {
  const hour = new Date().getHours();
  const body = document.body;

  if (hour >= 6 && hour < 18) {
    // Daytime: 6am to 6pm
    body.classList.add('day-theme');
    body.classList.remove('night-theme');
  } else {
    // Nighttime: 6pm to 6am
    body.classList.add('night-theme');
    body.classList.remove('day-theme');
  }
}

// Call theme switch function immediately
applyThemeByTime();

// Study buddy chatbot function
function getResponse() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const responseDiv = document.getElementById("response");

  let response = "Hmm, wala ko kasabot. Try to ask about study tips or school stuff 😅";

  if (input.includes("study") || input.includes("tips")) {
    response = "💡 Tip: Study in short focused sessions (25 minutes), then rest for 5. Pomodoro style!";
  } else if (input.includes("math")) {
    response = "📐 Math can be tough, but break it down step-by-step. Master the basics first!";
  } else if (input.includes("science")) {
    response = "🔬 Science is fun! Try experiments at home and observe carefully.";
  } else if (input.includes("history")) {
    response = "📜 History teaches us about the past. Try to relate stories to real life.";
  } else if (input.includes("mapeh")) {
    response = "🎨 MAPEH includes Music, Arts, PE, and Health. Balance study with practice!";
  } else if (input.includes("motivate") || input.includes("wala gana")) {
    response = "🔥 You got this! Every small step counts. Padayon lang!";
  } else if (input.includes("english")) {
    response = "📝 Practice writing and reading daily. Learn 5 new words per day and use them.";
  } else if (input.includes("filipino") || input.includes("tagalog")) {
    response = "📘 Magbasa ng mga kwento sa Filipino para mas lalo kang umunlad sa wika!";
  } else if (input.includes("bisaya")) {
    response = "🎓 Magbasa og Bisaya nga mga storya o artikulo aron mas mosabot ka.";
  } else if (input.includes("schedule") || input.includes("time")) {
    response = "📅 Make a daily routine. Set specific hours for school, rest, and hobbies.";
  }

  responseDiv.innerHTML = response;
}
