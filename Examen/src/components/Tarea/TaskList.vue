<template>
<div>
    <h4>Total de tareas: {{ totalTasks }}</h4>
    <hr> 
    <div class="header">
        <h2>To Do List</h2>
        <input type="text" placeholder="Title..." v-model="titulito">
        <button @click="enviar" class="addBtn" :disabled="!(titulito.length > 0)">Add</button>
    </div>
    <ul class="myUL" v-if="taskData.length > 0">
        <li><TaskItem v-bind="task" v-for="(task, index) in taskData" :key="index" :id="task.id" :titulo="task.titulo" :completed="task.completed" @eliminar-task="eliminarTask(index)" @task-comp="TareaCom" /></li>
    </ul>
    <p v-else>No hay tareas disponibles</p>
    <hr>
    <h4>Tareas completadas: {{ taskcomP }}</h4>  
</div>
</template>
<script lang="ts" setup>
import TaskData from '@/data/TaskData';
import TaskItem from './TaskItem.vue';
import { ref,computed } from 'vue'
    const taskData = ref(TaskData);
    let siguienteid = 1
    const titulito = ref('')

    const enviar = () =>{
        if(titulito.value.trim()){
            taskData.value.push({
            id: siguienteid++,
            titulo: titulito.value,
            completed: false
        });
        titulito.value = '';
            alert('Tarea agregada con exito')
        }
        else{
            alert('A ocurrido un problema :(')
        }
    }
    const eliminarTask = (index:number) => {
        taskData.value.splice(index, 1);
    }
    const TareaCom = (taskId: number, completed: boolean) => {
        const tarea = taskData.value.find(task => task.id === taskId);
        if (tarea) {
            tarea.completed = completed;
        }
    };
    const totalTasks = computed(() => (taskData.value.length));
    const taskcomP = computed(() => taskData.value.filter(task => task.completed).length);
    
    </script>