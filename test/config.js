module.exports = {
  "paths": {
    "source": {
      "root": "./src/",
      "patterns": "./src/_patterns/",
      "data": "./src/_data/",
      "meta": "./src/_meta/",
      "annotations": "./src/_annotations/",
      "styleguide": "dist/",
      "patternlabFiles": {
        "general-header": "views/partials/general-header.mustache",
        "general-footer": "views/partials/general-footer.mustache",
        "patternSection": "views/partials/patternSection.mustache",
        "patternSectionSubgroup": "views/partials/patternSectionSubgroup.mustache",
        "viewall": "views/viewall.mustache"
      }
    },
    "assets": {
      "js": "./src/js/",
      "css": "./src/sass/",
      "assets": "./src/assets/"
    },
    "public": {
      "root": "public/",
      "patterns": "public/patterns/",
      "data": "public/styleguide/data/",
      "annotations": "public/annotations/",
      "styleguide": "public/styleguide/",
      "assets": "public/assets"
    }
  }
}
