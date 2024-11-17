const $upload = document.querySelector(".upload");
const $input = document.querySelector("#fileInput");
const $btn = document.querySelector(".upload--btn");
const $span = document.querySelector("#fileName");

// clicked Event
$upload.addEventListener("click", () => {
  $input.click();
});

$input.addEventListener("change", (e) => {
  const fileName = e.currentTarget.files[0].name;
  const $img = document.querySelector(".upload--img");
  $img.style.display = "none";
  $span.textContent = fileName;
});

$btn.addEventListener("click", () => {
  if ($span.textContent) {
    $span.style.display = "none";
    const $uploadImg = document.querySelector(".upload--img");
    const $syncImg = document.querySelector(".sync--img");
    $uploadImg.style.display = "none";
    $syncImg.style.display = "block";

    $btn.textContent = "Uploading...";
    const tl = gsap.timeline();
    tl.to(".bar", {
      width: "100%",
      duration: 5,
    })
      .to(
        ".sync--img",
        {
          rotate: 180,
          duration: 1,
          repeat: 4,
        },
        "<"
      )
      .then(() => {
        const $completeImg = document.querySelector(".complete--img");
        $syncImg.style.display = "none";
        $completeImg.style.display = "block";
        $btn.textContent = "Done";
      });
  }
});
