<template>
    <div id="Aplicacion">
         <div id="Aplicacion">
         <!-- Titulo -->
      <h1 id="Titulo">Editar Tutoriales</h1>
      <!-- Formulario -->
      <b-form>
      <!-- Titulo -->
       <small>Titulo</small>
         <b-input-group id="Input">
    <b-form-input placeholder="Titulo" required v-model="editar.Titulo"></b-form-input> </b-input-group>
    <!-- Profesor -->
       <small>Profesor</small>
         <b-input-group id="Input">
    <b-form-input placeholder="Profesor" required v-model="editar.Profesor"></b-form-input> </b-input-group>
    <!-- Materia -->
       <small>Materia</small>
         <b-input-group id="Input">
    <b-form-input placeholder="Materia" required v-model="editar.Materia"></b-form-input> </b-input-group>
    <!-- Fecha -->
       <small>Fecha</small>
         <b-input-group id="Input">
    <b-form-input placeholder="Fecha"  required v-model="editar.Fecha"></b-form-input> </b-input-group>
    <b-button id="Button_Agregar" type="submit" @submit="AgregarLista" > Agregar</b-button>
        </b-form>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex';
export default {
    name:'Modificar',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState([])
    },
    methods: {
        
    },
    
}
</script>
<style lang="scss">
    
</style>