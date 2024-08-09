<template>
  <div id="teacher" class="flex flex-col gap-10">
    <div class="flex flex-row justify-end gap-2">
      <v-btn color="#8E24AA" append-icon="mdi-plus" @click="dialog = true">
        Add Subject
      </v-btn>
      <v-btn
        v-if="store.subjects.length > 0"
        color="#8E24AA"
        append-icon="mdi-minus"
        @click="remove()"
        ref="removeButton"
        >Remove Subject</v-btn
      >
    </div>

    <div class="flex flex-wrap justify-center gap-2">
      <div
        v-for="(subject, i) in subjects"
        class="w-1/3 relative text-center"
        ref="subjectsRef"
      >
        <div class="absolute" style="display: none; right: 1px; top: 0px">
          <v-icon color="#D32F2F" @click="deleteSubject()"
            >mdi-close-box</v-icon
          >
        </div>
        <img
          src="../assets/images/subject.jpg"
          alt=""
          class="w-full rounded-md"
        />
        <span>Title</span>
      </div>
    </div>
  </div>

  <v-dialog v-model="dialog" class="">
    <div class="flex flex-col gap-4 w-full bg-white text-center p-4">
      <span class="text-lg font-bold">Enter a new subject</span>
      <div class="w-10/12 mx-auto">
        <v-text-field
          label="Subject"
          v-model="name"
          :rules="[rules.required]"
          :error-messages="errors"
          @keyup="isIDAvailable()"
        ></v-text-field>
      </div>

      <div class="w-10/12 mx-auto">
        <v-btn
          block
          color="#8E24AA"
          @click="addSubject()"
          :disabled="isDisabled"
          >Next</v-btn
        >
      </div>
    </div>
  </v-dialog>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
import { useAppStore } from "../store";

const store = useAppStore();
const dialog = ref(false);
const isDisabled = ref(true);
const name = ref(null);
const isRemoveable = ref(false);
const errors = ref("");
const subjectsRef = ref(null);
const removeButton = ref(null);
const subjects = computed(() => store.subjects);

watch(name, () => {
  if (name.value.length > 0) isDisabled.value = false;
  else isDisabled.value = true;
});
const rules = reactive({
  required: (value) => !!value || "Field is required",
});
const isIDAvailable = () =>
  store.isIDAvailable(name.value).then((res) => {
    console.log(res);
    if (!res) {
      isDisabled.value = true;
      errors.value = "Subject Already Exists";
    } else isDisabled.value = false;
  });

function addSubject() {
  const subject = name.value.trim();
  store.addSubject(subject);
  dialog.value = false;
}

function remove() {
  isRemoveable.value = !isRemoveable.value;

  if (isRemoveable.value) {
    console.log(removeButton.value.$el.children);
    removeButton.value.$el.children[2].innerText = "Cancel";
    removeButton.value.$el.children[3].style.display = "none";
    subjectsRef.value.forEach((element) => {
      let removeButton = element.children[0];
      removeButton.style.display = "block";
    });
  } else {
    removeButton.value.$el.children[2].innerText = "Remove Subject";
    removeButton.value.$el.children[3].style.display = "block";
    subjectsRef.value.forEach((element) => {
      let removeButton = element.children[0];
      removeButton.style.display = "none";
    });
  }
}

function deleteSubject(i) {
  store.deleteSubject(i);
}
</script>
