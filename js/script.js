document.addEventListener("DOMContentLoaded", () => {
    const signInLink = document.getElementById("signInLink");
    const modalWrapper = document.getElementById("modalWrapper");

    if (signInLink && modalWrapper) {
        signInLink.addEventListener("click", (e) => {
            e.preventDefault(); // Stop page from scrolling to the top on '#' link click

            // Fetch the external login file
            fetch("login.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Could not load the login page.");
                }
                return response.text();
            })
            .then(htmlData => {
                // Inject the HTML into the hidden wrapper
                modalWrapper.innerHTML = htmlData;

                // Show the modal overlay
                modalWrapper.classList.add("active");

                // Set up event listener for the Close (X) button inside the newly injected code
                const closeBtn = document.getElementById("closeModalBtn");
                if (closeBtn) {
                    closeBtn.addEventListener("click", closeModal);
                }
            })
            .catch(error => console.error("Error fetching login component:", error));
        });

        // Close modal if user clicks on the darkened background area outside the form box
        modalWrapper.addEventListener("click", (e) => {
            if (e.target === modalWrapper) {
                closeModal();
            }
        });
    }

    function closeModal() {
        modalWrapper.classList.remove("active");
        modalWrapper.innerHTML = ""; // Clear content out of DOM when closed
    }
});
