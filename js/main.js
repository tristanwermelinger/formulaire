document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document
    .querySelector("#formContact")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      console.log("submit", event);

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };
      const response = await axios.post("http://localhost:3002/form", {
        firstname,
        lastname,
        email,
        subject,
        message,
      });

      console.log(response.data);
    });
});
