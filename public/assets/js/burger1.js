$(".eatButton").on("click", function(event) {
    let burgerId = $(this).data("id");
    let oldDevoured = $(this).data("devoured");
    let newDevoured = (oldDevoured === 0) ? 1 : 0;
    let newDevouredState = {
      devoured: newDevoured
    }; 

    console.log("This is the burger's ID: " + burgerId);
    $.ajax("/api/burgers/" + burgerId, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          // Reload the page to get the updated list
          console.log("Burger was changed: " + burgerId);
          location.reload();
        }
      );
});