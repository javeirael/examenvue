<template>
    <div>
        <label>
            <input type="checkbox" @click="taskCom" v-model="completado">
            <span :style="{ 'text-decoration': props.completed ? 'line-through' : 'none' }">{{ props.titulo }}</span>
            <a @click="EliminarTask">Eliminar</a>
        </label>
    </div>
</template>
<script lang="ts" setup>

    import type { ITask } from '@/interface/ITask'
    const props = defineProps<ITask>();
    let completado = props.completed;
    const emits = defineEmits(['eliminar-task', 'task-comp'])
    const EliminarTask = () =>{
        emits('eliminar-task', props.id)
    };
    const taskCom = () => {
    completado = !completado;
    emits('task-comp', props.id, completado);
};
</script>

