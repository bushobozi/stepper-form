<template>
<div class="form">
          <div>
                              <p class="display-6">Upload Staff</p>
                    <div class="mb-t-20">
                    <hr />
                              <p class="w-28">                    
                                        Please ensure that when you upload files, you only submit documents in the following formats: <span class="p-span">CSV (Comma-Separated Values) OR Excel (XLS, XLSX)</span>
                              </p>
                    <hr />
                    <input class="form-control form-control-lg" id="formFileLg" type="file">
                    </div>
                    <div>
                              <h1 class="display-6">Add Staff</h1>
                    </div>
                    <form>
                              <div class="d-flex flex justify-content-between gap-2">
                                        <div class="mb-3">
                                                  <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                                  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter First Name">
                                        </div>
                                        <div class="mb-3">
                                                  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                                  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter Last Name">
                                        </div>
                              </div>
                               <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Telephone</label>
                                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter Telephone">
                              </div>
                              <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="school@example.com">
                              </div>
                              <div class="mb-3">
                                        <label for="formFileSm" class="form-label">Upload Image</label>
                                        <input class="form-control form-control-sm" id="formFileSm" type="file">
                              </div>
                    </form>
                    <div class="d-grid gap-2 d-md-flex justify-content-sm-between mt-50">
                              <RouterLink to="/learners" class="btn btn-primary btn-lg">Prev</RouterLink>
                              <RouterLink to="/formfinish" class="btn btn-primary btn-lg">Next</RouterLink>
                    </div>
          </div>
</div>
</template>

<script>
export default {
          name: 'FormStaff',
}
</script>

<style scoped>
.mb-t-20 {
          width: 352px;
}
</style>