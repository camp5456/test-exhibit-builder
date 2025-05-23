window.addEventListener('DOMContentLoaded', function () {
  switch (display_template) {
    case "iiif":
      loadTemplate("iiif");
      break;
    default:
      loadTemplate("default");
  }
});