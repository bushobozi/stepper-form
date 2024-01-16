<template>
<div class="form">
  <p class="display-6">Upload Learners</p>
<div class="mb-t-20">
<hr />
          <p class="w-28">                    
                    Please ensure that when you upload files, you only submit documents in the following formats: <span class="p-span">CSV (Comma-Separated Values) OR Excel (XLS, XLSX)</span>
          </p>
<hr />
  <input class="form-control form-control-lg" id="formFileLg" type="file">
</div>
<div class="d-grid gap-2 d-md-flex justify-content-sm-between mt-50">
  <RouterLink to="/parents" class="btn btn-primary btn-lg">Prev</RouterLink>
  <RouterLink to="/staff" class="btn btn-primary btn-lg">Next</RouterLink>
</div>
</div>
</template>

<script>
export default {
          name:'FormParentsUpload',
}
</script>

<style scoped>
.w-28 {
          width: 322px;
}
.p-span {
          font-weight: 700;
}
</style>