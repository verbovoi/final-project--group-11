(() => {
	const refs = {
		menuBtn: document.querySelector("[data-menu]"),
		mobileMenu: document.querySelector(".nav-container"),
	};

	// ---- Open and close Modal-Menu ------	
	refs.menuBtn.addEventListener("click", toggleScroll);
	refs.menuBtn.addEventListener("click", toggleMenu);

	function toggleScroll() {
		if (document.body.style.overflow == "hidden") {
			document.body.style.overflow = "";
		} else {
			document.body.style.overflow = "hidden"
		}
	}

	function toggleMenu() {
		refs.menuBtn.classList.toggle("is-open");
		refs.mobileMenu.classList.toggle("is-open");

		if (refs.mobileMenu.classList.contains("is-open")) {
			refs.mobileMenu.addEventListener("click", toggleScroll, { once: true });
			refs.mobileMenu.addEventListener("click", toggleMenu, { once: true });
		}
	}

})();