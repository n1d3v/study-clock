let isPM = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const clockElement = document.getElementById('clock');
  const amPmText = document.getElementById('amPmText');

  const amPm = isPM ? 'AM' : 'PM';
  amPmText.textContent = amPm;

  if (isPM && hours < 12) {
    hours += 12;
  } else if (!isPM && hours >= 12) {
    hours -= 12;
  }

  clockElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const settingsToggleButton = document.getElementById('settingsToggleButton');
  const settingsMenu = document.getElementById('settingsMenu');

  settingsToggleButton.addEventListener('click', function() {
    if (settingsMenu.style.display === 'none' || settingsMenu.style.display === '') {
      settingsMenu.style.display = 'block';
    } else {
      settingsMenu.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Default color values
  const defaultColors = ['#8D4274', '#7B356B', '#440F50'];

  // Set default colors to color picker inputs
  for (let i = 0; i < defaultColors.length; i++) {
    document.getElementById(`colorPicker${i + 1}`).value = defaultColors[i];
  }

  const settingsMenu = document.getElementById('settingsMenu');
  const gradientBg = document.querySelector('.gradient-bg');
  
  settingsMenu.addEventListener('input', function(event) {
    if (event.target.matches('#colorPicker1, #colorPicker2, #colorPicker3')) {
      const color1 = document.getElementById('colorPicker1').value;
      const color2 = document.getElementById('colorPicker2').value;
      const color3 = document.getElementById('colorPicker3').value;
      
      gradientBg.style.background = `linear-gradient(to right, ${color1}, ${color2}, ${color3})`;
    }
  });
});

function toggleAMPM() {
  isPM = !isPM;
  const toggleButton = document.getElementById('toggleButton');
  toggleButton.textContent = isPM ? 'PM' : 'AM';
  updateClock();
}

setInterval(updateClock, 1000);
updateClock()

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleAMPM);
