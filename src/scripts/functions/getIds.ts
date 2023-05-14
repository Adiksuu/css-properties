function getIds() {
    id = parseInt(route[1].substr(3));

    prop_name = document.querySelector("#property_name");
    properties = document.querySelector("#properties").children;
    prop = document.querySelector("#prop");

    if (id >= sets.length) {
        toSite("");
        return;
    }
}

function getExtraIds() {
    id = route[1].substr(3)

    prop_name = document.querySelector("#property_name");
    prop = document.querySelector("#prop");
    properties = document.querySelector("#properties")
    createButton = document.querySelector('#createElement')
}
function getRandomIds() {
    id = route[1].substr(3)

    prop_name = document.querySelector("#property_name");
    prop = document.querySelector("#prop");
    properties = document.querySelector("#properties")
}