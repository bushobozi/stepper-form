<template>
  <div class="form">
    <div v-if="currentStep === 1">
      <!-- Step 1 content -->
      <div>
          <p class="stepper-header"><span class="stepper-before-w-2"></span>Step 1</p>
      </div>
      <School />
      <!-- Register School -->
      <div class="d-flex justify-content-between align-items-center mt-top-3">
          <button @click="nextStep" class="btn btn-primary btn-lg box-shadow-10" type="submit">Next</button>
      </div>
    </div>

    <div v-else-if="currentStep === 2">
      <!-- Step 2 content -->
      <div>
          <p class="stepper-header"><span class="stepper-before-w-2"></span>Step 2</p>
      </div>
      <Classes />
      <!-- Register Classes -->
      <div class="d-flex justify-content-between align-items-center mt-top-3">
          <button @click="prevStep" class="btn btn-primary btn-lg box-shadow-10">Previous</button>
          <button @click="nextStep" class="btn btn-primary btn-lg box-shadow-10" type="submit">Next</button>
      </div>
    </div>

    <div v-else-if="currentStep === 3">
      <!-- Step 3 content -->
      <div>
          <p class="stepper-header"><span class="stepper-before-w-2"></span>Step 3</p>
      </div>
      <Fees />
      <!-- Register Fees Structure -->
      <div class="d-flex justify-content-between align-items-center mt-top-3">
          <button @click="prevStep" class="btn btn-primary btn-lg box-shadow-10">Previous</button>
          <button @click="nextStep" class="btn btn-primary btn-lg box-shadow-10" type="submit">Next</button>
      </div>
    </div>

    <div v-else-if="currentStep === 4">
      <!-- Step 4 content -->
      <h2>Return to Dashboard</h2>
      <!-- Return to Dashboard Default -->
      <div class="d-flex justify-content-between align-items-center mt-top-3">
          <button @click="prevStep" class="btn btn-primary btn-lg box-shadow-10">Previous</button>
          <button @click="nextStep" class="btn btn-primary btn-lg box-shadow-10">Go to Dashboard</button>
      </div>
    </div>
  </div>
</template>

<script>
import School from "../views/School.vue";
import Classes from "../views/Classes.vue";
import Fees from "../views/Fees.vue";
export default {
  name: 'Setup',
  components: {
    School,
    Classes,
    Fees
},
  data() {
    return {
      currentStep: 1,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < 4) {
        this.currentStep += 1;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
      }
    },
    submitForm() {
      // Logic to submit the form data
    },
  },
};
</script>

<style scoped>
.stepper-header {
          background: lightblue;
          border-radius: 0.5rem;
          width: max-content;
          padding: 8px;          
          display: flex;
          justify-content: center;
          gap: 5px;
          align-items: center;
          box-shadow: 0 0 10px rgba(18, 32, 62, 0.2);
}
.stepper-before-w-2 {
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 10px;
          background: blue;
}
.mt-top-3 {
          margin-top: 2rem;
}
.box-shadow-10 {
        box-shadow: 0 0 10px rgba(18, 32, 62, 0.2);  
}
</style>
