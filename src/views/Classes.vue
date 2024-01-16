<template>
<div>
  <div>
  <h1 class="display-6">Add Class</h1>
</div>
<p>Please Choose School Setting</p>
 <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Full Day
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Half Day
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Boarding
  </label>
</div>
<p>Select Schedule</p>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
    Select Schedule
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">UNEB</a></li>
    <li><a class="dropdown-item" href="#">Cambridge</a></li>
    <li><a class="dropdown-item" href="#">Oxford</a></li>
  </ul>
</div>
<p>Proceed to Next</p>
</div>
</template>

<script>
export default {
  name: 'FormTwo',
  props: {
          id: Number,
      },
}
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
