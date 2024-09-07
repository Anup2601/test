document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();  
    document.getElementById('thankYouMessage').style.display = 'block';  
    document.getElementById('email').value = '';  
    document.getElementById('feedbackText').value = '';  
  });
  