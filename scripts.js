document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if (target) {
                if (target.classList.contains('hidden')) {
                    target.classList.remove('hidden');
                } else {
                    target.classList.add('hidden');
                }
            }
        });
    });
});
