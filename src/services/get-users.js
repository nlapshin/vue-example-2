// Импортируем необходимые API из Vue
import { ref, onMounted } from 'vue';
import api from '../lib/api';

export function getUsers() {
    const data = ref(null);
    const loading = ref(false);
    const error = ref(null);

    async function fetchData() {
        loading.value = true;
        error.value = null;
        try {
            data.value = await api.get(`users`);
        } catch (e) {
            error.value = e;
        } finally {
            loading.value = false;
        }
    }

    // Запрашиваем данные при монтировании компонента
    onMounted(fetchData);

    // Возвращаем реактивные данные, статус загрузки и ошибку
    return { data, loading, error, fetchData };
}
