<template>
          <div>
                    <div>
                              <h1 class="display-6">Edit School Details</h1>
                    </div>
                    <form>
                              <div class="d-flex flex justify-content-between gap-2">
                                        <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">School Motto</label>
                                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter School Motto">
                              </div>
                               <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Telephone</label>
                                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter Telephone">
                              </div>
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
          </div>

</template>

<script>
export default {
          name: 'FormView',
          props: {
                    id: Number,
          },
          data(){
                    return {

                    }
          }
}
</script>

<style scoped></style>