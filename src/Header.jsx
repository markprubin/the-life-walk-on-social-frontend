import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a> |{" "}
        <a href="#">
          <LogoutLink />
        </a>
      </nav>
    </header>
  );
}
