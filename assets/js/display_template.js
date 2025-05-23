function waitForItemAndLoad() {
  if (typeof item !== 'undefined' && item.display_template) {
    switch (item.display_template) {
      case "iiif":
        loadTemplate("iiif");
        break;
      default:
        loadTemplate("default");
    }
  } else {
    setTimeout(waitForItemAndLoad, 100); // Check again in 100ms
  }
}

window.addEventListener('DOMContentLoaded', waitForItemAndLoad);