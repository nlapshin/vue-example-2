<script>
import { ref, computed, defineAsyncComponent } from 'vue'
import LayoutSlots from './LayoutSlots.vue';
import TextComponent from './TextComponent.vue';
import ImageComponent from './ImageComponent.vue';
import VideoComponent from './VideoComponent.vue';
import { getUsers } from '../services/get-users';

export default {
  components: {
    LayoutSlots
  },
  setup() {
    const count = ref(0)

    function increment() {
      count.value++
    }

    const selectedComponent = ref('text-component');
    const content = ref({
      'text-component': 'Here is some text content.',
      'image-component': 'https://example.com/image.jpg',
      'video-component': 'https://example.com/video.mp4'
    });

    // Вычисляемый метод для определения текущего компонента на основе выбранного значения
    const currentComponent = computed(() => {
      switch (selectedComponent.value) {
        case 'text-component':
          return TextComponent;
        case 'image-component':
          return ImageComponent;
        case 'video-component':
          return VideoComponent;
        default:
          return null;
      }
    });

    const { data, loading, error } = getUsers();

    console.log(data, loading, error);

    const isLoaded = ref(false);

    const AsyncComponent = defineAsyncComponent(() => ({
      loader: () => import('./AsyncComponent.vue'),
      delay: 200,
      timeout: 3000,
      loadingComponent: {
        template: '<div>Loading async component...</div>'
      },
      errorComponent: {
        template: '<div>Error async component.</div>'
      }
    }));

    function loadComponent() {
      isLoaded.value = true;
    }

    return {
      count,
      increment,
      selectedComponent,
      content,
      currentComponent,
      data,
      loading,
      error,
      AsyncComponent,
      loadComponent,
      isLoaded
    }
  }
}
</script>

<template>
  <div>
    <LayoutSlots>
       <!-- Указываем контент для слота header -->
      <template v-slot:header>
        <h1>Welcome to My Website</h1>
      </template>

      <!-- Указываем основной контент -->
      <p>This is the main content of the page.</p>

      <!-- Указываем контент для слота footer -->
      <template v-slot:footer>
        <p>Contact us at email@example.com</p>
      </template>
    </LayoutSlots>
    <!-- {{ data }}
    {{ loading }}
    {{ error }} -->

    <select v-model="selectedComponent">
      <option value="text-component">Text</option>
      <option value="image-component">Image</option>
      <option value="video-component">Video</option>
    </select>
    
    <component :is="currentComponent" :content="content[selectedComponent]" />

    <button @click="increment()">Увеличь на 1</button>
    {{ count }}

    <button @click="loadComponent">Load Async Component</button>

    <Suspense>
      <template #default>
        <AsyncComponent v-if="isLoaded" />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
</style>
