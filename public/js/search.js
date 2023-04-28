const searchFormHandler = async (event) => {
  event.preventDefault();
  console.log(event);

 
  const term = document.querySelector("#search").value;

  if (term) {
    // Send a POST request to the API endpoint
    const response = await fetch(f, {
      method: "POST",
      body: JSON.stringify({ term }),
      headers: {
        "Content-Type": "application/json",
       
      },
    });
    console.log(response.body);
    if (response.ok) {

    } else {
      alert(response.statusText);
    }
  }

};

document
  .querySelector("#search-form")
  .addEventListener("submit", searchFormHandler);


