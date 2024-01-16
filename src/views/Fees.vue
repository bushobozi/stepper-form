<template>
<form action="post">
<div>
  <div>
  <h1 class="display-6">Add Fees Structure</h1>
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
<p>Enter Schools</p>
<form>
<div class="mb-3">
    <label for="formFileSm" class="form-label">*Please provide a school fees digit</label>
    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter School Fees">
</div>                            
</form>
</div>
</form>
</template>

<script>
export default {
  name: 'FormTwo',
  props: {
                    id: Number,
          },
}
</script>

<style>
p {
  margin: 1rem 0;
}
</style>
