import { LogoutLink } from "./LogoutLink";
import { Login } from "./Login";

export function Header() {
  return (
    <header class="p-3 mb-3 border-bottom shadow">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 link-secondary">
                About
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 link-dark">
                List of Events
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 link-dark">
                Connect With Others
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 link-dark">
                Products
              </a>
            </li>
            <div class="gap-2 d-flex">
              <button class="btn btn-success px-4">Log In</button>
              <button class="btn btn-success px-4">Sign Up</button>
            </div>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div class="dropdown text-end">
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
            </a>
            <ul class="dropdown-menu text-small">
              <li>
                <a class="dropdown-item" href="#">
                  Host an Event
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Favorite Events
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
