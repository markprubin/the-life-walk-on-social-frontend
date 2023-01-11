import { LogoutLink } from "./LogoutLink";
import { Login } from "./Login";
import { useState } from "react";
import { Signup } from "./Signup";
import { Link } from "react-router-dom";

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
              <a href="/home" class="nav-link px-2 link-dark">
                Home
              </a>
            </li>
            <li>
              <a href="/about" class="nav-link px-2 link-secondary">
                About
              </a>
            </li>
            <li>
              <a href="/favorites" class="nav-link px-2 link-dark">
                Your Favorites
              </a>
            </li>
            {localStorage.jwt === undefined ? (
              <div class="gap-2 d-flex">
                <button class="btn btn-success px-4" data-bs-toggle="modal" data-bs-target="#LoginModal">
                  Log In
                </button>
                <button class="btn btn-success px-4" data-bs-toggle="modal" data-bs-target="#SignupModal">
                  Sign Up
                </button>
              </div>
            ) : (
              <div>
                <a href="/" class="nav-link px-2 link-dark">
                  <LogoutLink />
                </a>
              </div>
            )}
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
                <a class="dropdown-item" href="/newevent">
                  Host an Event
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/favorites">
                  Favorite Events
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/profile" disabled>
                  Profile
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              {localStorage.jwt === undefined ? (
                <></>
              ) : (
                <li>
                  <a class="dropdown-item" href="#">
                    <LogoutLink />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* Login Modal */}
      <div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Welcome back!
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Login />
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div class="modal fade" id="SignupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title fs-5" id="exampleModalLabel">
                <img src="src/assets/TLWO Short.png" width="auto" height="100" />
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Signup />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
