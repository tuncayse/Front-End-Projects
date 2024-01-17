document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde localStorage'dan verileri al
    loadTasksFromLocalStorage();
  
    // Ekleme butonuna tıklanınca yeni görevi ekle
    document.getElementById("liveToastBtn").addEventListener("click", function () {
      addNewTask();
    });
  
    // Liste elemanlarına tıklanınca yapıldı işareti ekle/çıkar
    document.getElementById("list").addEventListener("click", function (event) {
      toggleTask(event);
    });
  });
  
  function addNewTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();
  
    // Boş giriş kontrolü
    if (taskText === "") {
      displayErrorToast("Listeye boş ekleme yapamazsınız!");
      return;
    }
  
    // Yeni görevi listeye ekle
    var list = document.getElementById("list");
    var newTask = document.createElement("li");
    newTask.textContent = taskText;
    list.appendChild(newTask);
  
    // Local Storage'a güncellenmiş liste verilerini kaydet
    saveTasksToLocalStorage();
  
    // Başarılı ekleme mesajı göster
    displaySuccessToast("Listeye eklendi.");
  
    // Giriş kutusunu temizle
    taskInput.value = "";
  }
  
  function toggleTask(event) {
    if (event.target.tagName === "LI") {
      // Liste elemanına tıklanmışsa, yapıldı sınıfını ekleyip/çıkar
      event.target.classList.toggle("checked");
  
      // Local Storage'a güncellenmiş liste verilerini kaydet
      saveTasksToLocalStorage();
    }
  }
  
  function displaySuccessToast(message) {
    showToast("success", message);
  }
  
  function displayErrorToast(message) {
    showToast("error", message);
  }
  
  function showToast(type, message) {
    var toastId = type === "success" ? "liveToast" : "liveToastError";
    var toastElement = document.getElementById(toastId);
    var toastBody = toastElement.querySelector(".toast-body");
    toastBody.textContent = message;
  
    // Bootstrap Toast'ı göster
    $(toastElement).toast("show");
  }
  
  function loadTasksFromLocalStorage() {
    var list = document.getElementById("list");
    var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    // Kaydedilmiş görevleri ekle
    savedTasks.forEach(function (taskText) {
      var newTask = document.createElement("li");
      newTask.textContent = taskText;
      list.appendChild(newTask);
    });
  }
  
  function saveTasksToLocalStorage() {
    var list = document.getElementById("list");
    var tasks = Array.from(list.getElementsByTagName("li")).map(function (task) {
      return task.textContent;
    });
  
    // Local Storage'a liste verilerini kaydet
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }