window.addEventListener('DOMContentLoaded', function () {
  if (typeof item !== 'undefined') {
    switch (item.display_template) {
      case "iiif":
        loadTemplate("iiif");
        break;
      default:
        loadTemplate("default");
    }
  }
});