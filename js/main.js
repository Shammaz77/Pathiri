document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.classList.add("activet");
            } else {
                testimonial.classList.remove("activet");
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Show the first testimonial
    showTestimonial(currentIndex);

    // Automatically switch testimonials every 5 seconds
    setInterval(nextTestimonial, 4000);
});
