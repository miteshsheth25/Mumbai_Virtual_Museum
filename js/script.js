// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const exhibitModal = document.getElementById("exhibitModal");
  const modalTitle = exhibitModal.querySelector(".modal-title");
  const modalImage = exhibitModal.querySelector(".exhibit-img");
  const modalDescription = exhibitModal.querySelector(".exhibit-description");
  const modalAudio = exhibitModal.querySelector(".exhibit-audio");
  const modalVideo = exhibitModal.querySelector(".exhibit-video");

  exhibitModal.addEventListener("show.bs.modal", function (event) {
    // Button/card that triggered the modal
    const card = event.relatedTarget;

    // Get data attributes
    const title = card.getAttribute("data-title");
    const description = card.getAttribute("data-description");
    const image = card.getAttribute("data-image");
    const audio = card.getAttribute("data-audio");
    const video = card.getAttribute("data-video");

    // Set modal content
    modalTitle.textContent = title || "Exhibit";
    modalImage.src = image || "";
    modalImage.style.display = image ? "block" : "none";
    modalDescription.textContent = description || "";

    if (audio) {
      modalAudio.src = audio;
      modalAudio.style.display = "block";
    } else {
      modalAudio.style.display = "none";
    }

    if (video) {
      modalVideo.src = video;
      modalVideo.style.display = "block";
    } else {
      modalVideo.style.display = "none";
    }
  });


  // Auto-play when modal opens
  exhibitModal.addEventListener('shown.bs.modal', () => {
    exhibitAudio.play().catch(err => {
      console.log("Autoplay blocked by browser:", err);
    });
  });

  // Stop audio/video when modal is closed
  exhibitModal.addEventListener("hidden.bs.modal", function () {
    if (modalAudio) modalAudio.pause();
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
  });
});
