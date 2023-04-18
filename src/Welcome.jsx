export function Welcome() {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4" src="src/assets/TLWO Short.png" alt="" width="=600" height="300" />
      <h1 class="display-5 fw-bold">The Life Walk On Social App</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          This app (eventually) is catered for retired athletes finding local events to connect with other former
          athletes. Whether you competed at the high school, college, or professional level, The Life Walk On is
          dedicated to helping you foster connection in your local area and be a part of a tribe again.{" "}
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="/Home" type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Let's Do It!
          </a>
        </div>
      </div>
    </div>
  );
}
