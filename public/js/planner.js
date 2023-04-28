let selectedOptions = new Set(JSON.parse(localStorage.getItem('selectedOptions')) || []);

const newFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#schedule-name').value.trim();
  const selectedOption = document.querySelector('#schedule-name option:checked');
  const selectedOptionValue = selectedOption.value;
  const selectedOptionText = selectedOption.text;
  
  const checkTimeConflict = (selectedOptionValue) => {
    const selectedOptionTime = selectedOptionValue.split('|')[2];
    const selectedOptionDays = selectedOptionValue.split('|')[1];
    for (let option of selectedOptions) {
      const optionTime = option.split('|')[2];
      const optionDay = option.split('|')[1];
      if (optionTime === selectedOptionTime && optionDay === selectedOptionDays) {
        alert('This class time conflicts with another class already added to your schedule');
        return true;
      }
    }
    return false;
  }

  if (selectedOptionValue) {
    if (selectedOptions.has(selectedOptionValue)) {
      alert('This class has already been added to your schedule');
      return;
    } else if (checkTimeConflict(selectedOptionValue)) {
      return;
      } else {
      selectedOptions.add(selectedOptionValue);
      localStorage.setItem('selectedOptions', JSON.stringify([...selectedOptions]));
    }
  
    const response = await fetch(`/api/planner`, {
      method: 'POST',
      body: JSON.stringify({ name, selectedOptionValue, selectedOptionText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/planner');
    } else {
      alert('Failed to create Schedule');
    }
  }
};




const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const option = event.target.getAttribute('data-id'); // get the option string value

    const response = await fetch(`/api/planner/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/planner');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-schedule-form')
  .addEventListener('submit', newFormHandler);

document.querySelectorAll('.btn-danger').forEach(button => {
  button.addEventListener('click', delButtonHandler);
});
