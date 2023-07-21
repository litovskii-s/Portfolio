document.addEventListener("DOMContentLoaded", function() {
    const inputField1 = document.getElementById("myName");
    const inputField2 = document.getElementById("myEmail");
  
    // Обработчики события фокуса на полях ввода
    inputField1.addEventListener("focus", function() {
      this.setAttribute("data-placeholder", this.getAttribute("placeholder"));
      this.setAttribute("placeholder", "");
    });
  
    inputField2.addEventListener("focus", function() {
      this.setAttribute("data-placeholder", this.getAttribute("placeholder"));
      this.setAttribute("placeholder", "");
    });
  
    // Обработчики события потери фокуса на полях ввода
    inputField1.addEventListener("blur", function() {
      if (this.value === "") {
        this.setAttribute("placeholder", this.getAttribute("data-placeholder"));
      }
    });
  
    inputField2.addEventListener("blur", function() {
      if (this.value === "") {
        this.setAttribute("placeholder", this.getAttribute("data-placeholder"));
      }
    });
  });
  