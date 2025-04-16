    

    //Allways Fetch New Version
    const versionKey = 'html_version';

    fetch('version.txt?t=' + new Date().getTime())
      .then(res => res.text())
      .then(serverVersion => {
        const newVersion = serverVersion.trim();
        const savedVersion = localStorage.getItem(versionKey);

        if (savedVersion !== newVersion) {
          localStorage.setItem(versionKey, newVersion);
          location.reload(true); // 🔄 Reload with cache bypass
        } else {
          // 🟢 Hide loader if version is same
          const loader = document.getElementById('loader-overlay');
          if (loader) loader.style.display = 'none';
        }
      })
      .catch(err => {
        console.error("Version check failed:", err);
        // Still hide loader even on error
        const loader = document.getElementById('loader-overlay');
        if (loader) loader.style.display = 'none';
     });


     // Back to Top Button
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });


        // Highlight active nav link on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Donation amount selection
        document.querySelectorAll('.donation-amount').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.donation-amount').forEach(btn => {
                    btn.classList.remove('btn-primary');
                    btn.classList.add('btn-outline-primary');
                });
                this.classList.remove('btn-outline-primary');
                this.classList.add('btn-primary');
                document.getElementById('customAmount').value = this.textContent.replace('₹', '');
            });
        });


    // Dynamically add data-toggle and data-target to all images
  document.querySelectorAll("#gallery-images img").forEach(function(img) {
    // Modal attributes
    img.setAttribute("data-toggle", "modal");
    img.setAttribute("data-target", "#profileImageModal");

    // Performance and UX attributes
    img.setAttribute("loading", "lazy");
    img.setAttribute("draggable", "false");
  });

  // Load More functionality
  var postsToShow = 6;
  var postsPerLoad = 1;

  document.getElementById("loadMoreBtn").addEventListener("click", function () {
    const hiddenPosts = document.querySelectorAll("div.hidden");
    var postsToDisplay = Array.from(hiddenPosts).slice(0, postsPerLoad);

    postsToDisplay.forEach(function (post) {
      post.classList.remove("hidden");
    });

    postsToShow += postsToDisplay.length;

    if (hiddenPosts.length <= postsPerLoad) {
      document.getElementById("loadMoreBtn").style.display = "none";
    }
  });

  // Modal Image Show
  document.querySelectorAll(".gallery-img").forEach(function (img) {
    img.addEventListener("click", function () {
      const modalImage = document.getElementById("modalImage");
      modalImage.src = this.src;
      modalImage.alt = this.alt;
    });
  });

  