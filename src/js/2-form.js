
const STORAGE_KEY = 'feedback-form-state';


let formData = {
  email: '',
  message: ''
};


const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    formData = JSON.parse(savedData); 
    emailInput.value = formData.email || '';    
    messageInput.value = formData.message || '';
  } catch (error) {
    console.error('Invalid JSON from localStorage:', error);
  }
}


form.addEventListener('input', event => {
  const { name, value } = event.target;

  
  formData[name] = value.trim(); 

  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener('submit', event => {
  event.preventDefault();

  
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  
  console.log('Form submitted with data:', formData);

  
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = {
    email: '',
    message: ''
  };
});