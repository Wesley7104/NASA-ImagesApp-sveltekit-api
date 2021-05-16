<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <h1 class="title is-4">NASA IMAGE VIEWER</h1>
        </a>

        <a href="/" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a href="/home" class="navbar-item"> Home </a>

            <a href="/docs" class="navbar-item"> Documentation </a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a href="/more" class="navbar-link"> More </a>

                <div class="navbar-dropdown">
                    <a href="/about" class="navbar-item"> About </a>
                    <a href="/jobs" class="navbar-item"> Jobs </a>
                    <a href="/contact" class="navbar-item"> Contact </a>
                    <hr class="navbar-divider" />
                    <a href="/report-issue" class="navbar-item"> Report an issue </a>
                </div>
            </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <button class="button is-primary">
                        <strong>Sign up</strong>
                    </button>
                    <button class="button is-light"> Log in </button>
                </div>
            </div>
        </div>
    </div>
</nav>