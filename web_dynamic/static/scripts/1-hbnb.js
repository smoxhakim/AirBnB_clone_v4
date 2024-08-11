$(document).ready(function () {
  let amenitiesList = [];
  const amenityCheckbox = $(".amenities input[type='checkbox']")
  amenityCheckbox.on('change', function () {
    const name = $(this).data('name');
    const id = $(this).data('id');
    if ($(this).is(':checked')) {
      amenitiesList.push({
        "name": name,
        "id": id
      });
    } else {
      amenitiesList = amenitiesList.filter(function (amenity) {
        return amenity.id != id;
      })
    }
    // amenitiesList.forEach(function (amenity) {
    //   console.log(amenity.name)
    // })
    const amenitiesH4 = $(".amenities h4")
    amenitiesH4.empty();
    amenitiesList.forEach(element => {
      amenitiesH4.append(element.name + ", ")
    });

  })



});
