function fetchGitHubInformation(event) {

    let username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/Circles-menu-3.gif" alt="loading..." />
        </div>`);
}